import posthog from 'posthog-js'

// Only initialize in production & if a key is available
if (import.meta.env.PROD) {
  posthog.init(
    import.meta.env.VITE_POSTHOG_KEY,
    {
      api_host: 'https://eu.posthog.com', // Fixed host URL
      autocapture: true,
      capture_pageview: true,
      persistence: 'localStorage',
      loaded: (posthog) => {
        if (import.meta.env.DEV) posthog.debug()
      }
    }
  )
}

export const captureAnalytics = (eventName: string, properties?: Record<string, any>) => {
  if (import.meta.env.PROD) {
    posthog.capture(eventName, properties)
  }
}

export const capturePageview = (currentPath: string) => {
  if (import.meta.env.PROD) {
    posthog.capture('$pageview', {
      current_url: currentPath
    })
  }
}
