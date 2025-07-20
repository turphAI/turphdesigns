import { NextRequest, NextResponse } from 'next/server'
import { ContextMemoryManager } from '@/lib/memory'
import { ConversationAnalyzer } from '@/lib/analytics'

export async function GET(req: NextRequest) {
  try {
    // Simple authentication check (in production, use proper auth)
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.includes(process.env.ANALYTICS_API_KEY || 'dev-key')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(req.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const sessionId = searchParams.get('sessionId')

    // If specific session requested
    if (sessionId) {
      const context = await ContextMemoryManager.getSession(sessionId)
      if (!context) {
        return NextResponse.json(
          { error: 'Session not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        session: {
          sessionId: context.sessionId,
          messageCount: context.messages.length,
          analytics: context.analytics,
          metadata: context.metadata,
          analyticsSummary: context.analytics ? 
            ConversationAnalyzer.generateSummary(context.analytics) : 
            'No analytics available'
        }
      })
    }

    // Return high-quality sessions summary
    const highQualitySessions = await ContextMemoryManager.getHighQualitySessions(limit)
    
    const summary = {
      totalSessions: highQualitySessions.length,
      sessions: highQualitySessions.map(context => ({
        sessionId: context.sessionId,
        qualityScore: context.analytics?.qualityScore || 0,
        userClassification: context.analytics?.userClassification || 'unknown',
        topicTags: context.analytics?.topicTags || [],
        businessSignals: context.analytics?.businessSignals || {},
        lastActive: context.metadata.lastActive,
        cardTriggered: context.metadata.cardTriggered,
        summary: context.analytics ? 
          ConversationAnalyzer.generateSummary(context.analytics) : 
          'No analytics available'
      }))
    }

    return NextResponse.json(summary)

  } catch (error) {
    console.error('Analytics API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST endpoint for testing analytics on sample conversations
export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.includes(process.env.ANALYTICS_API_KEY || 'dev-key')) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { messages, cardTriggered } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // Analyze the provided messages
    const analytics = ConversationAnalyzer.analyzeConversation(
      messages,
      new Date(), // Use current time as start time for testing
      cardTriggered
    )

    const notifications = ConversationAnalyzer.shouldNotify(analytics)

    return NextResponse.json({
      analytics,
      notifications,
      summary: ConversationAnalyzer.generateSummary(analytics)
    })

  } catch (error) {
    console.error('Analytics test API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 