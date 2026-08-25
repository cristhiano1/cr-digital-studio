import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const video = videoRef.current
    if (!video || prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.05 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #020B14 0%, #04101C 50%, #000000 100%)' }}
      />

      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/75" />

      {/* Local text-region darkening — soft elliptical, no hard edge */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '12%',
          left: 0,
          width: '54%',
          height: '62%',
          background:
            'radial-gradient(ellipse 90% 80% at 35% 48%, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.07) 45%, transparent 78%)',
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.18] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10,140,255,0.5) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.14] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(100,206,251,0.4) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
