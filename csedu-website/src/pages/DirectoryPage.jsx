"use client"

import { useState } from "react"
import FacultyCard from "../components/FacultyCard"
import { faculty } from "../data/faculty"
import { Search, Filter } from "lucide-react"

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [selectedExpertise, setSelectedExpertise] = useState("all")

  // Get unique expertise areas
  const expertiseAreas = [...new Set(faculty.flatMap((f) => f.expertise))]

  // Filter faculty based on search and filters
  const filteredFaculty = faculty.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.expertise.some((exp) => exp.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesRole = selectedRole === "all" || member.title.toLowerCase().includes(selectedRole.toLowerCase())

    const matchesExpertise = selectedExpertise === "all" || member.expertise.includes(selectedExpertise)

    return matchesSearch && matchesRole && matchesExpertise
  })

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="page-title">Faculty Directory</h1>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search faculty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>

            {/* Role Filter */}
            <div>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Roles</option>
                <option value="professor">Professor</option>
                <option value="associate">Associate Professor</option>
                <option value="assistant">Assistant Professor</option>
              </select>
            </div>

            {/* Expertise Filter */}
            <div>
              <select
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Expertise</option>
                {expertiseAreas.map((expertise) => (
                  <option key={expertise} value={expertise}>
                    {expertise}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredFaculty.length} of {faculty.length} faculty members
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="space-y-6">
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map((member) => <FacultyCard key={member.id} faculty={member} />)
          ) : (
            <div className="text-center py-12">
              <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No faculty members found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
