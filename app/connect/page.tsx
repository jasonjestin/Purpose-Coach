'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - in production, this would send to your email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-ocean-blue mb-6"
          >
            Let&apos;s talk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl text-charcoal"
          >
            Questions? Ready to start? Want to see if this is right for you?
          </motion.p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-cream rounded-card p-8 text-center"
            >
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">Email</h3>
              <a
                href="mailto:purpose@purpose-coach.com"
                className="text-body-lg text-terracotta hover:text-terracotta-dark transition-colors font-semibold"
              >
                purpose@purpose-coach.com
              </a>
              <p className="text-sm text-warm-grey mt-4">
                I typically respond within 24 hours.
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-cream rounded-card p-8 text-center"
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">Phone</h3>
              <a
                href="tel:+61402148244"
                className="text-body-lg text-terracotta hover:text-terracotta-dark transition-colors font-semibold"
              >
                +61(0)402-148-244
              </a>
              <p className="text-sm text-warm-grey mt-4">
                Call or WhatsApp
              </p>
            </motion.div>

            {/* Discovery Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-terracotta text-white rounded-card p-8 text-center"
            >
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-h4 font-bold mb-4">Discovery Call</h3>
              <p className="text-body mb-4 opacity-90">
                Book a 30-minute discovery call to explore whether the program is right for you.
              </p>
              <button className="bg-white text-terracotta px-6 py-3 rounded-lg font-bold hover:bg-cream transition-colors">
                Book Now
              </button>
              <p className="text-sm mt-4 opacity-80">
                (Calendly integration coming soon)
              </p>
            </motion.div>
          </div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto bg-cream rounded-card p-8 md:p-12"
          >
            <h2 className="text-h3 font-bold text-ocean-blue text-center mb-8">
              Send a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-body font-semibold text-charcoal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-warm-grey/30 focus:border-ocean-blue focus:outline-none text-body"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-body font-semibold text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-warm-grey/30 focus:border-ocean-blue focus:outline-none text-body"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-body font-semibold text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-warm-grey/30 focus:border-ocean-blue focus:outline-none text-body resize-none"
                  placeholder="Tell me what you're looking for..."
                />
              </div>

              {submitted && (
                <div className="bg-status-green/10 border-2 border-status-green text-status-green px-4 py-3 rounded-lg text-center font-semibold">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-ocean-blue text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-ocean-blue-dark transition-colors shadow-md"
              >
                Send Message
              </button>

              <p className="text-sm text-warm-grey text-center">
                (Form integration coming soon - for now, please use email or phone above)
              </p>
            </form>
          </motion.div>

          {/* FAQ QUICK LINK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-h4 font-bold text-ocean-blue mb-4">
              Before you reach out
            </h3>
            <p className="text-body text-charcoal mb-6">
              You might find your answer here:
            </p>
            <Link
              href="/your-journey#faq"
              className="inline-block text-terracotta font-semibold hover:text-terracotta-dark transition-colors underline"
            >
              View Frequently Asked Questions →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="py-12 px-6 bg-ocean-blue text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-body-lg mb-8 opacity-90">
            Trusted by professionals at
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-white/80 text-lg font-bold tracking-wider">UNITED NATIONS</div>
            <div className="text-white/80 text-lg font-bold tracking-wider">MODERN PEOPLE</div>
            <div className="text-white/80 text-lg font-bold tracking-wider">BETTERLABS</div>
            <div className="text-white/80 text-lg font-bold tracking-wider">REACH HER</div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-terracotta to-coral text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold mb-6">
            Not ready to reach out yet?
          </h2>
          <p className="text-body-lg mb-8 opacity-90">
            Take the Inside-Out Alignment Assessment to see where you stand.
          </p>
          <Link
            href="/start-here"
            className="inline-block bg-white text-terracotta px-12 py-4 rounded-lg text-lg font-bold hover:bg-cream transition-colors shadow-lg"
          >
            Take The Assessment
          </Link>
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
