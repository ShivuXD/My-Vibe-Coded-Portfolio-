import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Personal Finance Tracker",
    description:
      "A Python application that helps users track their expenses and visualize spending patterns with interactive charts.",
    technologies: ["Python", "Matplotlib", "Pandas", "Tkinter"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Student Grade Calculator",
    description:
      "A web-based calculator that helps students compute their GPA and track academic progress throughout the semester.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that displays current conditions and forecasts using real-time API data.",
    technologies: ["JavaScript", "API Integration", "CSS Grid", "Responsive Design"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management System",
    description:
      "A command-line task manager built in C that allows users to add, delete, and organize their daily tasks efficiently.",
    technologies: ["C", "File I/O", "Data Structures", "Memory Management"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "University Course Planner",
    description:
      "A planning tool that helps students organize their course schedule and track degree requirements and prerequisites.",
    technologies: ["Python", "SQLite", "GUI Development", "Database Design"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Simple E-commerce Site",
    description:
      "A basic e-commerce website template with product listings, shopping cart functionality, and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
    github: "#",
    demo: "#",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A showcase of my recent work and learning projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-teal-600 hover:bg-teal-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
