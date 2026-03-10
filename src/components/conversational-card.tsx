'use client'

import * as React from "react"
import { Sparkles, CircleCheckBig, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export interface ConversationalCardProps {
  title: string
  description: string
  content?: React.ReactNode
  category: 'experience' | 'insights' | 'methodology' | 'speaking' | 'default'
  chatContext: string
  discussPrompt?: string
  tags?: string[]
  onDiscuss?: (context: string, cardTitle: string) => void
  className?: string
}

const categoryConfig = {
  experience: {
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    label: 'Experience'
  },
  insights: {
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    label: 'AI-UX Vision'
  },
  methodology: {
    badgeColor: 'bg-green-100 text-green-800 border-green-200',
    label: 'Methodology'
  },
  speaking: {
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
    label: 'Speaking'
  },
  default: {
    badgeColor: 'bg-gray-100 text-gray-800 border-gray-200',
    label: 'Topic'
  }
}

export function ConversationalCard({
  title,
  description,
  content,
  category = 'default',
  chatContext,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  discussPrompt,
  tags = [],
  onDiscuss,
  className
}: ConversationalCardProps) {
  const config = categoryConfig[category]
  const [isSelected, setIsSelected] = React.useState(false)
  
  const handleDiscuss = () => {
    setIsSelected(true)
    if (onDiscuss) {
      onDiscuss(chatContext, title)
    }
    // Reset selected state after a short delay
    setTimeout(() => setIsSelected(false), 2000)
  }

  return (
    <Card className={cn(
      "group relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      "bg-white border border-gray-200",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              {description}
            </CardDescription>
          </div>
          
          {/* Tags Menu */}
          {tags.length > 0 && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-3" align="end">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Topic tags</h4>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </CardHeader>

      {content && (
        <CardContent className="pb-4">
          <div className="text-gray-700 leading-relaxed">
            {content}
          </div>
        </CardContent>
      )}

      <CardFooter className="pt-4 border-t border-gray-100">
        <div className="w-full flex items-center justify-between">
          {/* Category Badge */}
          <Badge variant="outline" className={cn("text-xs", config.badgeColor)}>
            {config.label}
          </Badge>

          {/* Context Button */}
          <Button
            onClick={handleDiscuss}
            variant="ghost"
            size="sm"
            className={cn(
              "group/btn transition-all duration-200",
              "hover:bg-gray-50 text-gray-600 hover:text-gray-900",
              "px-3 py-2 h-auto"
            )}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className={cn(
                "transition-all duration-200 overflow-hidden",
                "group-hover/btn:max-w-[120px] max-w-0 group-hover/btn:opacity-100 opacity-0"
              )}>
                Chat with context
              </span>
                             {isSelected && (
                 <CircleCheckBig className="w-4 h-4 text-green-600" />
               )}
            </span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Preset card configurations
export const cardPresets = {
  amazonExperience: {
    title: "Amazon ProductAds Journey",
    description: "Scaling a product from 20 people with no revenue to 200 people generating $250M annually.",
    category: 'experience' as const,
    chatContext: "Amazon ProductAds scaling experience: Led UX for Amazon's advertising program from startup phase (20 people, $0 revenue) to mature product (200+ people, $250M annual revenue). Responsible for all customer-facing components and merchant tools. Key challenges included balancing user experience with business monetization, scaling design systems, and building advertising products that respect user experience while driving revenue growth.",
    discussPrompt: "Explore scaling strategies, team building approaches, or product development methodologies from this $250M growth journey.",
    tags: ["Scaling", "$250M Revenue", "Team Growth"]
  },
  
  aiUxVision: {
    title: "Future of Financial UX",
    description: "The paradigm shift toward conversational AI interfaces in financial services and its implications for user experience design.", 
    category: 'insights' as const,
    chatContext: "AI-UX Vision for Financial Services: The emergence of conversational AI interfaces marks a transformation as significant as the shift from command-line to graphical interfaces. Financial institutions must move beyond rigid user journeys to embrace AI-driven, adaptive experiences that match users' natural thought processes. This involves rethinking content creation, service delivery, and regulatory compliance in the context of conversational interfaces.",
    discussPrompt: "Dive into implementation strategies, regulatory considerations, or specific use cases for conversational AI in finance.",
    tags: ["AI Interfaces", "Financial Services", "Future UX"]
  },

  regulatoryMethodology: {
    title: "Regulatory-Aware Innovation",
    description: "Framework for implementing AI-UX innovations within financial services constraints and compliance requirements.",
    category: 'methodology' as const,
    chatContext: "Regulatory-Aware Innovation Framework: A systematic approach to implementing AI-UX innovations within financial services regulatory constraints. This methodology balances user experience improvements with compliance requirements (SEC, FINRA, GDPR), focusing on transparent AI interactions, audit trails, explainable algorithms, and user protection while maintaining engaging conversational experiences.",
    discussPrompt: "Explore specific frameworks, implementation examples, or regulatory compliance strategies for AI-powered financial interfaces.",
    tags: ["Compliance", "Framework", "Innovation"]
  },

  speakingEngagement: {
    title: "Speaking & Thought Leadership",
    description: "Available for conferences, workshops, and strategic discussions on conversational AI and financial services UX.",
    category: 'speaking' as const,
    chatContext: "Speaking and Consulting Availability: Expert presentations on conversational AI interfaces for financial services, scaling product organizations, and regulatory-aware innovation. Topics include: future of financial UX, AI-powered interface design, scaling from startup to enterprise, team building strategies, and balancing innovation with compliance. Available for conferences, internal workshops, strategic consulting, and thought leadership discussions.",
    discussPrompt: "Discuss presentation topics, workshop formats, or strategic consulting needs for your organization.",
    tags: ["Conferences", "Workshops", "Strategy"]
  }
}

// Utility function to create cards with preset configurations
export function createPresetCard(
  preset: keyof typeof cardPresets,
  overrides?: Partial<ConversationalCardProps>
) {
  const config = cardPresets[preset]
  return {
    ...config,
    ...overrides
  }
} 