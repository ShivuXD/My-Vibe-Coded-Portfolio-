import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Wrench, Users } from "lucide-react"

const skillsData = {
  languages: {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C", "JavaScript", "HTML/CSS", "SQL", "MATLAB"],
  },
  tools: {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Linux", "Node.js", "React"],
  },
  soft: {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication", "Team Work", "Critical Thinking", "Time Management", "Leadership"],
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([key, category]) => {
            const IconComponent = category.icon
            return (
              <Card key={key} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      key === "languages" ? "bg-blue-100" : key === "tools" ? "bg-teal-100" : "bg-orange-100"
                    }`}
                  >
                    <IconComponent
                      className={`h-8 w-8 ${
                        key === "languages" ? "text-blue-900" : key === "tools" ? "text-teal-600" : "text-orange-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`${
                          key === "languages"
                            ? "bg-blue-100 text-blue-900 hover:bg-blue-200"
                            : key === "tools"
                              ? "bg-teal-100 text-teal-900 hover:bg-teal-200"
                              : "bg-orange-100 text-orange-900 hover:bg-orange-200"
                        } transition-colors duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
