import { useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from 'react'

/* ── Turnstile global type ────────────────────────────────────────────────── */

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'expired-callback': () => void
          'error-callback': () => void
          theme?: 'light' | 'dark' | 'auto'
          appearance?: 'always' | 'execute' | 'interaction-only'
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

/* ── Constants ────────────────────────────────────────────────────────────── */

const TURNSTILE_SCRIPT_URL =
  'https://challenges.cloudflare.com/turnstile/v0/api.js'

/* ── Public handle ────────────────────────────────────────────────────────── */

export interface TurnstileWidgetHandle {
  reset: () => void
}

/* ── Props ─────────────────────────────────────────────────────────────────── */

interface TurnstileWidgetProps {
  onSuccess: (token: string) => void
  onExpired?: () => void
  onError?: () => void
}

/* ── Script loader (idempotent) ───────────────────────────────────────────── */

function loadTurnstileScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // API already available
    if (window.turnstile) {
      resolve()
      return
    }

    // Script tag already in DOM but not yet loaded
    const existing = document.querySelector(
      `script[src="${TURNSTILE_SCRIPT_URL}"]`
    ) as HTMLScriptElement | null

    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () =>
        reject(new Error('Turnstile script failed to load'))
      )
      return
    }

    // Insert script
    const script = document.createElement('script')
    script.src = TURNSTILE_SCRIPT_URL
    script.async = true
    script.defer = true
    script.addEventListener('load', () => resolve())
    script.addEventListener('error', () =>
      reject(new Error('Turnstile script failed to load'))
    )
    document.head.appendChild(script)
  })
}

/* ── Component ────────────────────────────────────────────────────────────── */

const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(
  function TurnstileWidget({ onSuccess, onExpired, onError }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<string | null>(null)

    // Store callbacks in a ref so the widget is not re-mounted when they change
    const callbacksRef = useRef({ onSuccess, onExpired, onError })
    callbacksRef.current = { onSuccess, onExpired, onError }

    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined

    const resetWidget = useCallback(() => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current)
      }
    }, [])

    useImperativeHandle(ref, () => ({ reset: resetWidget }), [resetWidget])

    useEffect(() => {
      if (!siteKey || !containerRef.current) return

      let mounted = true

      loadTurnstileScript()
        .then(() => {
          if (!mounted || !containerRef.current || !window.turnstile) return

          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              if (mounted) callbacksRef.current.onSuccess(token)
            },
            'expired-callback': () => {
              if (mounted) callbacksRef.current.onExpired?.()
            },
            'error-callback': () => {
              if (mounted) callbacksRef.current.onError?.()
            },
            theme: 'dark',
            appearance: 'always',
          })
        })
        .catch((err) => {
          console.error('[Turnstile]', err)
        })

      return () => {
        mounted = false
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        }
      }
    }, [siteKey])

    // Graceful degradation — no site key means no widget, form still works
    if (!siteKey) return null

    return <div ref={containerRef} />
  }
)

export default TurnstileWidget
