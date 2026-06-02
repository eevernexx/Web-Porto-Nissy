'use client'

import { useLenis } from '@/lib/useLenis'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Statement from '@/components/sections/Statement'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Social from '@/components/sections/Social'
import Contact from '@/components/sections/Contact'

export default function Page() {
  useLenis()

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="max-w-[1240px] mx-auto bg-paper">
        <Hero />
        <About />
        <Statement />
        <Projects />
        <Skills />
        <Social />
        <Contact />
      </main>
      <footer className="text-center py-7 text-[11px] tracking-widest
        uppercase text-cream bg-greige">
        designed by{' '}
        <span className="text-paper">anissa damayanti</span>
      </footer>
    </>
  )
}
