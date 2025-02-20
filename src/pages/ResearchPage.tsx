import { ProjectCard } from "@/components/ProjectCard"
import { PageTransition } from "@/components/PageTransition"
import { motion } from "framer-motion"

const RESEARCH_PROJECTS = [
  {
    title: "Digital Empathy in Teletherapy for Deeper Emotional Understanding",
    description: "An in-depth investigation into how therapeutic relationships develop and evolve in virtual environments, with a focus on enhancing remote therapy experiences through thoughtful design interventions.",
    tags: ["Healthcare", "User Research", "Digital Wellbeing"],
    link: "https://www.etis.ee/portal/mentorships/display/d0a10fe8-854a-4ebc-9b95-10b93bfa3aa9",
    venue: "Ongoing PhD Research at Estonian Academy of Arts (2024 - 2028)" 
  },
  {
    title: "Enhancing Intergenerational Mental Wellbeing: Embodied Play for Children and Their Remote Grandparents",
    description: "This project explores how to support intergenerational mental well-being through sensory play between children and their geographically distant grandparents. Both children and grandparents play a crucial role in each other’s mental well-being. However, they are increasingly physically separated.",
    tags: ["Social Impact", "Product Design", "User Research"],
    link: "https://www.etis.ee/Portal/Projects/Display/cd51b781-fc2f-4640-859f-533218b1d75c",
    venue: "Ongoing Research Project funded by Estonian Ministry of Culture (2024 - 2025)"
  },
  {
    title: "Co-creating design(s) to support intimacy between remote families",
    description: "Co-creating design(s) to support intimacy between remote families: A Collaborative approach to interaction, social, and sensorial design” aims to bridge the emotional distance between families, inspired by the phenomenology of intimacy. By fostering collaboration among students, researchers, and practitioners, we seek to explore and merge the areas of interaction design and social design, particularly focusing on sensorial design.",
    tags: ["Social Impact", "Product Design", "User Research"],
    link: "https://www.artun.ee/en/co-creating-designs-to-support-intimacy-between-remote-families/",
    venue: "Ongoing Research Project funded by Artistic Research Grant at Estonian Academy of Arts (2025 - 2027)"
  }
] as const

const PUBLICATIONS = [
  {
    title: "Design Patterns for Digital Therapy Platforms",
    venue: "Healthcare UX Journal 2024",
    description: "A comprehensive analysis of effective design patterns that enhance therapeutic relationships in digital mental health platforms.",
    link: "#"
  },
  {
    title: "Bridging Generations: A Framework for Inclusive Design",
    venue: "International Conference on Design Research 2023",
    description: "Presentation of research findings on designing interactive experiences for intergenerational engagement.",
    link: "#"
  }
] as const

const ResearchPage = () => {
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
          <span className="text-sm font-medium text-highlight uppercase tracking-wider">Research</span>
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-header">Academic Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Exploring the intersection of human behavior, technology, and design through rigorous research and experimentation.
          </p>
        </motion.div>

        {/* Research Projects Section */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-header">Research Projects</h2>
          <div className="grid gap-6">
            {RESEARCH_PROJECTS.map((project) => (
              <a 
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border border-border hover:border-border-hover transition-colors"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-xl mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.venue}</p>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                  {/* <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Publications Section */}
        {/* <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-header">Published Work</h2>
          <div className="grid gap-6">
            {PUBLICATIONS.map((publication) => (
              <a 
                key={publication.title}
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border border-border hover:border-border-hover transition-colors"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-xl mb-1">{publication.title}</h3>
                    <p className="text-sm text-muted-foreground">{publication.venue}</p>
                  </div>
                  <p className="text-muted-foreground">{publication.description}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </PageTransition>
  )
}

export default ResearchPage
