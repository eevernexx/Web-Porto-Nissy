export interface Project {
  id: string
  title: string
  category: string
  span?: 'full' | 'half'
  placeholder: string
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
