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
    video.play().catch(() => {})
  }, [prefersReducedMotion])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-[#02070d] via-[#02060b] to-black" />

      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.24] saturate-[0.72]"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#00111f]/35 to-black/85" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.24)_0%,transparent_48%,rgba(0,0,0,0.18)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <div
        className="absolute -bottom-40 -left-24 w-[650px] h-[650px] rounded-full opacity-[0.18] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10,140,255,0.55) 0%, rgba(10,140,255,0.12) 38%, transparent 70%)',
        }}
      />

      <div
        className="absolute -top-32 right-[-80px] w-[620px] h-[620px] rounded-full opacity-[0.16] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(100,206,251,0.45) 0%, rgba(100,206,251,0.10) 42%, transparent 72%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.13] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(100,206,251,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(100,206,251,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 82%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 82%)',
        }}
      />
    </div>
  )
}
