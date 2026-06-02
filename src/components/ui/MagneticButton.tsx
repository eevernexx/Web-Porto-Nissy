'use client'

import { useRef, type MouseEvent } from 'react'

export default function MagneticButton({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null)

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    const x = ((e.clientX - r.left - r.width / 2) * 0.25).toFixed(1)
    const y = ((e.clientY - r.top - r.height / 2) * 0.25).toFixed(1)
    ref.current!.style.transform = `translate(${x}px,${y}px)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-300 ease-out ${className ?? ''}`}
      {...props}
    >
      {children}
    </a>
  )
}
