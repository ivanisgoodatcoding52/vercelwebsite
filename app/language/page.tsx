"use client"

import Link from "next/link"
import { useState } from "react"

export default function LanguagesPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const timelineData = [
    {
      year: "2018",
      description:
        "Scratch: Practically every single kid's first coding language, used to be the blueprint for bigger projects.",
    },
    {
      year: "2019",
      description: "Scratch & Python: More of the last one, barely used Python at all.",
    },
    {
      year: "2020",
      description: "Python & HTML: Slightly more advanced Python scripts, started to make basic webpages",
    },
    {
      year: "2021",
      description:
        "HTML, CSS, JS, Python, C++: First 3 are key details in my future website making journey, Python as a more algorithmic approach, and C++ for simple efficiency",
    },
    {
      year: "2022",
      description: "Python and Ruby: the backend duo for websites",
    },
    {
      year: "2023",
      description:
        "C#, Java, Python: C# for unity games, Java for simple applications, and Python for AI enhancement, etc.",
    },
    {
      year: "2024",
      description: "Python, C, .net: Python for more AI enhancement, C and .net for advanced application programming.",
    },
  ]

  const toggleDescription = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
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

      {/* Timeline */}
      <div className="z-10 flex flex-col items-center w-full max-w-6xl px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Languages I Know</h1>

        <div className="flex flex-wrap justify-center items-start gap-8 max-w-5xl">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <button
                onClick={() => toggleDescription(index)}
                className="bg-gray-700 hover:bg-gray-600 hover:scale-110 transition-all duration-200 px-6 py-4 rounded-lg text-white font-bold text-xl shadow-lg min-w-[100px] cursor-pointer"
              >
                {item.year}
              </button>

              <div
                className={`mt-4 bg-gray-800 rounded-lg shadow-lg w-64 text-center transition-all duration-500 overflow-hidden ${
                  openItems.includes(index) ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
