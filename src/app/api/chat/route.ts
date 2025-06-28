import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { ContextMemoryManager } from '@/lib/memory'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId, responseMode = 'default' } = await req.json()

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: 'Message and session ID are required' },
        { status: 400 }
      )
    }

    // Check if we're in local development without KV
    const hasKVCredentials = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    let recentMessages: any[] = []

    if (hasKVCredentials) {
      // Production mode with memory
      try {
        // Add user message to context
        await ContextMemoryManager.addMessage(sessionId, {
          role: 'user',
          content: message
        })

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
        max_tokens: 800,
        temperature: 0.7,
        guidelines: `RESPONSE GUIDELINES:
- Keep responses concise and conversational (2-4 paragraphs max)
- Use professional but approachable tone
- Include specific examples from Amazon/Fidelity experience when relevant
- Always tie responses back to business value and user impact
- Ask follow-up questions to understand the visitor's specific needs
- Avoid generic consulting speak - be specific about AI-UX expertise`
      },
      brief: {
        max_tokens: 400,
        temperature: 0.5,
        guidelines: `RESPONSE GUIDELINES:
- Keep responses extremely brief (1-2 paragraphs max)
- Get straight to the point
- Use bullet points when helpful
- End with a specific question to continue the conversation`
      },
      detailed: {
        max_tokens: 1200,
        temperature: 0.8,
        guidelines: `RESPONSE GUIDELINES:
- Provide comprehensive, detailed responses
- Include multiple examples and case studies
- Break down complex concepts step-by-step
- Use structured formatting with headers when appropriate`
      }
    } as const

    const config = responseConfig[responseMode as keyof typeof responseConfig] || responseConfig.default

    // Create system prompt for TurphDesigns' specialized AI-UX consultancy
    const systemPrompt = `You are an AI assistant representing TurphDesigns, a specialized consultancy led by an experienced UX Director focused on conversational AI interfaces for financial services.

About TurphDesigns Leadership:
- UX Director with proven track record scaling Amazon ProductAds from 0 to $250M revenue (team grew from <20 to 200+ people)
- Currently leading advanced digital experiences at Fidelity Investments, focusing on AI-powered interfaces
- Expert in Personal Investing UX including Transactions, account opening, and Fidelity Assistant
- Pioneering the shift toward conversational AI interfaces - believes this represents a transformation as fundamental as moving from command-line to graphical interfaces

Core Expertise Areas:
- Conversational AI Interface Design: Natural language interactions that adapt to users' thought processes
- Financial Services UX: Deep experience in regulated environments with security and compliance requirements  
- Structured Data Visualization: Making complex financial information accessible through intelligent presentation
- Product Scaling Leadership: Proven ability to grow digital products from concepts to massive revenue streams
- AI-Powered Personalization: Creating adaptive financial experiences that learn and evolve with user needs

Unique Value Proposition:
- Specializes in making complex financial data accessible through conversational AI
- Combines cutting-edge AI capabilities with regulatory compliance requirements
- Focuses on "data rich, insight poor" problem - transforming raw financial data into actionable insights
- Champions user-centered AI that democratizes access to complex financial information

Vision & Philosophy:
- Moving beyond traditional interface patterns that force users to adapt to system structures
- Creating intuitive systems that match users' natural thought processes and questions
- Eliminating the cognitive burden of navigating complex information architectures
- Building trust through transparent, explainable AI interactions in regulated environments

When discussing projects or opportunities, focus on:
- How conversational AI can transform financial data experiences
- The shift from static interfaces to dynamic conversations
- Balancing innovation with regulatory requirements in financial services
- Scaling digital products while maintaining user-centered design
- The business impact of making complex financial information more accessible

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
        await ContextMemoryManager.addMessage(sessionId, {
          role: 'assistant',
          content: assistantMessage
        })
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