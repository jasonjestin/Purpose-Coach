'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-ocean-blue mb-6">
                From finance director to purpose coach.
                <br />
                Because I had to.
              </h1>

              <div className="space-y-4 text-body-lg text-charcoal">
                <p>
                  I spent 15 years climbing a ladder I didn&apos;t choose.
                </p>
                <p>
                  Finance. Big agencies. Director-level roles.
                  On paper, I&apos;d made it.
                </p>
                <p className="font-semibold text-ocean-blue">
                  But I was dying inside.
                </p>
                <p>
                  The burnout hit hard. The disconnect was unbearable.
                  And I realized: I&apos;d been living someone else&apos;s definition of success.
                </p>
                <p>
                  So I did what everyone said was crazy.
                  <br />
                  I left. I hiked the GR20. I became a coach.
                </p>
                <p>
                  Not because I had it figured out.
                  <br />
                  <span className="font-semibold">Because I had to figure it out.</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 md:h-[500px] rounded-card overflow-hidden shadow-xl"
            >
              {/* Placeholder for photo */}
              <div className="w-full h-full bg-ocean-blue/10 flex items-center justify-center">
                <p className="text-warm-grey text-center px-8">
                  Photo: Jason in tropical shirt
                  <br />
                  (approachable, authentic setting)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY - TIMELINE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            The path from disconnection to purpose
          </h2>

          <div className="space-y-12">
            {/* Milestone 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 border-l-4 border-terracotta"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-terracotta"></div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-2">
                Corporate Success → Emptiness
              </h3>
              <p className="text-body text-charcoal">
                15 years in corporate finance and advertising.
                <br />
                UN, Modern People, BetterLabs, DDB.
              </p>
              <p className="text-body text-warm-grey mt-2">
                Successful on paper. Empty in practice.
              </p>
            </motion.div>

            {/* Milestone 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-8 border-l-4 border-terracotta"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-terracotta"></div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-2">
                The Breaking Point
              </h3>
              <p className="text-body text-charcoal">
                Separation. Burnout. Rebuilding.
                <br />
                Co-parenting two kids in Australia.
              </p>
              <p className="text-body text-warm-grey mt-2">
                The realization: I&apos;d been living from the outside in.
              </p>
            </motion.div>

            {/* Milestone 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-8 border-l-4 border-terracotta"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-terracotta"></div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-2">
                The GR20
              </h3>
              <p className="text-body text-charcoal">
                One of Europe&apos;s toughest hikes—
                a metaphor for transformation.
              </p>
              <p className="text-body text-warm-grey mt-2">
                Facing fear. Pushing through. Finding clarity.
              </p>
            </motion.div>

            {/* Milestone 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative pl-8 border-l-4 border-terracotta"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-terracotta"></div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-2">
                The Training
              </h3>
              <p className="text-body text-charcoal">
                Landmark Forum. ACT. Ontological coaching.
              </p>
              <p className="text-body text-warm-grey mt-2">
                Learning the methodologies that changed my life.
              </p>
            </motion.div>

            {/* Milestone 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative pl-8 border-l-4 border-terracotta"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-status-green"></div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-2">
                Creating The Program
              </h3>
              <p className="text-body text-charcoal">
                Building what I needed when I was lost.
              </p>
              <p className="text-body text-warm-grey mt-2">
                A framework for deep self-discovery with practical outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY THIS WORK MATTERS */}
      <section className="py-20 px-6 bg-ocean-blue text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 font-bold text-center mb-12">
            Why I created this program
          </h2>

          <div className="space-y-6 text-body-lg">
            <p>
              I built this program because I needed it.
            </p>

            <p>
              And because the gap in the market was glaring:
            </p>

            <div className="bg-white/10 rounded-card p-6 my-8">
              <p className="mb-3">
                <span className="font-semibold">Career coaches</span> ask: &quot;What job do you want?&quot;
                <br />
                <span className="font-semibold">Therapists</span> ask: &quot;How do you feel?&quot;
              </p>
              <p className="text-terracotta font-bold text-xl">
                Nobody was asking: &quot;Who are you, and what do you actually want?&quot;
              </p>
            </div>

            <p className="font-semibold">
              This program bridges that gap.
            </p>

            <ul className="space-y-2 ml-4">
              <li>Internal transformation → External manifestation.</li>
              <li>Clarity → Conviction → Courage → Action.</li>
            </ul>

            <p className="pt-4">
              With a practical deliverable: <span className="font-bold">Your Purpose Portfolio.</span>
            </p>

            <p>
              A personal website that captures who you are
              and becomes the foundation for what&apos;s next.
            </p>

            <p className="italic opacity-90 pt-6">
              This is for people who&apos;ve achieved a lot
              but are ready to build something that&apos;s genuinely theirs.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            Background
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-6">Experience</h3>
              <ul className="space-y-3 text-body text-charcoal">
                <li className="flex items-start">
                  <span className="text-terracotta mr-2">→</span>
                  <span>15+ years corporate finance & leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-2">→</span>
                  <span>Senior Director, DDB (global advertising agency)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-2">→</span>
                  <span>Certified coach (Landmark Forum, ACT, Ontological)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-2">→</span>
                  <span>Worked with professionals from UN, Modern People, BetterLabs, Reach Her</span>
                </li>
              </ul>
            </div>

            {/* What I'm Not / What I Am */}
            <div className="space-y-8">
              <div>
                <h3 className="text-h4 font-bold text-status-red mb-4">What I&apos;m Not:</h3>
                <ul className="space-y-2 text-body text-charcoal">
                  <li className="flex items-start">
                    <span className="text-status-red mr-2">✗</span>
                    <span>A guru with all the answers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-status-red mr-2">✗</span>
                    <span>Someone who&apos;ll tell you to quit your job</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-status-red mr-2">✗</span>
                    <span>Selling hustle culture or toxic positivity</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-h4 font-bold text-status-green mb-4">What I Am:</h3>
                <ul className="space-y-2 text-body text-charcoal">
                  <li className="flex items-start">
                    <span className="text-status-green mr-2">✓</span>
                    <span>Someone who&apos;s been where you are</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-status-green mr-2">✓</span>
                    <span>A guide for the inside-out journey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-status-green mr-2">✓</span>
                    <span>Committed to transformation that&apos;s real, not performative</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold text-ocean-blue mb-12">
            What I stand for
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              'Empathy over achievement',
              'Alignment over optimization',
              'Social equality & inclusivity',
              'Rejecting hustle culture & toxic masculinity',
              'Living from the inside out',
            ].map((value, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-cream rounded-card"
              >
                <span className="text-terracotta text-xl mr-3">→</span>
                <span className="text-body text-charcoal font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-terracotta to-coral text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold mb-6">
            Work with me
          </h2>
          <p className="text-body-lg mb-8 opacity-90">
            Ready to explore the program?
            <br />
            Start with the Inside-Out Alignment Assessment or book a discovery call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-here"
              className="inline-block bg-white text-terracotta px-8 py-4 rounded-lg text-lg font-bold hover:bg-cream transition-colors shadow-lg"
            >
              Take The Assessment
            </Link>
            <Link
              href="/connect"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white/10 transition-colors"
            >
              Book A Call
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-blue text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Just Jason</h3>
            <p className="text-white/80">Living from the inside out</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/your-journey" className="text-white/80 hover:text-white transition-colors">Your Journey</Link></li>
              <li><Link href="/the-method" className="text-white/80 hover:text-white transition-colors">The Method</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/start-here" className="text-white/80 hover:text-white transition-colors">Start Here</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <p className="text-white/80 mb-2">purpose@purpose-coach.com</p>
            <p className="text-white/80">+61(0)402-148-244</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2025 Purpose Coach. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
