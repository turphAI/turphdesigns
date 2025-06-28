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

    // Create system prompt for consulting business context
    const systemPrompt = `You are an AI assistant for TurphDesigns, a modern consulting business. You help visitors understand our services, capabilities, and can discuss potential consulting opportunities.

Key areas of expertise:
- Digital transformation and strategy
- Technology implementation and optimization  
- Business process improvement
- User experience and design thinking
- Data analytics and insights

You should be professional, knowledgeable, and helpful. When appropriate, guide conversations toward how TurphDesigns can help solve business challenges.`

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