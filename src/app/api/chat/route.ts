import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { ContextMemoryManager } from '@/lib/memory'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
})

export async function POST(req: NextRequest) {
  try {
    const { message, sessionId } = await req.json()

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: 'Message and session ID are required' },
        { status: 400 }
      )
    }

    // Add user message to context
    await ContextMemoryManager.addMessage(sessionId, {
      role: 'user',
      content: message
    })

    // Get recent conversation history for context
    const recentMessages = await ContextMemoryManager.getRecentMessages(sessionId, 10)

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
      max_tokens: 1000,
      system: systemPrompt,
      messages: messages
    })

    const assistantMessage = response.content[0]?.type === 'text' 
      ? response.content[0].text 
      : 'I apologize, but I encountered an error processing your message.'

    // Add assistant response to context
    await ContextMemoryManager.addMessage(sessionId, {
      role: 'assistant',
      content: assistantMessage
    })

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