import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
  children: React.ReactNode
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })

  useEffect(() => {
    const root = window.document.documentElement

    // Add transitioning class before changes
    root.classList.add("transitioning")
    
    // Remove existing theme classes
    root.classList.remove("light", "dark")
    
    // Add new theme class
    root.classList.add(theme)
    
    // Store the preference
    localStorage.setItem(storageKey, theme)

    // Remove transitioning class after animation completes
    const transitionTimeout = setTimeout(() => {
      root.classList.remove("transitioning")
    }, 1000)

    return () => clearTimeout(transitionTimeout)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
