import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import { BusinessWebsiteMockup, BusinessWebsiteBackground } from '../components/projects/BusinessWebsiteDemo'
import SolutionAccordion from '../components/SolutionAccordion'
import PageMeta from '../components/PageMeta'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const solutionFaqItems = [
  {
    question: 'Do I need a completely new website?',
    answer:
      'Not necessarily. Sometimes improving, extending or restructuring the current site is the right decision. A new build makes sense when the existing structure, technology or technical foundation is preventing the business from getting what it needs.',
  },
  {
    question: 'Can you improve or extend an existing website instead?',
    answer:
      'Yes, depending on the technology in use and what needs changing. If the existing codebase is accessible and the changes are well-defined, improving it is often faster and more appropriate than starting from scratch.',
  },
  {
    question: 'Can the website connect to our CRM, booking or enquiry system?',
    answer:
      'Often possible. Whether a specific connection is feasible depends on the tools your business uses and what their APIs allow. This is assessed during scoping rather than assumed upfront.',
  },
  {
    question: 'Do you handle both the design and the development?',
    answer:
      'CR Digital Systems handles the interface structure, information architecture and technical implementation. Content — including copy, photography and brand assets — is either provided by the client or agreed as part of a specific scope. Full branding or content production is not automatically included.',
  },
  {
    question: 'Can our team update the website content after launch?',
    answer:
      'The implementation is designed to be maintainable. Whether the team can edit content directly depends on the architecture agreed at scoping — some projects include a content management layer, others do not. This is confirmed before development begins.',
  },
  {
    question: 'Is the website concept shown here a real client project?',
    answer:
      'No. The concept shown on this page is an illustrative demo using sample content. It is not a real client project and does not represent any actual business.',
  },
]

const journeySteps = [
  {
    number: '01',
    title: 'Arrives',
    body: 'The visitor lands on the site through search, referral or word of mouth. First impressions form immediately.',
  },
  {
    number: '02',
    title: 'Understands the offer',
    body: 'Within seconds, they can tell what the business does, who it is for and whether it is relevant to them.',
  },
  {
    number: '03',
    title: 'Finds what they need',
    body: 'They locate the specific service, information or contact point they came for without friction or confusion.',
  },
  {
    number: '04',
    title: 'Builds enough confidence',
    body: 'The structure, content and presentation answer the questions they are likely to have before making contact.',
  },
  {
    number: '05',
    title: 'Takes the next step',
    body: 'They request a quote, make a booking or get in touch through a clear, low-friction path.',
  },
]

const capabilities = [
  {
    label: 'Clarify',
    body: 'Make the offer legible within the first moments of a visit.',
  },
  {
    label: 'Guide',
    body: 'Give each visitor a clear next action at every point on the page.',
  },
  {
    label: 'Build trust',
    body: 'Use real information, professional structure and appropriate proof.',
  },
  {
    label: 'Capture',
    body: 'Make enquiry and contact flows focused and straightforward to complete.',
  },
  {
    label: 'Connect',
    body: 'Move information from the website into the right business systems.',
  },
  {
    label: 'Perform',
    body: 'Responsive, accessible and maintainable on a solid technical foundation.',
  },
]

const problemCards = [
  {
    title: 'Offer not clear enough',
    body: 'Visitors arrive but cannot quickly tell what the company does, who it is for or why it matters to them. They leave without acting.',
  },
  {
    title: 'No obvious next action',
    body: "The site looks acceptable but doesn't guide each visitor toward a specific decision or contact point. Potential enquiries stop halfway.",
  },
  {
    title: 'Maintenance creating friction',
    body: "Updates are slow, the site doesn't connect to internal tools, or the underlying code has accumulated enough technical debt that extending it is difficult.",
  },
]

const integrations = [
  {
    label: 'Contact and enquiry forms',
    detail: 'Routed to email, CRM or a shared inbox on submission.',
  },
  {
    label: 'Booking and quote flows',
    detail: 'Connected to internal systems or calendars when the brief requires it.',
  },
  {
    label: 'CRM hand-off',
    detail: "Enquiries passed to the team's pipeline automatically after submission.",
  },
  {
    label: 'External APIs',
    detail: 'Data from third-party tools surfaced on the site where appropriate.',
  },
  {
    label: 'Database connections',
    detail: 'Content managed or updated programmatically where the project calls for it.',
  },
]

const techAreas = [
  { label: 'Responsive', detail: 'Works correctly on mobile, tablet and desktop.' },
  {
    label: 'Accessible',
    detail: 'Keyboard-navigable, semantic structure, readable by assistive technology.',
  },
  {
    label: 'Form handling',
    detail: 'Structured capture connected to back-end systems and notifications.',
  },
  {
    label: 'Backend integration',
    detail: 'API connections, authentication and database access where required.',
  },
  { label: 'Deployable', detail: 'Cloud-hosted with sensible performance decisions.' },
  {
    label: 'Maintainable',
    detail: 'Clean code that can be extended or handed to a developer.',
  },
]

const rightFitGood = [
  'The offer or customer journey needs more control than a template allows',
  'The website must connect to business workflows, forms or booking systems',
  'The current site is difficult to update, extend or maintain',
  'Several pieces need to work together as one coherent system',
]

const rightFitLess = [
  'A standard template already handles the need well and the team is satisfied with it',
  'The project is primarily about branding, photography or marketing content rather than system implementation',
  'Budget and timeline strongly favour a template — in that case a template is often the right choice',
]

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 bg-[#020B14] overflow-hidden"
      aria-label="Business Websites solution overview"
    >
      <BusinessWebsiteBackground />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-white/55 hover:text-white/75 text-xs transition-colors duration-200"
          >
            <ArrowLeft size={12} aria-hidden="true" />
            Home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Business Websites
            </span>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              A website built around what the customer needs to do next.
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg">
              CR Digital Systems builds business websites around clear offers, customer journeys and
              the systems that handle enquiries — not just visual presentation.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(10,140,255,0.22)] hover:bg-[#1598ff] hover:border-[#64CEFB]/50 hover:-translate-y-0.5 transition-all duration-200 motion-reduce:transform-none"
              >
                Get a Free Audit
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                to="#customer-journey"
                className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
              >
                See what matters
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
            className="relative"
          >
            <div className="mb-3 flex justify-start">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full px-2.5 py-1"
                style={{ color: '#64CEFB', background: 'rgba(100,206,251,0.10)' }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: '#64CEFB' }}
                  aria-hidden="true"
                />
                Concept Demo
              </span>
            </div>
            <BusinessWebsiteMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section
      id="problem"
      className="py-24 bg-[#071725]"
      aria-label="Common website challenges"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            The problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            When the website looks fine but doesn't help the business enough.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problemCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.10 }}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(4,12,20,0.50)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-white/90 font-semibold text-sm mb-3 leading-snug">{card.title}</p>
              <p className="text-white/55 text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-24 bg-[#020B14]"
      aria-label="What a business website needs to do"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              What it needs to do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Six things a strong business website does well.
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Visual design is part of it. But a website that works for the business does more than
              look professional — it guides each visitor toward a specific outcome.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="rounded-2xl px-5 py-4"
                style={{
                  background: 'rgba(4,12,20,0.50)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: '#0A8CFF' }}
                >
                  {cap.label}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CustomerJourney() {
  return (
    <section
      id="customer-journey"
      className="py-24 bg-[#04101C]"
      aria-label="Customer journey stages"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            Customer journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            What a customer experiences on the way to getting in touch.
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Each stage is what the visitor is doing, not just what the page looks like. A site built
            around this journey removes friction at every point.
          </p>
        </motion.div>

        <div className="max-w-2xl relative">
          <div
            className="absolute left-[15px] top-6 bottom-6 w-px"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            aria-hidden="true"
          />

          <ol className="list-none p-0 m-0">
            {journeySteps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
                className={`relative flex gap-6 ${i < journeySteps.length - 1 ? 'pb-10' : ''}`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    background: '#04101C',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <span
                    className="text-[10px] font-mono font-bold"
                    style={{ color: 'rgba(10,140,255,0.80)' }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function SystemsAndTech() {
  return (
    <section
      id="systems-tech"
      className="py-24 bg-[#020B14]"
      aria-label="System connections and technical foundation"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            Systems & technical foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
            What it connects to and how it's built.
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            The connections and technical decisions are agreed during scoping. What is feasible
            depends on the tools the business already uses and what their APIs support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <h3 className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-6">
              Connections
            </h3>
            <ul className="space-y-5">
              {integrations.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <Check
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#0A8CFF' }}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-white/85 text-sm font-medium leading-snug mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white/55 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <h3 className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-6">
              Technical foundation
            </h3>
            <ul className="space-y-5">
              {techAreas.map((area) => (
                <li key={area.label} className="flex items-start gap-3">
                  <Check
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#64CEFB' }}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-white/85 text-sm font-medium leading-snug mb-0.5">
                      {area.label}
                    </p>
                    <p className="text-white/55 text-sm leading-relaxed">{area.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhenItMakesSense() {
  return (
    <section
      id="right-fit"
      className="py-24 bg-[#071725]"
      aria-label="When a custom website makes sense"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
            <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
            When it makes sense
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            A custom-built website isn't always the right answer.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl p-7"
            style={{
              background: 'rgba(10,140,255,0.06)',
              border: '1px solid rgba(10,140,255,0.18)',
            }}
          >
            <p className="text-[#64CEFB] text-xs uppercase tracking-widest font-semibold mb-5">
              More likely to be a good fit if
            </p>
            <ul className="space-y-3">
              {rightFitGood.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    size={14}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: '#0A8CFF' }}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span className="text-white/75 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="rounded-2xl p-7"
            style={{
              background: 'rgba(4,12,20,0.50)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p className="text-white/55 text-xs uppercase tracking-widest font-semibold mb-5">
              Less likely to be the right fit if
            </p>
            <ul className="space-y-3">
              {rightFitLess.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.30)' }}
                    aria-hidden="true"
                  />
                  <span className="text-white/55 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SolutionFAQ() {
  return (
    <section
      id="faq"
      className="py-24 bg-[#020B14]"
      aria-label="Frequently asked questions about business websites"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-[#0A8CFF] text-xs tracking-widest uppercase font-semibold mb-5">
              <span className="w-4 h-px bg-[#0A8CFF]/60" aria-hidden="true" />
              Common questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Answers to things that come up early.
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              More general questions about how CR Digital Systems works are answered on the{' '}
              <Link
                to="/#faq"
                className="text-[#64CEFB]/70 hover:text-[#64CEFB] underline underline-offset-2 transition-colors duration-200"
              >
                home FAQ
              </Link>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            <SolutionAccordion items={solutionFaqItems} id="bw-faq" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-28 bg-[#04101C] overflow-hidden"
      aria-label="Contact CR Digital Systems"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(10,140,255,0.10) 0%, transparent 72%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl mx-auto">
            Does your website make the next step clear?
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about the current site and what customers are supposed to do. We can review the
            customer journey, technical setup and where friction may exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#64CEFB]/30 bg-[#0A8CFF] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(10,140,255,0.22)] hover:bg-[#1598ff] hover:border-[#64CEFB]/50 hover:-translate-y-0.5 transition-all duration-200 motion-reduce:transform-none"
            >
              Get a Free Audit
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center gap-1.5 text-white/55 hover:text-white/80 text-sm transition-colors duration-200"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function BusinessWebsitesPage() {
  return (
    <>
      <PageMeta route="/solutions/business-websites" />
      <Hero />
      <Problem />
      <Capabilities />
      <CustomerJourney />
      <SystemsAndTech />
      <WhenItMakesSense />
      <SolutionFAQ />
      <FinalCTA />
    </>
  )
}
