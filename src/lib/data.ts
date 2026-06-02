import type { Project, SocialLink, SkillChip } from '@/lib/types'

export const PROFILE = {
  name: 'Anissa Damayanti',
  location: 'Bandung, Indonesia',
  phone: '083157110459',
  role: 'Graphic Designer / Content Creator / Visual Storyteller',
}

export const PROJECTS: Project[] = [
  { id: 'p1', title: 'Visual Identity System',  category: 'Brand Identity',   span: 'half', placeholder: 'Branding · cover image' },
  { id: 'p2', title: 'Instagram Content Suite', category: 'Social Design',    span: 'half', placeholder: 'Social Media · grid' },
  { id: 'p3', title: 'Campaign & Storytelling', category: 'Content Creation', span: 'full', placeholder: 'Content Creation · feature' },
  { id: 'p4', title: 'Template & Layout Kit',   category: 'Canva Projects',   span: 'half', placeholder: 'Canva · template set' },
  { id: 'p5', title: 'Editorial Poster Series', category: 'Visual Design',    span: 'half', placeholder: 'Visual Design · poster' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/hiiissyy' },
  { label: 'Dribbble',  href: 'https://dribbble.com/Ansdn/about' },
  { label: 'Pinterest', href: 'https://pin.it/1SELYhq4U' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/anissadamayanti/' },
  { label: 'Canva',     href: 'https://canva.link/0qevxabb7d4v4gd' },
]

export const SKILLS: SkillChip[] = [
  { label: 'Graphic Design',      variant: 'pink',    span: 'wide' },
  { label: 'Canva',               variant: 'ink' },
  { label: 'Branding',            variant: 'default' },
  { label: 'Content Creation',    variant: 'default' },
  { label: 'Social Media Design', variant: 'pink' },
  { label: 'Adobe Photoshop',     variant: 'default', span: 'wide' },
  { label: 'Adobe Illustrator',   variant: 'ink' },
  { label: 'Video Editing',       variant: 'default' },
  { label: 'Visual Storytelling', variant: 'pink',    span: 'wide' },
  { label: 'moodboard',           variant: 'photo',   span: 'tall' },
  { label: 'type specimen',       variant: 'photo',   span: 'tall' },
]
