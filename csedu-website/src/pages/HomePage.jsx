import HeroSection from "../components/HeroSection"
import AnnouncementCard from "../components/AnnouncementCard"
import QuickLinkCard from "../components/QuickLinkCard"
import EventCard from "../components/EventCard"
import AchievementCard from "../components/AchievementCard"
import { announcements } from "../data/announcements"
import { quickLinks } from "../data/quickLinks"
import { events } from "../data/events"
import { achievements } from "../data/achievements"
import { Search, TrendingUp, Users, BookOpen } from "lucide-react"

export default function HomePage() {
  const featuredAnnouncements = announcements.slice(0, 3)
  const upcomingEvents = events.slice(0, 3)
  const recentAchievements = achievements.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={() => window.location.href = "/user-registration"}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition"
          >
            Register as a User
          </button>
        </div>
        
     </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">25+</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">800+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Research Projects</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">30+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Featured Announcements */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Featured Announcements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <QuickLinkCard key={index} link={link} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Recent Achievements</h2>
          <div className="space-y-6">
            {recentAchievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Search Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Find What You're Looking For</h2>
          <p className="text-lg mb-6 opacity-90">Search for courses, faculty, events, and more across our department</p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for courses, faculty, events..."
              className="w-full p-4 pl-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
          </div>
        </div>
      </section>
    </div>
  )
}
