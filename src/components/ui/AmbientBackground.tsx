'use client'

import { motion, useReducedMotion } from 'framer-motion'

/* Soft, slowly drifting colour blobs that sit behind every section so the
   page never feels fully static. Decorative + non-interactive; motion is
   disabled for visitors who prefer reduced motion. */

type Blob = {
  color: string
  className: string
  x: number[]
  y: number[]
  scale: number[]
  dur: number
}

const BLOBS: Blob[] = [
  {
    color: 'var(--pink)',
    className: 'top-[8%] -left-[6%] h-[34vw] w-[34vw]',
    x: [0, 40, -20, 0],
    y: [0, -30, 25, 0],
    scale: [1, 1.12, 0.95, 1],
    dur: 22,
  },
  {
    color: 'var(--pink-soft)',
    className: 'top-[42%] -right-[8%] h-[40vw] w-[40vw]',
    x: [0, -45, 25, 0],
    y: [0, 30, -25, 0],
    scale: [1, 0.92, 1.1, 1],
    dur: 27,
  },
  {
    color: 'var(--greige)',
    className: 'bottom-[4%] left-[20%] h-[30vw] w-[30vw]',
    x: [0, 30, -30, 0],
    y: [0, -25, 20, 0],
    scale: [1, 1.08, 0.96, 1],
    dur: 31,
  },
]

export default function AmbientBackground() {
  const reduce = useReducedMotion()

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {BLOBS.map((b, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full blur-3xl opacity-[0.22] ${b.className}`}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${b.color}, transparent 70%)`,
          }}
          animate={
            reduce ? undefined : { x: b.x, y: b.y, scale: b.scale }
          }
          transition={{
            duration: b.dur,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
