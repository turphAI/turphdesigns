'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Send, X, User, Bot } from 'lucide-react'
import { useChatStore, getOrCreateSessionId } from '@/lib/chat-store'
import { format } from 'date-fns'

export default function ChatInterface() {
  const {
    messages,
    isLoading,
    sessionId,
    isOpen,
    addMessage,
    setLoading,
    setSessionId,
    toggleChat,
    closeChat
  } = useChatStore()

  const [input, setInput] = useState('')
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Initialize session ID on mount
  useEffect(() => {
    const id = getOrCreateSessionId()
    setSessionId(id)
  }, [setSessionId])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async () => {
    if (!input.trim() || isLoading || !sessionId) return

    const userMessage = input.trim()
    setInput('')
    
    // Add user message to UI
    addMessage({
      role: 'user',
      content: userMessage
    })

    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      
      // Add assistant response to UI
      addMessage({
        role: 'assistant',
        content: data.message
      })

    } catch (error) {
      console.error('Error sending message:', error)
      addMessage({
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.'
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
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  TD
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">TurphDesigns Assistant</CardTitle>
                <Badge variant="outline" className="text-xs">
                  Online
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={closeChat}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages Area */}
            <ScrollArea className="flex-1 px-4" ref={scrollAreaRef}>
              <div className="space-y-4 py-4">
                {messages.length === 0 && (
                  <div className="text-center text-muted-foreground py-8">
                    <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">
                      Hi! I&apos;m here to help you learn about TurphDesigns&apos; consulting services.
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
                      className={`flex max-w-[80%] ${
                        message.role === 'user' 
                          ? 'flex-row-reverse' 
                          : 'flex-row'
                      } gap-2`}
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback className={
                          message.role === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }>
                          {message.role === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div
                        className={`rounded-lg px-3 py-2 text-sm ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        <p className={`text-xs mt-1 opacity-70 ${
                          message.role === 'user' 
                            ? 'text-primary-foreground/70' 
                            : 'text-muted-foreground'
                        }`}>
                          {format(message.timestamp, 'HH:mm')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-2 max-w-[80%]">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-muted">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:0.1s]" />
                          <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our consulting services..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button 
                  onClick={sendMessage} 
                  disabled={isLoading || !input.trim()}
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
} 