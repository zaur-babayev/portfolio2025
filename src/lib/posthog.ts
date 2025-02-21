import posthog from 'posthog-js'

// Only initialize in production & if a key is available
if (import.meta.env.PROD) {
  posthog.init(
    import.meta.env.VITE_POSTHOG_KEY,
    {
      api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.posthog.com',
      // Enable debug mode in development
      loaded: (posthog) => {
        if (import.meta.env.DEV) posthog.debug()
      },
      capture_pageview: false // Disable automatic pageview capture as we'll handle this manually
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
