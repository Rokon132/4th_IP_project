"use client"

import { useParams } from "react-router-dom"
import { faculty } from "../data/faculty"
import { Mail, Phone, MapPin, BookOpen, Award, Calendar } from "lucide-react"

export default function ProfilePage() {
  const { id } = useParams()
  const member = faculty.find((f) => f.id === Number.parseInt(id))

  if (!member) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Faculty Member Not Found</h1>
          <p className="text-gray-600">The requested faculty profile could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={member.image || "/placeholder.svg?height=400&width=400"}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{member.name}</h1>
              <p className="text-xl text-primary font-medium mb-2">{member.title}</p>
              <p className="text-gray-600 mb-6">{member.department}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-gray-500" />
                  <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-primary">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-500" />
                  <a href={`tel:${member.phone}`} className="text-gray-700 hover:text-primary">
                    {member.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                  <span className="text-gray-700">Science Complex, University of Dhaka</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((item, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2 text-primary" />
                Biography
              </h2>
              <p className="text-gray-700 leading-relaxed">{member.bio}</p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                Education
              </h2>
              <ul className="space-y-2">
                {member.education.map((edu, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Publications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Publications</h2>
              <div className="space-y-4">
                {member.publications.map((pub, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <p className="text-gray-700">{pub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Courses Taught */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Courses Taught</h3>
              <ul className="space-y-2">
                {member.courses.map((course, index) => (
                  <li key={index} className="text-gray-700 text-sm bg-gray-50 p-2 rounded">
                    {course}
                  </li>
                ))}
              </ul>
            </div>

            {/* Meeting Schedule */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Office Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Sunday - Tuesday</span>
                  <span className="text-gray-800">2:00 PM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Wednesday</span>
                  <span className="text-gray-800">10:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Thursday</span>
                  <span className="text-gray-800">3:00 PM - 5:00 PM</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                Schedule Meeting
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                  Send Email
                </button>
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                  View Research Papers
                </button>
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                  Course Materials
                </button>
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                  Academic Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
