interface ConceptMediaProps {
  videoSrc?: string
  videoPoster?: string
  children: React.ReactNode
}

export default function ConceptMedia({ videoSrc, videoPoster, children }: ConceptMediaProps) {
  if (videoSrc) {
    return (
      <div className="w-full aspect-video rounded-3xl overflow-hidden bg-black">
        <video
          src={videoSrc}
          poster={videoPoster}
          controls
          preload="metadata"
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return <div className="w-full">{children}</div>
}
