'use client'

import { ConversationalCard, cardPresets, createPresetCard } from '@/components/conversational-card'
import { useChatIntegrationWithPreset } from '@/hooks/use-chat-integration'
import ChatInterface from '@/components/chat-interface'

export default function CardsDemo() {
  // Set up chat integration with business-focused preset
  const { triggerChat } = useChatIntegrationWithPreset('business', {
    onChatTriggered: (cardTitle, context) => {
      console.log('🎯 Chat triggered:', { cardTitle, context })
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex">
      {/* Main Content */}
      <div className="flex-1 lg:mr-96 xl:mr-[28rem]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conversational Cards Demo
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the future of content discovery. Each card below transforms into a conversation starter, 
              allowing natural language exploration of expertise and insights.
            </p>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>💡 Try it:</strong> Click the "Discuss This Topic" button on any card to start a contextual conversation
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Amazon Experience Card */}
            <ConversationalCard
              {...createPresetCard('amazonExperience')}
              onDiscuss={triggerChat}
              content={
                <div className="space-y-3">
                  <p className="text-gray-700">
                    From a small team with ambitious goals to a quarter-billion dollar revenue engine. 
                    This journey involved navigating complex technical challenges, building scalable design systems, 
                    and balancing user experience with business monetization.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 font-medium">Key Achievement</p>
                    <p className="text-sm text-blue-700">
                      Foundation work that enabled Amazon's advertising program to grow beyond $1B annually
                    </p>
                  </div>
                </div>
              }
            />

            {/* AI-UX Vision Card */}
            <ConversationalCard
              {...createPresetCard('aiUxVision')}
              onDiscuss={triggerChat}
              content={
                <div className="space-y-3">
                  <p className="text-gray-700">
                    We're witnessing a fundamental transformation in how users interact with complex systems. 
                    The rigid navigation patterns of today will give way to adaptive, conversational experiences 
                    that understand context and intent.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                    <p className="text-sm text-purple-800 font-medium">Industry Impact</p>
                    <p className="text-sm text-purple-700">
                      Financial institutions that embrace this shift early will gain significant competitive advantages
                    </p>
                  </div>
                </div>
              }
            />

            {/* Regulatory Framework Card */}
            <ConversationalCard
              {...createPresetCard('regulatoryMethodology')}
              onDiscuss={triggerChat}
              content={
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Innovation in financial services requires careful balance between user experience improvements 
                    and regulatory compliance. This framework provides a systematic approach to implementing 
                    AI-powered interfaces while maintaining trust and transparency.
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <p className="text-sm text-green-800 font-medium">Framework Components</p>
                    <p className="text-sm text-green-700">
                      Audit trails, explainable AI, user protection protocols, and compliance validation processes
                    </p>
                  </div>
                </div>
              }
            />

            {/* Speaking Engagement Card */}
            <ConversationalCard
              {...createPresetCard('speakingEngagement')}
              onDiscuss={triggerChat}
              content={
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Share insights from scaling Amazon ProductAds and implementing AI-powered interfaces at Fidelity. 
                    Topics include strategic transformation, team building, regulatory considerations, and the future 
                    of conversational AI in finance.
                  </p>
                  <div className="bg-pink-50 p-3 rounded-lg border border-pink-100">
                    <p className="text-sm text-pink-800 font-medium">Popular Topics</p>
                    <p className="text-sm text-pink-700">
                      Scaling product teams, AI-UX implementation strategies, regulatory-aware innovation
                    </p>
                  </div>
                </div>
              }
            />

          </div>

          {/* How It Works Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">How Conversational Discovery Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Browse Content</h3>
                <p className="text-sm text-gray-600">
                  Explore expertise areas through visually engaging cards with rich context and insights
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-semibold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start Conversation</h3>
                <p className="text-sm text-gray-600">
                  Click any card to begin a contextual discussion about that specific topic or expertise area
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-semibold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Natural Discovery</h3>
                <p className="text-sm text-gray-600">
                  Explore information in your own way through natural language, asking follow-up questions as needed
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 text-center">
                <strong>💡 Revolutionary Approach:</strong> Instead of forcing visitors through predefined content paths, 
                this system adapts to how people naturally want to learn and explore expertise.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Chat Interface */}
      <div className="fixed right-0 top-0 bottom-0 w-96 xl:w-[28rem] bg-white border-l border-gray-200 shadow-lg lg:block hidden">
        <ChatInterface />
      </div>
    </div>
  )
} 