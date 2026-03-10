'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User } from 'lucide-react'
import { useChatStore, getOrCreateSessionId } from '@/lib/chat-store'

/**
 * EmbeddedChat
 *
 * A warm, editorial-styled chat component designed to live
 * inside the page flow (not a sidebar). Uses the same Zustand
 * store and API endpoint as the original ChatInterface.
 */
export function EmbeddedChat() {
  const {
    messages,
    isLoading,
    sessionId,
    addMessage,
    setLoading,
    setSessionId
  } = useChatStore()

  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const id = getOrCreateSessionId()
    setSessionId(id)
  }, [setSessionId])

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
      })
    }
  }, [messages, isLoading])

  const sendMessage = async () => {
    if (!input.trim() || isLoading || !sessionId) return

    const messageToSend = input.trim()
    setInput('')

    addMessage({ role: 'user', content: messageToSend })
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend, sessionId }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      addMessage({ role: 'assistant', content: data.message })
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: `Sorry, I encountered an error. ${error instanceof Error ? error.message : 'Please try again.'}`
      })
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="rounded-2xl overflow-hidden text-left"
         style={{
           backgroundColor: 'var(--warm-bg)',
           border: '1px solid var(--warm-border)',
         }}>
      {/* Status bar */}
      <div className="flex items-center gap-3 px-6 pt-5 pb-3">
        <div className="w-2 h-2 rounded-full"
             style={{ backgroundColor: 'var(--warm-accent)' }} />
        <span className="font-body text-sm"
              style={{ color: 'var(--warm-text-muted)' }}>
          AI Assistant &middot; Ready
        </span>
      </div>

      {/* Messages area */}
      <div ref={scrollRef}
           className="px-6 overflow-y-auto"
           style={{ maxHeight: '360px', minHeight: '120px' }}>
        {messages.length === 0 ? (
          <p className="font-body text-base leading-relaxed py-4"
             style={{ color: 'var(--warm-text-secondary)' }}>
            Try asking about conversational AI strategy, my experience scaling
            products at Amazon, or how I approach UX in regulated financial environments.
          </p>
        ) : (
          <div className="space-y-4 py-4">
            {messages.map((message) => (
              <div key={message.id}
                   className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-2.5 max-w-[85%] ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                  {/* Avatar */}
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                       style={{
                         backgroundColor: message.role === 'user'
                           ? 'var(--warm-accent-light)'
                           : 'var(--warm-border)',
                       }}>
                    {message.role === 'user'
                      ? <User className="w-3.5 h-3.5" style={{ color: 'var(--warm-accent-dark)' }} />
                      : <Bot className="w-3.5 h-3.5" style={{ color: 'var(--warm-text-secondary)' }} />
                    }
                  </div>

                  {/* Bubble */}
                  <div className="rounded-xl px-4 py-2.5 font-body text-sm leading-relaxed"
                       style={{
                         backgroundColor: message.role === 'user'
                           ? 'var(--warm-accent)'
                           : 'var(--warm-surface)',
                         color: message.role === 'user'
                           ? '#FAF8F5'
                           : 'var(--warm-text)',
                         border: message.role === 'user'
                           ? 'none'
                           : '1px solid var(--warm-border)',
                       }}>
                    <p className="whitespace-pre-wrap break-words">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                       style={{ backgroundColor: 'var(--warm-border)' }}>
                    <Bot className="w-3.5 h-3.5" style={{ color: 'var(--warm-text-secondary)' }} />
                  </div>
                  <div className="rounded-xl px-4 py-3"
                       style={{
                         backgroundColor: 'var(--warm-surface)',
                         border: '1px solid var(--warm-border)',
                       }}>
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full animate-bounce"
                           style={{ backgroundColor: 'var(--warm-text-muted)' }} />
                      <div className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:0.15s]"
                           style={{ backgroundColor: 'var(--warm-text-muted)' }} />
                      <div className="w-1.5 h-1.5 rounded-full animate-bounce [animation-delay:0.3s]"
                           style={{ backgroundColor: 'var(--warm-text-muted)' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="px-6 pb-5 pt-2">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me something..."
            disabled={isLoading}
            className="flex-1 rounded-xl px-5 py-3.5 font-body text-sm outline-none transition-colors"
            style={{
              backgroundColor: 'var(--warm-surface)',
              border: '1px solid var(--warm-border)',
              color: 'var(--warm-text)',
            }}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="rounded-xl px-4 py-3.5 font-body text-sm font-medium transition-opacity hover:opacity-70 disabled:opacity-40"
            style={{
              backgroundColor: 'var(--warm-text)',
              color: 'var(--warm-bg)',
            }}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
