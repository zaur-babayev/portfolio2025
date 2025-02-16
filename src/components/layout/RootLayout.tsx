import { Link, Outlet, useLocation } from "react-router-dom"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Logo } from "@/components/Logo"
import NavigationMenu from "./NavigationMenu"
import { Toaster } from "@/components/ui/toaster"
import Socials from "@/components/Socials"

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationMenu />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container max-w-screen-xl py-8 md:py-16">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container max-w-screen-xl py-8 md:py-12">
          <div className="flex flex-col items-center gap-6">
            <Socials />
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} • Zaur Babayev all rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
    <Toaster />
    </>
  )
}

export default RootLayout
