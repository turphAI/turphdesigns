import { kv } from '@vercel/kv'
import { ConversationAnalytics } from './analytics'

export interface ConversationMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface ConversationContext {
  sessionId: string
  messages: ConversationMessage[]
  analytics?: ConversationAnalytics
  metadata: {
    userInfo?: string
    preferences?: Record<string, unknown>
    lastActive: Date
    sessionStartTime: Date
    ipLocation?: string
    referralSource?: string
    cardTriggered?: string
  }
}

export class ContextMemoryManager {
  private static readonly SESSION_PREFIX = 'conversation:'
  private static readonly SESSION_TTL = 60 * 60 * 24 * 7 // 7 days

  /**
   * Create a new conversation session
   */
  static async createSession(sessionId: string, cardTriggered?: string): Promise<ConversationContext> {
    const now = new Date()
    const context: ConversationContext = {
      sessionId,
      messages: [],
      metadata: {
        lastActive: now,
        sessionStartTime: now,
        cardTriggered
      }
    }

    await this.saveSession(context)
    return context
  }

  /**
   * Get conversation context by session ID
   */
  static async getSession(sessionId: string): Promise<ConversationContext | null> {
    try {
      const data = await kv.get<ConversationContext>(
        `${this.SESSION_PREFIX}${sessionId}`
      )
      return data
    } catch (error) {
      console.error('Error retrieving session:', error)
      return null
    }
  }

  /**
   * Save conversation context
   */
  static async saveSession(context: ConversationContext): Promise<void> {
    try {
      context.metadata.lastActive = new Date()
      await kv.setex(
        `${this.SESSION_PREFIX}${context.sessionId}`,
        this.SESSION_TTL,
        context
      )
    } catch (error) {
      console.error('Error saving session:', error)
    }
  }

  /**
   * Add a message to the conversation
   */
  static async addMessage(
    sessionId: string,
    message: Omit<ConversationMessage, 'id' | 'timestamp'>,
    cardTriggered?: string
  ): Promise<ConversationContext | null> {
    let context = await this.getSession(sessionId)
    
    if (!context) {
      context = await this.createSession(sessionId, cardTriggered)
    }
    
    // Ensure sessionStartTime exists for backwards compatibility
    if (!context.metadata.sessionStartTime) {
      context.metadata.sessionStartTime = new Date()
    }

    const newMessage: ConversationMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      ...message
    }

    context.messages.push(newMessage)
    
    // Keep only last 50 messages to prevent storage bloat
    if (context.messages.length > 50) {
      context.messages = context.messages.slice(-50)
    }

    await this.saveSession(context)
    return context
  }

  /**
   * Get conversation history for AI context
   */
  static async getRecentMessages(
    sessionId: string,
    limit: number = 10
  ): Promise<ConversationMessage[]> {
    const context = await this.getSession(sessionId)
    if (!context) return []
    
    return context.messages.slice(-limit)
  }

  /**
   * Update user metadata
   */
  static async updateMetadata(
    sessionId: string,
    metadata: Partial<ConversationContext['metadata']>
  ): Promise<void> {
    const context = await this.getSession(sessionId)
    if (!context) return

    context.metadata = { ...context.metadata, ...metadata }
    await this.saveSession(context)
  }

  /**
   * Update conversation analytics
   */
  static async updateAnalytics(
    sessionId: string,
    analytics: ConversationAnalytics
  ): Promise<void> {
    const context = await this.getSession(sessionId)
    if (!context) return

    context.analytics = analytics
    await this.saveSession(context)
  }

  /**
   * Get sessions with high quality scores for reporting
   */
  static async getHighQualitySessions(limit: number = 10): Promise<ConversationContext[]> {
    // Note: This is a simplified implementation
    // In production, you'd want to maintain an index of high-quality sessions
    // For now, this returns empty array but shows the intended interface
    return []
  }

  /**
   * Delete a session
   */
  static async deleteSession(sessionId: string): Promise<void> {
    try {
      await kv.del(`${this.SESSION_PREFIX}${sessionId}`)
    } catch (error) {
      console.error('Error deleting session:', error)
    }
  }
} 