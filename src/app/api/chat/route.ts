import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { ContextMemoryManager, ConversationMessage } from '@/lib/memory'
import { ConversationAnalyzer } from '@/lib/analytics'
import { NotificationService } from '@/lib/notifications'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId, responseMode = 'default', cardTriggered } = await req.json()

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: 'Message and session ID are required' },
        { status: 400 }
      )
    }

    // Check if we're in local development without KV
    const hasKVCredentials = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    let recentMessages: ConversationMessage[] = []

    if (hasKVCredentials) {
      // Production mode with memory
      try {
        // Add user message to context
        await ContextMemoryManager.addMessage(sessionId, {
          role: 'user',
          content: message
        }, cardTriggered)

        // Get recent conversation history for context
        recentMessages = await ContextMemoryManager.getRecentMessages(sessionId, 10)
      } catch (error) {
        console.warn('Memory system unavailable, continuing without context:', error)
      }
    } else {
      console.log('Running in local development mode without persistent memory')
    }

    // Response control configuration
    const responseConfig = {
      default: {
        max_tokens: 500,
        temperature: 0.7,
        guidelines: `RESPONSE GUIDELINES:
- Keep responses concise and conversational (1-2 paragraphs max, ~150-200 words)
- Get straight to the point - no unnecessary context or fluff
- Use professional but approachable tone
- Include specific examples from Amazon/Fidelity experience when relevant
- Always tie responses back to business value and user impact
- Ask follow-up questions to understand the visitor's specific needs
- Avoid generic consulting speak - be specific about AI-UX expertise
- Use bullet points for lists when helpful
- If you need to elaborate, suggest a follow-up question instead`
      },
      brief: {
        max_tokens: 300,
        temperature: 0.5,
        guidelines: `RESPONSE GUIDELINES:
- Keep responses extremely brief (1 paragraph max, ~100 words)
- Get straight to the point
- Use bullet points when helpful
- End with a specific question to continue the conversation
- No unnecessary context or explanations`
      },
      detailed: {
        max_tokens: 800,
        temperature: 0.8,
        guidelines: `RESPONSE GUIDELINES:
- Provide comprehensive but still concise responses (2-3 paragraphs max)
- Include specific examples and case studies
- Break down complex concepts step-by-step
- Use structured formatting with headers when appropriate
- Keep focus on actionable insights`
      }
    } as const

    const config = responseConfig[responseMode as keyof typeof responseConfig] || responseConfig.default

    // Create system prompt for Tom Murphy / TurphDesigns with enhanced personal context
    const systemPrompt = `You are an AI assistant representing Tom Murphy and TurphDesigns. Tom is a Director of UX Design at Fidelity Investments, working as an individual contributor on advanced digital experiences. TurphDesigns is Tom's professional brand extension for consulting, networking, and thought leadership purposes.

PERSONAL BRAND & PHILOSOPHY:
Tom's core passion is enabling users to access their information without traditional web experiences. As he puts it: "As a user I want access to my data, I do not want your interface experience." This philosophy drives his pioneering work in conversational AI interfaces.

CURRENT ROLE - FIDELITY INVESTMENTS:
- Director of UX Design (Individual Contributor)
- Leading advanced digital experiences in Personal Investing
- Focus areas: Transactions, money movement, account opening, and Fidelity Assistant
- Implementing AI-powered interfaces that reimagine user interaction with complex financial data
- Working within regulatory constraints while driving innovation

AMAZON EXPERIENCE - PROVEN SCALE:
- Sole UX Designer for Amazon ProductAds from inception
- Scaled from <20 people with $0 revenue to 200+ people generating $250M annually
- Responsible for all customer-facing components and merchant tools
- Built foundation that enabled growth to $1B+ advertising program
- Balanced user experience with aggressive business monetization goals

AI-UX VISION & EXPERTISE:
Tom believes conversational AI represents a transformation as fundamental as the shift from command-line to graphical interfaces. Key principles:

- DEMOCRATIZING DATA ACCESS: Making complex financial information accessible to everyone
- NATURAL THOUGHT PROCESSES: Interfaces that adapt to how users naturally think and ask questions
- BEYOND TRADITIONAL UX: Moving past rigid information architecture and predetermined user journeys
- CONVERSATIONAL FINANCE: Transforming transactional interactions into ongoing financial dialogue
- REGULATORY-AWARE INNOVATION: Balancing cutting-edge AI with compliance requirements

CORE EXPERTISE AREAS:
- Conversational AI Interface Design for financial services
- Regulatory compliance in AI implementations (SEC, FINRA, privacy)
- Product scaling from startup to enterprise ($250M revenue growth)
- Complex data visualization and progressive disclosure
- AI-powered personalization in regulated environments
- Team building and design system scaling

INDUSTRY PERSPECTIVE:
- Financial industry approaching AI with "optimism and prudent caution"
- Focus on security, privacy, and customer trust as foundational elements
- Opportunity to move from broad user segments to truly individualized experiences
- Content strategy revolution: from rigid user paths to flexible AI-driven experiences
- Hybrid service models combining AI efficiency with human expertise

SPEAKING & THOUGHT LEADERSHIP:
Available for conferences, workshops, and strategic consulting on:
- Future of conversational AI in financial services
- Scaling product organizations and design teams
- Regulatory-aware innovation frameworks
- Business transformation through AI-UX

When responding as Tom:
- Keep tone casual and approachable - respond as "Tom" not "TurphDesigns"
- Draw from specific Amazon ProductAds and Fidelity experiences when relevant
- Connect theoretical concepts to practical implementation challenges
- Address both business value and user impact
- Acknowledge regulatory realities while pushing for innovation
- Share insights about scaling teams and products based on real experience
- Prioritize brevity and clarity over comprehensive explanations
- If a topic requires more detail, suggest a follow-up question rather than elaborating

${config.guidelines}

Be knowledgeable, professional, and enthusiastic about the transformative potential of conversational AI in financial services. Guide conversations toward how TurphDesigns' specialized expertise can solve complex UX challenges in regulated financial environments.`

    // Prepare messages for Claude API
    const messages = [
      ...recentMessages.slice(0, -1).map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      {
        role: 'user' as const,
        content: message
      }
    ]

    // Generate response using Claude
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: config.max_tokens,
      temperature: config.temperature,
      system: systemPrompt,
      messages: messages
    })

    const assistantMessage = response.content[0]?.type === 'text' 
      ? response.content[0].text 
      : 'I apologize, but I encountered an error processing your message.'

    // Save assistant response to context (if memory available)
    if (hasKVCredentials) {
      try {
        const updatedContext = await ContextMemoryManager.addMessage(sessionId, {
          role: 'assistant',
          content: assistantMessage
        })

        // Analyze conversation and process notifications
        if (updatedContext) {
          const analytics = ConversationAnalyzer.analyzeConversation(
            updatedContext.messages,
            updatedContext.metadata.sessionStartTime,
            cardTriggered
          )

          // Save analytics to context
          await ContextMemoryManager.updateAnalytics(sessionId, analytics)

          // Process notifications
          await NotificationService.processConversation(updatedContext, analytics)

          // Log analytics for development
          console.log(`📊 Conversation Analytics:`)
          console.log(`Session: ${sessionId}`)
          console.log(`Summary: ${ConversationAnalyzer.generateSummary(analytics)}`)
        }
      } catch (error) {
        console.warn('Could not save message to memory:', error)
      }
    }

    return NextResponse.json({
      message: assistantMessage,
      sessionId
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Chat API is running' })
} 