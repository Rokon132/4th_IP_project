"use client"

import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"
import { Search, Filter, DollarSign, Calendar, CreditCard, Download } from "lucide-react"

export default function FeesProjectsPage() {
  const [activeTab, setActiveTab] = useState("fees")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedTopic, setSelectedTopic] = useState("all")

  // Get unique years and topics for filters
  const years = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a)
  const topics = [...new Set(projects.flatMap((p) => p.tags))]

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.students.some((student) => student.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.supervisor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesYear = selectedYear === "all" || project.year.toString() === selectedYear
    const matchesTopic = selectedTopic === "all" || project.tags.includes(selectedTopic)

    return matchesSearch && matchesYear && matchesTopic
  })

  const feeStructure = [
    {
      category: "Undergraduate (Per Semester)",
      items: [
        { name: "Tuition Fee", amount: "BDT 15,000" },
        { name: "Lab Fee", amount: "BDT 2,000" },
        { name: "Library Fee", amount: "BDT 500" },
        { name: "Development Fee", amount: "BDT 1,000" },
        { name: "Total", amount: "BDT 18,500", highlight: true },
      ],
    },
    {
      category: "Graduate (Per Semester)",
      items: [
        { name: "Tuition Fee", amount: "BDT 25,000" },
        { name: "Research Fee", amount: "BDT 3,000" },
        { name: "Lab Fee", amount: "BDT 2,500" },
        { name: "Library Fee", amount: "BDT 500" },
        { name: "Total", amount: "BDT 31,000", highlight: true },
      ],
    },
  ]

  const paymentDeadlines = [
    {
      semester: "Fall 2023",
      registration: "July 15, 2023",
      payment: "July 30, 2023",
      late_fee: "August 15, 2023",
    },
    {
      semester: "Spring 2024",
      registration: "December 15, 2023",
      payment: "December 30, 2023",
      late_fee: "January 15, 2024",
    },
  ]

  const transactionHistory = [
    {
      id: "TXN001",
      date: "July 25, 2023",
      description: "Fall 2023 Semester Fee",
      amount: "BDT 18,500",
      status: "Completed",
      method: "Online Banking",
    },
    {
      id: "TXN002",
      date: "January 20, 2023",
      description: "Spring 2023 Semester Fee",
      amount: "BDT 18,500",
      status: "Completed",
      method: "Bank Transfer",
    },
    {
      id: "TXN003",
      date: "August 10, 2022",
      description: "Fall 2022 Semester Fee",
      amount: "BDT 17,500",
      status: "Completed",
      method: "Cash Payment",
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="page-title">Fees, Projects & Student Portal</h1>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("fees")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "fees"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Fee Structure
              </button>
              <button
                onClick={() => setActiveTab("payments")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "payments"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Payment History
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "projects"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Student Projects
              </button>
            </nav>
          </div>
        </div>

        {/* Fee Structure Tab */}
        {activeTab === "fees" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {feeStructure.map((structure, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <DollarSign className="h-6 w-6 mr-2 text-primary" />
                    {structure.category}
                  </h2>
                  <div className="space-y-3">
                    {structure.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex justify-between items-center py-2 ${
                          item.highlight ? "border-t-2 border-primary pt-3 font-semibold" : ""
                        }`}
                      >
                        <span className={item.highlight ? "text-primary" : "text-gray-700"}>{item.name}</span>
                        <span className={item.highlight ? "text-primary text-lg" : "text-gray-800"}>{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Deadlines */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-primary" />
                Payment Deadlines
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Semester</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Registration Deadline
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Payment Deadline
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Late Fee Deadline
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {paymentDeadlines.map((deadline, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-800">{deadline.semester}</td>
                        <td className="px-4 py-3 text-gray-600">{deadline.registration}</td>
                        <td className="px-4 py-3 text-gray-600">{deadline.payment}</td>
                        <td className="px-4 py-3 text-gray-600">{deadline.late_fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 text-center">
                  <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-gray-800">Online Banking</h3>
                  <p className="text-sm text-gray-600">Pay through your bank's online portal</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-gray-800">Bank Transfer</h3>
                  <p className="text-sm text-gray-600">Direct transfer to university account</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-gray-800">Cash Payment</h3>
                  <p className="text-sm text-gray-600">Pay at the university cashier</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment History Tab */}
        {activeTab === "payments" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Transaction History</h2>
              <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Download Statement
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transactionHistory.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-800">{transaction.id}</td>
                      <td className="px-4 py-3 text-gray-600">{transaction.date}</td>
                      <td className="px-4 py-3 text-gray-600">{transaction.description}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">{transaction.amount}</td>
                      <td className="px-4 py-3 text-gray-600">{transaction.method}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Payment Information</h3>
              <p className="text-blue-700 text-sm">
                All payments are processed securely. For any payment-related queries, contact the finance office at
                <strong> finance@cse.du.ac.bd</strong> or call <strong>+880-2-9661900 Ext. 7430</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Student Projects Tab */}
        {activeTab === "projects" && (
          <div>
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                </div>

                {/* Year Filter */}
                <div>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Years</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Topic Filter */}
                <div>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Topics</option>
                    {topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4">
                <p className="text-gray-600">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
              ) : (
                <div className="col-span-full text-center py-12">
                  <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
                  <p className="text-gray-500">Try adjusting your search criteria</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
