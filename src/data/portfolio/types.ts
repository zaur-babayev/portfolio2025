export interface Project {
  title: string
  slug: string
  duration: string
  role: string
  overview: string
  challenge: string
  process: string[]
  impact: string[]
  imageSrc?: string
  featuredImageSrc?: string
  tags?: string[]
  imagePosition?: 'left' | 'right'
  splineScene?: string
  featured?: boolean
  protected?: boolean
}

export type ProjectId = 
  | 'overtones'
  | 'salv-screening-flows'
  | 'teletherapy-research'
  | 'sensory-play'
  | 'salv-navigation-redesign'
  | 'salv-ux-tweaks' 
  | 'sensory-cube'
  | 'testlio-navigation-redesign'

export type ProjectData = Record<ProjectId, Project>
