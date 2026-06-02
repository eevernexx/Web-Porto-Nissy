'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { PROJECTS } from '@/lib/data'

const CROSSHATCH =
  'repeating-linear-gradient(45deg, transparent, transparent 11px, rgba(229,123,168,0.18) 11px, rgba(229,123,168,0.18) 12px)'

export default function Projects() {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
      <ScrollReveal>
        <header className="mb-10 sm:mb-14">
          <span className="font-hand text-pink-deep block -rotate-2"
            style={{ fontSize: 'clamp(24px,3vw,40px)' }}>
            selected
          </span>
          <h2 className="font-display font-semibold text-pink leading-none"
            style={{ fontSize: 'clamp(48px,10vw,128px)' }}>
            works.
          </h2>
        </header>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project, i) => (
          <ScrollReveal
            key={project.id}
            delay={i * 0.08}
            className={project.span === 'full' ? 'md:col-span-2' : ''}
          >
            <motion.article
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={{ rest: { y: 0 }, hover: { y: -8 } }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              data-cur="view"
              className="rounded-md overflow-hidden bg-cream shadow-xl
                cursor-none h-full"
            >
              <div className="overflow-hidden">
                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center justify-center
                    bg-gradient-to-br from-pink-soft to-cream"
                  style={{
                    aspectRatio: project.span === 'full' ? '21 / 9' : '4 / 3',
                    backgroundImage: CROSSHATCH,
                  }}
                >
                  <span className="font-hand text-pink-deep/80 text-lg sm:text-xl">
                    {project.placeholder}
                  </span>
                </motion.div>
              </div>

              <div className="p-5 sm:p-7">
                <p className="text-pink-deep uppercase tracking-widest text-xs mb-2">
                  {project.category}
                </p>
                <h3 className="font-display font-semibold text-ink
                  text-xl sm:text-2xl leading-tight">
                  {project.title}
                </h3>
              </div>
            </motion.article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
