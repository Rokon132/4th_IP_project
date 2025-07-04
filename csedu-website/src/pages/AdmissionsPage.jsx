"use client"

import { useState } from "react"
import { Calendar, CheckCircle, Clock, FileText, HelpCircle, Users } from "lucide-react"

export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState("process")
  const [openFaq, setOpenFaq] = useState(null)

  const admissionSteps = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Ensure you meet the minimum academic requirements for your desired program.",
      status: "completed",
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather all required documents including transcripts, certificates, and recommendations.",
      status: "completed",
    },
    {
      step: 3,
      title: "Online Application",
      description: "Complete the online application form and upload required documents.",
      status: "current",
    },
    {
      step: 4,
      title: "Application Fee",
      description: "Pay the non-refundable application fee through online banking.",
      status: "pending",
    },
    {
      step: 5,
      title: "Entrance Exam",
      description: "Take the departmental entrance examination (if applicable).",
      status: "pending",
    },
    {
      step: 6,
      title: "Interview",
      description: "Attend the interview session with faculty members.",
      status: "pending",
    },
    {
      step: 7,
      title: "Final Decision",
      description: "Receive admission decision and complete enrollment procedures.",
      status: "pending",
    },
  ]

  const importantDates = [
    {
      date: "August 1, 2023",
      event: "Application Opens",
      type: "start",
    },
    {
      date: "September 15, 2023",
      event: "Application Deadline",
      type: "deadline",
    },
    {
      date: "September 25, 2023",
      event: "Entrance Exam",
      type: "exam",
    },
    {
      date: "October 5, 2023",
      event: "Interview Sessions",
      type: "interview",
    },
    {
      date: "October 15, 2023",
      event: "Results Announcement",
      type: "result",
    },
    {
      date: "October 25, 2023",
      event: "Enrollment Deadline",
      type: "deadline",
    },
  ]

  const requirements = {
    undergraduate: [
      "Higher Secondary Certificate (HSC) or equivalent with minimum GPA 5.00",
      "Strong background in Mathematics and Physics",
      "English proficiency (IELTS 6.0 or equivalent for international students)",
      "Valid passport-size photographs",
      "Character certificate from previous institution",
      "Medical certificate",
    ],
    masters: [
      "Bachelor's degree in Computer Science or related field with minimum CGPA 3.00",
      "GRE score (recommended but not mandatory)",
      "Two letters of recommendation from academic referees",
      "Statement of purpose",
      "Research proposal (for thesis track)",
      "English proficiency certificate (for international students)",
    ],
    phd: [
      "Master's degree in Computer Science or related field with minimum CGPA 3.50",
      "Research experience and publications (preferred)",
      "Three letters of recommendation",
      "Detailed research proposal",
      "GRE score (highly recommended)",
      "Interview with potential supervisor",
    ],
  }

  const faqs = [
    {
      question: "What is the minimum GPA requirement for undergraduate admission?",
      answer:
        "The minimum GPA requirement is 5.00 in HSC or equivalent examination. However, due to high competition, the actual cutoff is usually higher.",
    },
    {
      question: "Is there an entrance exam for all programs?",
      answer:
        "Yes, all applicants must take the departmental entrance examination. The exam covers Mathematics, Physics, and English for undergraduate programs, and specialized subjects for graduate programs.",
    },
    {
      question: "Can international students apply?",
      answer:
        "Yes, we welcome international students. Additional requirements include English proficiency certificates and credential evaluation for foreign degrees.",
    },
    {
      question: "What is the application fee?",
      answer:
        "The application fee is BDT 1,000 for domestic students and USD 50 for international students. This fee is non-refundable.",
    },
    {
      question: "When do classes start?",
      answer: "Classes typically start in January for the Spring semester and in July for the Fall semester.",
    },
    {
      question: "Are there scholarships available?",
      answer:
        "Yes, we offer merit-based scholarships for outstanding students. Need-based financial aid is also available for eligible students.",
    },
    {
      question: "What documents are required for application?",
      answer:
        "Required documents vary by program level. Please check the specific requirements section for detailed information.",
    },
    {
      question: "How long does the admission process take?",
      answer: "The entire admission process typically takes 2-3 months from application submission to final decision.",
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="page-title">Admissions</h1>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("process")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "process"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Application Process
              </button>
              <button
                onClick={() => setActiveTab("requirements")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "requirements"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Requirements
              </button>
              <button
                onClick={() => setActiveTab("deadlines")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "deadlines"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Important Dates
              </button>
              <button
                onClick={() => setActiveTab("faqs")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "faqs"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                FAQs
              </button>
            </nav>
          </div>
        </div>

        {/* Application Process Tab */}
        {activeTab === "process" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Step-by-Step Application Process</h2>
            <div className="space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={step.step} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        step.status === "completed"
                          ? "bg-green-500"
                          : step.status === "current"
                            ? "bg-primary"
                            : "bg-gray-300"
                      }`}
                    >
                      {step.status === "completed" ? <CheckCircle className="h-6 w-6" /> : step.step}
                    </div>
                    {index < admissionSteps.length - 1 && <div className="w-0.5 h-8 bg-gray-300 ml-5 mt-2"></div>}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Ready to Apply?</h3>
              <p className="text-gray-700 mb-4">
                Start your application today and join our community of innovative computer scientists.
              </p>
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Start Application
              </button>
            </div>
          </div>
        )}

        {/* Requirements Tab */}
        {activeTab === "requirements" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Admission Requirements</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Undergraduate Program (B.Sc. in CSE)
                  </h3>
                  <ul className="space-y-2">
                    {requirements.undergraduate.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Master's Program (M.Sc. in CSE)
                  </h3>
                  <ul className="space-y-2">
                    {requirements.masters.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    PhD Program
                  </h3>
                  <ul className="space-y-2">
                    {requirements.phd.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Important Dates Tab */}
        {activeTab === "deadlines" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Important Dates & Deadlines</h2>
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-center p-4 border rounded-lg">
                  <div className="flex-shrink-0 mr-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.type === "start"
                          ? "bg-green-100"
                          : item.type === "deadline"
                            ? "bg-red-100"
                            : item.type === "exam"
                              ? "bg-blue-100"
                              : item.type === "interview"
                                ? "bg-purple-100"
                                : "bg-yellow-100"
                      }`}
                    >
                      {item.type === "start" && <CheckCircle className="h-6 w-6 text-green-600" />}
                      {item.type === "deadline" && <Clock className="h-6 w-6 text-red-600" />}
                      {item.type === "exam" && <FileText className="h-6 w-6 text-blue-600" />}
                      {item.type === "interview" && <Users className="h-6 w-6 text-purple-600" />}
                      {item.type === "result" && <Calendar className="h-6 w-6 text-yellow-600" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.event}</h3>
                    <p className="text-gray-600">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800">Important Note</h3>
                  <p className="text-yellow-700 text-sm">
                    All deadlines are at 11:59 PM Bangladesh Standard Time. Late applications will not be accepted under
                    any circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Tab */}
        {activeTab === "faqs" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-800">{faq.question}</span>
                    <HelpCircle
                      className={`h-5 w-5 text-gray-500 transform transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800">Still Have Questions?</h3>
                  <p className="text-blue-700 text-sm mb-2">
                    Can't find the answer you're looking for? Contact our admissions office.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    Contact Admissions
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
