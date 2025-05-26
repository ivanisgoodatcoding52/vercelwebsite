import Link from "next/link"
import { Github, Youtube, Twitter } from "lucide-react"

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden font-arial"
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
      <div className="z-10 mb-8">
        <img src="/logo.png" alt="Logo" className="w-24 h-24" />
      </div>

      {/* Social Links */}
      <div className="z-10 flex gap-6 mb-8">
        <a
          href="https://x.com/unnameduserplus"
          className="group relative flex items-center gap-2 text-white hover:text-orange-400 transition-colors duration-300"
        >
          <Twitter className="w-8 h-8" />
          <span
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-2000"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Twitter
          </span>
        </a>

        <a
          href="https://www.youtube.com/@ivanisdeveloper-hs9ez"
          className="group relative flex items-center gap-2 text-white hover:text-orange-400 transition-colors duration-300"
        >
          <Youtube className="w-8 h-8" />
          <span
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-2000"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            YouTube
          </span>
        </a>

        <a
          href="https://github.com/ivanisgoodatcoding52"
          className="group relative flex items-center gap-2 text-white hover:text-orange-400 transition-colors duration-300"
        >
          <Github className="w-8 h-8" />
          <span
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-2000"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            GitHub
          </span>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="absolute bottom-8 z-10 flex gap-8 text-xl" style={{ fontFamily: "Arial, sans-serif" }}>
        <Link href="/blog" className="text-white hover:text-orange-400 transition-colors duration-300">
          Blog
        </Link>
        <Link href="/projects" className="text-white hover:text-orange-400 transition-colors duration-300">
          Projects
        </Link>
        <Link href="/languages" className="text-white hover:text-orange-400 transition-colors duration-300">
          Languages
        </Link>
        <Link href="/about" className="text-white hover:text-orange-400 transition-colors duration-300">
          About
        </Link>
      </div>
    </div>
  )
}
