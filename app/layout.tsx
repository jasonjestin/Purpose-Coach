import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'
import './globals.css'
import QuizPopup from '@/components/QuizPopup'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700', '900'],
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Purpose Coach - Your Journey to Alignment',
  description: 'Transform from external success to internal fulfillment. Discover your purpose and create a life that truly aligns with who you are.',
  icons: {
    icon: '/PC logo.png',
    shortcut: '/PC logo.png',
    apple: '/PC logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>
        {children}
        <QuizPopup />
      </body>
    </html>
  )
}
