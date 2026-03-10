import { ConversationAnalytics, NotificationTriggers, ConversationAnalyzer } from './analytics'
import { ConversationContext } from './memory'

export interface NotificationConfig {
  emailEnabled: boolean
  slackEnabled: boolean
  webhookUrl?: string
  emailRecipient?: string
}

export class NotificationService {
  private static config: NotificationConfig = {
    emailEnabled: true,
    slackEnabled: false,
    emailRecipient: process.env.NOTIFICATION_EMAIL || 'contact@turphdesigns.com'
  }

  /**
   * Process conversation for notification triggers
   */
  static async processConversation(
    context: ConversationContext,
    analytics: ConversationAnalytics
  ): Promise<void> {
    const triggers = ConversationAnalyzer.shouldNotify(analytics)
    
    if (this.shouldSendNotification(triggers)) {
      await this.sendNotification(context, analytics, triggers)
    }
  }

  /**
   * Check if any notification should be sent
   */
  private static shouldSendNotification(triggers: NotificationTriggers): boolean {
    return triggers.highQualityConversation || 
           triggers.businessOpportunity || 
           triggers.thoughtLeadershipImpact
  }

  /**
   * Send notification based on triggers
   */
  private static async sendNotification(
    context: ConversationContext,
    analytics: ConversationAnalytics,
    triggers: NotificationTriggers
  ): Promise<void> {
    const subject = this.generateSubject(analytics, triggers)
    const message = this.generateMessage(context, analytics, triggers)

    // Log notification (always enabled)
    console.log(`🔔 NOTIFICATION TRIGGERED:`)
    console.log(`Subject: ${subject}`)
    console.log(`Summary: ${ConversationAnalyzer.generateSummary(analytics)}`)
    console.log(`Session: ${context.sessionId}`)
    console.log(`---`)

    // Send email notification if configured
    if (this.config.emailEnabled && this.config.emailRecipient) {
      await this.sendEmail(subject, message, context.sessionId)
    }

    // Future: Add Slack/webhook integrations here
  }

  /**
   * Generate notification subject line
   */
  private static generateSubject(
    analytics: ConversationAnalytics,
    triggers: NotificationTriggers
  ): string {
    const parts = []

    if (triggers.businessOpportunity) {
      if (analytics.businessSignals.speakingInterest) {
        parts.push('🎤 Speaking Inquiry')
      }
      if (analytics.businessSignals.consultingInterest) {
        parts.push('💼 Consulting Interest')
      }
      if (analytics.businessSignals.collaborationInterest) {
        parts.push('🤝 Collaboration Opportunity')
      }
    }

    if (triggers.highQualityConversation) {
      parts.push(`✨ High-Quality Conversation (${analytics.qualityScore.toFixed(1)}/10)`)
    }

    if (triggers.thoughtLeadershipImpact) {
      parts.push('👔 Industry Leader Engagement')
    }

    if (analytics.businessSignals.urgencyLevel === 'high') {
      parts.push('⚡ HIGH URGENCY')
    }

    return parts.length > 0 ? parts.join(' | ') : 'New Conversation Alert'
  }

  /**
   * Generate notification message content
   */
  private static generateMessage(
    context: ConversationContext,
    analytics: ConversationAnalytics,
    _triggers: NotificationTriggers
  ): string {
    const lines = []

    lines.push(`=== CONVERSATION ALERT ===`)
    lines.push(``)
    lines.push(`Quality Score: ${analytics.qualityScore.toFixed(1)}/10`)
    lines.push(`User Type: ${analytics.userClassification.replace('_', ' ').toUpperCase()}`)
    lines.push(`Session ID: ${context.sessionId}`)
    
    if (context.metadata.cardTriggered) {
      lines.push(`Triggered by: ${context.metadata.cardTriggered}`)
    }

    lines.push(``)
    lines.push(`ENGAGEMENT METRICS:`)
    lines.push(`- Messages: ${analytics.engagementMetrics.messageCount}`)
    lines.push(`- Duration: ${Math.round(analytics.engagementMetrics.sessionDuration / 1000 / 60)} minutes`)
    lines.push(`- Follow-up Questions: ${analytics.engagementMetrics.followUpQuestions}`)

    if (analytics.topicTags.length > 0) {
      lines.push(``)
      lines.push(`TOPICS DISCUSSED:`)
      analytics.topicTags.forEach(tag => {
        lines.push(`- ${tag.replace('-', ' ').toUpperCase()}`)
      })
    }

    if (analytics.intentSignals.length > 0) {
      lines.push(``)
      lines.push(`INTENT SIGNALS:`)
      analytics.intentSignals.forEach(signal => {
        lines.push(`- ${signal.replace('_', ' ').toUpperCase()}`)
      })
    }

    lines.push(``)
    lines.push(`BUSINESS SIGNALS:`)
    if (analytics.businessSignals.speakingInterest) lines.push(`- 🎤 Speaking Interest`)
    if (analytics.businessSignals.consultingInterest) lines.push(`- 💼 Consulting Interest`)
    if (analytics.businessSignals.collaborationInterest) lines.push(`- 🤝 Collaboration Interest`)
    lines.push(`- Urgency Level: ${analytics.businessSignals.urgencyLevel.toUpperCase()}`)

    if (context.messages.length > 0) {
      lines.push(``)
      lines.push(`RECENT MESSAGES:`)
      const recentMessages = context.messages.slice(-3) // Last 3 messages
      recentMessages.forEach((msg, index) => {
        const preview = msg.content.length > 100 ? 
          msg.content.substring(0, 100) + '...' : 
          msg.content
        lines.push(`${index + 1}. [${msg.role.toUpperCase()}] ${preview}`)
      })
    }

    lines.push(``)
    lines.push(`Action needed: Review conversation and consider personal follow-up`)
    lines.push(``)

    return lines.join('\n')
  }

  /**
   * Send email notification (simplified implementation)
   */
  private static async sendEmail(
    subject: string,
    message: string,
    sessionId: string
  ): Promise<void> {
    // In production, you'd integrate with a service like:
    // - Resend, SendGrid, AWS SES, etc.
    // For now, we'll just log that an email would be sent
    
    console.log(`📧 EMAIL NOTIFICATION:`)
    console.log(`To: ${this.config.emailRecipient}`)
    console.log(`Subject: ${subject}`)
    console.log(`Message length: ${message.length} characters`)
    console.log(`Session ID: ${sessionId}`)
    
    // TODO: Implement actual email sending
    // Example with a webhook:
    // if (process.env.NOTIFICATION_WEBHOOK_URL) {
    //   await fetch(process.env.NOTIFICATION_WEBHOOK_URL, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ subject, message, sessionId })
    //   })
    // }
  }

  /**
   * Update notification configuration
   */
  static updateConfig(newConfig: Partial<NotificationConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }

  /**
   * Get current notification configuration
   */
  static getConfig(): NotificationConfig {
    return { ...this.config }
  }
} 