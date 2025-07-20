import { ConversationMessage } from './memory'

export interface ConversationAnalytics {
  qualityScore: number
  topicTags: string[]
  intentSignals: string[]
  userClassification: 'industry_leader' | 'ux_professional' | 'tech_decision_maker' | 'general'
  engagementMetrics: {
    messageCount: number
    sessionDuration: number
    followUpQuestions: number
    cardTriggered?: string
  }
  businessSignals: {
    speakingInterest: boolean
    consultingInterest: boolean
    collaborationInterest: boolean
    urgencyLevel: 'high' | 'medium' | 'low'
  }
}

export interface NotificationTriggers {
  highQualityConversation: boolean
  businessOpportunity: boolean
  contentGap: boolean
  thoughtLeadershipImpact: boolean
}

export class ConversationAnalyzer {
  
  // Keywords for intent detection
  private static readonly INTENT_KEYWORDS = {
    speaking: [
      'conference', 'speaking', 'presentation', 'keynote', 'workshop', 'event', 
      'talk', 'speak at', 'present to', 'audience', 'stage', 'session'
    ],
    consulting: [
      'consultation', 'consulting', 'help with', 'guidance', 'strategy', 'advise',
      'project', 'implementation', 'support', 'work with', 'partner', 'collaborate'
    ],
    collaboration: [
      'team', 'together', 'partnership', 'collaborate', 'joint', 'work with',
      'combine', 'alliance', 'cooperation', 'synergy'
    ],
    urgency: {
      high: ['urgent', 'asap', 'immediately', 'deadline', 'soon', 'quick'],
      medium: ['next month', 'planning', 'upcoming', 'considering', 'looking at'],
      low: ['future', 'someday', 'eventually', 'thinking about', 'interested in']
    }
  }

  // Professional indicators
  private static readonly PROFESSIONAL_INDICATORS = {
    titles: [
      'ceo', 'cto', 'vp', 'director', 'manager', 'lead', 'head of', 'chief',
      'president', 'founder', 'principal', 'senior', 'executive'
    ],
    companies: [
      'bank', 'financial', 'fintech', 'investment', 'credit union', 'insurance',
      'trading', 'payments', 'lending', 'wealth', 'asset management'
    ],
    strategic: [
      'strategy', 'roadmap', 'vision', 'transformation', 'innovation', 'growth',
      'scalability', 'competitive', 'market', 'business model', 'roi', 'revenue'
    ]
  }

  // Topic classification keywords
  private static readonly TOPIC_KEYWORDS = {
    'ai-ux-vision': [
      'conversational ai', 'ai interface', 'future of ux', 'ai transformation',
      'natural language', 'voice interface', 'chatbot', 'ai assistant'
    ],
    'amazon-experience': [
      'amazon', 'productads', 'scaling', 'team growth', 'revenue growth',
      'advertising', 'product development', 'startup to scale'
    ],
    'financial-ux': [
      'financial services', 'banking ux', 'fintech', 'compliance', 'regulation',
      'financial data', 'trading interface', 'investment platform'
    ],
    'methodologies': [
      'framework', 'methodology', 'process', 'approach', 'best practices',
      'implementation', 'workflow', 'system', 'structure'
    ],
    'regulatory': [
      'compliance', 'regulation', 'sec', 'finra', 'gdpr', 'privacy',
      'security', 'audit', 'risk management', 'legal'
    ]
  }

  /**
   * Analyze conversation and return analytics data
   */
  static analyzeConversation(
    messages: ConversationMessage[],
    sessionStartTime: Date,
    cardTriggered?: string
  ): ConversationAnalytics {
    const userMessages = messages.filter(m => m.role === 'user')
    const conversationText = messages.map(m => m.content.toLowerCase()).join(' ')
    
    return {
      qualityScore: this.calculateQualityScore(messages, conversationText),
      topicTags: this.extractTopicTags(conversationText),
      intentSignals: this.detectIntentSignals(conversationText),
      userClassification: this.classifyUser(conversationText),
      engagementMetrics: {
        messageCount: messages.length,
        sessionDuration: Date.now() - sessionStartTime.getTime(),
        followUpQuestions: this.countFollowUpQuestions(userMessages),
        cardTriggered
      },
      businessSignals: {
        speakingInterest: this.detectSpeakingInterest(conversationText),
        consultingInterest: this.detectConsultingInterest(conversationText),
        collaborationInterest: this.detectCollaborationInterest(conversationText),
        urgencyLevel: this.detectUrgencyLevel(conversationText)
      }
    }
  }

  /**
   * Calculate conversation quality score (0-10)
   */
  private static calculateQualityScore(
    messages: ConversationMessage[],
    conversationText: string
  ): number {
    const messageCount = messages.length
    const avgMessageLength = messages.reduce((sum, m) => sum + m.content.length, 0) / messages.length
    
    // Scoring factors
    const engagementScore = Math.min(messageCount * 0.5, 3) // Max 3 points for engagement
    const depthScore = Math.min(avgMessageLength / 50, 2) // Max 2 points for depth
    const professionalScore = this.calculateProfessionalScore(conversationText) // Max 3 points
    const strategicScore = this.calculateStrategicScore(conversationText) // Max 2 points
    
    return Math.min(engagementScore + depthScore + professionalScore + strategicScore, 10)
  }

  /**
   * Calculate professional context score
   */
  private static calculateProfessionalScore(text: string): number {
    let score = 0
    
    // Check for professional titles
    if (this.PROFESSIONAL_INDICATORS.titles.some(title => text.includes(title))) {
      score += 1
    }
    
    // Check for company/industry context
    if (this.PROFESSIONAL_INDICATORS.companies.some(company => text.includes(company))) {
      score += 1
    }
    
    // Check for strategic language
    const strategicMatches = this.PROFESSIONAL_INDICATORS.strategic.filter(term => text.includes(term)).length
    score += Math.min(strategicMatches * 0.2, 1)
    
    return Math.min(score, 3)
  }

  /**
   * Calculate strategic discussion score
   */
  private static calculateStrategicScore(text: string): number {
    const strategicKeywords = [
      'implementation', 'strategy', 'roadmap', 'transformation', 'innovation',
      'scalability', 'growth', 'competitive advantage', 'business value'
    ]
    
    const matches = strategicKeywords.filter(keyword => text.includes(keyword)).length
    return Math.min(matches * 0.25, 2)
  }

  /**
   * Extract topic tags from conversation
   */
  private static extractTopicTags(text: string): string[] {
    const tags: string[] = []
    
    Object.entries(this.TOPIC_KEYWORDS).forEach(([topic, keywords]) => {
      if (keywords.some(keyword => text.includes(keyword))) {
        tags.push(topic)
      }
    })
    
    return tags
  }

  /**
   * Detect intent signals
   */
  private static detectIntentSignals(text: string): string[] {
    const signals: string[] = []
    
    if (this.INTENT_KEYWORDS.speaking.some(keyword => text.includes(keyword))) {
      signals.push('speaking_inquiry')
    }
    
    if (this.INTENT_KEYWORDS.consulting.some(keyword => text.includes(keyword))) {
      signals.push('consulting_interest')
    }
    
    if (this.INTENT_KEYWORDS.collaboration.some(keyword => text.includes(keyword))) {
      signals.push('collaboration_interest')
    }
    
    return signals
  }

  /**
   * Classify user type based on conversation content
   */
  private static classifyUser(text: string): ConversationAnalytics['userClassification'] {
    // Check for industry leader indicators
    if (this.PROFESSIONAL_INDICATORS.titles.some(title => text.includes(title))) {
      return 'industry_leader'
    }
    
    // Check for UX professional indicators
    if (text.includes('ux') || text.includes('user experience') || text.includes('design')) {
      return 'ux_professional'
    }
    
    // Check for tech decision maker indicators
    if (text.includes('implementation') || text.includes('technical') || text.includes('development')) {
      return 'tech_decision_maker'
    }
    
    return 'general'
  }

  /**
   * Count follow-up questions in user messages
   */
  private static countFollowUpQuestions(userMessages: ConversationMessage[]): number {
    return userMessages.filter(message => 
      message.content.includes('?') || 
      message.content.toLowerCase().startsWith('how') ||
      message.content.toLowerCase().startsWith('what') ||
      message.content.toLowerCase().startsWith('why') ||
      message.content.toLowerCase().startsWith('when') ||
      message.content.toLowerCase().startsWith('where')
    ).length
  }

  /**
   * Detect speaking interest
   */
  private static detectSpeakingInterest(text: string): boolean {
    return this.INTENT_KEYWORDS.speaking.some(keyword => text.includes(keyword))
  }

  /**
   * Detect consulting interest
   */
  private static detectConsultingInterest(text: string): boolean {
    return this.INTENT_KEYWORDS.consulting.some(keyword => text.includes(keyword))
  }

  /**
   * Detect collaboration interest
   */
  private static detectCollaborationInterest(text: string): boolean {
    return this.INTENT_KEYWORDS.collaboration.some(keyword => text.includes(keyword))
  }

  /**
   * Detect urgency level
   */
  private static detectUrgencyLevel(text: string): 'high' | 'medium' | 'low' {
    if (this.INTENT_KEYWORDS.urgency.high.some(keyword => text.includes(keyword))) {
      return 'high'
    }
    if (this.INTENT_KEYWORDS.urgency.medium.some(keyword => text.includes(keyword))) {
      return 'medium'
    }
    return 'low'
  }

  /**
   * Determine if conversation should trigger notifications
   */
  static shouldNotify(analytics: ConversationAnalytics): NotificationTriggers {
    return {
      highQualityConversation: analytics.qualityScore >= 7,
      businessOpportunity: 
        analytics.businessSignals.speakingInterest || 
        analytics.businessSignals.consultingInterest ||
        (analytics.businessSignals.collaborationInterest && analytics.qualityScore >= 6),
      contentGap: false, // This would need more sophisticated analysis across multiple conversations
      thoughtLeadershipImpact: 
        analytics.userClassification === 'industry_leader' && 
        analytics.qualityScore >= 6
    }
  }

  /**
   * Generate analytics summary for reporting
   */
  static generateSummary(analytics: ConversationAnalytics): string {
    const parts = []
    
    parts.push(`Quality Score: ${analytics.qualityScore.toFixed(1)}/10`)
    
    if (analytics.topicTags.length > 0) {
      parts.push(`Topics: ${analytics.topicTags.join(', ')}`)
    }
    
    if (analytics.businessSignals.speakingInterest) {
      parts.push('🎤 Speaking Interest Detected')
    }
    
    if (analytics.businessSignals.consultingInterest) {
      parts.push('💼 Consulting Interest Detected')
    }
    
    if (analytics.userClassification === 'industry_leader') {
      parts.push('👔 Industry Leader')
    }
    
    if (analytics.businessSignals.urgencyLevel === 'high') {
      parts.push('⚡ High Urgency')
    }
    
    return parts.join(' | ')
  }
} 