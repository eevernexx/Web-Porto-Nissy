export interface Project {
  id: string
  title: string
  category: string
  image: string
  /** short line shown in the preview lightbox */
  blurb?: string
  span?: 'full' | 'half'
}

export interface SocialLink {
  label: string
  href: string
}

export interface SkillChip {
  label: string
  variant: 'default' | 'pink' | 'ink' | 'photo'
  span?: 'wide' | 'tall' | 'both'
}
