"use client"

import Link from "next/link"
import { useState } from "react"
import { ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const [openProjects, setOpenProjects] = useState<number[]>([])

  const projects = [
    {
      title: "LauncherX",
      description:
        "LauncherX is a fork of a Roblox Revival called Project Mega. It basically turns all of the clients into one launcher that you can use to play any version you want! I'll also have a way to configure the clients to run on localhost, basically turning Roblox into a singleplayer client.",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["C#", "WPF", ".NET"],
      status: "In Development",
    },
    {
      title: "Infiniality",
      description:
        "You wake up one day to the jingle of a large department store. This is SCP-3008-1, and as soon as you realize this, you have no escape from this store. How long can you survive? Made in Unity 2022.3",
      tech: ["Unity", "C#", "3D Modeling"],
      status: "Completed",
    },
    {
      title: "Deluge",
      description:
        "Deluge is a platformer game mostly inspired by the Roblox game 'Flood Escape 2'. You escape floods made out of different fluids, push buttons, and survive. Made in Unity 2022.3",
      tech: ["Unity", "C#", "Game Design"],
      status: "Completed",
    },
    {
      title: "ObscureYT",
      description:
        "A website that is dedicated to finding old youtube videos! There is even a Tags section so that you can specify which videos you want to see! We also made another one that pulls Roblox Videos as well.",
      links: [
        { name: "ObscureYT", url: "https://ivanisgoodatcoding52.github.io/ivanisgood52.github.io/rerwe.html" },
        { name: "RobloxYT", url: "https://ivanisgoodatcoding52.github.io/ivanisgood52.github.io/RobloxYT.html" },
      ],
      tech: ["HTML", "CSS", "JavaScript", "YouTube API"],
      status: "Live",
    },
    {
      title: "Compress'd",
      description:
        "A video compressor for discord! Perfect for when your videos are too large to upload directly to Discord servers.",
      links: [
        {
          name: "Video Bypasser",
          url: "https://ivanisgoodatcoding52.github.io/ivanisgood52.github.io/videobypasswe.html",
        },
      ],
      tech: ["JavaScript", "FFmpeg", "Web APIs"],
      status: "Live",
    },
  ]

  const toggleProject = (index: number) => {
    setOpenProjects((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

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

      {/* Projects Container */}
      <div className="z-10 w-full max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleProject(index)}
                className="w-full p-6 text-left bg-gray-700 hover:bg-gray-600 transition-colors duration-300 border-b border-gray-600"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">{project.title}</h3>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === "Live"
                          ? "bg-green-600"
                          : project.status === "Completed"
                            ? "bg-blue-600"
                            : "bg-yellow-600"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-2xl">{openProjects.includes(index) ? "−" : "+"}</span>
                  </div>
                </div>
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openProjects.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-gray-800 text-gray-300">
                  <p className="mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-white mb-2">TECHNOLOGIES:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {project.links && (
                    <div className="space-y-2">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Project Image */}
                  {project.image && (
                    <div className="mt-4 text-center">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} mockup`}
                        className="w-64 mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="z-10 mt-16 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl px-4">
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
          <div className="text-gray-300 text-sm">Active Projects</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400 mb-2">7</div>
          <div className="text-gray-300 text-sm">Languages</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
          <div className="text-gray-300 text-sm">Years Coding</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
          <div className="text-gray-300 text-sm">Ideas</div>
        </div>
      </div>
    </div>
  )
}
