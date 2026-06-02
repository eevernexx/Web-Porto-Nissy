'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

type Media = { type: 'video' | 'image'; src: string }

function Photo({
  label,
  media,
  className = '',
  rotate = 0,
  delay = 0,
  inView,
  fromX = 0,
  fromY = 0,
}: {
  label: string
  media: Media
  className?: string
  rotate?: number
  delay?: number
  inView: boolean
  fromX?: number
  fromY?: number
}) {
  return (
    <motion.figure
      className={`absolute bg-white p-2 shadow-xl ${className}`}
      initial={{ opacity: 0, scale: 0.78, x: fromX, y: fromY, rotate: rotate * 2.5 }}
      animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0, rotate } : {}}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      <div
        className="relative w-full overflow-hidden bg-greige/15"
        style={{ aspectRatio: '4 / 5' }}
      >
        {media.type === 'video' ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={label}
          >
            <source src={media.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={media.src}
            alt={label}
            fill
            sizes="(max-width: 640px) 40vw, 176px"
            className="object-cover"
          />
        )}
      </div>
    </motion.figure>
  )
}

export default function About() {
  const scrapRef = useRef<HTMLDivElement>(null)
  const scrapInView = useInView(scrapRef, { once: true, margin: '-10%' })

  return (
    <section id="about" className="px-6 sm:px-10 lg:px-14 py-16 sm:py-24 scroll-mt-24">
      <ScrollReveal>
        <div className="bg-cream rounded-md shadow-2xl p-8 sm:p-12 lg:p-16
          grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* text column */}
          <div>
            <span className="font-hand text-pink-deep block mb-5 -rotate-2"
              style={{ fontSize: 'clamp(30px,4vw,52px)' }}>
              This is Anissa.
            </span>

            <p className="text-ink-soft text-base sm:text-lg leading-relaxed mb-5">
              A graphic designer, content creator and visual storyteller based
              in Bandung, Indonesia. I shape brands, social feeds and editorial
              layouts that feel warm, intentional and a little bit playful.
            </p>

            <p className="text-ink-soft text-base sm:text-lg leading-relaxed mb-6">
              My work lives where strategy meets softness: clean type, generous
              space and a colour story that lingers. From identity systems to
              scroll stopping content, every piece is built to be felt before
              it is read.
            </p>

            <p className="font-hand text-pink-deep leading-snug"
              style={{ fontSize: 'clamp(22px,3vw,34px)' }}>
              and yes, the moodboards are a love language.
            </p>
          </div>

          {/* scrapbook column */}
          <div ref={scrapRef} className="relative min-h-[380px] sm:min-h-[460px]">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden
              viewBox="0 0 400 460"
              preserveAspectRatio="none"
            >
              <path
                d="M70 120 C 160 60, 240 200, 320 130"
                fill="none"
                stroke="var(--pink-deep)"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
            </svg>

            <Photo
              label="early work"
              media={{ type: 'video', src: '/media/early-work.mp4' }}
              rotate={-6}
              className="top-0 left-1 w-36 sm:w-44 z-10"
              inView={scrapInView}
              fromX={-65}
              fromY={-25}
              delay={0}
            />
            <Photo
              label="on set"
              media={{ type: 'video', src: '/media/on-set.mp4' }}
              rotate={5}
              className="top-14 right-1 w-36 sm:w-44 z-20"
              inView={scrapInView}
              fromX={65}
              fromY={-25}
              delay={0.18}
            />
            <Photo
              label="behind the scenes"
              media={{ type: 'image', src: '/media/behind-the-scenes.jpeg' }}
              rotate={-2}
              className="bottom-0 left-1/4 w-36 sm:w-44 z-30"
              inView={scrapInView}
              fromX={20}
              fromY={70}
              delay={0.34}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
