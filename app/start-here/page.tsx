'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Quiz from '@/components/Quiz'

export default function StartHere() {
  const [showQuiz, setShowQuiz] = useState(false)

  if (showQuiz) {
    return <Quiz />
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Simple header with logo/home link */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-warm-grey/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="text-ocean-blue font-bold text-xl hover:text-ocean-blue-light transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-ocean-blue mb-6">
              The Inside-Out Alignment Assessment
            </h1>

            <p className="text-2xl md:text-3xl text-charcoal mb-8">
              10 minutes. Complete clarity.
            </p>

            <div className="max-w-2xl mx-auto text-left space-y-6">
              <p className="text-body-lg text-charcoal">
                Discover where you&apos;re aligned with your true self
                and where you&apos;re living from the outside in.
              </p>

              <div className="space-y-3">
                <p className="text-body font-semibold text-ocean-blue">You&apos;ll get:</p>
                <ul className="space-y-2 text-body text-charcoal">
                  <li className="flex items-start">
                    <span className="text-terracotta mr-2 font-bold">✓</span>
                    <span>Your overall alignment score</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta mr-2 font-bold">✓</span>
                    <span>Breakdown by life area (career, purpose, relationships, health, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta mr-2 font-bold">✓</span>
                    <span>Specific insights on what&apos;s costing you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-terracotta mr-2 font-bold">✓</span>
                    <span>Immediate next steps</span>
                  </li>
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowQuiz(true)}
              className="mt-12 bg-terracotta text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-terracotta-dark transition-colors shadow-lg"
            >
              Discover Your Alignment Score
            </motion.button>
          </motion.div>

          {/* What to Expect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-card shadow-md p-8 md:p-12"
          >
            <h2 className="text-h3 font-bold text-ocean-blue mb-6">
              What to expect
            </h2>

            <div className="space-y-4 text-body text-charcoal">
              <p className="font-semibold">
                This isn&apos;t a personality test.
                <br />
                It&apos;s a workability diagnostic.
              </p>

              <p>
                You&apos;ll rate different areas of your life from 0-10:
              </p>

              <ul className="space-y-2 ml-4">
                <li>• <span className="font-semibold">0</span> = Completely out of alignment (draining, unfulfilling)</li>
                <li>• <span className="font-semibold">10</span> = Fully aligned (energizing, meaningful)</li>
              </ul>

              <p className="pt-4">
                Then you&apos;ll answer questions about:
              </p>

              <ul className="space-y-2 ml-4">
                <li>• What&apos;s working</li>
                <li>• What&apos;s not</li>
                <li>• What you&apos;re tolerating</li>
                <li>• What you&apos;re craving</li>
              </ul>

              <div className="pt-6 border-t border-warm-grey/20 mt-6">
                <p className="font-semibold text-ocean-blue">
                  Be honest. This is for you, not anyone else.
                </p>
                <p className="mt-2">
                  The more open you are, the more useful your results will be.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
