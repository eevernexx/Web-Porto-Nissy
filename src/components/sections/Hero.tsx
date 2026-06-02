'use client'

import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

function Portrait({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-md border-2 border-dashed border-pink-deep/50
        bg-gradient-to-br from-pink-soft to-cream
        flex items-center justify-center text-center p-4 ${className}`}
      style={{ width: 'clamp(180px,22vw,300px)', aspectRatio: '3 / 4' }}
    >
      <span className="font-hand text-pink-deep text-lg leading-tight">
        Portrait of Anissa
        <br />
        drop photo here
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden
      px-6 sm:px-10 lg:px-14 pt-24 sm:pt-20 pb-8 flex flex-col justify-between">
      {/* top handwritten row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0, ease: EASE }}
        className="flex flex-col sm:flex-row sm:items-start sm:justify-between
          gap-2 font-hand text-ink-soft"
        style={{ fontSize: 'clamp(26px,4vw,52px)' }}
      >
        <span className="leading-none">Hi. Since you&apos;re new here.</span>
        <span className="leading-none sm:text-right text-pink-deep">
          let me be ya tour guide
        </span>
      </motion.div>

      {/* name block */}
      <div className="relative flex-1 flex flex-col justify-center
        py-8 md:py-0">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="font-hand text-pink-deep block absolute -top-2 left-1
              z-10 -rotate-3"
            style={{ fontSize: 'clamp(22px,3vw,38px)' }}
          >
            This is
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="font-display font-semibold text-pink leading-[0.85]
              tracking-tight whitespace-nowrap"
            style={{ fontSize: 'clamp(46px,13vw,168px)' }}
          >
            ANISSA
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="font-display font-semibold text-pink leading-[0.85]
              tracking-tight whitespace-nowrap"
            style={{
              fontSize: 'clamp(46px,13vw,168px)',
              marginLeft: 'clamp(16px,5vw,64px)',
            }}
          >
            DAMAYANTI
          </motion.h1>
        </div>

        {/* portrait: in-flow on mobile, absolute on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="mt-10 md:mt-0 md:absolute md:top-0 md:right-0 md:z-20"
        >
          <Portrait className="md:rotate-3" />
        </motion.div>
      </div>

      {/* footer row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between
          gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-ink-soft"
      >
        <span>Graphic Designer / Content Creator / Visual Storyteller</span>
        <span className="text-ink">By Anissa Damayanti</span>
      </motion.div>
    </section>
  )
}
