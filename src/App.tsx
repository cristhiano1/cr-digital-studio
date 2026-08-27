import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ScrollToHash from './components/ScrollToHash'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const QuoteLeadSystemsPage = lazy(() => import('./pages/QuoteLeadSystemsPage'))
const BusinessWebsitesPage = lazy(() => import('./pages/BusinessWebsitesPage'))
const BookingCustomerFlowsPage = lazy(() => import('./pages/BookingCustomerFlowsPage'))
const InternalSystemsAutomationPage = lazy(() => import('./pages/InternalSystemsAutomationPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

const PageFallback = () => <div className="min-h-screen bg-[#020B14]" />

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
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/solutions/quote-lead-systems" element={<QuoteLeadSystemsPage />} />
              <Route path="/solutions/business-websites" element={<BusinessWebsitesPage />} />
              <Route path="/solutions/booking-customer-flows" element={<BookingCustomerFlowsPage />} />
              <Route path="/solutions/internal-systems-automation" element={<InternalSystemsAutomationPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
