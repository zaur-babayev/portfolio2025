import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      width="72"
      height="70"
      viewBox="0 0 72 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path d="M19.3 21.4H49.5026L71.3 0H0V34.8H19.3V21.4Z" fill="currentColor" />
      <path d="M52 48.6H21.7974L0 70H71.3V35.2H52V48.6Z" fill="currentColor" />
    </svg>
  )
}
