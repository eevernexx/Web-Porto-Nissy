'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
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
  float = 10,
  floatDur = 6,
}: {
  label: string
  media: Media
  className?: string
  rotate?: number
  delay?: number
  inView: boolean
  fromX?: number
  fromY?: number
  /** amplitude (px) of the idle bob once the photo has landed */
  float?: number
  /** seconds for one bob cycle */
  floatDur?: number
}) {
  return (
    <motion.figure
      className={`absolute bg-white p-2 shadow-xl ${className}`}
      initial={{ opacity: 0, scale: 0.78, x: fromX, y: fromY, rotate: rotate * 2.5 }}
      animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0, rotate } : {}}
      transition={{ duration: 0.85, delay, ease: EASE }}
      whileHover={{ scale: 1.05, rotate: rotate * 0.4, zIndex: 40 }}
    >
      {/* idle bob — kept on an inner layer so it never fights the entrance */}
      <motion.div
        animate={inView ? { y: [0, -float, 0] } : {}}
        transition={{
          duration: floatDur,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.6,
        }}
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
      </motion.div>
    </motion.figure>
  )
}

export default function About() {
  const scrapRef = useRef<HTMLDivElement>(null)
  const scrapInView = useInView(scrapRef, { once: true, margin: '-10%' })

  // gentle scroll-linked parallax for the whole section's two columns
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const scrapY = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-6 sm:px-10 lg:px-14 py-16 sm:py-24 scroll-mt-24"
    >
      <ScrollReveal>
        <div className="bg-cream rounded-md shadow-2xl p-8 sm:p-12 lg:p-16
          grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* text column */}
          <motion.div style={{ y: textY }}>
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
          </motion.div>

          {/* scrapbook column */}
          <motion.div
            ref={scrapRef}
            style={{ y: scrapY }}
            className="relative min-h-[380px] sm:min-h-[460px]"
          >
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
              float={12}
              floatDur={6.5}
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
              float={9}
              floatDur={5.5}
            />
            <Photo
              label="claymation short"
              media={{ type: 'video', src: '/media/about-clay.mp4' }}
              rotate={-2}
              className="bottom-0 left-1/4 w-36 sm:w-44 z-30"
              inView={scrapInView}
              fromX={20}
              fromY={70}
              delay={0.34}
              float={14}
              floatDur={7}
            />
          </motion.div>
        </div>
      </ScrollReveal>
    </section>
  )
}
