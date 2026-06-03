import type { Project, SocialLink, SkillChip } from '@/lib/types'

export const PROFILE = {
  name: 'Anissa Damayanti',
  location: 'Bandung, Indonesia',
  phone: '+62 83157110459',
  role: 'Graphic Designer / Content Creator / Visual Storyteller',
}

export const PROJECTS: Project[] = [
  { id: 'p1', title: '3D Modelling',    category: 'Three · Dimensional', image: '/media/works-3d-modelling.png',    blurb: 'Playful 3D scenes and props, modelled and lit with a soft, storybook finish.',        span: 'half' },
  { id: 'p2', title: 'Drawing',         category: 'Digital · Sketch',    image: '/media/works-drawing.png',         blurb: 'Loose digital sketches, quick studies of character, mood and movement.',               span: 'half' },
  { id: 'p3', title: 'Graphics Design', category: 'Brand · Layout',      image: '/media/works-graphics-design.png', blurb: 'Brand systems, layouts and social content built to be felt before they are read.',     span: 'half' },
  { id: 'p4', title: 'Illustration',    category: 'Character · Art',     image: '/media/works-ilustrasi.png',       blurb: 'Warm character illustration with expressive linework and a cosy colour story.',         span: 'half' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/hiiissyy' },
  { label: 'Dribbble',  href: 'https://dribbble.com/Ansdn/about' },
  { label: 'Pinterest', href: 'https://pin.it/1SELYhq4U' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/anissadamayanti/' },
  { label: 'Canva',     href: 'https://canva.link/0qevxabb7d4v4gd' },
]

/* Ordered so each row of the 4-column desktop grid sums to exactly 4 cells
   (wide = 2). This keeps the grid a clean, hole-free rectangle. */
export const SKILLS: SkillChip[] = [
  { label: 'Graphic Design',      variant: 'pink',    span: 'wide' }, // row 1
  { label: 'Canva',               variant: 'ink' },
  { label: 'Branding',            variant: 'default' },
  { label: 'Content Creation',    variant: 'default' },               // row 2
  { label: 'Social Media Design', variant: 'pink' },
  { label: 'Adobe Photoshop',     variant: 'default', span: 'wide' },
  { label: 'Adobe Illustrator',   variant: 'ink' },                   // row 3
  { label: 'Video Editing',       variant: 'default' },
  { label: 'Visual Storytelling', variant: 'pink',    span: 'wide' },
  { label: 'moodboard',           variant: 'photo',   span: 'wide' }, // row 4
  { label: 'type specimen',       variant: 'photo',   span: 'wide' },
]
