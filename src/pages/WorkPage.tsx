import { ProjectCard } from "@/components/ProjectCard"
import { PageTransition } from "@/components/PageTransition"  
import { motion } from "framer-motion"
import { getAllProjects } from "@/data/portfolio/projects"

const WorkPage = () => {
  const projects = getAllProjects()

  return (
    <PageTransition>
      <motion.div className="space-y-24">
        {/* Header */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-highlight uppercase tracking-wider">Portfolio</span>
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-header">Selected Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A collection of projects showcasing my expertise in product design, research, and innovation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.overview}
                imageSrc={project.imageSrc}
                tags={project.tags || []}
                slug={project.slug}
                imagePosition={project.imagePosition || "right"}
                protected={project.protected}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageTransition>
  )
}

export default WorkPage
