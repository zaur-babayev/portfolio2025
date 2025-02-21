import './App.css'
import { BrowserRouter as Router, Routes as RoutesComponent, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import RootLayout from '@/components/layout/RootLayout'
import { Toaster } from '@/components/ui/toaster'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import WorkPage from '@/pages/WorkPage'
import ResearchPage from '@/pages/ResearchPage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { AudioProvider } from './context/AudioContext'
import { useLenis } from '@/hooks/useLenis'
import { Analytics } from '@/components/Analytics'

function AnimatedRoutes() {
  const location = useLocation()
  useLenis() // Initialize Lenis scrolling
  
  return (
    <AnimatePresence mode="wait">
      <RoutesComponent location={location} key={location.pathname}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectDetailPage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Route>
      </RoutesComponent>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AudioProvider>
          <Analytics />
          <AnimatedRoutes />
          <Toaster />
        </AudioProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
