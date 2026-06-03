'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

/* Each equalizer bar has its own keyframe set + duration so the four bars
   never move in lockstep, so it reads like a real sound meter. */
const BARS = [
  { keys: [0.35, 1, 0.5, 0.85, 0.35], dur: 0.95 },
  { keys: [0.6, 0.3, 1, 0.45, 0.6], dur: 1.15 },
  { keys: [0.45, 0.9, 0.35, 1, 0.45], dur: 0.85 },
  { keys: [0.8, 0.4, 0.7, 0.3, 0.8], dur: 1.05 },
]

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const reduce = useReducedMotion()

  // Keep state in sync with the actual element (covers play/pause triggered
  // by the OS media keys or the browser, not just our button).
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.55
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.play().catch(() => {})
    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      return
    }
    try {
      await audio.play()
    } catch {
      // Autoplay/permission was refused, so leave it paused.
      setPlaying(false)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/media/gameboy.mp3"
        loop
        preload="auto"
      />

      <motion.button
        type="button"
        onClick={toggle}
        aria-label={
          playing ? 'Mute background music' : 'Play background music'
        }
        aria-pressed={playing}
        data-cur={playing ? 'mute' : 'play song'}
        initial={{ y: 28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]
          grid place-items-center h-12 w-12 rounded-full
          border border-white/40 bg-white/12
          backdrop-blur-[6px] backdrop-saturate-[1.7] backdrop-brightness-[1.04]
          shadow-[0_8px_30px_rgba(39,35,32,0.12),inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_2px_rgba(255,255,255,0.2)]
          transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {/* specular top sheen, same wet-glass highlight as the navbar */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-3 top-0 h-1/2
            rounded-full bg-gradient-to-b from-white/60 to-transparent opacity-70"
        />

        {/* equalizer bars: animate while playing, rest low when muted */}
        <span
          aria-hidden
          className="relative flex items-end justify-center gap-[3px] h-[18px]"
        >
          {BARS.map((bar, i) => (
            <motion.span
              key={i}
              className={`w-[3px] h-full rounded-full origin-bottom
                transition-colors duration-300 ${
                  playing ? 'bg-pink-deep' : 'bg-pink-deep/40'
                }`}
              style={{ scaleY: 0.35 }}
              animate={
                playing && !reduce
                  ? { scaleY: bar.keys }
                  : { scaleY: 0.35 }
              }
              transition={
                playing && !reduce
                  ? {
                      duration: bar.dur,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
                  : { duration: 0.3, ease: 'easeOut' }
              }
            />
          ))}
        </span>
      </motion.button>
    </>
  )
}
