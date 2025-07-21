'use client'

import { useCallback } from 'react'
import { useChatStore } from '@/lib/chat-store'

export interface ChatIntegrationOptions {
  /**
   * Automatically open chat when a card is clicked
   */
  autoOpen?: boolean
  
  /**
   * Pre-fill the chat input with a contextual message
   */
  prefillMessage?: (cardTitle: string, context: string) => string
  
  /**
   * Callback when chat is triggered from a card
   */
  onChatTriggered?: (cardTitle: string, context: string) => void
}

export function useChatIntegration(options: ChatIntegrationOptions = {}) {
  const { 
    autoOpen = true, 
    prefillMessage, 
    onChatTriggered 
  } = options

  const { addMessage, openChat } = useChatStore()

  const triggerChat = useCallback((context: string, cardTitle: string) => {
    // Call the callback if provided
    if (onChatTriggered) {
      onChatTriggered(cardTitle, context)
    }

    // Generate a contextual message
    const contextualMessage = prefillMessage 
      ? prefillMessage(cardTitle, context)
      : `I'd like to discuss "${cardTitle}". ${getDefaultPrompt(cardTitle)}`

    // Add context as a user message that initiates the conversation
    addMessage({
      role: 'user',
      content: contextualMessage
    })

    // If autoOpen is enabled, open the chat interface
    if (autoOpen) {
      openChat()
      console.log(`🔔 Chat triggered from card: ${cardTitle}`)
    }

    // Return the context and message for external handling
    return {
      context,
      cardTitle,
      message: contextualMessage
    }

  }, [autoOpen, prefillMessage, onChatTriggered, addMessage, openChat])

  return {
    triggerChat
  }
}

/**
 * Generate default prompts based on card title/content
 */
function getDefaultPrompt(cardTitle: string): string {
  const prompts: Record<string, string> = {
    'Amazon ProductAds Journey': 'What were the key challenges in scaling from 20 to 200 people?',
    'Future of Financial UX': 'How should financial institutions prepare for this transition?',
    'Regulatory-Aware Innovation': 'What are the most important compliance considerations?',
    'Speaking & Thought Leadership': 'What presentation topics would work best for our organization?'
  }

  return prompts[cardTitle] || 'Tell me more about this topic.'
}

/**
 * Preset chat integration configurations for different use cases
 */
export const chatIntegrationPresets = {
  /**
   * Default configuration - simple and direct
   */
  default: {
    autoOpen: true,
    prefillMessage: (cardTitle: string) => 
      `I'm interested in learning more about "${cardTitle}". What would you like to know?`
  },

  /**
   * Exploratory configuration - encourages open-ended discussion
   */
  exploratory: {
    autoOpen: true,
    prefillMessage: (cardTitle: string) => 
      `I'd like to explore the topic of "${cardTitle}". What aspects are most relevant to my situation?`
  },

  /**
   * Business-focused configuration - oriented toward practical applications
   */
  business: {
    autoOpen: true,
    prefillMessage: (cardTitle: string) => 
      `I'm interested in the business applications of "${cardTitle}". How could this apply to my organization?`
  },

  /**
   * Deep-dive configuration - for detailed technical discussions
   */
  deepDive: {
    autoOpen: true,
    prefillMessage: (cardTitle: string) => 
      `I want to do a deep dive on "${cardTitle}". Can you walk me through the specific frameworks and methodologies?`
  }
}

/**
 * Hook variant with preset configurations
 */
export function useChatIntegrationWithPreset(
  preset: keyof typeof chatIntegrationPresets = 'default',
  overrides?: Partial<ChatIntegrationOptions>
) {
  const config = {
    ...chatIntegrationPresets[preset],
    ...overrides
  }
  
  return useChatIntegration(config)
} 