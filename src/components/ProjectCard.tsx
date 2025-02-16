import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio/types";
import { ProtectedIndicator } from "@/components/ProtectedIndicator";
import { Badge } from "./ui/badge";

type ProjectCardProps = Pick<
  Project,
  "title" | "slug" | "tags" | "imagePosition" | "protected"
> & {
  description: string;
  imageSrc?: string;
  className?: string;
};

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export function ProjectCard({
  title,
  description,
  imageSrc,
  tags = [],
  slug,
  className,
  imagePosition = "right",
  protected: isProtected,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8 flex flex-col gap-4 rounded-lg border bg-card p-6 md:p-8">
        <div className="flex w-full flex-row items-center justify-between gap-4">
          <h3 className="font-serif text-3xl font-bold truncate">{title}</h3>
          {isProtected && <ProtectedIndicator className="flex-shrink-0" />}
        </div>
        <div className="relative flex w-full items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[70svh] w-auto object-contain"
          />
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
{/* 
      <div
        className={cn(
          "overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm",
          className,
        )}
      >
        <div
          className={cn(
            "flex flex-col md:flex-row",
            imagePosition === "left" && "md:flex-row-reverse",
          )}
        >
          <div className="flex-1 p-6 md:p-8">
            <div className="space-y-4">
              <motion.div className="space-y-2" {...fadeInUp}>
                <div className="flex items-center">
                  <h3 className="font-serif text-3xl font-bold">{title}</h3>
                  <div className="pointer-events-auto ml-2 flex items-baseline">
                    {isProtected && <ProtectedIndicator />}
                  </div>
                </div>
                <p className="text-muted-foreground">{description}</p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2"
                {...fadeInUp}
                transition={{ delay: 0.1 }}
              >
                {tags.map((tag) => (
                  <Badge variant="secondary" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Button asChild variant="outline" className="group">
                  <Link to={`/work/${slug}`}>
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {imageSrc && (
            <div className="relative aspect-video md:aspect-auto md:w-1/2">
              <img
                src={imageSrc}
                alt={title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          )}
        </div>
      </div> */}
    </motion.div>
  );
}
