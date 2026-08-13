import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const scroll = () => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView()
      }
      const frame = requestAnimationFrame(() => setTimeout(scroll, 0))
      return () => cancelAnimationFrame(frame)
    }

    if (pathname !== prevPath.current) {
      window.scrollTo(0, 0)
    }
    prevPath.current = pathname
  }, [hash, pathname])

  return null
}
