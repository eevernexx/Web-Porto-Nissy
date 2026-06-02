'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'
import { cn } from '@/lib/utils'
import type { SkillChip } from '@/lib/types'

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

export default function Skills() {
  return (
    <section className="relative overflow-hidden px-6 sm:px-10 lg:px-14
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
        className="relative z-[1] grid grid-cols-2 md:grid-cols-4
          gap-3 sm:gap-4 auto-rows-[120px] sm:auto-rows-[140px]"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.label}
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
