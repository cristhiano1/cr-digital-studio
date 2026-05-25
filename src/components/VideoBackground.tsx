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
    video.play().catch(() => {
      // Autoplay blocked — fallback gradient handles this gracefully
    })
  }, [prefersReducedMotion])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black" aria-hidden="true">

      {/* ① Base atmosphere gradient — always present, acts as fallback when video absent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0010] via-[#050008] to-black" />

      {/* ② Video — renders above the gradient, visible against the dark base */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
      )}

      {/* ③ Readability overlay — top/bottom darker to keep text legible, open in middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/75" />

      {/* ④ Bottom fade — smooth transition into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* ⑤ Purple radial accent — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,57,252,0.6) 0%, transparent 70%)',
        }}
      />

      {/* ⑥ Cyan radial accent — top right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(100,206,251,0.5) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
