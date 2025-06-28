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
  Settings, 
  Lightbulb,
  BarChart3,
  Zap,
  Star
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
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
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              🚀 Transforming Business Through Technology
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Modern Consulting for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}Digital Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We help businesses navigate digital transformation, optimize operations, and unlock growth through strategic technology implementation and innovative thinking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive consulting services designed to drive meaningful business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Digital Transformation",
                description: "Strategic roadmaps for modernizing your business processes and technology stack.",
                features: ["Process Optimization", "Technology Integration", "Change Management"]
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: "Technology Implementation",
                description: "End-to-end implementation of cutting-edge solutions tailored to your needs.",
                features: ["Custom Development", "System Integration", "Performance Optimization"]
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation Strategy",
                description: "Identify opportunities for innovation and competitive advantage in your market.",
                features: ["Market Analysis", "Product Strategy", "Innovation Frameworks"]
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "User Experience Design",
                description: "Create exceptional user experiences that drive engagement and satisfaction.",
                features: ["UX Research", "Design Systems", "Usability Testing"]
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Data Analytics",
                description: "Transform your data into actionable insights for better decision-making.",
                features: ["Data Strategy", "Analytics Implementation", "Reporting Dashboards"]
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Performance Optimization",
                description: "Maximize efficiency and performance across all business operations.",
                features: ["Process Improvement", "Cost Optimization", "Scalability Planning"]
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                About TurphDesigns
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Driving Innovation Through Strategic Consulting
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in digital transformation and technology consulting, 
                we've helped businesses of all sizes achieve their goals through innovative 
                solutions and strategic thinking.
              </p>
              <div className="space-y-4">
                {[
                  "Proven track record of successful transformations",
                  "Deep expertise across multiple industries",
                  "Collaborative approach with measurable outcomes",
                  "Cutting-edge technology solutions"
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Transform?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can help your business thrive in the digital age. 
                Use our AI assistant to get started or schedule a consultation.
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Start Your Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your business? Get in touch with our team of experts.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Chat with Our AI Assistant
            </h3>
            <p className="mb-6">
              Get instant answers about our services, discuss your challenges, 
              or schedule a consultation. Our AI assistant is here to help 24/7.
            </p>
            <Badge variant="secondary" className="bg-white/20 text-white">
              💬 Click the chat button to get started
            </Badge>
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
                Modern consulting for digital excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Transformation</li>
                <li>Technology Implementation</li>
                <li>Innovation Strategy</li>
                <li>UX Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@turphdesigns.com</li>
                <li>Schedule Consultation</li>
                <li>Chat with AI</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 TurphDesigns. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Interface */}
      <ChatInterface />
    </div>
  )
}
