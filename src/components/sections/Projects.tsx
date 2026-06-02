'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { PROJECTS } from '@/lib/data'
import type { Project } from '@/lib/types'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* A single work tile.
   – dramatic alternating slide-in entrance (left / right + rotate + scale)
   – continuous scroll-linked parallax + zoom on the image inside the frame
   – hover lift + arrow reveal */
function WorkCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const fromLeft = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // image drifts vertically + slowly zooms out as the card travels the viewport
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.22, 1.04])

  return (
    <motion.article
      ref={ref}
      initial={{
        opacity: 0,
        x: fromLeft ? -110 : 110,
        y: 80,
        rotate: fromLeft ? -6 : 6,
        scale: 0.84,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 1.05, ease: EASE }}
      whileHover={{ y: -12 }}
      data-cur="view"
      className="group relative rounded-2xl overflow-hidden bg-cream shadow-xl
        cursor-none will-change-transform"
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
        {/* parallax / zoom layer (over-scanned so edges never reveal) */}
        <motion.div
          className="absolute inset-[-14%] will-change-transform"
          style={{ y: imageY, scale: imageScale }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        {/* readability gradient */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/85
            via-ink/15 to-transparent"
        />

        {/* index badge */}
        <span
          className="absolute top-4 left-5 font-display font-semibold
            text-white/90 text-lg sm:text-xl drop-shadow-md select-none"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* caption */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7
          flex items-end justify-between gap-4">
          <div>
            <p className="text-pink-soft uppercase tracking-widest
              text-[11px] sm:text-xs mb-1.5">
              {project.category}
            </p>
            <h3 className="font-display font-semibold text-white
              text-2xl sm:text-3xl leading-tight">
              {project.title}
            </h3>
          </div>
          <span
            aria-hidden
            className="shrink-0 grid place-items-center h-10 w-10 rounded-full
              bg-white/90 text-ink text-lg translate-y-3 opacity-0
              transition-all duration-500 ease-out
              group-hover:translate-y-0 group-hover:opacity-100"
          >
            &#8599;
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  // headline + marquee drift in opposite directions as the section scrolls
  const headX = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['8%', '-28%'])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="px-6 sm:px-10 lg:px-14 py-16 sm:py-24 scroll-mt-24 overflow-hidden"
    >
      <ScrollReveal>
        <header className="mb-6 sm:mb-8">
          <span className="font-hand text-pink-deep block -rotate-2"
            style={{ fontSize: 'clamp(24px,3vw,40px)' }}>
            selected
          </span>
          <motion.h2
            style={{ x: headX }}
            className="font-display font-semibold text-pink leading-none"
          >
            <span style={{ fontSize: 'clamp(48px,10vw,128px)' }}>works.</span>
          </motion.h2>
        </header>
      </ScrollReveal>

      {/* scroll-driven marquee strip */}
      <motion.div
        aria-hidden
        style={{ x: marqueeX }}
        className="mb-10 sm:mb-14 whitespace-nowrap font-punch font-black
          uppercase text-greige/45 select-none pointer-events-none"
      >
        <span style={{ fontSize: 'clamp(22px,4vw,52px)' }}>
          illustration · 3d modelling · graphics design · drawing ·
          illustration · 3d modelling · graphics design · drawing ·
        </span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project, i) => (
          <WorkCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
