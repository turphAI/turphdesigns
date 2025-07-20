'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, User, Bot, Minimize2, Maximize2, MessageSquare } from 'lucide-react'
import { useChatStore, getOrCreateSessionId } from '@/lib/chat-store'

export default function ChatInterface() {
  const {
    messages,
    isLoading,
    sessionId,
    addMessage,
    setLoading,
    setSessionId
  } = useChatStore()

  const [input, setInput] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize session ID on mount
  useEffect(() => {
    const id = getOrCreateSessionId()
    setSessionId(id)
  }, [setSessionId])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current
      // Use requestAnimationFrame to ensure DOM has updated
      requestAnimationFrame(() => {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      })
    }
  }, [messages, isLoading])

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const sendMessage = async (cardTriggered?: string) => {
    if (!input.trim() || isLoading || !sessionId) return

    const messageToSend = input.trim()
    setInput('')
    
    // Add user message to UI
    addMessage({
      role: 'user',
      content: messageToSend
    })

    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          sessionId,
          cardTriggered
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        let errorMessage = 'Failed to send message'
        
        if (response.status === 500) {
          errorMessage = 'Server error - this might be due to insufficient Claude API credits or configuration issues'
        } else if (response.status === 400) {
          errorMessage = errorData.error || 'Invalid request format'
        } else if (response.status === 401) {
          errorMessage = 'API authentication failed - check your Claude API key'
        }
        
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        })
        
        throw new Error(errorMessage)
      }

      const data = await response.json()
      
      // Add assistant response to UI
      addMessage({
        role: 'assistant',
        content: data.message
      })

    } catch (error) {
      console.error('Error sending message:', error)
      
      // Add error message to UI
      addMessage({
        role: 'assistant',
        content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please check the console for details or try again.`
      })
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b bg-white flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              TD
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900">TurphDesigns Assistant</h3>
            <Badge variant="outline" className="text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
              Online
            </Badge>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
        </Button>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 overflow-hidden">
              <div ref={scrollContainerRef} className="h-full overflow-y-auto px-4 py-4">
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                      <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-30" />
                      <p className="text-sm leading-relaxed">
                        Hi! I&apos;m here to help you learn about TurphDesigns&apos; AI-UX consulting services.
                        <br />
                        How can I assist you today?
                      </p>
                    </div>
                  )}
                  
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === 'user' 
                          ? 'justify-end' 
                          : 'justify-start'
                      }`}
                    >
                      <div
                        className={`flex max-w-[90%] ${
                          message.role === 'user' 
                            ? 'flex-row-reverse' 
                            : 'flex-row'
                        } items-start gap-2`}
                      >
                        <Avatar className="h-7 w-7 flex-shrink-0">
                          <AvatarFallback className={
                            message.role === 'user' 
                              ? 'bg-blue-100 text-blue-600' 
                              : 'bg-gray-100 text-gray-600'
                          }>
                            {message.role === 'user' ? (
                              <User className="h-3 w-3" />
                            ) : (
                              <Bot className="h-3 w-3" />
                            )}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div
                          className={`rounded-lg px-3 py-2 text-sm max-w-full ${
                            message.role === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="whitespace-pre-wrap break-words leading-relaxed">
                            {message.content}
                          </p>
                          <p className={`text-xs mt-1 opacity-70 ${
                            message.role === 'user' 
                              ? 'text-blue-100' 
                              : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 max-w-[90%]">
                        <Avatar className="h-7 w-7 flex-shrink-0">
                          <AvatarFallback className="bg-gray-100 text-gray-600">
                            <Bot className="h-3 w-3" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-gray-100 rounded-lg px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <div className="border-t bg-white p-4">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our consulting services..."
                disabled={isLoading}
                className="flex-1 text-sm"
              />
              <Button 
                onClick={() => sendMessage()} 
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
} 