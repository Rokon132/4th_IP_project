import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import DirectoryPage from "./pages/DirectoryPage"
import ProfilePage from "./pages/ProfilePage"
import AcademicsPage from "./pages/AcademicsPage"
import SchedulePage from "./pages/SchedulePage"
import AdmissionsPage from "./pages/AdmissionsPage"
import ContactPage from "./pages/ContactPage"
import NoticesPage from "./pages/NoticesPage"
import BookingPage from "./pages/BookingPage"
import FeesProjectsPage from "./pages/FeesProjectsPage"
import SigninPage from "./pages/SigninPage"
import NotFoundPage from "./pages/NotFoundPage"
import UserRegistration from "./pages/UserRegistration"
import Student_Registration_Page from "./pages/Student_Registration_Page" // Importing the Student Registration Page
import Faculty_Registration_Page from "./pages/Faculty_Registration_Page" // Importing the Faculty Registration Page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="directory" element={<DirectoryPage />} />
          <Route path="profile/" element={<ProfilePage />} />
          <Route path="academics" element={<AcademicsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="fees-projects" element={<FeesProjectsPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="user-registration" element={<UserRegistration />} />
          <Route path="student-registration" element={<Student_Registration_Page />} />
          <Route path="faculty-registration" element={<Faculty_Registration_Page />} />
          {/* Add other routes as needed */}
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
