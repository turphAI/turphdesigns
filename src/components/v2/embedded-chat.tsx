'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Send, Bot, User, MessageCircle, X } from 'lucide-react'
import { useChatStore, getOrCreateSessionId } from '@/lib/chat-store'
import { ga } from '@/lib/ga'

/**
 * ChatBody
 *
 * The core chat UI — messages, input, status bar.
 * Reused by both inline embed (md+) and bottom sheet (mobile).
 */
function ChatBody({ variant = 'inline' }: { variant?: 'inline' | 'sheet' }) {
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

  // Auto-focus input when sheet opens
  useEffect(() => {
    if (variant === 'sheet' && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [variant])

  const sendMessage = async () => {
    if (!input.trim() || isLoading || !sessionId) return

    const messageToSend = input.trim()
    setInput('')

    addMessage({ role: 'user', content: messageToSend })
    ga.chatMessage(messageToSend)
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

  const isSheet = variant === 'sheet'

  return (
    <>
      {/* Status bar */}
      <div className="flex items-center gap-3 px-6 pt-5 pb-3">
        <div className="w-2 h-2 rounded-full"
             style={{ backgroundColor: '#5B8A7A' }} />
        <span className="font-serif-display text-sm"
              style={{ color: 'var(--warm-text-muted)' }}>
          AI Assistant &middot; Ready
        </span>
      </div>

      {/* Messages area */}
      <div ref={scrollRef}
           role="log"
           aria-live="polite"
           aria-label="Conversation with Tom's AI assistant"
           className="px-6 overflow-y-auto flex-1"
           style={{
             maxHeight: isSheet ? 'none' : '360px',
             minHeight: isSheet ? '0' : '120px',
           }}>
        {messages.length === 0 ? (
          <p className="font-body text-base leading-relaxed py-4"
             style={{ color: 'var(--warm-text-secondary)' }}>
            Try asking about my time at Amazon, how I think about AI in financial services,
            or what it&apos;s like designing for high-stakes decisions.
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
          <label htmlFor="chat-input" className="sr-only">
            Ask Tom&apos;s AI assistant a question
          </label>
          <input
            id="chat-input"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me something..."
            disabled={isLoading}
            aria-disabled={isLoading}
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
            aria-label="Send message"
            className="rounded-xl px-4 py-3.5 font-body text-sm font-medium transition-opacity hover:opacity-70 disabled:opacity-40"
            style={{
              backgroundColor: 'var(--warm-text)',
              color: 'var(--warm-bg)',
            }}
          >
            <Send className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  )
}


/**
 * ChatSheet
 *
 * Bottom sheet that slides up on mobile with the chat experience.
 * Includes backdrop overlay and drag-to-close handle.
 */
function ChatSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)

  // Mount on first open, then animate in
  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      // Small delay so the DOM renders at translate-y-full first, then slides up
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimateIn(true)
        })
      })
    } else {
      setAnimateIn(false)
    }
  }, [isOpen])

  // Unmount after close animation completes
  const handleTransitionEnd = () => {
    if (!isOpen) {
      setMounted(false)
    }
  }

  // Lock body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          backgroundColor: 'rgba(26, 26, 26, 0.4)',
          opacity: animateIn ? 1 : 0,
          pointerEvents: animateIn ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 flex flex-col"
        style={{
          backgroundColor: 'var(--warm-bg)',
          borderRadius: '24px 24px 0 0',
          maxHeight: '85vh',
          boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.12)',
          transform: animateIn ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Handle + close bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1">
          <div className="w-10 h-1 rounded-full mx-auto"
               style={{ backgroundColor: 'var(--warm-border)' }} />
        </div>
        <div className="flex items-center justify-between px-6 pb-2">
          <span className="font-serif-display text-lg font-medium"
                style={{ color: 'var(--warm-text)' }}>
            Ask me anything
          </span>
          <button
            onClick={onClose}
            aria-label="Close chat"
            className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-60"
            style={{ backgroundColor: 'var(--warm-border)' }}
          >
            <X className="w-4 h-4" aria-hidden="true" style={{ color: 'var(--warm-text-secondary)' }} />
          </button>
        </div>

        {/* Chat body fills remaining space */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <ChatBody variant="sheet" />
        </div>
      </div>
    </>
  )
}


/**
 * EmbeddedChat
 *
 * Responsive chat entry point:
 * - Mobile (<md): CTA button that opens a bottom sheet
 * - Desktop (md+): Inline embedded chat
 */
export function EmbeddedChat() {
  const [sheetOpen, setSheetOpen] = useState(false)

  const openSheet = useCallback(() => { ga.chatOpen(); setSheetOpen(true) }, [])
  const closeSheet = useCallback(() => setSheetOpen(false), [])

  return (
    <>
      {/* Mobile: CTA button */}
      <div className="md:hidden">
        <button
          onClick={openSheet}
          className="w-full rounded-2xl px-6 py-5 font-serif-display text-base font-medium
                     flex items-center justify-center gap-3 transition-opacity hover:opacity-80"
          style={{
            backgroundColor: 'var(--warm-text)',
            color: 'var(--warm-bg)',
          }}
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          Start a conversation
        </button>

        <ChatSheet isOpen={sheetOpen} onClose={closeSheet} />
      </div>

      {/* Desktop: Inline embed */}
      <div className="hidden md:block rounded-2xl overflow-hidden text-left"
           style={{
             backgroundColor: 'var(--warm-bg)',
             border: '1px solid var(--warm-border)',
           }}>
        <ChatBody variant="inline" />
      </div>
    </>
  )
}
