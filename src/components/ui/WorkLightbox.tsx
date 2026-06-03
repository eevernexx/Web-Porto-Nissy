'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { stopScroll, startScroll } from '@/lib/useLenis'
import type { Project } from '@/lib/types'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* Full-screen preview shown when a work tile is clicked.
   Render this inside an <AnimatePresence> so the exit animation plays. */
export default function WorkLightbox({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  // Freeze the page + close on Escape while the preview is open.
  useEffect(() => {
    stopScroll()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      startScroll()
    }
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
      onClick={onClose}
      data-cur="close"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="fixed inset-0 z-[200] flex items-center justify-center
        p-5 sm:p-8 bg-ink/70 backdrop-blur-md cursor-none"
    >
      <motion.figure
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative w-full max-w-3xl bg-cream rounded-2xl overflow-hidden
          shadow-2xl"
      >
        {/* close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          data-cur="close"
          className="absolute top-3 right-3 z-10 grid place-items-center
            h-10 w-10 rounded-full bg-ink/80 text-cream text-xl leading-none
            cursor-none transition-transform hover:scale-110 hover:bg-ink"
        >
          &#215;
        </button>

        {/* artwork, contained so the full piece is visible */}
        <div className="relative w-full bg-ink/90"
          style={{ aspectRatio: '4 / 3' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 90vw, 768px"
            className="object-contain"
          />
        </div>

        {/* caption */}
        <figcaption className="p-6 sm:p-8">
          <p className="text-pink-deep uppercase tracking-widest
            text-[11px] sm:text-xs mb-1.5">
            {project.category}
          </p>
          <h3 className="font-display font-semibold text-ink
            text-2xl sm:text-3xl leading-tight mb-3">
            {project.title}
          </h3>
          {project.blurb && (
            <p className="text-ink-soft text-sm sm:text-base leading-relaxed
              max-w-prose">
              {project.blurb}
            </p>
          )}
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}
