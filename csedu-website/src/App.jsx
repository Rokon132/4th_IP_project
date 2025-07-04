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
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="directory" element={<DirectoryPage />} />
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="academics" element={<AcademicsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="fees-projects" element={<FeesProjectsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
