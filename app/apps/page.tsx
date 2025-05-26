import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Star, Download, Eye } from "lucide-react"

export default function AppsPage() {
  const apps = [
    {
      name: "TaskMaster Pro",
      description: "AI-powered task management with smart scheduling",
      platform: "iOS & Android",
      downloads: "50K+",
      rating: 4.8,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "WeatherWise",
      description: "Intelligent weather forecasting with location-based alerts",
      platform: "iOS & Android",
      downloads: "25K+",
      rating: 4.6,
      color: "from-green-400 to-green-600",
    },
    {
      name: "FitTracker Elite",
      description: "Comprehensive fitness tracking with AI coaching",
      platform: "iOS & Android",
      downloads: "75K+",
      rating: 4.9,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "BudgetBuddy",
      description: "Smart financial management with spending insights",
      platform: "iOS & Android",
      downloads: "30K+",
      rating: 4.7,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "StudySync",
      description: "Collaborative learning platform with AI tutoring",
      platform: "iOS & Android",
      downloads: "40K+",
      rating: 4.5,
      color: "from-red-400 to-red-600",
    },
    {
      name: "PhotoMagic",
      description: "AI-enhanced photo editing with one-click filters",
      platform: "iOS & Android",
      downloads: "100K+",
      rating: 4.8,
      color: "from-pink-400 to-pink-600",
    },
  ]

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
            <h1 className="text-white font-bold text-xl drop-shadow-sm">Our Apps</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      {/* Apps Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 drop-shadow-sm">Featured Applications</h2>
          <p className="text-lg text-gray-700 drop-shadow-sm">
            Discover our portfolio of successful mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform"
            >
              <div className="p-6">
                {/* App Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-b ${app.color} rounded-2xl shadow-lg border border-gray-400 flex items-center justify-center mb-4`}
                >
                  <div className="w-8 h-8 bg-white bg-opacity-30 rounded-lg"></div>
                </div>

                {/* App Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{app.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{app.description}</p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{app.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{app.downloads}</span>
                  </div>
                </div>

                {/* Platform Badge */}
                <div className="inline-block bg-gradient-to-r from-gray-200 to-gray-300 px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-400 shadow-inner mb-4">
                  {app.platform}
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg border border-blue-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-lg rounded-xl overflow-hidden max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Build Your App?</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of developers who trust our platform for their mobile app development needs.
              </p>
              <button className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg border border-green-700 transition-all duration-200 transform hover:scale-105">
                Start Building Today
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
