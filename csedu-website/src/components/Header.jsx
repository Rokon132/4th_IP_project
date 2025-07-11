"use client"

import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, Search, User, Bell } from "lucide-react"

export default function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/placeholder.svg?height=40&width=40" alt="CSEDU Logo" className="h-10 w-10 mr-2" />
            <div>
              <h1 className="text-xl font-bold text-primary">CSEDU</h1>
              <p className="text-xs text-gray-600">University of Dhaka</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/directory"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Directory
            </NavLink>
            <NavLink
              to="/academics"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Academics
            </NavLink>
            <NavLink
              to="/schedule"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Schedule
            </NavLink>
            <NavLink
              to="/admissions"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Admissions
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/notices"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Notices
            </NavLink>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Booking
            </NavLink>
            <NavLink
              to="/fees-projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
              }
            >
              Fees & Projects
            </NavLink>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="p-2 rounded-full hover:bg-gray-100" aria-label="Search">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <Link to="/signin" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </Link>
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-100" aria-label="Menu">
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search for courses, faculty, events..."
              className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/directory"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Directory
              </NavLink>
              <NavLink
                to="/academics"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Academics
              </NavLink>
              <NavLink
                to="/schedule"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </NavLink>
              <NavLink
                to="/admissions"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Admissions
              </NavLink>


              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink
                to="/notices"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Notices
              </NavLink>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Booking
              </NavLink>
              <NavLink
                to="/fees-projects"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Fees & Projects
              </NavLink>

             

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>


            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
