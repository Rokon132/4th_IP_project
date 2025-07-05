// "use client"

// import { useParams } from "react-router-dom"
// import { faculty } from "../data/faculty"
// import { Mail, Phone, MapPin, BookOpen, Award, Calendar } from "lucide-react"

// export default function ProfilePage() {
//   const { id } = useParams()
//   const member = faculty.find((f) => f.id === Number.parseInt(id))

//   if (!member) {
//     return (
//       <div className="min-h-screen py-8">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Faculty Member Not Found</h1>
//           <p className="text-gray-600">The requested faculty profile could not be found.</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen py-8">
//       <div className="container mx-auto px-4">
//         {/* Profile Header */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//           <div className="md:flex">
//             <div className="md:w-1/3">
//               <img
//                 src={member.image || "/placeholder.svg?height=400&width=400"}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-8 md:w-2/3">
//               <h1 className="text-3xl font-bold text-gray-800 mb-2">{member.name}</h1>
//               <p className="text-xl text-primary font-medium mb-2">{member.title}</p>
//               <p className="text-gray-600 mb-6">{member.department}</p>

//               <div className="space-y-3 mb-6">
//                 <div className="flex items-center">
//                   <Mail className="h-5 w-5 mr-3 text-gray-500" />
//                   <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-primary">
//                     {member.email}
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <Phone className="h-5 w-5 mr-3 text-gray-500" />
//                   <a href={`tel:${member.phone}`} className="text-gray-700 hover:text-primary">
//                     {member.phone}
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPin className="h-5 w-5 mr-3 text-gray-500" />
//                   <span className="text-gray-700">Science Complex, University of Dhaka</span>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Areas of Expertise</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {member.expertise.map((item, index) => (
//                     <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Biography */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
//                 <Award className="h-6 w-6 mr-2 text-primary" />
//                 Biography
//               </h2>
//               <p className="text-gray-700 leading-relaxed">{member.bio}</p>
//             </div>

//             {/* Education */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
//                 <BookOpen className="h-6 w-6 mr-2 text-primary" />
//                 Education
//               </h2>
//               <ul className="space-y-2">
//                 {member.education.map((edu, index) => (
//                   <li key={index} className="text-gray-700 flex items-start">
//                     <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                     {edu}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Publications */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Publications</h2>
//               <div className="space-y-4">
//                 {member.publications.map((pub, index) => (
//                   <div key={index} className="border-l-4 border-primary pl-4">
//                     <p className="text-gray-700">{pub}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Courses Taught */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Courses Taught</h3>
//               <ul className="space-y-2">
//                 {member.courses.map((course, index) => (
//                   <li key={index} className="text-gray-700 text-sm bg-gray-50 p-2 rounded">
//                     {course}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Meeting Schedule */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
//                 <Calendar className="h-5 w-5 mr-2 text-primary" />
//                 Office Hours
//               </h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Sunday - Tuesday</span>
//                   <span className="text-gray-800">2:00 PM - 4:00 PM</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Wednesday</span>
//                   <span className="text-gray-800">10:00 AM - 12:00 PM</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Thursday</span>
//                   <span className="text-gray-800">3:00 PM - 5:00 PM</span>
//                 </div>
//               </div>
//               <button className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
//                 Schedule Meeting
//               </button>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
//               <div className="space-y-2">
//                 <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
//                   Send Email
//                 </button>
//                 <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
//                   View Research Papers
//                 </button>
//                 <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
//                   Course Materials
//                 </button>
//                 <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
//                   Academic Calendar
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



import { Mail, Phone, MapPin, BookOpen, Award, Calendar } from "lucide-react"

export default function ProfilePage() {
  // Example static data (replace with backend data later)
  const profile = {
    type: "faculty", // or "student"
    name: "Dr. Jane Dube virus",
    image: "/placeholder.svg?height=400&width=400",
    title: "Associate Professor",
    department: "Department of Computer Science and Engineering",
    email: "jane.doe@csedu.du.ac.bd",
    phone: "+880123456789",
    location: "Science Complex, University of Dhaka",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    bio: "Dr. Jane Doe is an Associate Professor at CSEDU, University of Dhaka. Her research interests include AI, ML, and Data Science. She has published numerous papers and is passionate about teaching.",
    education: [
      "Ph.D. in Computer Science, MIT",
      "M.Sc. in Computer Science, University of Dhaka",
      "B.Sc. in Computer Science, University of Dhaka",
    ],
    publications: [
      "Doe, J. (2024). Advances in AI. Journal of AI Research.",
      "Doe, J. (2023). Machine Learning Trends. ML Journal.",
    ],
    courses: ["CSE101: Introduction to Programming", "CSE202: Data Structures"],
    officeHours: [
      { days: "Sunday - Tuesday", time: "2:00 PM - 4:00 PM" },
      { days: "Wednesday", time: "10:00 AM - 12:00 PM" },
      { days: "Thursday", time: "3:00 PM - 5:00 PM" },
    ],
    // Student-specific fields (if type === "student")
    studentId: "2023-12345",
    dob: "2002-05-15",
    year: "3rd",
    program: "B.Sc. in Computer Science and Engineering",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-white py-10">
      <div className="container mx-auto px-4">
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden mb-10">
          {/* Profile Image */}
          <div className="md:w-1/3 flex items-center justify-center bg-primary/5 p-8">
            <img
              src={profile.image}
              alt={profile.name}
              className="rounded-full w-48 h-48 object-cover border-4 border-primary shadow-lg"
            />
          </div>
          {/* Profile Info */}
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-primary mb-2">{profile.name}</h1>
            {profile.type === "faculty" ? (
              <>
                <p className="text-lg text-gray-700 font-semibold mb-1">{profile.title}</p>
                <p className="text-gray-500 mb-4">{profile.department}</p>
              </>
            ) : (
              <>
                <p className="text-lg text-gray-700 font-semibold mb-1">{profile.program}</p>
                <p className="text-gray-500 mb-1">Student ID: {profile.studentId}</p>
                <p className="text-gray-500 mb-1">Year: {profile.year}</p>
                <p className="text-gray-500 mb-4">Date of Birth: {profile.dob}</p>
              </>
            )}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
              </div>
              {profile.phone && (
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <a href={`tel:${profile.phone}`} className="hover:underline">{profile.phone}</a>
                </div>
              )}
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>{profile.location}</span>
              </div>
            </div>
            {profile.type === "faculty" && (
              <div className="flex flex-wrap gap-2">
                {profile.expertise.map((item, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Biography, Education, Publications */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2 text-primary" />
                {profile.type === "faculty" ? "Biography" : "About"}
              </h2>
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            </section>
            {/* Education */}
            <section className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                Education
              </h2>
              <ul className="space-y-2">
                {profile.education.map((edu, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {edu}
                  </li>
                ))}
              </ul>
            </section>
            {/* Publications (Faculty only) */}
            {profile.type === "faculty" && (
              <section className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Recent Publications</h2>
                <div className="space-y-4">
                  {profile.publications.map((pub, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-4">
                      <p className="text-gray-700">{pub}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
          {/* Right: Sidebar */}
          <aside className="space-y-8">
            {/* Courses Taught (Faculty only) */}
            {profile.type === "faculty" && (
              <section className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Courses Taught</h3>
                <ul className="space-y-2">
                  {profile.courses.map((course, idx) => (
                    <li key={idx} className="text-gray-700 text-sm bg-gray-50 p-2 rounded">
                      {course}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {/* Office Hours (Faculty only) */}
            {profile.type === "faculty" && (
              <section className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Office Hours
                </h3>
                <div className="space-y-2">
                  {profile.officeHours.map((slot, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">{slot.days}</span>
                      <span className="text-gray-800">{slot.time}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
                  Schedule Meeting
                </button>
              </section>
            )}
            {/* Quick Actions */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  Send Email
                </a>
                {profile.type === "faculty" && (
                  <>
                    <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                      View Research Papers
                    </button>
                    <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                      Course Materials
                    </button>
                  </>
                )}
                <button className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                  Academic Calendar
                </button>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}