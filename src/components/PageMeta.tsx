import { useEffect } from 'react'
import routeMeta from '../data/routeMeta.json'

type RouteKey = keyof typeof routeMeta.routes

interface RouteMeta {
  title: string
  description: string
  robots: string
  noCanonical?: boolean
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const selector = `meta[${attr}="${name}"]`
  let el = document.querySelector(selector) as HTMLMetaElement | null
  if (el) {
    el.setAttribute('content', content)
  } else {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    el.setAttribute('content', content)
    document.head.appendChild(el)
  }
}

function removeMeta(name: string, attr: 'name' | 'property' = 'name') {
  const el = document.querySelector(`meta[${attr}="${name}"]`)
  if (el) el.remove()
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (el) {
    el.setAttribute('href', href)
  } else {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    el.setAttribute('href', href)
    document.head.appendChild(el)
  }
}

function removeCanonical() {
  const el = document.querySelector('link[rel="canonical"]')
  if (el) el.remove()
}

export default function PageMeta({ route }: { route: RouteKey }) {
  useEffect(() => {
    const meta = routeMeta.routes[route] as RouteMeta
    const fullTitle = `${meta.title} | ${routeMeta.siteName}`

    document.title = fullTitle

    setMeta('description', meta.description)
    setMeta('robots', meta.robots)

    if (meta.noCanonical) {
      removeCanonical()
      removeMeta('og:url', 'property')
    } else {
      const canonicalUrl = `${routeMeta.canonicalBase}${route}`
      setCanonical(canonicalUrl)
      setMeta('og:url', canonicalUrl, 'property')
    }

    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('og:type', 'website', 'property')

    setMeta('twitter:card', 'summary')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', meta.description)
  }, [route])

  return null
}
