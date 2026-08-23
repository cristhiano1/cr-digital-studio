import { Routes, Route } from 'react-router'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import QuoteLeadSystemsPage from './pages/QuoteLeadSystemsPage'
import BusinessWebsitesPage from './pages/BusinessWebsitesPage'
import BookingCustomerFlowsPage from './pages/BookingCustomerFlowsPage'
import InternalSystemsAutomationPage from './pages/InternalSystemsAutomationPage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToHash from './components/ScrollToHash'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#0A8CFF] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <ScrollToHash />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions/quote-lead-systems" element={<QuoteLeadSystemsPage />} />
            <Route path="/solutions/business-websites" element={<BusinessWebsitesPage />} />
            <Route path="/solutions/booking-customer-flows" element={<BookingCustomerFlowsPage />} />
            <Route path="/solutions/internal-systems-automation" element={<InternalSystemsAutomationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
