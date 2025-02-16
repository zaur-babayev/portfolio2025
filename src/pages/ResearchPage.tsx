import { ProjectCard } from "@/components/ProjectCard"
import { PageTransition } from "@/components/PageTransition"
import { motion } from "framer-motion"

const RESEARCH_PROJECTS = [
  {
    title: "Therapeutic Alliance in Digital Spaces",
    description: "An in-depth investigation into how therapeutic relationships develop and evolve in virtual environments, with a focus on enhancing remote therapy experiences through thoughtful design interventions.",
    tags: ["Healthcare", "User Research", "Digital Wellbeing"],
    slug: "therapeutic-alliance",
    imagePosition: "right"
  },
  {
    title: "Intergenerational Connection Through Play",
    description: "Research exploring how sensory play and interactive experiences can bridge generational gaps and create meaningful connections between different age groups in care settings.",
    tags: ["Social Impact", "Product Design", "User Research"],
    slug: "intergenerational-play",
    imagePosition: "left"
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

        {/* Research Projects */}
        <motion.section 
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <span className="text-sm font-medium text-highlight uppercase tracking-wider">Research Projects</span>
            <h2 className="font-serif text-3xl font-normal tracking-header">Current Research</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Key research initiatives exploring human-centered design challenges
            </p>
          </div>
          <div className="space-y-24">
            {RESEARCH_PROJECTS.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section 
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <span className="text-sm font-medium text-highlight uppercase tracking-wider">Publications</span>
            <h2 className="font-serif text-3xl font-normal tracking-header">Published Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Published research papers and conference presentations
            </p>
          </div>
          <div className="grid gap-8">
            {PUBLICATIONS.map((publication, index) => (
              <motion.a
                key={index}
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-lg border bg-card hover:bg-card/80 transition-colors p-8 hover:border-highlight/20"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{publication.title}</h3>
                      <p className="text-sm text-highlight font-medium">{publication.venue}</p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {publication.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-foreground">
                      Read Paper
                      <svg
                        className="ml-2 h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Research Approach */}
        <motion.section 
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <span className="text-sm font-medium text-highlight uppercase tracking-wider">Methodology</span>
            <h2 className="text-3xl font-bold tracking-tight">Research Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              My methodology for conducting human-centered research
            </p>
          </div>
          <div className="prose prose-gray max-w-none text-muted-foreground leading-relaxed">
            <p>
              My research focuses on understanding human behavior and needs in digital spaces,
              with a particular emphasis on healthcare technology and social connection.
              I employ a mixed-methods approach, combining:
            </p>
            <ul>
              <li>Qualitative user research through interviews and observations</li>
              <li>Quantitative data analysis and behavioral metrics</li>
              <li>Prototype testing and iterative design</li>
              <li>Participatory design workshops</li>
              <li>Literature review and academic collaboration</li>
            </ul>
          </div>
        </motion.section>
      </motion.div>
    </PageTransition>
  )
}

export default ResearchPage
