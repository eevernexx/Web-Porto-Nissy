'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { scrollToSection } from '@/lib/useLenis'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const LINKS = [
  { label: 'About', target: 'about' },
  { label: 'Work', target: 'work' },
  { label: 'Skills', target: 'skills' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  // Highlight the link whose section is currently in view.
  useEffect(() => {
    const ids = [...LINKS.map((l) => l.target), 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const go = (target: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToSection('#' + target)
  }

  return (
    <motion.nav
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
      className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-[100]
        w-[calc(100%-1.25rem)] sm:w-auto"
    >
      <div
        className="relative flex items-center justify-between sm:justify-center
          gap-1 sm:gap-1.5 rounded-full px-2 py-2 sm:px-2.5
          border border-white/50 bg-white/25
          backdrop-blur-xl backdrop-saturate-150
          shadow-[0_8px_30px_rgba(39,35,32,0.14),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_2px_rgba(255,255,255,0.25)]"
      >
        {/* specular top sheen — the wet-glass highlight */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-4 top-0 h-1/2
            rounded-full bg-gradient-to-b from-white/60 to-transparent opacity-70"
        />

        {/* monogram → back to top */}
        <a
          href="#top"
          onClick={go('top')}
          data-cur="top"
          aria-label="Back to top"
          className="relative grid place-items-center h-9 w-9 sm:h-10 sm:w-10
            rounded-full bg-pink-deep/90 text-white font-display font-semibold
            text-sm leading-none shadow-[0_2px_8px_rgba(229,123,168,0.5)]
            transition-transform hover:scale-105"
        >
          AD
        </a>

        {/* links */}
        <div className="relative flex items-center gap-0.5 sm:gap-1 px-1">
          {LINKS.map((link) => {
            const isActive = active === link.target
            return (
              <a
                key={link.target}
                href={'#' + link.target}
                onClick={go(link.target)}
                data-cur={link.label.toLowerCase()}
                className={`relative rounded-full px-3 sm:px-4 py-2 text-[12px]
                  sm:text-[13px] font-medium tracking-tight transition-colors
                  duration-300 ${
                    isActive
                      ? 'text-ink'
                      : 'text-ink-soft hover:text-ink'
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ duration: 0.45, ease: EASE }}
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-full
                      border border-white/60 bg-white/40
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                  />
                )}
                {link.label}
              </a>
            )
          })}
        </div>

        {/* contact CTA */}
        <a
          href="#contact"
          onClick={go('contact')}
          data-cur="say hi"
          className="relative rounded-full px-4 sm:px-5 py-2 text-[12px]
            sm:text-[13px] font-semibold tracking-tight text-white
            bg-ink/90 transition-all duration-300 hover:bg-ink
            shadow-[0_2px_10px_rgba(39,35,32,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  )
}
