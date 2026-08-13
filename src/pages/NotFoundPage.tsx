import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="text-[#64CEFB] text-sm font-mono tracking-widest uppercase mb-3">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-white/50 text-sm mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-full bg-[#0074D9] hover:bg-[#0A8CFF] text-white text-sm font-semibold px-6 py-2.5 transition-all duration-200 hover:-translate-y-0.5 motion-reduce:transform-none"
        style={{ boxShadow: '0 4px 16px rgba(0,116,217,0.25)' }}
      >
        Back to home
      </Link>
    </div>
  )
}
