'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

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

  // scroll-linked drift: the two lines slide past each other as you scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const line1X = useTransform(scrollYProgress, [0, 1], [-70, 50])
  const line2X = useTransform(scrollYProgress, [0, 1], [70, -50])

  return (
    <section ref={ref} className="px-6 sm:px-10 lg:px-14 py-16 sm:py-28 overflow-hidden">
      <h2
        className="font-punch font-black text-left text-[#B9B0A0]"
        style={{ fontSize: 'clamp(30px,7vw,96px)', lineHeight: 0.92 }}
      >
        {/* line 1: "it's not just designing," */}
        <motion.span className="block" style={{ x: line1X }}>
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
        </motion.span>
        {/* line 2: "it's vibing with visuals." */}
        <motion.span className="block" style={{ x: line2X }}>
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
        </motion.span>
      </h2>
    </section>
  )
}
