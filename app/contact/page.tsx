import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 relative overflow-hidden">
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 bg-gradient-to-b from-blue-500 to-blue-600 border-b border-blue-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-white font-bold text-xl drop-shadow-sm">Contact Us</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 drop-shadow-sm">Get In Touch</h2>
          <p className="text-lg text-gray-700 drop-shadow-sm">
            Ready to start your next mobile app project? Let's talk!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-lg rounded-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input
                    type="text"
                    className="w-full bg-white border-2 border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    className="w-full bg-white border-2 border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full bg-white border-2 border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all p-3">
                    <option>iOS App Development</option>
                    <option>Android App Development</option>
                    <option>Cross-Platform App</option>
                    <option>AI Integration</option>
                    <option>Database Setup</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border-2 border-gray-300 rounded-lg shadow-inner focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all p-3 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button className="w-full bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg border border-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <Card className="bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-lg rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl shadow-lg border border-blue-700 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email Us</h4>
                    <p className="text-gray-600">hello@devstudio.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-lg rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded-xl shadow-lg border border-green-700 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-lg rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-b from-purple-400 to-purple-600 rounded-xl shadow-lg border border-purple-700 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Visit Us</h4>
                    <p className="text-gray-600">
                      123 Developer Street
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-lg rounded-xl overflow-hidden">
              <div className="p-6">
                <h4 className="font-bold text-gray-800 mb-4">Why Choose DevStudio?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Expert iOS & Android development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>AI-powered development tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Integrated database solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>24/7 support & maintenance</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
