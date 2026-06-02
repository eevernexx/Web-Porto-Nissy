'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* Layered text-shadow that extrudes the display name into a 3D block.
   Offsets are in `em` so the depth scales with the responsive font size. */
const NAME_3D = {
  textShadow: [
    '0.014em 0.014em 0 #E57BA8',
    '0.028em 0.028em 0 #df7197',
    '0.042em 0.042em 0 #d8678d',
    '0.056em 0.056em 0 #cf5a80',
    '0.07em 0.07em 0 #c44f74',
    '0.084em 0.084em 0 #b54669',
    '0.05em 0.12em 0.06em rgba(90,28,54,0.33)',
  ].join(', '),
}

/* Hero portrait: the photo ships with its own scrapbook framing on a
   transparent background, so it floats directly on the paper. */
function Portrait() {
  return (
    <motion.div
      style={{ width: 'clamp(190px,23vw,320px)' }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Image
        src="/media/anissa-portrait.png"
        alt="Portrait of Anissa Damayanti"
        width={1080}
        height={1350}
        priority
        sizes="(max-width: 768px) 60vw, 23vw"
        className="w-full h-auto select-none pointer-events-none
          drop-shadow-[0_22px_45px_rgba(229,123,168,0.45)]"
      />
    </motion.div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const nameY = useTransform(scrollY, [0, 500], [0, -55])
  const portraitY = useTransform(scrollY, [0, 500], [0, 28])

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
      <div className="relative flex-1 flex flex-col justify-center py-8 md:py-0">
        {/* parallax wrapper for names */}
        <motion.div style={{ y: nameY }} className="relative">
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
            style={{ fontSize: 'clamp(46px,13vw,168px)', ...NAME_3D }}
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
              ...NAME_3D,
            }}
          >
            DAMAYANTI
          </motion.h1>
        </motion.div>

        {/* portrait: parallax (outer) + entrance/tilt (middle) + float (inner) */}
        <motion.div
          style={{ y: portraitY }}
          className="mt-10 md:mt-0 md:absolute md:top-0 md:right-0 md:z-20
            flex justify-center md:block"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          >
            <Portrait />
          </motion.div>
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
