import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { capturePageview } from '@/lib/posthog'

export function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // Capture pageview on route change
    capturePageview(location.pathname)
  }, [location])

  return null
}
