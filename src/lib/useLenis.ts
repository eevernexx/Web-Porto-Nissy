'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/** Live Lenis instance, shared so UI (e.g. the navbar) can drive smooth
 *  scroll-to without Lenis hijacking native anchor jumps. */
let lenisInstance: Lenis | null = null

export function scrollToSection(target: string) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -8 })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisInstance = lenis

    let frame = 0
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}
