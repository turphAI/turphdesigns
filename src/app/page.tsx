import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ChatInterface from "@/components/chat-interface"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex">
      {/* Main Content */}
      <div className="flex-1 lg:mr-96 xl:mr-[28rem]">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TD</span>
                </div>
                <span className="text-xl font-bold text-gray-900">TurphDesigns</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#expertise" className="text-gray-600 hover:text-gray-900 transition-colors">Expertise</a>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
                <a href="#approach" className="text-gray-600 hover:text-gray-900 transition-colors">Approach</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              </nav>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Badge variant="outline" className="mb-4">
                🤖 Pioneering Conversational AI for Financial Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-First UX Leadership for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Financial Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Specialized UX Director with proven experience scaling financial products from concept to $250M+ revenue. 
                Leading the transformation from traditional interfaces to conversational AI experiences that make complex financial data accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Focused on the intersection of AI, UX, and financial services where conversational interfaces transform how users interact with complex data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="h-8 w-8" />,
                  title: "Conversational AI Interfaces",
                  description: "Pioneering the shift from traditional UIs to natural language interactions that adapt to users' thought processes.",
                  features: ["Natural Language Understanding", "Context-Aware Dialogues", "Dynamic Data Visualization"]
                },
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Financial Services UX",
                  description: "Deep expertise in regulated environments with proven success at Amazon and Fidelity Investments.",
                  features: ["Regulatory Compliance", "Financial Data Complexity", "Trust & Security Design"]
                },
                {
                  icon: <Brain className="h-8 w-8" />,
                  title: "Structured Data Visualization",
                  description: "Making complex financial information accessible through intelligent, context-aware presentation.",
                  features: ["Smart Data Selection", "Narrative Visualization", "Progressive Disclosure"]
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Product Scaling Leadership",
                  description: "Proven track record scaling digital products from early concepts to massive revenue streams.",
                  features: ["0-to-$250M Product Growth", "Team Leadership", "Strategic Vision"]
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "AI-Powered Personalization",
                  description: "Creating adaptive financial experiences that learn and evolve with user needs and behaviors.",
                  features: ["Individual Financial Journeys", "Learning Systems", "Behavioral Adaptation"]
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Innovation Strategy",
                  description: "Leading teams through the transformation to AI-first experiences while maintaining business value.",
                  features: ["Change Management", "Technology Integration", "Future-Ready Architectures"]
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  Proven Track Record
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  From Startup Ideas to $250M Revenue
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  As Director of UX Design, I specialize in individual contributor roles within advanced digital experiences groups, 
                  focusing on the cutting edge of conversational AI and financial technology.
                </p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Amazon - ProductAds</h3>
                    <p className="text-gray-600 mb-3">
                      Sole UX Designer for Amazon&apos;s advertising program, responsible for all customer-facing components 
                      and merchant tools. Scaled the team from &lt;20 people with no revenue to 200+ people generating $250M annually.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">$0 → $250M Revenue</Badge>
                      <Badge variant="secondary">20 → 200 Team Members</Badge>
                      <Badge variant="secondary">Foundation for $1B+ Program</Badge>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fidelity Investments</h3>
                    <p className="text-gray-600 mb-3">
                      Leading UX in Personal Investing, focusing on Transactions (money movement and account opening) 
                      and Fidelity Assistant. Working on advanced digital experiences with AI-powered interfaces.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Regulated Environment</Badge>
                      <Badge variant="secondary">AI-Powered Interfaces</Badge>
                      <Badge variant="secondary">Complex Financial Data</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Conversational AI Vision</h3>
                <blockquote className="text-gray-600 mb-6 italic border-l-4 border-blue-200 pl-4">
                  &quot;I&apos;m passionate about pioneering the shift toward conversational AI interfaces, which I believe represent 
                  as fundamental a transformation as the move from command-line to graphical interfaces. Rather than constraining 
                  users with rigid information architecture, I envision intuitive systems that adapt to users&apos; natural thought processes.&quot;
                </blockquote>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Discuss Your AI Strategy
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The TurphDesigns Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A unique methodology that combines deep financial services expertise with cutting-edge AI interface design, 
                focused on making complex data truly accessible to end users.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "AI-First Design Philosophy",
                  description: "Moving beyond traditional interface patterns to create experiences that adapt to user intent through natural conversation.",
                  highlights: ["User-Centered AI", "Natural Language Priority", "Context-Aware Interactions"]
                },
                {
                  icon: <BarChart3 className="h-8 w-8" />,
                  title: "Data-Driven Decision Making", 
                  description: "Leveraging comprehensive user data and behavioral insights to optimize conversational AI effectiveness.",
                  highlights: ["Experience Metrics", "User Behavior Analysis", "Continuous Optimization"]
                },
                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Regulatory-Aware Innovation",
                  description: "Balancing cutting-edge AI capabilities with the security, privacy, and compliance requirements of financial services.",
                  highlights: ["Compliance by Design", "Security First", "Trust & Transparency"]
                }
              ].map((approach, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                      {approach.icon}
                    </div>
                    <CardTitle className="text-xl mb-2">{approach.title}</CardTitle>
                    <CardDescription>{approach.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {approach.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Conversational AI Matters for Finance
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span><strong>Democratizes Data Access:</strong> Makes complex financial information accessible to users regardless of their technical expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span><strong>Reduces Cognitive Load:</strong> Eliminates the need for users to navigate complex information architectures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span><strong>Enables Personalization:</strong> Adapts to individual financial situations and learning preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span><strong>Builds Trust:</strong> Creates transparent, explainable interactions in regulated environments</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-lg mb-4">
                    <MessageSquare className="h-16 w-16 text-blue-600" />
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
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Financial UX?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let&apos;s discuss how conversational AI can revolutionize your users&apos; experience with complex financial data.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Start a Conversation About Your Project
              </h3>
              <p className="mb-6">
                Whether you&apos;re looking to scale an existing product, implement conversational AI, or transform your financial data experience, 
                let&apos;s explore how my expertise can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  💬 Try the AI assistant below
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  📧 Direct consultation available
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
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TD</span>
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
        className="lg:hidden fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  )
}
