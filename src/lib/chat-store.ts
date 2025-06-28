import { create } from 'zustand'
import { ConversationMessage } from './memory'

export interface ChatMessage extends ConversationMessage {
  isLoading?: boolean
}

interface ChatState {
  messages: ChatMessage[]
  isLoading: boolean
  sessionId: string
  isOpen: boolean
  
  // Actions
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void
  setMessages: (messages: ChatMessage[]) => void
  setLoading: (loading: boolean) => void
  setSessionId: (sessionId: string) => void
  toggleChat: () => void
  openChat: () => void
  closeChat: () => void
  clearMessages: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isLoading: false,
  sessionId: '',
  isOpen: false,

  addMessage: (message) => {
    const newMessage: ChatMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      ...message
    }
    
    set((state) => ({
      messages: [...state.messages, newMessage]
    }))
  },

  setMessages: (messages) => set({ messages }),

  setLoading: (isLoading) => set({ isLoading }),

  setSessionId: (sessionId) => set({ sessionId }),

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),

  openChat: () => set({ isOpen: true }),

  closeChat: () => set({ isOpen: false }),

  clearMessages: () => set({ messages: [] })
}))

// Generate or retrieve session ID
export const getOrCreateSessionId = (): string => {
  if (typeof window === 'undefined') return ''
  
  let sessionId = localStorage.getItem('chat_session_id')
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    localStorage.setItem('chat_session_id', sessionId)
  }
  
  return sessionId
} 