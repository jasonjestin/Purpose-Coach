'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/your-journey', label: 'Your Journey' },
    { href: '/the-method', label: 'The Method' },
    { href: '/about', label: 'About' },
    { href: '/connect', label: 'Connect' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-warm-grey/20 backdrop-blur-sm bg-white/95 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-ocean-blue rounded-full flex items-center justify-center font-bold text-lg text-white group-hover:scale-110 transition-transform">
              JJ
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-lg text-ocean-blue">Just Jason</div>
              <div className="text-xs text-warm-grey">The Purpose Coach</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-ocean-blue transition-colors relative group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-terracotta group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Start Here - visually distinct */}
            <Link
              href="/start-here"
              className="bg-terracotta/10 text-terracotta px-4 py-2 rounded-lg font-semibold hover:bg-terracotta hover:text-white transition-colors"
            >
              Start Here
            </Link>

            {/* Login - ghost button */}
            <Link
              href="/auth/signin"
              className="border-2 border-ocean-blue text-ocean-blue px-4 py-2 rounded-lg font-semibold hover:bg-ocean-blue hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu - Show Start Here always */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/start-here"
              className="bg-terracotta text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-terracotta-dark transition-colors"
            >
              Start Here
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="z-50 relative w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-ocean-blue transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-ocean-blue transition-all duration-300 my-1 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-ocean-blue transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-warm-grey/20 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-charcoal hover:text-ocean-blue transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 border-t border-warm-grey/20"
              >
                <Link
                  href="/auth/signin"
                  className="block py-2 text-ocean-blue hover:text-ocean-blue-dark transition-colors font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
