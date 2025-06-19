import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, interests, and aspirations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Shivam"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hello! I'm Shivam</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a first-year Engineering student at University of Technology, passionate about software development
                and problem-solving. My journey in engineering began with a curiosity about how technology can solve
                real-world problems and improve people's lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently, I'm building a strong foundation in programming languages like Python and C, while exploring
                web development technologies. I'm actively seeking internship opportunities and collaborative projects
                to gain hands-on experience and contribute to meaningful initiatives.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-2">
                  <GraduationCap className="h-8 w-8 text-blue-900 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Education</h4>
                  <p className="text-sm text-gray-600">Engineering Student</p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-2">
                  <Heart className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Interests</h4>
                  <p className="text-sm text-gray-600">Tech & Innovation</p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-2">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Goal</h4>
                  <p className="text-sm text-gray-600">Collaboration</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
