import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

interface TimelineItemProps {
  date: string
  title: string
  subtitle: string
  description: string
}

const TimelineItem = ({ date, title, subtitle, description }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  })

  const opacity = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Vertical line */}
      <div className="absolute left-[7px] top-1 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 flex items-center justify-center">
        <div className="w-[15px] h-[15px] rounded-full bg-background border-[3px] border-primary" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-muted-foreground">
            {date}
          </span>
          <h3 className="text-lg font-semibold leading-tight">
            {title}
          </h3>
          <span className="text-sm text-muted-foreground">
            {subtitle}
          </span>
        </div>
        <p className="text-sm text-muted-foreground/90 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

interface TimelineProps {
  items: {
    date: string
    title: string
    subtitle: string
    description: string
  }[]
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative pl-12">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  )
}
