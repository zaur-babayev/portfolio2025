import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"
import { Link } from "react-router-dom"
import { PageTransition } from "@/components/PageTransition"
import { motion } from "framer-motion"
import { FeaturedProjectCard } from "@/components/FeaturedProjectCard"
import { useAudioPlayer } from "@/hooks/useAudioPlayer"
import { getFeaturedProjects } from "@/data/portfolio/projects"
import { ProtectedIndicator } from "@/components/ProtectedIndicator"
import { SectionHeader } from "@/components/ui/typography"
import Socials from "@/components/Socials"
import { MorphingBackground } from "@/components/MorphingBackground"

const testimonials = [
  {
    quote: "Zaur is highly focused on end-users and has a fantastic 'understand first' mindset before jumping to any of the many UX methods he masters. Zaur has the ability to pick a design apart and relate it to data hierarchy, process flow, or conceptual maps after which he builds a UX flow and then paints it with a UI. In addition to his skill set, I always enjoyed working daily with his flexible, growth mindset and well-humoured, likeable personality.",
    author: "Martin Kruusimägi",
    title: "Senior Product Manager at Amazon",
    delay: 0.6,
    image: "https://ui.shadcn.com/avatars/02.png",
  },
  {
    quote: "I had the pleasure of working with Zaur on the same design team. He has a fantastic knack for communication and building connections. Zaur has a great blend of visual skills talent and a solid systematic approach to problem-solving. He doesn't just make things look good; he ensures that every design decision is backed by thorough, thoughtful consideration. Working and learning from you was a pleasure, and I will be happy to do it again.",
    author: "Marharyta Milovanova",
    title: "Senior Product Designer at JetBrains",
    delay: 0.7,
    image: "https://ui.shadcn.com/avatars/01.png",
  },
  {
    quote: "Zaur is an exceptional designer who can fulfil the entire product design lifecycle. During our time working together, I was impressed by his keen eye for detail, systematic thinking and care for the people his work impacted. Above all, Zaur’s people skills stood out - he was honest and sincere, effective in communicating his ideas that would improve the experiences of our users. Thank you for all that you've taught me.",
    author: "Simmo Sedrik",
    title: "Principal Product Designer at Testlio",
    delay: 0.8,
    image: "https://ui.shadcn.com/avatars/04.png",
  },
]

const featuredProjects = getFeaturedProjects()

export function HomePage() {
  const { isPlaying, toggle } = useAudioPlayer('/music/your-track.mid');

  return (
    <PageTransition>
      <div className="space-y-32 overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[80svh] relative flex">
          {/* Background Layer */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0">
              <MorphingBackground />
            </div>
             <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/90 md:hidden" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="container relative h-full mx-auto flex items-end md:items-center px-0">
              <motion.div 
                className="max-w-2xl space-y-4 md:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h1 
                  className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-header bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span className="block">Product Designer</span>
                  <span className="block">PhD Candidate</span>
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  I primarily design & make music. <br/> I can also code. A little.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4 pointer-events-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button asChild size="lg" className="group">
                    <Link to="/work">
                      View Work
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">About Me</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="relative py-2 md:py-2 space-y-8 md:space-y-16">
          {/* Section Header */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-sm font-medium text-highlight uppercase tracking-wider">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-header">What People Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Feedback from colleagues and clients I've had the pleasure to work with
            </p>
          </motion.div> */}

          {/* Projects */}
          <div className="space-y-48">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group"
              >
                {/* Content Container */}
                <div className="relative">
                  {/* Text Content */}
                  <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-8">
                      {/* Project Info */}
                      <div>
                        {/* Title and Badge */}
                        <div className="flex flex-col items-start md:flex-row md:items-center md:gap-3 mb-4">
                          <h3 className="font-serif text-3xl md:text-4xl font-normal tracking-header mb-3 md:mb-0">{project.title}</h3>
                          {project.protected && <ProtectedIndicator />}
                        </div>

                        {/* Description */}
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{project.overview}</p>
                      </div>

                      {/* Action Button */}
                      <div className="inline-flex items-center gap-3">
                        <Button asChild size="lg" variant="outline" className="group/btn">
                          <Link to={`/work/${project.slug}`} className="inline-flex items-center">
                            View Project
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Image */}
                  <div className="relative">
                    <motion.div
                      className="relative z-10 mx-auto max-w-[90%] xl:max-w-[90%]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <Link 
                        to={`/work/${project.slug}`}
                        className="block transform transition-all duration-500 hover:scale-[1.02] origin-bottom"
                      >
                        <div className="relative w-full flex items-center justify-center">
                          <img
                            src={project.featuredImageSrc || project.imageSrc}
                            alt={project.title}
                            className="max-h-[70svh] w-auto object-contain"
                          />
                        </div>
                      </Link>
                    </motion.div>
                    <div className="h-[1px] flex-1 bg-muted" />
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="space-y-8 md:space-y-16">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              label="Testimonials"
              title="What People Say"
              description="Feedback from colleagues and clients I've had the pleasure to work with"
            />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-card p-8 rounded-lg border hover:border-foreground/20 dark:hover:border-foreground/50 transition-colors"
              >
                <Quote className="w-8 h-8 mb-6 text-highlight" />
                <p className="text-muted-foreground mb-8 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full ring-2 ring-background"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default HomePage;
