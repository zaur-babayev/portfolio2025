import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from 'react'

interface ProtectedIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ProtectedIndicator({ className, ...props }: ProtectedIndicatorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={isOpen}>
        <TooltipTrigger asChild>
          <div 
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full cursor-pointer select-none whitespace-nowrap",
              "border border-primary/20 bg-primary/5 text-primary",
              "hover:bg-primary/10 hover:border-primary/30",
              "active:bg-primary/15 active:border-primary/40",
              "text-xs font-medium transition-all duration-200",
              "px-2.5 py-0.5",
              className
            )}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
            {...props}
          >
            <Lock className="w-3 h-3" />
            <span className="truncate">Private</span>
          </div>
        </TooltipTrigger>
        <TooltipContent 
          sideOffset={4}
          className="max-w-[calc(100vw-32px)] break-words text-center"
        >
          <p className="text-sm">This project requires a password. Please contact me if you would like to see the project.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
