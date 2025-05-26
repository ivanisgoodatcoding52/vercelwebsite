"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building LauncherX: A Roblox Revival Journey",
      excerpt:
        "Deep dive into creating a unified launcher for multiple Roblox client versions, including the challenges of reverse engineering and UI design.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["C#", "Reverse Engineering", "Game Development"],
      featured: true,
    },
    {
      title: "From Scratch to C#: My Programming Evolution",
      excerpt:
        "Reflecting on my 6-year journey from visual programming in Scratch to building complex applications in C# and .NET.",
      date: "2024-01-10",
      readTime: "5 min read",
      tags: ["Career", "Learning", "Programming Languages"],
    },
    {
      title: "Unity Game Development: Lessons from Infiniality",
      excerpt:
        "What I learned building an SCP-3008 inspired survival game in Unity, from 3D modeling to game mechanics.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["Unity", "Game Development", "3D Modeling"],
    },
    {
      title: "Web Scraping YouTube: Building ObscureYT",
      excerpt:
        "Technical breakdown of creating a web app to discover old YouTube videos using APIs and web scraping techniques.",
      date: "2023-12-20",
      readTime: "7 min read",
      tags: ["JavaScript", "Web Scraping", "APIs"],
    },
    {
      title: "The Art of Video Compression for Discord",
      excerpt: "How I built Compress'd to solve Discord's file size limitations using FFmpeg and web technologies.",
      date: "2023-12-15",
      readTime: "4 min read",
      tags: ["FFmpeg", "Web Development", "Optimization"],
    },
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

      {/* Blog Content */}
      <div className="z-10 w-full max-w-4xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Developer Blog</h1>
          <p className="text-gray-400 text-lg">Thoughts, tutorials, and insights from my coding journey</p>
        </div>

        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-900 to-red-900 rounded-lg p-8 mb-12 border border-orange-600"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">FEATURED</span>
                <div className="flex items-center gap-4 text-gray-300 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-white">{post.title}</h2>
              <p className="text-gray-200 mb-6 leading-relaxed">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-black bg-opacity-50 px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-orange-300 hover:text-orange-200 transition-colors duration-300 font-medium">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}

        {/* Regular Posts */}
        <div className="grid gap-6">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 mb-8 bg-gray-800 rounded-lg p-8 border border-gray-700 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Get notified when I publish new posts about development, gaming, and tech.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500"
              style={{ fontFamily: "Arial, sans-serif" }}
            />
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-lg font-medium transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
