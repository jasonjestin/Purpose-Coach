'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function QuizPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Don't show if already shown in this session
    if (hasShown) return

    const handleScroll = () => {
      // Show popup after scrolling 40% down the page
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100

      if (scrollPercent > 40 && !showPopup && !hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showPopup, hasShown])

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-br from-ocean-blue via-ocean-blue-light to-teal text-white rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="text-center mb-6">
                  <div className="inline-block bg-sunset-orange text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                    ✨ FREE ASSESSMENT
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Discover Your Alignment Score
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Find out where you stand on your journey from external success to internal fulfillment.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <div className="space-y-3 text-white/95">
                    <div className="flex items-start gap-3">
                      <span className="text-teal text-xl">✓</span>
                      <span>Takes just 10 minutes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal text-xl">✓</span>
                      <span>Get your personalized alignment score</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal text-xl">✓</span>
                      <span>Discover your biggest gaps & opportunities</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-teal text-xl">✓</span>
                      <span>Receive a custom action plan</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/start-here"
                    onClick={handleClose}
                    className="block w-full bg-sunset-orange hover:bg-sunset-orange-dark text-white text-center px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                  >
                    Take the Free Assessment
                  </Link>
                  <button
                    onClick={handleClose}
                    className="block w-full text-white/70 hover:text-white text-center py-2 text-sm transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-sunset-orange/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
