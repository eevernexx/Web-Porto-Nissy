import type { Metadata } from 'next'
import { Fredoka, Caveat, Inter, Archivo } from 'next/font/google'
import './globals.css'

/* FONT SETUP
   Clash Display / General Sans were not provided as local .woff2 files,
   so the display + punch faces fall back to Fredoka / Archivo from
   next/font/google ( logged here so the fallback is not silent ). */
const fontDisplay = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
})

const fontHand = Caveat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
})

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fontPunch = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anissa Damayanti · Graphic Designer & Visual Storyteller',
  description:
    'Graphic Designer / Content Creator / Visual Storyteller based in Bandung, Indonesia. Specializing in brand identity, social media design, and visual content.',
  openGraph: {
    title: 'Anissa Damayanti · Graphic Designer & Visual Storyteller',
    description:
      'Graphic Designer / Content Creator / Visual Storyteller. Bandung, Indonesia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={[
        fontDisplay.variable,
        fontHand.variable,
        fontBody.variable,
        fontPunch.variable,
      ].join(' ')}
    >
      <body>{children}</body>
    </html>
  )
}
