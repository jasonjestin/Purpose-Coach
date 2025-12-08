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
        {/* PRD Hero Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mb-8 z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ocean-blue leading-tight mb-6">
            You&apos;ve achieved a lot in your career.
            <br />
            <span className="text-charcoal">But something feels off.</span>
          </h1>

          <p className="text-2xl md:text-3xl text-charcoal mb-4">
            You want an exciting new chapter.
          </p>

          <p className="text-xl md:text-2xl text-warm-grey">
            You just need clarity on what that looks like—
            <br />
            and a way to make it real.
          </p>
        </motion.div>

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

        {/* Primary CTA */}
        <ScrollReveal delay={0.2}>
          <Link
            href="/start-here"
            className="inline-block bg-terracotta text-white px-12 py-4 rounded-lg text-lg font-bold hover:bg-terracotta-dark transition-colors shadow-lg z-10 relative"
          >
            Discover Your Alignment
          </Link>
        </ScrollReveal>
      </section>

      {/* ==================== SECTION 2: THE GAP ==================== */}
      <section className="py-section-desktop px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-bold text-ocean-blue mb-8">
              Here&apos;s the problem with most career advice:
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 text-body-lg text-charcoal">
              <p>
                It tells you to &quot;find your passion&quot; or &quot;just make a change.&quot;
              </p>
              <p className="font-semibold">
                But without deep clarity, a decision framework, and a practical process?
              </p>
              <p>
                You&apos;re just guessing.
                <br />
                Or repeating the same pattern in a different job.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SECTION 3: THE SOLUTION ==================== */}
      <section className="py-section-desktop px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
              This program gives you all three:
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0.1}>
              <div className="bg-cream rounded-card p-8 text-center h-full">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-terracotta">1</span>
                </div>
                <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                  Deep Self-Discovery
                </h3>
                <p className="text-body text-charcoal">
                  Get concrete, usable clarity on your core values, true gifts, and genuine vision.
                </p>
                <p className="text-body text-warm-grey mt-4 italic">
                  Not conceptual fluff—actual data about what drives you.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-cream rounded-card p-8 text-center h-full">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-terracotta">2</span>
                </div>
                <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                  Aligned Decision Framework
                </h3>
                <p className="text-body text-charcoal">
                  Learn how to evaluate any opportunity through your own lens.
                </p>
                <p className="text-body text-warm-grey mt-4 italic">
                  So you stop second-guessing and start moving with conviction.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-cream rounded-card p-8 text-center h-full">
                <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-terracotta">3</span>
                </div>
                <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                  Practical Implementation Roadmap
                </h3>
                <p className="text-body text-charcoal">
                  A step-by-step process from insight to action.
                </p>
                <p className="text-body text-warm-grey mt-4 italic">
                  Not theory—real milestones, goals, and next steps.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="max-w-3xl mx-auto text-center bg-ocean-blue text-white rounded-card p-8">
              <p className="text-body-lg mb-4">
                <span className="font-bold">Plus a tangible deliverable:</span>
              </p>
              <p className="text-body-lg">
                Your <span className="font-bold">Purpose Portfolio</span>—a professional website that captures
                who you are and positions you for your next chapter.
              </p>
              <p className="text-body mt-4 opacity-90">
                This is transformation with a practical outcome.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="text-center mt-12">
              <Link
                href="/start-here"
                className="inline-block bg-terracotta text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-terracotta-dark transition-colors shadow-md"
              >
                Start With The Assessment
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SECTION 4: INSIDE-OUT FRAMEWORK ==================== */}
      <section className="py-section-desktop px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-h2 font-bold text-ocean-blue text-center mb-4">
              Two ways to live. Only one feels alive.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
            <ScrollReveal delay={0.1}>
              <div className="bg-warm-grey/10 rounded-card p-8 opacity-60">
                <h3 className="text-h4 font-bold text-charcoal mb-6 text-center">
                  OUTSIDE IN
                </h3>
                <div className="space-y-4 text-center">
                  <div className="py-3 px-4 bg-white/50 rounded">Society&apos;s expectations</div>
                  <div className="text-warm-grey text-2xl">↓</div>
                  <div className="py-3 px-4 bg-white/50 rounded">Job title, salary, status</div>
                  <div className="text-warm-grey text-2xl">↓</div>
                  <div className="py-3 px-4 bg-white/50 rounded">Your decisions</div>
                  <div className="text-warm-grey text-2xl">↓</div>
                  <div className="py-3 px-4 bg-white/50 rounded">Cognitive dissonance</div>
                  <div className="text-warm-grey text-2xl">↓</div>
                  <div className="py-3 px-4 bg-status-red/20 rounded font-semibold">Emptiness despite success</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-status-green/10 rounded-card p-8 border-2 border-status-green">
                <h3 className="text-h4 font-bold text-status-green mb-6 text-center">
                  INSIDE OUT
                </h3>
                <div className="space-y-4 text-center">
                  <div className="py-3 px-4 bg-white rounded">Your values & vision</div>
                  <div className="text-status-green text-2xl">↓</div>
                  <div className="py-3 px-4 bg-white rounded">Clarity about what matters</div>
                  <div className="text-status-green text-2xl">↓</div>
                  <div className="py-3 px-4 bg-white rounded">Aligned decisions</div>
                  <div className="text-status-green text-2xl">↓</div>
                  <div className="py-3 px-4 bg-white rounded">Workability (alignment)</div>
                  <div className="text-status-green text-2xl">↓</div>
                  <div className="py-3 px-4 bg-status-green text-white rounded font-semibold">Rich, full, meaningful life</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-body-lg text-ocean-blue font-semibold">
                Most career advice starts with: &quot;What job do you want?&quot;
              </p>
              <p className="text-body-lg text-charcoal mt-4">
                We start with: <span className="font-bold">&quot;Who are you?&quot;</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SECTION 5: THE 7 STEPS (Brief) ==================== */}
      <section className="py-section-desktop px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
              The journey: 7 steps from disconnected to aligned
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, name: 'Life Discovery', desc: 'Uncover the defining moments that shaped you. Reframe your past to reclaim your power.' },
              { step: 2, name: 'Values & Gifts', desc: 'Identify your core values and true gifts. Discover what gives your life meaning.' },
              { step: 3, name: 'Embodiment', desc: 'Live your values daily. Close the gap between who you are and how you show up.' },
              { step: 4, name: 'Vision', desc: 'Design a vision for your life that excites you. Your Northern Star.' },
              { step: 5, name: 'Mission', desc: 'Reverse-engineer your vision into practical milestones. Your roadmap.' },
              { step: 6, name: 'Goals', desc: 'Set strategic, aligned SMART goals. Turn possibility into action.' },
              { step: 7, name: 'Transformation', desc: 'Sustain the journey. Build habits that keep you aligned and alive.' },
            ].slice(0, 4).map((item, index) => (
              <ScrollReveal key={item.step} delay={0.1 * index}>
                <div className="bg-cream rounded-card p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-ocean-blue mb-3">{item.name}</h3>
                  <p className="text-body text-charcoal">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
            {[
              { step: 5, name: 'Mission', desc: 'Reverse-engineer your vision into practical milestones. Your roadmap.' },
              { step: 6, name: 'Goals', desc: 'Set strategic, aligned SMART goals. Turn possibility into action.' },
              { step: 7, name: 'Transformation', desc: 'Sustain the journey. Build habits that keep you aligned and alive.' },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={0.4 + 0.1 * index}>
                <div className="bg-cream rounded-card p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-ocean-blue mb-3">{item.name}</h3>
                  <p className="text-body text-charcoal">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.7}>
            <div className="text-center mt-12">
              <Link
                href="/your-journey"
                className="inline-block text-terracotta font-bold text-lg hover:text-terracotta-dark transition-colors underline"
              >
                Explore The Full Program →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SECTION 6: TRANSFORMATION PROMISE ==================== */}
      <section className="py-section-desktop px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
              The outcome? More than clarity.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-card p-8 text-center">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-h4 font-bold text-ocean-blue mb-4">CLARITY</h3>
                <p className="text-body text-charcoal">
                  Know your values, gifts, and vision.
                </p>
                <p className="text-body text-warm-grey mt-2 italic">
                  Not conceptually. Viscerally.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-card p-8 text-center">
                <div className="text-5xl mb-6">💪</div>
                <h3 className="text-h4 font-bold text-ocean-blue mb-4">CONVICTION</h3>
                <p className="text-body text-charcoal">
                  Stop second-guessing. Make decisions with aligned confidence.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-white rounded-card p-8 text-center">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-h4 font-bold text-ocean-blue mb-4">COURAGE</h3>
                <p className="text-body text-charcoal">
                  Step into possibility. Lead your life from the inside out.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
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

      {/* ==================== SECTION 7: SOCIAL PROOF ==================== */}
      <section className="py-section-desktop px-6 bg-ocean-blue text-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-h2 font-bold text-center mb-12">
              Trusted by professionals at
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
            <ScrollReveal delay={0.1}>
              <div className="text-white/80 text-lg font-bold tracking-wider">UNITED NATIONS</div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="text-white/80 text-lg font-bold tracking-wider">MODERN PEOPLE</div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="text-white/80 text-lg font-bold tracking-wider">BETTERLABS</div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="text-white/80 text-lg font-bold tracking-wider">REACH HER</div>
            </ScrollReveal>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal delay={0.5}>
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">
                    W
                  </div>
                  <div>
                    <div className="font-bold">Walia</div>
                    <div className="text-sm text-white/70">Product Manager</div>
                  </div>
                </div>
                <div className="text-amber mb-3">★★★★★</div>
                <p className="text-white/90 italic">
                  &quot;Jason&apos;s program gave me the clarity I&apos;d been searching for. I finally understand what I want—and have a plan to make it happen.&quot;
                </p>
                <p className="text-sm text-white/60 mt-3">California, United States</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">
                    H
                  </div>
                  <div>
                    <div className="font-bold">Hannah</div>
                    <div className="text-sm text-white/70">Legal → Entrepreneur</div>
                  </div>
                </div>
                <div className="text-amber mb-3">★★★★★</div>
                <p className="text-white/90 italic">
                  &quot;The tools and guidance I gained were transformational. I gained clarity on what truly matters and feel empowered to pursue it.&quot;
                </p>
                <p className="text-sm text-white/60 mt-3">Perth, Australia</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-bold">
                    J
                  </div>
                  <div>
                    <div className="font-bold">Jean</div>
                    <div className="text-sm text-white/70">Professional → Entrepreneur</div>
                  </div>
                </div>
                <div className="text-amber mb-3">★★★★★</div>
                <p className="text-white/90 italic">
                  &quot;I had an unexpected transformational journey. The experience guided me toward a path of purpose and fulfillment.&quot;
                </p>
                <p className="text-sm text-white/60 mt-3">Berlin, Germany</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: FINAL CTA ==================== */}
      <section className="py-20 px-6 bg-gradient-to-br from-terracotta to-coral text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-h2 font-bold mb-6">
              Ready to find out where you stand?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-2xl mb-4">
              Take the Inside-Out Alignment Assessment.
            </p>
            <p className="text-xl opacity-90 mb-8">
              10 minutes. Complete clarity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Link
              href="/start-here"
              className="inline-block bg-white text-terracotta px-12 py-4 rounded-lg text-lg font-bold hover:bg-cream transition-colors shadow-lg"
            >
              Discover Your Alignment Score
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-ocean-blue text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Just Jason</h3>
              <p className="text-white/80 mb-4">Living from the inside out</p>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/your-journey" className="hover:text-white transition-colors">Your Journey</Link></li>
                <li><Link href="/the-method" className="hover:text-white transition-colors">The Method</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/start-here" className="hover:text-white transition-colors">Start Here</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-white/80 mb-2">purpose@purpose-coach.com</p>
              <p className="text-white/80 mb-4">+61(0)402-148-244</p>
              <div className="mt-6">
                <p className="text-sm text-white/60 mb-2">Newsletter signup coming soon</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Purpose Coach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
