import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lock } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import type { Project } from "@/data/portfolio/types"

type FeaturedProjectCardProps = Pick<Project, 'title' | 'slug' | 'tags' | 'protected'> & {
  description: string
  imageSrc?: string
  featuredImageSrc?: string
  className?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

function ProtectedIndicator() {
  return (
    <div className="relative group/tooltip">
      <Lock className="w-4 h-4 text-muted-foreground" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded opacity-0 transition-opacity group-hover/tooltip:opacity-100 whitespace-nowrap">
        Password Protected
      </span>
    </div>
  )
}

export function FeaturedProjectCard({
  title,
  description,
  imageSrc,
  featuredImageSrc,
  tags = [],
  slug,
  protected: isProtected,
  className,
}: FeaturedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("group", className)}
    >
      <Link to={`/work/${slug}`} className="block">
        {/* Image Container */}
        <div className="mb-6 overflow-hidden rounded-xl border bg-muted">
          <div className="aspect-[16/9] relative">
            {(featuredImageSrc || imageSrc) && (
              <img
                src={featuredImageSrc || imageSrc}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <motion.div 
            className="space-y-2"
            {...fadeInUp}
          >
            <div className="flex items-center gap-1">
              <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
              {isProtected && <ProtectedIndicator />}
            </div>
            <p className="text-muted-foreground">{description}</p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-2"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group/link"
          >
            View Project
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
