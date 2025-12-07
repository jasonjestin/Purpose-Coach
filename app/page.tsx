'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import CircleCluster from '@/components/CircleCluster'
import ScrollReveal from '@/components/ScrollReveal'
import CTAButton from '@/components/CTAButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Handwritten headline - emotional hook */}
        <motion.h1
          className="font-script text-5xl md:text-8xl text-navy-deep text-center mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At a crossroads?
        </motion.h1>

        {/* Bold subhead with emphasis */}
        <motion.p
          className="text-xl md:text-3xl text-center text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          When <span className="font-bold text-navy-deep">direction</span> matters.
        </motion.p>

        {/* CIRCULAR CLUSTER - 10 circles with organic flow */}
        <CircleCluster
          images={[
            {
              src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
              size: 'large',
              position: { top: '15%', right: '10%' },
              alt: 'Aerial ocean waves',
              zIndex: 5,
            },
            {
              src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600',
              size: 'medium',
              position: { top: '10%', left: '15%' },
              alt: 'Desert journey',
              zIndex: 3,
            },
            {
              src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
              size: 'medium',
              position: { bottom: '20%', left: '8%' },
              alt: 'Mountain summit',
              zIndex: 4,
            },
            {
              src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400',
              size: 'small',
              position: { top: '45%', left: '25%' },
              alt: 'Underwater scene',
              zIndex: 2,
            },
            {
              src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
              size: 'medium',
              position: { bottom: '15%', right: '25%' },
              alt: 'Ocean horizon',
              zIndex: 6,
            },
            {
              src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400',
              size: 'small',
              position: { bottom: '30%', right: '15%' },
              alt: 'Desert dunes',
              zIndex: 7,
            },
            {
              src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
              size: 'medium',
              position: { top: '25%', left: '45%' },
              alt: 'Beach sunset',
              zIndex: 1,
            },
            {
              src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
              size: 'small',
              position: { top: '35%', right: '35%' },
              alt: 'Mountain vista',
              zIndex: 8,
            },
            {
              src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600',
              size: 'medium',
              position: { bottom: '35%', left: '40%' },
              alt: 'Footprints in sand',
              zIndex: 3,
            },
            {
              src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
              size: 'small',
              position: { top: '20%', right: '45%' },
              alt: 'Nature path',
              zIndex: 2,
            },
          ]}
        />

        {/* Value proposition */}
        <ScrollReveal>
          <p className="text-lg md:text-2xl text-center max-w-3xl mt-16 mb-8 text-gray-700">
            We help you <span className="font-bold text-navy-deep">recalibrate</span>,{' '}
            <span className="font-bold text-navy-deep">create</span> and{' '}
            <span className="font-bold text-navy-deep">navigate</span> your next big chapter.
          </p>
        </ScrollReveal>

        {/* Primary CTA */}
        <ScrollReveal delay={0.2}>
          <CTAButton href="#program">Let&apos;s Get You Started</CTAButton>
        </ScrollReveal>
      </section>

      {/* ==================== SECTION 2: TRANSFORMATION PROMISE ==================== */}
      <section
        id="about"
        className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20"
      >
        <ScrollReveal>
          <h2 className="font-script text-4xl md:text-7xl text-navy-deep text-center mb-6">
            Unleash Your Full Potential
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl md:text-2xl text-center text-gray-700 mb-16">
            Using purpose-driven{' '}
            <span className="font-bold text-navy-deep">ontological</span> coaching.
          </p>
        </ScrollReveal>

        {/* CIRCULAR CLUSTER - Summit/transformation imagery with gradient */}
        <CircleCluster
          images={[
            {
              src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
              size: 'large',
              position: { top: '20%', left: '50%', transform: 'translateX(-50%)' },
              alt: 'Person on mountain summit',
              gradient: 'sunset',
              zIndex: 5,
            },
            {
              src: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400',
              size: 'small',
              position: { top: '15%', left: '20%' },
              alt: 'Starry sky',
              zIndex: 3,
            },
            {
              src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
              size: 'medium',
              position: { bottom: '25%', right: '15%' },
              alt: 'Mountain ridges',
              gradient: 'sunrise',
              zIndex: 4,
            },
            {
              src: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600',
              size: 'medium',
              position: { bottom: '20%', left: '10%' },
              alt: 'Sunset clouds',
              zIndex: 2,
            },
            {
              src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
              size: 'small',
              position: { top: '30%', right: '20%' },
              alt: 'Mountain peak',
              zIndex: 6,
            },
            {
              src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
              size: 'small',
              position: { bottom: '35%', left: '35%' },
              alt: 'Summit view',
              gradient: 'sunset',
              zIndex: 1,
            },
          ]}
        />
      </section>

      {/* ==================== SECTION 3: THREE PILLARS ==================== */}
      <section id="program" className="bg-white py-20 px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold text-navy-deep text-center mb-4">
            Our unique
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-navy-deep text-center mb-20">
            approach
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {/* PILLAR 1: Evidence-based */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center text-center">
              <CircleCluster
                compact
                images={[
                  {
                    src: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=400',
                    size: 'medium',
                    position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
                    alt: 'Compass on map',
                    zIndex: 3,
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=300',
                    size: 'small',
                    position: { top: '20%', left: '15%' },
                    alt: 'Navigation tools',
                    zIndex: 1,
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=300',
                    size: 'small',
                    position: { bottom: '20%', right: '15%' },
                    alt: 'Map detail',
                    zIndex: 2,
                  },
                ]}
              />

              <h3 className="text-2xl md:text-3xl font-bold text-navy-deep mt-8">
                Evidence-based
              </h3>

              <p className="text-gray-600 mt-4 max-w-sm text-lg leading-relaxed">
                First-principle diagnostic methods grounded in research.
              </p>
            </div>
          </ScrollReveal>

          {/* PILLAR 2: Holistic */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center text-center">
              <CircleCluster
                compact
                images={[
                  {
                    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
                    size: 'medium',
                    position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
                    alt: 'Person in nature',
                    zIndex: 3,
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300',
                    size: 'small',
                    position: { top: '20%', left: '15%' },
                    alt: 'Peaceful nature',
                    zIndex: 1,
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300',
                    size: 'small',
                    position: { bottom: '20%', right: '15%' },
                    alt: 'Calm water',
                    zIndex: 2,
                  },
                ]}
              />

              <h3 className="text-2xl md:text-3xl font-bold text-navy-deep mt-8">Holistic</h3>

              <p className="text-gray-600 mt-4 max-w-sm text-lg leading-relaxed">
                Whole-person view including environment and deeper patterns.
              </p>
            </div>
          </ScrollReveal>

          {/* PILLAR 3: Experiential */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center text-center">
              <CircleCluster
                compact
                images={[
                  {
                    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400',
                    size: 'medium',
                    position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
                    alt: 'Underwater diver',
                    zIndex: 3,
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300',
                    size: 'small',
                    position: { top: '20%', left: '15%' },
                    alt: 'Diving exploration',
                    zIndex: 1,
                  },
                  {
                    src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300',
                    size: 'small',
                    position: { bottom: '20%', right: '15%' },
                    alt: 'Ocean depth',
                    zIndex: 2,
                  },
                ]}
              />

              <h3 className="text-2xl md:text-3xl font-bold text-navy-deep mt-8">
                Experiential
              </h3>

              <p className="text-gray-600 mt-4 max-w-sm text-lg leading-relaxed">
                Real-world interventions for breakthrough results.
              </p>

              <div className="mt-8">
                <CTAButton variant="secondary" size="md" href="#contact">
                  Learn More Here
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SECTION 4: SOCIAL PROOF ==================== */}
      <section className="bg-navy-deep text-white py-20 px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Organisations we&apos;ve impacted
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto items-center justify-items-center">
          <ScrollReveal delay={0.1}>
            <div className="h-24 flex items-center justify-center">
              <span className="text-white text-xl font-bold tracking-wider">UNITED NATIONS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="h-24 flex items-center justify-center">
              <span className="text-white text-xl font-bold tracking-wider">MODERN PEOPLE</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="h-24 flex items-center justify-center">
              <span className="text-white text-xl font-bold tracking-wider">BETTERLABS</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SECTION 5: FINAL CTA ==================== */}
      <section
        id="contact"
        className="min-h-[60vh] bg-gradient-to-br from-coral to-gold flex flex-col items-center justify-center px-6 py-20 text-white"
      >
        <ScrollReveal>
          <h2 className="font-script text-4xl md:text-6xl text-center mb-6">
            Ready to live from the inside out?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 opacity-95">
            Get clarity about yourself first. Then decide what&apos;s next.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <CTAButton variant="white" href="#download">
            Download Free Workbook
          </CTAButton>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-6 text-sm opacity-90">
            Or{' '}
            <button className="underline hover:no-underline font-semibold">
              book a discovery call
            </button>
          </p>
        </ScrollReveal>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-navy-deep text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Just Jason</h3>
              <p className="text-gray-300">The Purpose Coach</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigate</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-coral transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#about" className="hover:text-coral transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-coral transition-colors">
                    Program
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/pricing" className="hover:text-coral transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-coral transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/workbooks" className="hover:text-coral transition-colors">
                    Workbooks
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-gray-300">jason@purposecoach.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Just Jason - The Purpose Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
