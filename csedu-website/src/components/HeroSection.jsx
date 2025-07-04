import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Department of Computer Science & Engineering
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Empowering future innovators with cutting-edge education and research opportunities at the University of
            Dhaka.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/admissions"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/academics"
              className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium"
            >
              Explore Programs
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/placeholder.svg?height=400&width=500"
            alt="CSEDU Campus"
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
