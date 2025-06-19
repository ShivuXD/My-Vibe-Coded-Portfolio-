import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Shivam</h3>
            <p className="text-gray-400 mt-2">First-Year Engineering Student</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/shivam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/shivam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:shivam@email.com" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Shivam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
