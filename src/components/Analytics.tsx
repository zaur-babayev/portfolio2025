import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { capturePageview, captureAnalytics } from '@/lib/posthog'
import posthog from 'posthog-js'

export function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // Capture initial page load
    if (import.meta.env.PROD) {
      // Set user properties
      posthog.identify(undefined, {
        initial_referrer: document.referrer,
        initial_url: window.location.href
      })
      
      // Capture page load
      captureAnalytics('page_loaded', {
        path: location.pathname,
        url: window.location.href
      })
    }
  }, []) // Run once on mount

  useEffect(() => {
    // Capture pageview on route change
    capturePageview(location.pathname)
  }, [location])

  return null
}
