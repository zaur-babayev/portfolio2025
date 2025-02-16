import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function SectionHeader({ 
  title, 
  description, 
  label, 
  className 
}: { 
  title: string
  description?: string
  label?: string
  className?: string 
}) {
  return (
    <div className={cn("space-y-4", className)}>
      {label && <SectionLabel>{label}</SectionLabel>}
      <H2>{title}</H2>
      {description && <SectionDescription>{description}</SectionDescription>}
    </div>
  )
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn("font-serif text-3xl md:text-4xl font-normal tracking-header", className)}
      {...props}
    >
      {children}
    </h2>
  )
}

export function SectionLabel({ children, className, ...props }: TypographyProps) {
  return (
    <span
      className={cn("text-sm font-medium text-muted-foreground uppercase tracking-wider", className)}
      {...props}
    >
      {children}
    </span>
  )
}

export function SectionDescription({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn("text-xl text-muted-foreground max-w-2xl", className)}
      {...props}
    >
      {children}
    </p>
  )
}
