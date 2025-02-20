import { ProjectData, Project } from './types'

export const projects: ProjectData = {
  "salv-screening-flows": {
    slug: "salv-screening-flows",
    title: "Screening Flows at Salv",
    duration: "2024",
    role: "Lead Product Designer",
    overview: "Designing a new feature to enhance the existing screening setup by adding Screening Flows for granular control.",
    challenge: "Compliance officers were struggling with complex workflows and data visualization in the existing platform, leading to reduced efficiency and increased cognitive load.",
    process: [
      "Conducted user interviews with 15+ compliance officers",
      "Created user journey maps and identified pain points",
      "Developed wireframes and interactive prototypes",
      "Implemented and tested new navigation patterns",
      "Designed new data visualization components"
    ],
    impact: [
      "40% reduction in time spent on routine tasks",
      "90% positive feedback from user testing",
      "Successful implementation across all client instances"
    ],
    imageSrc: "/projects/salv-screening-flow.png",
    featuredImageSrc: "/projects/work_1.png",
    tags: ["Product Design", "UX Research", "Design System"],
    imagePosition: "right",
    splineScene: "https://prod.spline.design/BXAPJqmcTjkyeVqP/scene.splinecode",
    featured: true,
    protected: true
  },
  "salv-navigation-redesign": {
    slug: "salv-navigation-redesign",
    title: "Navigation Redesign at Salv",
    duration: "2023",
    role: "UX Researcher",
    overview: "Redesigning Salv’s navigation for clearer structure, improved efficiency, and seamless access to key tools.",
    challenge: "The shift to remote therapy during the pandemic highlighted the need for better digital tools to maintain strong therapeutic relationships.",
    process: [
      "Conducted literature review on therapeutic alliance",
      "Interviewed 20+ therapists and patients",
      "Developed experience prototypes",
      "Conducted remote usability testing",
      "Analyzed qualitative and quantitative data"
    ],
    impact: [
      "Published research findings in UX design journal",
      "Developed design guidelines for teletherapy platforms",
      "Presented findings at healthcare UX conference"
    ],
    imageSrc: "/projects/salv-navigation-redesign.png",
    featuredImageSrc: "/projects/work_2.png",
    tags: ["UX Research", "Healthcare", "Design Guidelines"],
    imagePosition: "left",
    splineScene: "https://prod.spline.design/BXAPJqmcTjkyeVqP/scene.splinecode",
    featured: true,
    protected: true
  },
  "salv-ux-tweaks": {
    slug: "salv-ux-tweaks",
    title: "Small UX Tweaks, Big Impact at Salv",
    duration: "2023",
    role: "UX Researcher",
    overview: "Redesigning Salv’s navigation for clearer structure, improved efficiency, and seamless access to key tools.",
    challenge: "The shift to remote therapy during the pandemic highlighted the need for better digital tools to maintain strong therapeutic relationships.",
    process: [
      "Conducted literature review on therapeutic alliance",  
      "Interviewed 20+ therapists and patients",
      "Developed experience prototypes",
      "Conducted remote usability testing",
      "Analyzed qualitative and quantitative data"
    ],
    impact: [
      "Published research findings in UX design journal",
      "Developed design guidelines for teletherapy platforms",
      "Presented findings at healthcare UX conference"
    ],
    imageSrc: "/projects/salv-ux-tweaks.png",
    featuredImageSrc: "/projects/work_2.png",
    tags: ["UX Research", "Healthcare", "Design Guidelines"],
    imagePosition: "left",
    splineScene: "https://prod.spline.design/BXAPJqmcTjkyeVqP/scene.splinecode",
    protected: true
  },
  "sensory-cube": {
    slug: "sensory-cube",
    title: "Colorless Rubik's Cube",
    duration: "2023",
    role: "Product Designer & Researcher",
    overview: "Reimagining the Rubik’s cube for colorblind individuals. The Rubik's Cube, a puzzle that relies entirely on color recognition.",
    challenge: "Traditional social activities often fail to create meaningful engagement between different age groups, particularly in care home settings.",
    process: [
      "Ethnographic research in care homes",
      "Co-design workshops with elderly and young participants",
      "Prototype development and testing",
      "Iterative design based on feedback",
      "Implementation in care home settings"
    ],
    impact: [
      "Increased social interaction between age groups",
      "Positive feedback from care home staff",
      "Framework for designing intergenerational activities"
    ],
    imageSrc: "/projects/sensory-cube.png",
    tags: ["Research", "Social Impact", "Product Design"],
    imagePosition: "right",
    protected: true
  },
  // "testlio-navigation-redesign": {
  //   slug: "testlio-navigation-redesign",
  //   title: "Navigation Redesign at Testlio",
  //   duration: "2024",
  //   role: "Information Architect",
  //   overview: "A complete overhaul of complex navigation systems to improve user orientation and reduce cognitive load.",
  //   challenge: "Users were getting lost in deep navigation structures and struggling to find relevant information efficiently.",
  //   process: [
  //     "Card sorting sessions with users",
  //     "Information architecture analysis",
  //     "Tree testing and validation",
  //     "Prototype development",
  //     "Usability testing"
  //   ],
  //   impact: [
  //     "50% reduction in navigation errors",
  //     "30% improvement in task completion rates",
  //     "Positive user satisfaction scores"
  //   ],
  //   imageSrc: "/projects/salv-screening-flow.png",
  //   tags: ["Information Architecture", "UX Design", "Enterprise"],
  //   imagePosition: "left",
  //   protected: true
  // }
}

// Helper functions to work with projects
export const getProjectBySlug = (slug: string): Project | undefined => {
  return Object.values(projects).find(project => project.slug === slug)
}

export const getFeaturedProjects = (): Project[] => {
  return Object.values(projects).filter(project => project.featured)
}

export const getAllProjects = (): Project[] => {
  return Object.values(projects)
}
