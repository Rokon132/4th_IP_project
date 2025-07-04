import { Mail, Phone, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

export default function FacultyCard({ faculty }) {
  const { id, name, title, department, expertise, email, phone, image } = faculty

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3">
          <img
            src={image || "/placeholder.svg?height=300&width=300"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 sm:w-2/3">
          <h3 className="font-bold text-xl mb-1 text-gray-800">{name}</h3>
          <p className="text-primary font-medium mb-2">{title}</p>
          <p className="text-gray-600 mb-3">{department}</p>

          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">Expertise:</h4>
            <div className="flex flex-wrap gap-1">
              {expertise.map((item, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1 mb-4">
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2 text-gray-500" />
              <a href={`mailto:${email}`} className="text-gray-600 hover:text-primary">
                {email}
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-2 text-gray-500" />
              <a href={`tel:${phone}`} className="text-gray-600 hover:text-primary">
                {phone}
              </a>
            </div>
          </div>

          <Link
            to={`/profile/${id}`}
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
          >
            View Profile <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
