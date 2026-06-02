'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import MagneticButton from '@/components/ui/MagneticButton'
import { PROFILE } from '@/lib/data'

const WHATSAPP = 'https://wa.me/6283157110459'

export default function Contact() {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
      <ScrollReveal>
        <div className="bg-cream rounded-md shadow-2xl p-8 sm:p-12 lg:p-16
          grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* left column */}
          <div>
            <h2 className="font-punch font-black text-ink leading-[0.9]"
              style={{ fontSize: 'clamp(48px,15vw,220px)' }}>
              and that&apos;s a wrap.
            </h2>

            <div className="mt-8 space-y-1 text-ink-soft text-base sm:text-lg">
              <p className="text-ink font-medium">{PROFILE.name}</p>
              <p>{PROFILE.location}</p>
              <p>{PROFILE.phone}</p>
            </div>

            <MagneticButton
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              data-cur="open"
              className="inline-flex items-center gap-2 mt-8 px-7 py-4
                rounded-full bg-ink text-cream text-sm sm:text-base font-medium
                cursor-none hover:bg-pink-deep"
            >
              Let&apos;s create something beautiful together
              <span aria-hidden>&#8594;</span>
            </MagneticButton>
          </div>

          {/* right column: sticky note (gradient border, no pseudo needed) */}
          <div className="flex justify-center md:justify-end">
            <div className="rotate-[-2deg] rounded-sm bg-gradient-to-br
              from-pink to-pink-deep p-[3px] shadow-2xl max-w-sm">
              <div className="bg-white rounded-sm p-7 sm:p-9">
                <p className="font-hand text-ink leading-snug"
                  style={{ fontSize: 'clamp(22px,3vw,32px)' }}>
                  thank you so much for taking the time to scroll all the way
                  down here. if any of this made you smile, let&apos;s make
                  something beautiful together.
                </p>
                <p className="font-hand text-pink-deep mt-4"
                  style={{ fontSize: 'clamp(22px,3vw,32px)' }}>
                  xx, Anissa
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
