'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [hovered, setHovered] = useState(false)
  const pos = useRef({ rx: 0, ry: 0, mx: 0, my: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`
      }
    }

    let raf: number
    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.35
      p.ry += (p.my - p.ry) * 0.35
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${p.rx}px,${p.ry}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const interactives = document.querySelectorAll<HTMLElement>('[data-cur]')
    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      setLabel(el.dataset.cur ?? 'view')
      setHovered(true)
    }
    const leave = () => {
      setHovered(false)
      setLabel('')
    }
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 w-[7px] h-[7px] rounded-full bg-white
          pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      />
      <div
        ref={ringRef}
        aria-hidden
        className={`fixed top-0 left-0 rounded-full pointer-events-none
          z-[9999] mix-blend-difference border duration-300 ease-out
          transition-[width,height,background-color,border-color]
          hidden md:flex items-center justify-center
          ${
            hovered
              ? 'w-[74px] h-[74px] bg-pink/20 border-transparent'
              : 'w-[38px] h-[38px] bg-transparent border-white/70'
          }`}
      >
        {hovered && (
          <span
            className="text-[9px] font-semibold tracking-widest
              uppercase text-white mix-blend-normal"
          >
            {label}
          </span>
        )}
      </div>
    </>
  )
}
