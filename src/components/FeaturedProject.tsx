import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronUp, ExternalLink, Activity, Users, FileText, Calendar, Cloud, Database, Cpu, GitBranch, BarChart2 } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

// ─── Project data ─────────────────────────────────────────────────────────────

interface ProjectDetails {
  solves: string
  bestFor: string
  businessValue: string
  highlights: string[]
}

interface ProjectMeta {
  number: string
  topLabel: string
  title: string
  badge: string
  description: string
  note?: string
  features: string[]
  tech: string[]
  accentColor: string
  details: ProjectDetails
}

const TMS: ProjectMeta = {
  number: '01',
  topLabel: 'Primary featured demo',
  title: 'Therapy Management System',
  badge: 'Full-stack MVP',
  description:
    'A structured management platform for therapy and clinical teams that need to organize patients, appointments, therapy sessions, programs, reports, users and audit history in one place. The demo shows how a complex internal workflow can become a clearer digital system with role-based access, real dashboard data and organized reporting.',
  note: 'Technical project and case study demo. Security-focused architecture. No client data included.',
  features: ['Patients & Appointments', 'QR Check-in', 'Therapy Sessions', 'ABA Programs', 'Clinical Reports', 'User Management', 'RBAC', 'Audit Logs'],
  tech: ['React', 'TypeScript', '.NET', 'SQL Server', 'Docker', 'JWT / RBAC', 'Automated Tests'],
  accentColor: '#7b39fc',
  details: {
    solves: 'Therapy centers often manage many important workflows at the same time: patient information, appointments, therapy sessions, clinical programs, progress reports, staff roles and internal follow-ups. When these processes are handled through separate documents, messages, spreadsheets or disconnected tools, it becomes harder to maintain control and visibility.\n\nThis demo shows how those workflows can be centralized into one internal system. Instead of switching between different tools, the team can work from a structured platform where users, sessions, reports and records are connected in a more organized way.',
    bestFor: 'This type of system is useful for therapy centers, clinics, educational therapy teams or any organization where multiple staff members need access to different parts of the workflow. It fits especially well when there are different roles, such as managers, therapists, coordinators and administrators.\n\nIt is also useful for teams that need better structure around daily operations, patient-related workflows, internal responsibilities and reporting.',
    businessValue: 'The main value is better organization, visibility and control. Managers can get a clearer overview of activity, staff can work only with the information relevant to their role, and important actions can be tracked through audit logs.\n\nFor a business, this means fewer scattered processes, easier internal follow-up, clearer reporting and a more professional way of managing sensitive operational data. The demo also shows how a full-stack system can support structured workflows instead of relying on manual administration.',
    highlights: ['Role-based access', 'Audit logs', 'QR check-in', 'Clinical reports', 'Patient workflows', 'Real dashboard data', 'Full-stack architecture'],
  },
}

const BOOKING: ProjectMeta = {
  number: '02',
  topLabel: 'Business demo',
  title: 'Smart Booking & Mini CRM System',
  badge: 'Business Demo',
  description:
    'A practical booking and client management system for small service businesses that want to stop handling appointments, leads and follow-ups through scattered messages, spreadsheets or manual notes. It brings bookings, client information and follow-up work into one clean dashboard.',
  features: ['Online Booking', 'Admin Calendar', 'Client Profiles', 'Lead Pipeline', 'Follow-up Tracking', 'Dashboard Overview'],
  tech: ['React', 'TypeScript', '.NET', 'SQL Server', 'JWT', 'RBAC'],
  accentColor: '#64CEFB',
  details: {
    solves: 'Many small businesses manage appointments through phone calls, messages, calendars, spreadsheets and notes at the same time. This can work in the beginning, but as the business grows it often becomes difficult to keep track of who booked, who needs a follow-up and which clients are active.\n\nThis demo shows how bookings, clients, leads and follow-up tasks can be brought together in one simple system. Instead of searching through messages, emails or spreadsheets, the business can manage the client flow from one dashboard.',
    bestFor: 'This type of system is useful for consultants, local service providers, small clinics, salons, trainers, agencies, repair services and small teams that depend on appointments or recurring client communication.\n\nIt is especially useful for businesses that do not need a large enterprise CRM, but still want a professional way to organize bookings, clients and follow-ups.',
    businessValue: 'The business gets a clearer overview of appointments, active clients and leads that still need attention. It becomes easier to avoid missed follow-ups, reduce manual work and make the booking process feel more professional.\n\nFor the owner or team, the biggest benefit is saving time and keeping control. Instead of managing information in different places, the system creates one clear workflow from booking to follow-up.',
    highlights: ['Online booking', 'Admin calendar', 'Client profiles', 'Lead pipeline', 'Follow-up tracking', 'Dashboard overview'],
  },
}

const AUTOMATION: ProjectMeta = {
  number: '03',
  topLabel: 'Automation demo',
  title: 'Business Automation Dashboard',
  badge: 'Automation Demo',
  description:
    'A workflow dashboard for businesses that want to replace repetitive manual work with clearer processes, task tracking, reports and operational overview. It shows how daily work can become easier to follow, measure and improve.',
  features: ['Workflow Tracking', 'Business Metrics', 'Task Automation', 'PDF / Excel Reports', 'Admin Panel', 'API-ready Structure'],
  tech: ['React', 'TypeScript', 'REST APIs', 'SQL Database', 'Automation', 'Reports'],
  accentColor: '#7b39fc',
  details: {
    solves: 'Many businesses still manage important tasks through Excel, email, WhatsApp, shared documents or disconnected tools. This can make it difficult to know what has been completed, what is delayed, who is responsible and what needs attention next.\n\nThis demo shows how repetitive manual operations can be turned into a structured workflow dashboard. Tasks, activity history, reports and business metrics are presented in one place, making it easier to understand the status of daily operations.',
    bestFor: 'This type of system is useful for small businesses, internal teams, service companies, agencies or operations teams that need a better way to track work, monitor activity and follow progress.\n\nIt fits especially well when the business has recurring tasks, repeated workflows, manual reporting or information spread across too many places.',
    businessValue: 'The main value is operational control. Owners and teams can see what is happening, identify delays, track completed work and understand important metrics without manually checking several tools.\n\nThis can reduce time spent on repetitive administration and help the business make faster decisions. The system also gives a more professional structure for reporting and internal workflows.',
    highlights: ['Workflow tracking', 'Task automation', 'Business metrics', 'Reports', 'Admin panel', 'API-ready structure', 'Activity log'],
  },
}

const AZURE_PORTAL: ProjectMeta = {
  number: '04',
  topLabel: 'Azure cloud demo',
  title: 'Azure Business Operations Portal',
  badge: 'Azure Cloud Demo',
  description:
    'A cloud-ready internal business portal that shows how companies can manage leads, clients, tasks, reports and workflows using an Azure-focused architecture. It connects business operations with cloud deployment, database structure, secure access and monitoring-ready foundations.',
  features: ['Lead Management', 'Client Profiles', 'Task Tracking', 'Business Dashboard', 'Report Exports', 'Role-based Access', 'Cloud Deployment', 'Serverless Automation', 'Monitoring-ready Architecture'],
  tech: ['React', 'TypeScript', '.NET', 'Azure App Service', 'Azure SQL', 'Azure Functions', 'Azure DevOps', 'Docker', 'JWT / RBAC', 'Application Insights'],
  accentColor: '#0078D4',
  details: {
    solves: 'As a business grows, simple tools like spreadsheets, shared documents and manual tracking can become harder to manage. Information can become spread out, access can be difficult to control, and reporting can take more time than necessary.\n\nThis demo shows how an internal business portal can be prepared for a more professional cloud-ready setup. It brings together dashboard views, data management, secure access, deployment structure and monitoring ideas in one system concept.',
    bestFor: 'This type of system is useful for businesses that want a more professional internal portal with a dashboard, database, API structure, cloud deployment workflow and room for future integrations.\n\nIt fits companies that want to move away from manual internal tools and prepare for a more scalable and maintainable digital system.',
    businessValue: 'The business gets a stronger technical foundation for managing operations. A cloud-ready portal can support structured data, secure access, deployment workflows and future expansion.\n\nThis demo also shows how Azure-focused tools can support a business system through services such as Azure App Service, Azure SQL, Azure Functions, Azure DevOps and monitoring-ready architecture. The goal is not just to build a nice interface, but to show how the system could be prepared for real deployment, maintenance and growth.',
    highlights: ['Azure App Service', 'Azure SQL', 'Azure Functions', 'Azure DevOps', 'Docker', 'JWT / RBAC', 'Monitoring-ready structure'],
  },
}

// ─── TMS dashboard mockup ─────────────────────────────────────────────────────

function TmsMockup() {
  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <span className="ml-3 text-white/30 text-xs font-mono">therapy-system — dashboard</span>
        <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live demo
        </div>
      </div>

      <div className="flex min-h-[340px]">
        <div className="hidden sm:flex flex-col gap-1 w-44 border-r border-white/05 p-3 bg-white/01 flex-shrink-0">
          {['Dashboard', 'Patients', 'Appointments', 'Sessions', 'Reports', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs ${
                i === 0 ? 'bg-[#7b39fc]/20 text-[#a78bfa]' : 'text-white/40'
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#7b39fc]' : 'bg-white/20'}`} />
              {item}
            </div>
          ))}
        </div>

        <div className="flex-1 p-4 space-y-3 min-w-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {[
              { label: 'Active Patients', value: '48', icon: Users, color: '#7b39fc' },
              { label: 'Sessions Today', value: '12', icon: Calendar, color: '#64CEFB' },
              { label: 'Reports', value: '7', icon: FileText, color: '#7b39fc' },
              { label: 'System Status', value: 'Online', icon: Activity, color: '#34d399' },
            ].map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="glass rounded-2xl p-3 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs leading-none">{label}</span>
                  <Icon size={13} style={{ color }} />
                </div>
                <span className="text-white font-bold text-lg leading-none" style={{ color }}>{value}</span>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/60 text-xs font-medium">Weekly Session Progress</span>
              <span className="text-[#64CEFB] text-xs">+18%</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[40, 65, 55, 80, 70, 90, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 5 ? 'linear-gradient(to top, #7b39fc, #64CEFB)' : 'rgba(255,255,255,0.08)',
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={i} className="flex-1 text-center text-white/25 text-xs">{d}</span>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-4">
            <span className="text-white/50 text-xs font-medium block mb-2">Recent Activity</span>
            <div className="space-y-2">
              {[
                { action: 'QR Check-in', detail: 'Patient #014 — 09:15', color: '#64CEFB' },
                { action: 'Session logged', detail: 'ABA Program B — 09:30', color: '#7b39fc' },
                { action: 'Report generated', detail: 'Monthly clinical — 08:45', color: '#34d399' },
              ].map(({ action, detail, color }) => (
                <div key={action} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-white/70 text-xs">{action}</span>
                  <span className="text-white/30 text-xs ml-auto">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Booking & CRM mockup ─────────────────────────────────────────────────────

function BookingMockup() {
  const steps = [
    { name: 'Data Intake', done: true },
    { name: 'Processing', active: true },
    { name: 'Review', pending: true },
    { name: 'Export', pending: true },
  ]

  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <span className="ml-3 text-white/30 text-xs font-mono">booking-crm — calendar</span>
        <div className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: '#64CEFB' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#64CEFB' }} />
          5 bookings today
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 p-4 border-b border-white/05">
        {[
          { label: 'Total Clients', value: '24', color: '#64CEFB' },
          { label: 'Bookings Today', value: '5', color: '#34d399' },
          { label: 'Pending Follow-up', value: '8', color: '#a78bfa' },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass rounded-2xl p-3 flex flex-col gap-1">
            <span className="text-white/40 text-xs leading-none">{label}</span>
            <span className="font-bold text-xl leading-none mt-1" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Calendar + CRM sidebar */}
      <div className="flex min-h-[240px]">
        {/* Calendar */}
        <div className="flex-1 p-4 border-r border-white/05 min-w-0">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/55 text-xs font-medium">Week · May 19–23, 2026</span>
            <span className="text-white/30 text-xs">May 2026</span>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-5 gap-1 mb-2">
            {[
              { day: 'Mon', date: '19' },
              { day: 'Tue', date: '20' },
              { day: 'Wed', date: '21', today: true },
              { day: 'Thu', date: '22' },
              { day: 'Fri', date: '23' },
            ].map(({ day, date, today }) => (
              <div key={day} className={`text-center rounded-xl py-1.5 ${today ? 'bg-[#64CEFB]/12' : ''}`}>
                <p className="text-white/35 text-[10px]">{day}</p>
                <p className={`text-sm font-bold ${today ? 'text-[#64CEFB]' : 'text-white/55'}`}>{date}</p>
              </div>
            ))}
          </div>

          {/* Appointment slots */}
          <div className="space-y-1.5">
            {[
              { time: '09:00', col: 0, name: 'Anna K.', type: 'Consultation' },
              { time: '11:00', col: 2, name: 'Marcus L.', type: 'Follow-up' },
              { time: '13:30', col: 1, name: 'Sofia B.', type: 'Intro call' },
              { time: '15:00', col: 4, name: 'Erik P.', type: 'Review' },
            ].map(({ time, col, name, type }) => (
              <div key={time} className="grid grid-cols-[3rem_repeat(5,1fr)] gap-1 items-center">
                <span className="text-white/25 text-[10px] text-right">{time}</span>
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-7 rounded-lg flex items-center px-1.5 overflow-hidden ${
                      i === col
                        ? 'border'
                        : 'bg-white/02'
                    }`}
                    style={i === col ? {
                      background: 'rgba(100,206,251,0.12)',
                      borderColor: 'rgba(100,206,251,0.3)',
                    } : {}}
                  >
                    {i === col && (
                      <span className="text-[9px] font-medium truncate" style={{ color: '#64CEFB' }}>
                        {name} · {type}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CRM pipeline */}
        <div className="hidden sm:flex flex-col w-44 flex-shrink-0 p-3 gap-1.5">
          <span className="text-white/35 text-[10px] uppercase tracking-wide font-medium mb-1">CRM Pipeline</span>
          {[
            { stage: 'New Lead', count: 4, color: '#a78bfa' },
            { stage: 'Contacted', count: 7, color: '#64CEFB' },
            { stage: 'Active Client', count: 9, color: '#34d399' },
            { stage: 'Follow-up due', count: 4, color: '#fb923c' },
          ].map(({ stage, count, color }) => (
            <div key={stage} className="glass rounded-xl px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                <span className="text-white/55 text-[10px]">{stage}</span>
              </div>
              <span className="font-bold text-xs" style={{ color }}>{count}</span>
            </div>
          ))}
          <div className="mt-3 pt-2.5 border-t border-white/06 space-y-2">
            <span className="text-white/30 text-[10px] uppercase tracking-wide block">Recent activity</span>
            {[
              { name: 'Anna K.', note: 'Booking confirmed' },
              { name: 'Erik P.', note: 'New lead added' },
            ].map(({ name, note }) => (
              <div key={name}>
                <p className="text-white/60 text-[10px] font-medium">{name}</p>
                <p className="text-white/30 text-[9px]">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unused steps variable — kept for parity; remove if linter flags */}
      {steps.length === 0 && null}
    </div>
  )
}

// ─── Automation dashboard mockup ──────────────────────────────────────────────

function AutomationMockup() {
  const pipeline = [
    { name: 'Data Intake', status: 'done' as const },
    { name: 'Processing', status: 'active' as const },
    { name: 'Review', status: 'pending' as const },
    { name: 'Export', status: 'pending' as const },
  ]

  const statusStyle = (s: 'done' | 'active' | 'pending') =>
    s === 'done'
      ? { box: 'bg-[#34d399]/12 border border-[#34d399]/25', text: 'text-[#34d399]', sub: '✓ Done' }
      : s === 'active'
      ? { box: 'bg-[#7b39fc]/12 border border-[#7b39fc]/30', text: 'text-[#a78bfa]', sub: '72%' }
      : { box: 'bg-white/03 border border-white/06', text: 'text-white/30', sub: 'Pending' }

  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <span className="ml-3 text-white/30 text-xs font-mono">automation-dashboard — workflows</span>
        <div className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          5 flows active
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-4 border-b border-white/05">
        {[
          { label: 'Tasks Automated', value: '147', color: '#7b39fc' },
          { label: 'Hours Saved', value: '38h', color: '#64CEFB' },
          { label: 'Reports Ready', value: '12', color: '#34d399' },
          { label: 'Active Flows', value: '5', color: '#a78bfa' },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass rounded-2xl p-3 flex flex-col gap-1">
            <span className="text-white/40 text-xs leading-none">{label}</span>
            <span className="font-bold text-lg leading-none mt-1" style={{ color }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Workflow pipeline */}
      <div className="p-4 border-b border-white/05">
        <span className="text-white/45 text-xs font-medium block mb-3">Workflow Pipeline</span>
        <div className="flex items-stretch gap-1">
          {pipeline.map((step, i) => {
            const s = statusStyle(step.status)
            return (
              <div key={step.name} className="flex items-center flex-1 gap-1">
                <div className={`flex-1 rounded-xl px-2 py-2 text-center ${s.box}`}>
                  <span className={`text-[10px] font-medium block ${s.text}`}>{step.name}</span>
                  <span className="text-[9px] text-white/30">{s.sub}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="w-3 flex-shrink-0">
                    <div className={`h-px w-full ${step.status === 'done' ? 'bg-[#34d399]/35' : 'bg-white/08'}`} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Tasks + Activity log */}
      <div className="flex min-h-[150px]">
        <div className="flex-1 p-4 border-r border-white/05 min-w-0">
          <span className="text-white/40 text-[10px] uppercase tracking-wide font-medium block mb-3">Active Tasks</span>
          <div className="space-y-3">
            {[
              { name: 'Monthly report', status: 'In progress', pct: 65, color: '#7b39fc' },
              { name: 'Client data sync', status: 'Completed', pct: 100, color: '#34d399' },
              { name: 'Invoice export', status: 'Queued', pct: 0, color: '#a78bfa' },
            ].map(({ name, status, pct, color }) => (
              <div key={name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white/65 text-xs">{name}</span>
                  <span className="text-[10px] font-medium" style={{ color }}>{status}</span>
                </div>
                <div className="h-1 bg-white/06 rounded-full">
                  <div className="h-1 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:block w-48 flex-shrink-0 p-4">
          <span className="text-white/40 text-[10px] uppercase tracking-wide font-medium block mb-3">Activity Log</span>
          <div className="space-y-2.5">
            {[
              { event: 'Report exported', time: '09:41', color: '#34d399' },
              { event: 'Workflow triggered', time: '09:17', color: '#7b39fc' },
              { event: 'Data synced', time: '08:55', color: '#64CEFB' },
              { event: 'Task completed', time: '08:30', color: '#34d399' },
            ].map(({ event, time, color }) => (
              <div key={event} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full mt-0.5 flex-shrink-0" style={{ background: color }} />
                <div>
                  <p className="text-white/60 text-[10px] leading-tight">{event}</p>
                  <p className="text-white/25 text-[9px]">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Reusable project showcase ────────────────────────────────────────────────

// ─── Azure Portal mockup ──────────────────────────────────────────────────────

function AzurePortalMockup() {
  const accent = '#0078D4'
  const services = [
    { icon: Cloud, label: 'App Service', status: 'Running', color: '#0078D4' },
    { icon: Database, label: 'Azure SQL', status: 'Connected', color: '#0078D4' },
    { icon: Cpu, label: 'Azure Functions', status: '3 active', color: '#0ea5e9' },
    { icon: GitBranch, label: 'Azure DevOps', status: 'CI/CD live', color: '#0ea5e9' },
  ]
  const pipeline = [
    { step: 'Build', status: 'passed', pct: 100 },
    { step: 'Test', status: 'passed', pct: 100 },
    { step: 'Deploy', status: 'live', pct: 100 },
  ]
  const metrics = [
    { label: 'API Requests', value: '14.2k', sub: '/ 24h' },
    { label: 'Response Time', value: '112ms', sub: 'avg' },
    { label: 'DB Queries', value: '98.7%', sub: 'success' },
    { label: 'Uptime', value: '99.9%', sub: 'last 30d' },
  ]

  return (
    <div className="glass rounded-3xl overflow-hidden border border-white/08">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/06 bg-white/02">
        <div className="w-3 h-3 rounded-full bg-white/15" />
        <div className="w-3 h-3 rounded-full bg-white/10" />
        <div className="w-3 h-3 rounded-full bg-white/08" />
        <span className="ml-3 text-white/30 text-xs font-mono">azure-portal — cloud dashboard</span>
        <div className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: accent }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
          Azure demo
        </div>
      </div>

      <div className="flex min-h-[340px]">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col gap-1 w-40 border-r border-white/05 p-3 bg-white/01 flex-shrink-0">
          {['Overview', 'Leads', 'Clients', 'Tasks', 'Reports', 'Settings'].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs ${
                i === 0 ? 'text-white font-medium' : 'text-white/40'
              }`}
              style={i === 0 ? { background: `${accent}22` } : {}}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: i === 0 ? accent : 'rgba(255,255,255,0.15)' }}
              />
              {item}
            </div>
          ))}
          <div className="mt-auto pt-4 border-t border-white/05">
            <div className="text-white/20 text-[10px] px-3 mb-1 uppercase tracking-widest">Environment</div>
            <div className="flex items-center gap-1.5 px-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 text-[10px]">Production</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 sm:p-5 space-y-4 overflow-hidden">
          {/* Metric row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {metrics.map(({ label, value, sub }) => (
              <div key={label} className="rounded-xl p-3 border border-white/06 bg-white/02">
                <p className="text-white/35 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                <p className="text-white font-bold text-base leading-none">
                  {value}
                  <span className="text-white/35 text-[10px] font-normal ml-1">{sub}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Azure services */}
          <div className="rounded-xl border border-white/06 bg-white/02 p-3">
            <p className="text-white/35 text-[10px] uppercase tracking-widest mb-3">Azure Services</p>
            <div className="grid grid-cols-2 gap-2">
              {services.map(({ icon: Icon, label, status, color }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-lg px-3 py-2 border border-white/05 bg-white/02">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}18` }}>
                    <Icon size={13} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/70 text-[11px] font-medium truncate">{label}</p>
                    <p className="text-[10px]" style={{ color }}>{status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CI/CD pipeline */}
          <div className="rounded-xl border border-white/06 bg-white/02 p-3">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white/35 text-[10px] uppercase tracking-widest">Deployment Pipeline</p>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                <BarChart2 size={10} />
                All checks passed
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {pipeline.map(({ step, status }, idx) => (
                <div key={step} className="flex items-center gap-1.5 flex-1">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/50 text-[10px]">{step}</span>
                      <span className="text-[10px] text-emerald-400">{status}</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/08">
                      <div className="h-1 rounded-full bg-emerald-400" style={{ width: '100%' }} />
                    </div>
                  </div>
                  {idx < pipeline.length - 1 && <span className="text-white/20 text-xs flex-shrink-0">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Project atmosphere backgrounds ──────────────────────────────────────────

/** TMS — cyan/teal clinical atmosphere with data grid and light streak */
function TmsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Cyan upper-right bloom */}
      <div
        className="absolute"
        style={{
          top: '-10%', right: '-5%', width: '55%', height: '70%',
          background: 'radial-gradient(ellipse at 65% 35%, rgba(100,206,251,0.10) 0%, rgba(20,184,166,0.06) 45%, transparent 70%)',
        }}
      />
      {/* Teal lower-left ambient */}
      <div
        className="absolute"
        style={{
          bottom: '-5%', left: '-5%', width: '45%', height: '55%',
          background: 'radial-gradient(ellipse at 35% 65%, rgba(20,184,166,0.08) 0%, rgba(100,206,251,0.04) 45%, transparent 70%)',
        }}
      />
      {/* Subtle data grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(100,206,251,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(100,206,251,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Diagonal light streak */}
      <div
        className="absolute"
        style={{
          top: '18%', left: '-5%', width: '62%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(100,206,251,0.18), transparent)',
          transform: 'rotate(-7deg)',
          transformOrigin: '0 0',
        }}
      />
    </div>
  )
}

/** Booking — sky-blue / cyan business-flow atmosphere with flowing streaks */
function BookingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Sky-blue upper-left bloom */}
      <div
        className="absolute"
        style={{
          top: '-5%', left: '-5%', width: '50%', height: '65%',
          background: 'radial-gradient(ellipse at 30% 30%, rgba(56,189,248,0.10) 0%, rgba(100,206,251,0.05) 45%, transparent 70%)',
        }}
      />
      {/* Cyan center-right glow */}
      <div
        className="absolute"
        style={{
          top: '20%', right: '-10%', width: '50%', height: '60%',
          background: 'radial-gradient(ellipse at 70% 45%, rgba(100,206,251,0.08) 0%, rgba(56,189,248,0.04) 45%, transparent 70%)',
        }}
      />
      {/* Flowing diagonal streak — upper */}
      <div
        className="absolute"
        style={{
          top: '15%', left: '-10%', width: '72%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.20), transparent)',
          transform: 'rotate(-6deg)',
          transformOrigin: '0 0',
        }}
      />
      {/* Flowing diagonal streak — lower */}
      <div
        className="absolute"
        style={{
          top: '42%', left: '-5%', width: '52%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(100,206,251,0.14), transparent)',
          transform: 'rotate(-6deg)',
          transformOrigin: '0 0',
        }}
      />
    </div>
  )
}

/** Automation — purple/violet/electric-blue with node dots and energetic streaks */
function AutomationBackground() {
  const dots = [
    { top: '20%', left: '15%' }, { top: '45%', left: '35%' }, { top: '70%', left: '22%' },
    { top: '30%', left: '62%' }, { top: '60%', left: '76%' }, { top: '14%', left: '80%' },
    { top: '80%', left: '55%' }, { top: '50%', left: '90%' },
  ]
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Purple upper-right bloom */}
      <div
        className="absolute"
        style={{
          top: '-10%', right: '-5%', width: '55%', height: '65%',
          background: 'radial-gradient(ellipse at 60% 35%, rgba(123,57,252,0.12) 0%, rgba(99,102,241,0.06) 45%, transparent 70%)',
        }}
      />
      {/* Electric-blue lower-left */}
      <div
        className="absolute"
        style={{
          bottom: '-5%', left: '-10%', width: '50%', height: '55%',
          background: 'radial-gradient(ellipse at 35% 65%, rgba(99,102,241,0.10) 0%, rgba(123,57,252,0.05) 45%, transparent 70%)',
        }}
      />
      {/* Node dots */}
      {dots.map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: pos.top, left: pos.left,
            width: '3px', height: '3px',
            background: i % 2 === 0 ? 'rgba(123,57,252,0.35)' : 'rgba(99,102,241,0.30)',
          }}
        />
      ))}
      {/* Energetic diagonal streak — top */}
      <div
        className="absolute"
        style={{
          top: '12%', left: '-5%', width: '65%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(123,57,252,0.25), transparent)',
          transform: 'rotate(-10deg)',
          transformOrigin: '0 0',
        }}
      />
      {/* Energetic diagonal streak — mid */}
      <div
        className="absolute"
        style={{
          top: '52%', right: '-5%', width: '55%', height: '1px',
          background: 'linear-gradient(90deg, rgba(99,102,241,0.20), rgba(123,57,252,0.15), transparent)',
          transform: 'rotate(-10deg)',
          transformOrigin: '100% 0',
        }}
      />
    </div>
  )
}

/** Azure Portal — Azure blue/navy/cyan with orbital rings and cloud streaks */
function AzureBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Azure blue center-right bloom */}
      <div
        className="absolute"
        style={{
          top: '5%', right: '-10%', width: '60%', height: '70%',
          background: 'radial-gradient(ellipse at 65% 40%, rgba(0,120,212,0.13) 0%, rgba(0,120,212,0.05) 45%, transparent 70%)',
        }}
      />
      {/* Cyan ambient upper-left */}
      <div
        className="absolute"
        style={{
          top: '-10%', left: '-5%', width: '45%', height: '55%',
          background: 'radial-gradient(ellipse at 35% 30%, rgba(100,206,251,0.09) 0%, rgba(0,120,212,0.04) 50%, transparent 70%)',
        }}
      />
      {/* Outer orbital ring */}
      <div
        className="absolute"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '620px', height: '620px',
          borderRadius: '50%',
          border: '1px solid rgba(0,120,212,0.10)',
        }}
      />
      {/* Inner orbital ring */}
      <div
        className="absolute"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '390px', height: '390px',
          borderRadius: '50%',
          border: '1px solid rgba(100,206,251,0.07)',
        }}
      />
      {/* Azure cloud streak */}
      <div
        className="absolute"
        style={{
          top: '26%', left: '-5%', width: '76%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,120,212,0.20), rgba(100,206,251,0.12), transparent)',
          transform: 'rotate(-4deg)',
          transformOrigin: '0 0',
        }}
      />
    </div>
  )
}

// ─── Details panel ───────────────────────────────────────────────────────────

/** Splits a string on double-newlines and renders each chunk as its own paragraph. */
function Paragraphs({ text, className }: { text: string; className?: string }) {
  const paras = text.split('\n\n').filter(Boolean)
  return (
    <>
      {paras.map((para, i) => (
        <p key={i} className={`${className ?? ''} ${i > 0 ? 'mt-3' : ''}`}>
          {para}
        </p>
      ))}
    </>
  )
}

function DetailsPanel({ details, accentColor }: { details: ProjectDetails; accentColor: string }) {
  return (
    <div
      className="rounded-3xl p-6 sm:p-8"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderTop: `2px solid ${accentColor}55`,
        boxShadow: `0 8px 48px rgba(0,0,0,0.40), 0 0 0 1px ${accentColor}0C`,
      }}
    >
      {/* Row 1 — What it solves + Best for (side by side on sm+) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mb-6 pb-6 border-b border-white/06">

        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-3"
            style={{ color: `${accentColor}BB` }}
          >
            What it solves
          </p>
          <Paragraphs text={details.solves} className="text-white/65 text-sm leading-relaxed" />
        </div>

        <div>
          <p
            className="text-[10px] font-semibold uppercase tracking-widest mb-3"
            style={{ color: `${accentColor}BB` }}
          >
            Best for
          </p>
          <Paragraphs text={details.bestFor} className="text-white/65 text-sm leading-relaxed" />
        </div>

      </div>

      {/* Row 2 — Business value (full width) */}
      <div className="mb-6 pb-6 border-b border-white/06">
        <p
          className="text-[10px] font-semibold uppercase tracking-widest mb-3"
          style={{ color: `${accentColor}BB` }}
        >
          Business value
        </p>
        <Paragraphs text={details.businessValue} className="text-white/65 text-sm leading-relaxed" />
      </div>

      {/* Row 3 — Highlights pills (full width) */}
      <div>
        <p
          className="text-[10px] font-semibold uppercase tracking-widest mb-3"
          style={{ color: `${accentColor}BB` }}
        >
          Highlights
        </p>
        <div className="flex flex-wrap gap-2">
          {details.highlights.map((h) => (
            <span
              key={h}
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{
                color: accentColor,
                background: `${accentColor}14`,
                border: `1px solid ${accentColor}30`,
              }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────

interface ShowcaseProps {
  data: ProjectMeta
  mockup: React.ReactNode
  reversed?: boolean
  isOpen: boolean
  onToggle: () => void
  background?: React.ReactNode
}

function ProjectShowcase({ data, mockup, reversed = false, isOpen, onToggle, background }: ShowcaseProps) {
  const { number, topLabel, title, badge, description, note, features, tech, accentColor, details } = data

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: EASE }}
      className="relative"
    >
      {/* Per-project atmosphere background */}
      {background}
      {/* Project label row */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl font-black text-white/08 font-mono">{number}</span>
        <div className="h-px flex-1 bg-white/06" />
        <span className="text-white/30 text-xs uppercase tracking-widest font-medium">{topLabel}</span>
      </div>

      {/* Two-column grid — DOM order: [text, mockup]; reversed visually on lg via order */}
      <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

        {/* Text column */}
        <div className={reversed ? 'lg:order-2' : 'lg:order-1'}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">{title}</h3>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full border flex-shrink-0"
              style={{
                color: accentColor,
                background: `${accentColor}18`,
                borderColor: `${accentColor}35`,
              }}
            >
              {badge}
            </span>
          </div>

          <p className="text-white/58 text-base leading-relaxed mb-6">{description}</p>

          {note && (
            <div
              className="p-4 glass rounded-2xl mb-6"
              style={{ borderLeft: `2px solid ${accentColor}50` }}
            >
              <p className="text-white/45 text-sm leading-relaxed">
                <span className="text-white/65 font-medium">Note: </span>{note}
              </p>
            </div>
          )}

          <div className="mb-5">
            <p className="text-white/35 text-xs uppercase tracking-widest font-medium mb-3">Features</p>
            <div className="flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f}
                  className="text-xs text-white/65 bg-white/05 border border-white/08 px-3 py-1 rounded-full"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-white/35 text-xs uppercase tracking-widest font-medium mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{
                    color: accentColor,
                    background: `${accentColor}10`,
                    borderColor: `${accentColor}28`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className="group inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm"
              style={{
                background: accentColor,
                boxShadow: `0 8px 24px ${accentColor}30`,
              }}
            >
              {isOpen ? 'Hide Details' : 'View Details'}
              {isOpen
                ? <ChevronUp size={16} />
                : <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              }
            </button>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 glass text-white/75 hover:text-white font-semibold px-6 py-3 rounded-full border border-white/12 hover:border-white/22 transition-all duration-300 text-sm"
            >
              <ExternalLink size={15} />
              Request Similar System
            </a>
          </div>
        </div>

        {/* Mockup column */}
        <div className={reversed ? 'lg:order-1' : 'lg:order-2'}>
          {mockup}
        </div>
      </div>

      {/* Full-width details panel — expands below both columns */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`details-${number}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              height: { duration: 0.45, ease: EASE },
              opacity: { duration: 0.3 },
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="mt-8">
              <DetailsPanel details={details} accentColor={accentColor} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export default function FeaturedProject() {
  const [openPanel, setOpenPanel] = useState<string | null>(null)
  const toggle = (id: string) => setOpenPanel((prev) => (prev === id ? null : id))

  return (
    <section
      id="work"
      className="relative py-28 bg-black overflow-hidden"
      aria-label="Work and demos"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.09] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,206,251,0.7) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.09] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,57,252,0.7) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 text-[#64CEFB] text-xs tracking-widest uppercase font-semibold mb-4">
            <span className="w-4 h-px bg-[#64CEFB]" />
            Selected system demos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Full-stack systems built{' '}
            <span className="text-gradient">to solve real problems.</span>
          </h2>
        </motion.div>

        {/* 01 — Therapy Management System */}
        <ProjectShowcase
          data={TMS}
          mockup={<TmsMockup />}
          reversed={false}
          isOpen={openPanel === TMS.number}
          onToggle={() => toggle(TMS.number)}
          background={<TmsBackground />}
        />

        {/* 02 — Smart Booking & Mini CRM */}
        <div className="mt-24 lg:mt-28">
          <ProjectShowcase
            data={BOOKING}
            mockup={<BookingMockup />}
            reversed={true}
            isOpen={openPanel === BOOKING.number}
            onToggle={() => toggle(BOOKING.number)}
            background={<BookingBackground />}
          />
        </div>

        {/* 03 — Business Automation Dashboard */}
        <div className="mt-24 lg:mt-28">
          <ProjectShowcase
            data={AUTOMATION}
            mockup={<AutomationMockup />}
            reversed={false}
            isOpen={openPanel === AUTOMATION.number}
            onToggle={() => toggle(AUTOMATION.number)}
            background={<AutomationBackground />}
          />
        </div>

        {/* 04 — Azure Business Operations Portal */}
        <div className="mt-24 lg:mt-28">
          <ProjectShowcase
            data={AZURE_PORTAL}
            mockup={<AzurePortalMockup />}
            reversed={true}
            isOpen={openPanel === AZURE_PORTAL.number}
            onToggle={() => toggle(AZURE_PORTAL.number)}
            background={<AzureBackground />}
          />
        </div>

      </div>
    </section>
  )
}
