"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm currently seeking internship opportunities and would love to connect with fellow developers,
                mentors, and potential collaborators. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:shivam@email.com"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                  <Mail className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">shivam@email.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/shivam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                  <Linkedin className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <p className="text-gray-600">linkedin.com/in/shivam</p>
                </div>
              </a>

              <a
                href="https://github.com/shivam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-200 transition-colors duration-200">
                  <Github className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">GitHub</h4>
                  <p className="text-gray-600">github.com/shivam</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
