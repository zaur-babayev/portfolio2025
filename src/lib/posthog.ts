import posthog from 'posthog-js'

// Only initialize in production & if a key is available and user has consented
if (import.meta.env.PROD && localStorage.getItem('analytics-consent') === 'true') {
  posthog.init(
    import.meta.env.VITE_POSTHOG_KEY,
    {
      api_host: 'https://eu.posthog.com',
      autocapture: true,
      capture_pageview: true,
      persistence: 'localStorage',
      loaded: (posthog) => {
        if (import.meta.env.DEV) posthog.debug()
        
        // Send immediate events to help PostHog detect the site
        posthog.capture('site_loaded', {
          url: window.location.href,
          timestamp: new Date().toISOString()
        })
        
        // Identify anonymous user
        posthog.identify(undefined, {
          $current_url: window.location.href,
          $host: window.location.host
        })
      }
    }
  )
}

export const captureAnalytics = (eventName: string, properties?: Record<string, any>) => {
  if (import.meta.env.PROD && localStorage.getItem('analytics-consent') === 'true' && posthog) {
    posthog.capture(eventName, properties)
  }
}

export const capturePageview = (currentPath: string) => {
  if (import.meta.env.PROD && localStorage.getItem('analytics-consent') === 'true' && posthog) {
    posthog.capture('$pageview', {
      current_url: currentPath
    })
  }
}
