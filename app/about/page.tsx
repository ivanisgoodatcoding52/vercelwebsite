import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Send, Download, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const experience = [
    {
      company: "TechCorp Inc.",
      position: "Senior Full-Stack Developer",
      period: "2022 - Present",
      description:
        "Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and architected scalable solutions.",
      color: "bg-blue-600",
    },
    {
      company: "StartupXYZ",
      position: "Mobile Developer",
      period: "2020 - 2022",
      description:
        "Built cross-platform mobile apps with React Native. Collaborated with design team to create intuitive user experiences.",
      color: "bg-green-600",
    },
    {
      company: "Freelance",
      position: "Full-Stack Developer",
      period: "2018 - 2020",
      description:
        "Developed custom web solutions for small businesses. Specialized in e-commerce platforms and content management systems.",
      color: "bg-purple-600",
    },
  ]

  const achievements = [
    { title: "AWS Certified Developer", year: "2023", color: "bg-orange-600" },
    { title: "React Native Expert Certification", year: "2022", color: "bg-blue-600" },
    { title: "Google Developer Expert", year: "2021", color: "bg-green-600" },
    { title: "Computer Science Degree", year: "2018", color: "bg-purple-600" },
  ]

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center relative"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      {/* TV Static Background */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcngwaDI0enZpY2pwb3RhNGhhMjZsajd5bzcwYnBncG8zcnFmdHc2ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QuPrp3BI6cMe2lErCb/giphy.gif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Logo */}
      <div className="z-10 mt-8 mb-6">
        <img src="/logo.png" alt="Logo" className="w-16 h-16" />
      </div>

      {/* Navigation */}
      <div className="z-10 flex gap-8 text-xl mb-12">
        <Link href="/" className="text-white hover:text-orange-400 transition-colors duration-300">
          Home
        </Link>
        <Link href="/projects" className="text-white hover:text-orange-400 transition-colors duration-300">
          Projects
        </Link>
        <Link href="/blog" className="text-white hover:text-orange-400 transition-colors duration-300">
          Blog
        </Link>
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-4xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-400 text-lg">
            Passionate developer with 6+ years of experience creating digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Bio */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Tile */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-orange-600 text-white flex items-center justify-center text-3xl font-bold rounded-lg">
                  IV
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">Ivan</h2>
                  <p className="text-xl text-gray-400 mb-4">Full-Stack Developer</p>
                  <p className="text-gray-300 leading-relaxed">
                    Passionate about creating digital solutions that make a difference. Specializing in modern web
                    technologies, mobile app development, and building scalable backend systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I started my journey in software development over 6 years ago with a simple goal: to create
                  applications that solve real-world problems and improve people's lives. What began as curiosity about
                  how websites work has evolved into a passion for building comprehensive digital solutions.
                </p>
                <p>
                  Throughout my career, I've had the opportunity to work with startups, established companies, and as a
                  freelancer. This diverse experience has taught me the importance of understanding business needs, user
                  experience, and technical excellence.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge through technical writing and mentoring other developers.
                </p>
              </div>
              <button className="mt-6 bg-orange-600 text-white px-6 py-3 hover:bg-orange-700 transition-colors rounded-lg flex items-center space-x-2 font-medium">
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column - Contact & Achievements */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">NAME</label>
                  <Input
                    type="text"
                    className="w-full bg-gray-700 border-2 border-gray-600 focus:border-orange-500 focus:ring-0 text-white"
                    placeholder="Your full name"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">EMAIL</label>
                  <Input
                    type="email"
                    className="w-full bg-gray-700 border-2 border-gray-600 focus:border-orange-500 focus:ring-0 text-white"
                    placeholder="your.email@example.com"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">PROJECT TYPE</label>
                  <select
                    className="w-full bg-gray-700 border-2 border-gray-600 focus:border-orange-500 focus:ring-0 p-3 text-white rounded-lg"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>Game Development</option>
                    <option>Full-Stack Project</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">MESSAGE</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-700 border-2 border-gray-600 focus:border-orange-500 focus:ring-0 p-3 text-white resize-none rounded-lg"
                    placeholder="Tell me about your project..."
                    style={{ fontFamily: "Arial, sans-serif" }}
                  />
                </div>
                <button className="w-full bg-orange-600 text-white py-3 px-4 hover:bg-orange-700 transition-colors rounded-lg flex items-center justify-center space-x-2 font-medium">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info Tiles */}
            <div className="space-y-4">
              <div className="bg-orange-600 text-white p-4 rounded-lg flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">EMAIL</p>
                  <p>ivan@example.com</p>
                </div>
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">PHONE</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="bg-purple-600 text-white p-4 rounded-lg flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="text-sm opacity-90">LOCATION</p>
                  <p>Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold mb-4">Quick Facts</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span>6+ years</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects Completed</span>
                  <span>50+</span>
                </div>
                <div className="flex justify-between">
                  <span>GitHub Stars</span>
                  <span>1000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Coffee Consumed</span>
                  <span>∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-orange-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss your ideas and create something amazing together</p>
          <Link
            href="/projects"
            className="bg-white text-orange-600 px-8 py-4 hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 text-lg font-medium rounded-lg"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
