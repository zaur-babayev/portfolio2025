import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Metric {
  label: string
  value: string
}

interface FeaturedProjectCardProps {
  title: string
  description: string
  imageSrc: string
  tags: string[]
  category: string
  metrics: Metric[]
  outcomes: string[]
  slug: string
  imagePosition: "left" | "right"
}

export const FeaturedProjectCard = ({
  title,
  description,
  imageSrc,
  tags,
  category,
  metrics,
  outcomes,
  slug,
  imagePosition,
}: FeaturedProjectCardProps) => {
  return (
    <div className={cn(
      "group grid gap-8 items-center",
      imagePosition === "right" ? "lg:grid-cols-[1.1fr,0.9fr]" : "lg:grid-cols-[0.9fr,1.1fr]"
    )}>
      {/* Content */}
      <motion.div className={cn(
        "space-y-6",
        imagePosition === "right" ? "lg:order-1" : "lg:order-2"
      )}>
        {/* Category Badge */}
        <motion.div 
          className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-highlight/10 text-highlight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {category}
        </motion.div>

        <div className="space-y-4">
          <motion.h3 
            className="text-2xl font-bold sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <motion.div 
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <div 
              key={metric.label} 
              className="space-y-1 p-4 rounded-lg bg-card border group-hover:border-highlight/20 transition-colors"
            >
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-xl font-bold">{metric.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 rounded-full text-sm bg-muted"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Key Outcomes */}
        <motion.ul 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground">
              <ChevronRight className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
              <span>{outcome}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button asChild className="group">
            <Link to={`/work/${slug}`}>
              View Case Study
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div 
        className={cn(
          "relative aspect-[4/3] rounded-xl overflow-hidden",
          imagePosition === "right" ? "lg:order-2" : "lg:order-1"
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-highlight/20 to-highlight/0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>
    </div>
  )
}
