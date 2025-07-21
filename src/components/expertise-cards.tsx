'use client'

import React from 'react'
import { ConversationalCard } from './conversational-card'
import { useChatIntegrationWithPreset } from '@/hooks/use-chat-integration'
import { 
  MessageSquare, 
  Building2, 
  Brain,
  Briefcase,
  TrendingUp
} from "lucide-react"

export function ExpertiseCards() {
  const { triggerChat } = useChatIntegrationWithPreset('business')

  const expertiseAreas = [
    {
      title: "Conversational AI Interfaces",
      description: "Pioneering the shift from traditional UIs to natural language interactions that adapt to users' thought processes.",
      category: 'insights' as const,
      chatContext: "Conversational AI Interface Design expertise: Leading the transition from traditional user interfaces to natural language interactions in financial services. Focus areas include context-aware dialogues, dynamic data visualization, natural language understanding, and creating AI interfaces that adapt to users' natural thought processes rather than forcing them into rigid interaction patterns. Experience includes implementing conversational AI at Fidelity Investments for financial data exploration and account management.",
      discussPrompt: "Explore how conversational AI can transform your product's user experience and eliminate complex navigation patterns.",
      tags: ["Natural Language", "Context-Aware", "Financial AI"],
      icon: <MessageSquare className="h-8 w-8" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-700">
            Traditional interfaces force users to navigate complex menus and learn system-specific patterns. 
            Conversational AI allows users to interact naturally, asking questions and expressing intent 
            in their own words.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Natural Language Understanding for financial queries
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Context-Aware Dialogues that remember user preferences
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              Dynamic Data Visualization based on conversation context
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Financial Services UX",
      description: "Deep expertise in regulated environments with proven success at Amazon and Fidelity Investments.",
      category: 'experience' as const,
      chatContext: "Financial Services UX Leadership: Extensive experience designing user experiences in highly regulated financial environments. Current role at Fidelity Investments focuses on Personal Investing UX including Transactions, money movement, account opening, and Fidelity Assistant. Previous experience scaling Amazon ProductAds from startup to $250M revenue. Expertise includes regulatory compliance design (SEC, FINRA), handling financial data complexity, building trust through transparent interactions, and balancing innovation with security requirements.",
      discussPrompt: "Discuss regulatory considerations, compliance strategies, or specific challenges in financial services UX design.",
      tags: ["Regulatory Compliance", "Trust & Security", "Fidelity"],
      icon: <Building2 className="h-8 w-8" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-700">
            Financial services present unique UX challenges: regulatory compliance, complex data relationships, 
            user trust, and the need to make sophisticated financial concepts accessible to diverse audiences.
          </p>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-800 font-medium">Current Focus at Fidelity</p>
            <p className="text-sm text-blue-700">
              Personal Investing UX, Transactions, account opening, and AI-powered assistant interfaces
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Structured Data Visualization",
      description: "Making complex financial information accessible through intelligent, context-aware presentation.",
      category: 'methodology' as const,
      chatContext: "Structured Data Visualization Methodology: Specialized approach to presenting complex financial data through intelligent, context-aware visualization. This methodology focuses on smart data selection (showing relevant information based on user context), narrative visualization (telling stories with data rather than just displaying charts), and progressive disclosure (revealing complexity gradually as users need it). Applications include portfolio analysis, transaction history, market data presentation, and regulatory reporting interfaces.",
      discussPrompt: "Explore frameworks for making complex financial data more accessible and actionable for your users.",
      tags: ["Data Visualization", "Progressive Disclosure", "Context-Aware"],
      icon: <Brain className="h-8 w-8" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-700">
            The challenge isn't just displaying data—it's presenting the right information at the right time 
            in a way that helps users make confident decisions without overwhelming them.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Smart Data Selection based on user context and goals
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Narrative Visualization that tells stories with numbers
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Progressive Disclosure for managing complexity
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Product Scaling Leadership",
      description: "Proven ability to grow digital products from concepts to massive revenue streams and team scale.",
      category: 'experience' as const,
      chatContext: "Product Scaling Leadership Experience: Led Amazon ProductAds from early-stage startup (less than 20 people, $0 revenue) to mature product generating $250M annually with 200+ team members. Responsible for all customer-facing components and merchant tools during this scaling phase. Key expertise includes scaling design systems across growing teams, balancing user experience with aggressive business growth targets, building product development processes that maintain quality at scale, and creating advertising products that respect user experience while driving monetization.",
      discussPrompt: "Dive into scaling strategies, team building approaches, or the specific challenges of growing products from startup to enterprise scale.",
      tags: ["$250M Growth", "Team Scaling", "Product Strategy"],
      icon: <TrendingUp className="h-8 w-8" />,
      content: (
        <div className="space-y-3">
          <p className="text-gray-700">
            Scaling a product isn't just about handling more users—it's about evolving processes, systems, 
            and team structures while maintaining the quality and vision that made the product successful initially.
          </p>
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
            <p className="text-sm text-purple-800 font-medium">Amazon ProductAds Achievement</p>
            <p className="text-sm text-purple-700">
              Scaled from &lt;20 people ($0 revenue) to 200+ people ($250M annually) - foundation for $1B+ program
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="expertise" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focused on the intersection of AI, UX, and financial services where conversational interfaces 
            transform how users interact with complex data. Click any area to start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => (
            <ConversationalCard
              key={index}
              title={area.title}
              description={area.description}
              category={area.category}
              chatContext={area.chatContext}
              discussPrompt={area.discussPrompt}
              tags={area.tags}
              onDiscuss={triggerChat}
              content={area.content}
              className="h-full"
            />
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ready to explore these concepts further?
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Every card above can spark a detailed conversation about implementation strategies, 
              methodologies, or how these approaches might apply to your specific situation.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
              <MessageSquare className="w-4 h-4" />
              <span>Click "Discuss This Topic" on any card to begin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 