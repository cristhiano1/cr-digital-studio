import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const frame = requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView()
        }, 0)
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [hash, pathname])

  return null
}
