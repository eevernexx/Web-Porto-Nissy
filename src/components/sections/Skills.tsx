'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '@/lib/data'
import { cn } from '@/lib/utils'
import type { SkillChip } from '@/lib/types'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

function chipClasses(skill: SkillChip): string {
  return cn(
    'rounded-md flex items-center justify-center text-center p-4 cursor-none',
    'font-display font-medium text-sm sm:text-base leading-tight select-none',
    skill.variant === 'pink' && 'bg-pink text-white',
    skill.variant === 'ink' && 'bg-ink text-cream',
    skill.variant === 'default' && 'bg-cream text-ink border border-ink/10',
    skill.variant === 'photo' &&
      'bg-gradient-to-br from-pink-soft to-greige/50 text-ink-soft font-hand text-lg',
    skill.span === 'wide' && 'col-span-2',
    skill.span === 'tall' && 'row-span-2',
    skill.span === 'both' && 'col-span-2 row-span-2',
  )
}

// Variant-based entrance so the stagger delay doesn't fight the whileHover spring
const chipVariants = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, delay: i * 0.045, ease: EASE },
  }),
}

export default function Skills() {
  const gridRef = useRef<HTMLDivElement>(null)
  const inView = useInView(gridRef, { once: true, margin: '-10%' })

  return (
    <section id="skills" className="relative overflow-hidden scroll-mt-24 px-6 sm:px-10 lg:px-14
      py-16 sm:py-28">
      {/* overlay headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[3]
          flex items-center justify-center -rotate-[5deg]"
      >
        <span
          className="font-display font-semibold text-pink whitespace-nowrap
            opacity-90"
          style={{ fontSize: 'clamp(40px,9vw,120px)' }}
        >
          skills <span className="font-hand text-pink-deep">&amp;works</span>
        </span>
      </div>

      {/* chip grid */}
      <div
        ref={gridRef}
        className="relative z-[1] grid grid-cols-2 md:grid-cols-4
          gap-3 sm:gap-4 auto-rows-[120px] sm:auto-rows-[140px]"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.label}
            custom={index}
            variants={chipVariants}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            whileHover={{ scale: 1.04, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            data-cur="skill"
            className={chipClasses(skill)}
          >
            {skill.label}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
