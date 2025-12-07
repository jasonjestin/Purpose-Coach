'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SUBSCRIPTION_TIERS } from '@/lib/stripe'

export default function Pricing() {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleSubscribe = async (priceId: string, tier: string) => {
    setIsLoading(tier)

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })

      const { url } = await response.json()

      if (url) {
        window.location.href = url
      }
    } catch (err) {
      console.error('Error creating checkout:', err)
      alert('Failed to start checkout. Please try again.')
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-ocean-dark text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Purpose Coach
            </Link>
            <Link href="/" className="text-gray-300 hover:text-white">
              ← Back
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Choose Your Path
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Different levels of support. Same commitment to doing real work.
          </p>
          <p className="text-lg text-gray-600">
            All programs include access to the core content. The difference is in how much support
            and accountability you want as you navigate the process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {Object.entries(SUBSCRIPTION_TIERS).map(([key, tier]) => (
            <div
              key={key}
              className={`bg-white rounded-lg shadow-lg p-8 flex flex-col border-2 ${
                key === 'premium'
                  ? 'border-accent scale-105 relative'
                  : 'border-gray-200'
              }`}
            >
              {key === 'premium' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-ocean-dark">{tier.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{tier.description}</p>

              <div className="text-4xl font-bold text-ocean mb-6">
                {tier.price}
                <span className="text-lg text-gray-600">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent font-bold mr-3 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(tier.priceId, key)}
                disabled={isLoading === key}
                className={`w-full py-3 rounded-lg transition-colors font-semibold disabled:opacity-50 ${
                  key === 'premium'
                    ? 'bg-accent text-white hover:bg-accent-dark'
                    : 'bg-ocean text-white hover:bg-ocean-dark'
                }`}
              >
                {isLoading === key ? 'Loading...' : 'Start Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-ocean-dark">Common Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-ocean-dark">
                  How do I know which program is right for me?
                </h3>
                <p className="text-gray-700">
                  If you&apos;re self-motivated and want to work through things at your own pace, Foundation works well.
                  If you want regular check-ins and accountability, Guided gives you that structure.
                  If you&apos;re ready to fully commit and want intensive support, Intensive is designed for that.
                  You can always upgrade if you need more support.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-ocean-dark">
                  What if I&apos;m not sure this will work for me?
                </h3>
                <p className="text-gray-700">
                  Fair question. This isn&apos;t magic - it&apos;s work. If you&apos;re willing to do that work,
                  the frameworks and support can help. All programs can be cancelled anytime,
                  so you&apos;re not locked into anything long-term.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-ocean-dark">
                  How long does this take?
                </h3>
                <p className="text-gray-700">
                  That&apos;s not really the right question. This isn&apos;t a 30-day challenge or a quick fix.
                  Most people spend 3-6 months working through the core content, but the real work continues beyond that.
                  You&apos;re building new ways of thinking and making decisions - that&apos;s an ongoing practice.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 text-ocean-dark">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-700">
                  Yes. Monthly billing, cancel whenever. No lock-in contracts, no guilt trips.
                  If it&apos;s not working for you, that&apos;s okay.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ocean-dark to-primary-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Not Sure?</h2>
            <p className="text-lg mb-6 text-gray-200">
              That&apos;s completely normal. This is a big decision and you should think it through.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-semibold"
            >
              Go Back and Read More
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
