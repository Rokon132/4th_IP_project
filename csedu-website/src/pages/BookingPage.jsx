"use client"

import { useState } from "react"
import { rooms, equipment } from "../data/rooms"
import { Calendar, MapPin, Monitor, CheckCircle, AlertCircle, Users } from "lucide-react"

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("rooms")
  const [selectedDate, setSelectedDate] = useState("2023-07-10")
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [selectedEquipment, setSelectedEquipment] = useState(null)
  const [bookingForm, setBookingForm] = useState({
    purpose: "",
    duration: "",
    participants: "",
    contact: "",
  })

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    alert("Booking request submitted! You will receive a confirmation email shortly.")
    setBookingForm({ purpose: "", duration: "", participants: "", contact: "" })
    setSelectedRoom(null)
    setSelectedEquipment(null)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="page-title">Room & Equipment Booking</h1>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("rooms")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "rooms"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Room Booking
              </button>
              <button
                onClick={() => setActiveTab("equipment")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "equipment"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Equipment Booking
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === "admin"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Admin Approval
              </button>
            </nav>
          </div>

          {/* Date Selector */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-4">
              <Calendar className="h-5 w-5 text-gray-500" />
              <label className="text-sm font-medium text-gray-700">Select Date:</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Room Booking Tab */}
        {activeTab === "rooms" && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Room List */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Rooms</h2>
              <div className="space-y-4">
                {rooms.map((room) => (
                  <div key={room.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{room.name}</h3>
                        <p className="text-gray-600">{room.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-sm">Capacity: {room.capacity}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Facilities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {room.facilities.map((facility, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Available Time Slots ({selectedDate}):</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.availability[selectedDate] ? (
                          room.availability[selectedDate].map((slot, index) => (
                            <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              {slot}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-500 text-sm">No availability data</span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                    >
                      Book This Room
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div>
              {selectedRoom ? (
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Book {selectedRoom.name}</h3>
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Booking</label>
                      <input
                        type="text"
                        value={bookingForm.purpose}
                        onChange={(e) => setBookingForm({ ...bookingForm, purpose: e.target.value })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., Class, Meeting, Seminar"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                      <select
                        value={bookingForm.duration}
                        onChange={(e) => setBookingForm({ ...bookingForm, duration: e.target.value })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select time slot</option>
                        {selectedRoom.availability[selectedDate]?.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Participants</label>
                      <input
                        type="number"
                        value={bookingForm.participants}
                        onChange={(e) => setBookingForm({ ...bookingForm, participants: e.target.value })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        max={selectedRoom.capacity}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Information</label>
                      <input
                        type="text"
                        value={bookingForm.contact}
                        onChange={(e) => setBookingForm({ ...bookingForm, contact: e.target.value })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Email or phone number"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors"
                    >
                      Submit Booking Request
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Select a room to book</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Equipment Booking Tab */}
        {activeTab === "equipment" && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Equipment List */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Equipment</h2>
              <div className="space-y-4">
                {equipment.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600">{item.type}</p>
                        <p className="text-sm text-gray-500">Location: {item.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          Qty: {item.quantity}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Specifications:</h4>
                      <p className="text-sm text-gray-600">{item.specifications}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Available Time Slots ({selectedDate}):</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.availability[selectedDate] ? (
                          item.availability[selectedDate].map((slot, index) => (
                            <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                              {slot}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-500 text-sm">No availability data</span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedEquipment(item)}
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                    >
                      Book This Equipment
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Booking Form */}
            <div>
              {selectedEquipment ? (
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Book {selectedEquipment.name}</h3>
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Use</label>
                      <input
                        type="text"
                        value={bookingForm.purpose}
                        onChange={(e) => setBookingForm({ ...bookingForm, purpose: e.target.value })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., Research, Project, Lab Work"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time Slot</label>
                      <select
                        value={bookingForm.duration}
                        onChange={(e) => setBookingForm({ ...bookingForm, duration: e.target.value })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select time slot</option>
                        {selectedEquipment.availability[selectedDate]?.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Needed</label>
                      <input
                        type="number"
                        value={bookingForm.participants}
                        onChange={(e) => setBookingForm({ ...bookingForm, participants: e.target.value })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        max={selectedEquipment.quantity}
                        min="1"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Information</label>
                      <input
                        type="text"
                        value={bookingForm.contact}
                        onChange={(e) => setBookingForm({ ...bookingForm, contact: e.target.value })}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Email or phone number"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors"
                    >
                      Submit Booking Request
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-center text-gray-500">
                    <Monitor className="h-12 w-12 mx-auto mb-2" />
                    <p>Select equipment to book</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Admin Approval Tab */}
        {activeTab === "admin" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Booking Requests - Admin Panel</h2>

            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">Room 301 - Seminar</h3>
                    <p className="text-sm text-gray-600">Requested by: Dr. Rahman</p>
                    <p className="text-sm text-gray-600">Date: July 15, 2023 | Time: 10:00-12:00</p>
                    <p className="text-sm text-gray-600">Purpose: Guest Lecture</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Pending</span>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                    <CheckCircle className="h-4 w-4 inline mr-1" />
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    Reject
                  </button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">GPU Lab - Research</h3>
                    <p className="text-sm text-gray-600">Requested by: Tanvir Ahmed (Student)</p>
                    <p className="text-sm text-gray-600">Date: July 16, 2023 | Time: 14:00-18:00</p>
                    <p className="text-sm text-gray-600">Purpose: Machine Learning Project</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Approved</span>
                </div>
                <div className="text-sm text-gray-500">Approved by: Admin • July 10, 2023</div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">Conference Room - Meeting</h3>
                    <p className="text-sm text-gray-600">Requested by: Student Council</p>
                    <p className="text-sm text-gray-600">Date: July 14, 2023 | Time: 16:00-18:00</p>
                    <p className="text-sm text-gray-600">Purpose: Committee Meeting</p>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Rejected</span>
                </div>
                <div className="text-sm text-gray-500">
                  Rejected by: Admin • July 9, 2023
                  <br />
                  Reason: Room already booked for faculty meeting
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
