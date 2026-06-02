'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Statement() {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-28">
      <ScrollReveal>
        <h2
          className="font-punch font-black text-left text-[#B9B0A0]"
          style={{ fontSize: 'clamp(30px,7vw,96px)', lineHeight: 0.92 }}
        >
          it&apos;s not just designing,
          <br />
          it&apos;s{' '}
          <span className="text-ink">vibing with visuals.</span>
        </h2>
      </ScrollReveal>
    </section>
  )
}
