'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SOCIAL_LINKS } from '@/lib/data'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Social() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="bg-paper px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
      <motion.span
        className="font-hand text-pink-deep block mb-6 -rotate-2"
        style={{ fontSize: 'clamp(28px,4vw,48px)' }}
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE }}
      >
        find me
      </motion.span>

      <ul>
        {SOCIAL_LINKS.map((link, i) => (
          <motion.li
            key={link.label}
            className="border-b border-ink/10"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 + i * 0.09, ease: EASE }}
          >
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cur="open"
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={{
                rest: { x: 0, color: '#272320' },
                hover: { x: 24, color: '#E57BA8' },
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 py-2 font-display font-semibold
                leading-none cursor-none"
              style={{ fontSize: 'clamp(34px,10vw,118px)' }}
            >
              <span>{link.label}</span>
              <motion.span
                aria-hidden
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.35 }}
                className="text-pink-deep"
              >
                &#8599;
              </motion.span>
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
