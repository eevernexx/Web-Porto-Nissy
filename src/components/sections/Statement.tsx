'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// Each word: text + whether it gets the dark "ink" colour
const WORDS: { text: string; ink: boolean }[] = [
  { text: "it's",       ink: false },
  { text: 'not',        ink: false },
  { text: 'just',       ink: false },
  { text: 'designing,', ink: false },
  { text: "it's",       ink: false },
  { text: 'vibing',     ink: true  },
  { text: 'with',       ink: true  },
  { text: 'visuals.',   ink: true  },
]

export default function Statement() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section ref={ref} className="px-6 sm:px-10 lg:px-14 py-16 sm:py-28">
      <h2
        className="font-punch font-black text-left text-[#B9B0A0]"
        style={{ fontSize: 'clamp(30px,7vw,96px)', lineHeight: 0.92 }}
      >
        {/* line 1: "it's not just designing," */}
        <span className="block">
          {WORDS.slice(0, 4).map((w, i) => (
            <span
              key={i}
              className={`inline-block overflow-hidden mr-[0.22em]
                ${w.ink ? 'text-ink' : ''}`}
            >
              <motion.span
                className="inline-block"
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.75, delay: i * 0.08, ease: EASE }}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </span>
        {/* line 2: "it's vibing with visuals." */}
        <span className="block">
          {WORDS.slice(4).map((w, i) => (
            <span
              key={i}
              className={`inline-block overflow-hidden mr-[0.22em]
                ${w.ink ? 'text-ink' : ''}`}
            >
              <motion.span
                className="inline-block"
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.75, delay: (4 + i) * 0.08, ease: EASE }}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </span>
      </h2>
    </section>
  )
}
