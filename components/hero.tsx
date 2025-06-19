"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-teal-300">Shivam</span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-blue-100">
          A First-Year Engineering Student
        </h2>
        <p className="text-lg sm:text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Aspiring developer passionate about building impactful projects and learning modern technologies. Ready to
          tackle challenges and create innovative solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-medium transition-all duration-300"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  )
}
