'use client'

import { useEffect, useRef } from 'react'

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  strength = 0.1,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handler = () => {
      el.style.transform = `translateY(${-window.scrollY * strength}px)`
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()

    return () => window.removeEventListener('scroll', handler)
  }, [strength])

  return ref
}
