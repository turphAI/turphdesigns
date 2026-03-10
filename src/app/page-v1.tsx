import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ChatInterface from "@/components/chat-interface"
import { ExpertiseCards } from "@/components/expertise-cards"
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Brain,
  BarChart3,
  Zap,
  Star,
  Building2,
  Target
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <div className="flex-1 lg:mr-96 xl:mr-[28rem]">
        {/* Header */}
        <header className="border-b bg-white/90 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TD</span>
                </div>
                <span className="text-xl font-bold text-gray-900">TurphDesigns</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#expertise" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Expertise</a>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Experience</a>
                <a href="#approach" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Approach</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</a>
              </nav>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Badge variant="outline" className="mb-6 border-gray-300 text-gray-700 bg-gray-50">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                AI-UX Leadership for Financial Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Conversational AI
                <br />
                <span className="text-gray-600">for Financial Innovation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Director of UX Design specializing in conversational AI interfaces that transform how users interact with complex financial data. 
                Proven experience scaling products from concept to $250M+ revenue at Amazon and Fidelity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Interface Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">AI</span>
                </div>
                <span className="font-semibold text-gray-900">Strategic AI Assistant</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Ready for consultation</span>
              </div>
              <div className="p-6">
                <div className="bg-gray-50 border border-gray-200 border-l-4 border-l-blue-500 rounded-lg p-4 mb-4">
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Ask me about:</span> Conversational AI implementation strategies, 
                    regulatory considerations for financial services, or methodologies for scaling AI-UX products from concept to $250M+ revenue.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button className="border-blue-500 text-blue-600 hover:bg-blue-50" variant="outline">
                    Start Discussion
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    View Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <ExpertiseCards />

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge variant="outline" className="mb-4 border-gray-300 text-gray-700 bg-gray-50">
                  Proven Track Record
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  From Startup Ideas to $250M Revenue
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Director of UX Design specializing in individual contributor roles within advanced digital experiences groups, 
                  focusing on the cutting edge of conversational AI and financial technology.
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Amazon - ProductAds</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      Sole UX Designer for Amazon&apos;s advertising program, responsible for all customer-facing components 
                      and merchant tools. Scaled the team from &lt;20 people with no revenue to 200+ people generating $250M annually.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">$0 → $250M Revenue</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">20 → 200 Team Members</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">Foundation for $1B+ Program</Badge>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fidelity Investments</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      Leading UX in Personal Investing, focusing on Transactions (money movement and account opening) 
                      and Fidelity Assistant. Working on advanced digital experiences with AI-powered interfaces.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">Regulated Environment</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">AI-Powered Interfaces</Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">Complex Financial Data</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Conversational AI Vision</h3>
                <blockquote className="text-gray-600 mb-6 italic border-l-4 border-gray-300 pl-4 leading-relaxed">
                  &quot;I&apos;m passionate about pioneering the shift toward conversational AI interfaces, which I believe represent 
                  as fundamental a transformation as the move from command-line to graphical interfaces. Rather than constraining 
                  users with rigid information architecture, I envision intuitive systems that adapt to users&apos; natural thought processes.&quot;
                </blockquote>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Discuss Your AI Strategy
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The TurphDesigns Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A unique methodology that combines deep financial services expertise with cutting-edge AI interface design, 
                focused on making complex data truly accessible to end users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "AI-First Design Philosophy",
                  description: "Moving beyond traditional interface patterns to create experiences that adapt to user intent through natural conversation.",
                  category: "Methodology"
                },
                {
                  icon: <BarChart3 className="h-6 w-6" />,
                  title: "Data-Driven Decision Making", 
                  description: "Leveraging comprehensive user data and behavioral insights to optimize conversational AI effectiveness.",
                  category: "Strategy"
                },
                {
                  icon: <Building2 className="h-6 w-6" />,
                  title: "Regulatory-Aware Innovation",
                  description: "Balancing cutting-edge AI capabilities with the security, privacy, and compliance requirements of financial services.",
                  category: "Expertise"
                }
              ].map((approach, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow duration-200 border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 mx-auto mb-4">
                      {approach.icon}
                    </div>
                    <CardTitle className="text-lg mb-2">{approach.title}</CardTitle>
                    <CardDescription className="text-gray-600">{approach.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-700 bg-gray-50">
                      {approach.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Conversational AI Matters for Finance
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <span><span className="font-semibold text-gray-900">Democratizes Data Access:</span> Makes complex financial information accessible to users regardless of their technical expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <span><span className="font-semibold text-gray-900">Reduces Cognitive Load:</span> Eliminates the need for users to navigate complex information architectures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <span><span className="font-semibold text-gray-900">Enables Personalization:</span> Adapts to individual financial situations and learning preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <span><span className="font-semibold text-gray-900">Builds Trust:</span> Creates transparent, explainable interactions in regulated environments</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full border border-gray-200 mb-4">
                    <MessageSquare className="h-12 w-12 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    &quot;The interface becomes a dynamic conversation rather than a static presentation&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Financial UX?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss how conversational AI can revolutionize your users&apos; experience with complex financial data.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Start a Conversation About Your Project
              </h3>
              <p className="mb-6 text-gray-600">
                Whether you&apos;re looking to scale an existing product, implement conversational AI, or transform your financial data experience, 
                let&apos;s explore how my expertise can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Try the AI assistant below
                </Badge>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-300">
                  Direct consultation available
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">TD</span>
                  </div>
                  <span className="text-xl font-bold">TurphDesigns</span>
                </div>
                <p className="text-gray-400">
                  AI-First UX Leadership for Financial Innovation
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Expertise</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Conversational AI Interfaces</li>
                  <li>Financial Services UX</li>
                  <li>Product Scaling</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Experience</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Amazon ProductAds</li>
                  <li>Fidelity Investments</li>
                  <li>$250M Revenue Growth</li>
                  <li>Team Leadership</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>AI Assistant Below</li>
                  <li>LinkedIn Profile</li>
                  <li>Case Studies</li>
                  <li>Speaking Opportunities</li>
                </ul>
              </div>
            </div>
            <Separator className="my-8 bg-gray-800" />
            <div className="text-center text-gray-400">
              <p>&copy; 2024 TurphDesigns. Pioneering the future of conversational financial interfaces.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Right Rail Chat Interface */}
      <div className="hidden lg:block fixed top-0 right-0 lg:w-96 xl:w-[28rem] h-full bg-white border-l border-gray-200 shadow-lg z-40">
        <ChatInterface />
      </div>

      {/* Mobile Chat Button */}
      <Button 
        className="lg:hidden fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 bg-gray-900 hover:bg-gray-800"
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  )
}
