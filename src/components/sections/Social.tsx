'use client'

import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '@/lib/data'

export default function Social() {
  return (
    <section className="bg-paper px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
      <span className="font-hand text-pink-deep block mb-6 -rotate-2"
        style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
        find me
      </span>

      <ul>
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label} className="border-b border-ink/10">
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
          </li>
        ))}
      </ul>
    </section>
  )
}
