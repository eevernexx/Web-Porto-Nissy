# Anissa Damayanti, Portfolio

A personal portfolio site for **Anissa Damayanti**, a Graphic Designer, Content Creator, and Visual Storyteller based in Bandung, Indonesia. The site presents her selected works, skills, and contact links inside a warm, paper textured interface with smooth scrolling, ambient motion, and a glass styled navigation.

> Designed and built by Aryasatya Muhammad Aqsel.

## Tech Stack

| Area | Choice |
| :--- | :--- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| UI library | React 19 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com) |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Fonts | Fredoka, Caveat, and Archivo via `next/font`, plus the Apple system stack for body copy |
| Deployment | [Vercel](https://vercel.com) |

## Features

- **Single page experience** composed of focused sections: Hero, About, Statement, Works, Skills, Social, and Contact.
- **Smooth, inertia based scrolling** powered by Lenis, with a scroll progress indicator.
- **Scroll driven motion** for reveals, parallax, and a marquee strip in the works gallery.
- **Interactive works gallery** with a click to preview lightbox.
- **Custom cursor** and magnetic buttons for a tactile feel.
- **Ambient background** and an optional liquid glass music toggle.
- **Responsive layout** tuned for mobile through large desktop.
- **SEO and social metadata** configured in the root layout, including Open Graph tags.

## Project Structure

```
src/
  app/
    layout.tsx        Root layout, fonts, and metadata
    page.tsx          Page composition (section order)
    globals.css       Theme tokens and base styles
  components/
    sections/         Hero, About, Statement, Projects, Skills, Social, Contact
    ui/               Navbar, CustomCursor, MagneticButton, MusicToggle,
                      ScrollProgress, ScrollReveal, AmbientBackground, WorkLightbox
  lib/
    data.ts           Profile, projects, social links, and skills content
    types.ts          Shared TypeScript types
    useLenis.ts       Smooth scroll hook
    useParallax.ts    Parallax helper
    utils.ts          Class name helper (clsx + tailwind-merge)
public/
  media/              Portrait, work images, video, and audio assets
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20 or newer
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/eevernexx/Web-Porto-Nissy.git
cd Web-Porto-Nissy
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically as you edit files.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Editing Content

Most site content lives in [src/lib/data.ts](src/lib/data.ts):

- `PROFILE`: name, location, phone, and role
- `PROJECTS`: the works gallery entries
- `SOCIAL_LINKS`: external profile links
- `SKILLS`: the skills grid

Media assets (portrait, work previews, video, and audio) live in [public/media/](public/media/).

## Deployment

The project is configured for [Vercel](https://vercel.com) via [vercel.json](vercel.json). Push to the connected repository, or import the project in the Vercel dashboard, and it deploys with zero additional configuration.

## License

This is a personal portfolio project. All artwork, photography, and brand assets belong to Anissa Damayanti and may not be reused without permission.
