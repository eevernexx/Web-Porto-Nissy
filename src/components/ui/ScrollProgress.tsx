'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [w, setW] = useState(0)

  useEffect(() => {
    const h = document.documentElement
    const calc = () => {
      const max = h.scrollHeight - h.clientHeight
      setW(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    calc()
    window.addEventListener('scroll', calc, { passive: true })
    window.addEventListener('resize', calc)
    return () => {
      window.removeEventListener('scroll', calc)
      window.removeEventListener('resize', calc)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[9997]
        bg-gradient-to-r from-pink to-pink-deep"
      style={{ width: `${w}%` }}
    />
  )
}
