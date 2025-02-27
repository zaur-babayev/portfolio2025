import { useParams, useNavigate } from 'react-router-dom'
import { getProjectBySlug } from '@/data/portfolio/projects'
import { PageTransition } from '@/components/PageTransition'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PasswordProtection } from '@/components/PasswordProtection'
import { useState } from 'react'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const project = slug ? getProjectBySlug(slug) : undefined
  const [isUnlocked, setIsUnlocked] = useState(false)

  if (!project) {
    return (
      <PageTransition>
        <div className="py-8 space-y-8">
          <Button 
            variant="ghost" 
            className="group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
          <h1 className="font-serif text-4xl font-normal tracking-header">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
        </div>
      </PageTransition>
    )
  }

  if (project.protected && !isUnlocked) {
    return (
      <PageTransition>
        <div className="py-8">
          <Button 
            variant="ghost" 
            className="group mb-8"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
          <PasswordProtection 
            onUnlock={() => setIsUnlocked(true)} 
            projectId={project.slug}
          />
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <article className="pt-8">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            className="group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
        </div>

        {/* Hero Section */}
        <div className="space-y-8 mb-12">
          {/* Title and Metadata */}
          <header className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-header">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <p><strong>Duration:</strong> {project.duration}</p>
                <p><strong>Role:</strong> {project.role}</p>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </header>

          {/* Hero Image */}
          <div className="w-full bg-muted rounded-lg overflow-hidden">
            <div className="aspect-[21/9]">
              {project.imageSrc ? (
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted" />
              )}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl space-y-12 pb-12">
          {/* Challenge */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal tracking-header">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* Process */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal tracking-header">Process</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.process.map((step, index) => (
                <li key={index} className="leading-relaxed pl-4 -indent-4">{step}</li>
              ))}
            </ul>
          </section>

          {/* Impact */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-normal tracking-header">Impact</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.impact.map((item, index) => (
                <li key={index} className="leading-relaxed pl-4 -indent-4">{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </PageTransition>
  )
}
