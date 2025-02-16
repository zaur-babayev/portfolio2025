import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Menu, X, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Logo } from "@/components/Logo"
import { useAudio } from '../../context/AudioContext';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navigationLinks = [
  { path: "/work", label: "Work" },
  { path: "/research", label: "Research" },
  { path: "/about", label: "About" },
] as const

export default function NavigationBar() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const { isPlaying, toggle } = useAudio()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 max-w-screen-xl items-center">
        {/* Logo */}
        <div className="flex-1 basis-24">
          <Link to="/" className="flex items-center w-fit" onClick={() => setIsOpen(false)}>
            <Logo className="h-7 w-7 transition-colors hover:text-foreground/80" />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex md:flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              {navigationLinks.map(({ path, label }) => (
                <NavigationMenuItem key={path}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "text-sm font-regular transition-colors px-3 py-2",
                      pathname === path
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    <Link to={path}>
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Theme Toggle, Music Controls and Mobile Menu */}
        <div className="flex items-center gap-4 flex-1 basis-24 justify-end">
          <ThemeToggle />
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggle}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent align="end" className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">{isPlaying ? 'Now Playing' : 'Digital Synth'}</h4>
                {isPlaying ? (
                  <p className="text-sm text-muted-foreground">
                    Everything in its Right Place - Radiohead
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Play a tune on my custom digital synthesizer
                  </p>
                )}
                <div className="mt-4 space-y-1">
                  <p className="text-xs font-semibold">Audio Engine:</p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Tone.js PolySynth with Triangle8 oscillator</p>
                    <p>• Dynamic filter envelope & compressor</p>
                    <p>• Effects: Chorus (2.5Hz) + Reverb + Filter chain</p>
                    <p>• MIDI playback with velocity & expression</p>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5 rotate-0 scale-100 transition-all data-[open=true]:-rotate-90 data-[open=true]:scale-0" data-open={isOpen} />
            <X className="absolute h-5 w-5 rotate-90 scale-0 transition-all data-[open=true]:rotate-0 data-[open=true]:scale-100" data-open={isOpen} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all",
          isOpen ? "h-auto" : "h-0"
        )}
      >
        <div className="container py-4 flex flex-col gap-4">
          {navigationLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80 py-2",
                pathname === path ? "text-foreground" : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
