'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

type LifeArea = {
  id: string
  name: string
  rating: number | null
  followUp: string
  diagnostics: string[]
}

type QuizData = {
  areas: LifeArea[]
  career: {
    meaningfulWork: string
    changeWhat: string
    whyStay: string[]
    whyStayOther: string
  }
}

type QuizResultsProps = {
  quizData: QuizData
}

export default function QuizResults({ quizData }: QuizResultsProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Store results in localStorage for PDF generation
    if (typeof window !== 'undefined') {
      localStorage.setItem('quizResults', JSON.stringify(quizData))
    }
  }, [quizData])

  // Calculate overall score
  const calculateOverallScore = () => {
    const validRatings = quizData.areas.filter(area => area.rating !== null)
    const sum = validRatings.reduce((acc, area) => acc + (area.rating || 0), 0)
    const average = sum / validRatings.length
    return Math.round(average * 10)
  }

  const overallScore = calculateOverallScore()

  // Get score range info
  const getScoreInfo = (score: number) => {
    if (score <= 40) {
      return {
        headline: "You're living almost entirely from the outside in.",
        subtext: "The good news? You now have clarity on where to start.",
        color: 'text-status-red',
        bgColor: 'bg-status-red/10',
        borderColor: 'border-status-red',
      }
    } else if (score <= 60) {
      return {
        headline: "You're caught between two worlds.",
        subtext: "Some alignment, some disconnection. Time to choose your path.",
        color: 'text-status-yellow',
        bgColor: 'bg-status-yellow/10',
        borderColor: 'border-status-yellow',
      }
    } else if (score <= 75) {
      return {
        headline: "You're on your way.",
        subtext: "A few key shifts could unlock profound transformation.",
        color: 'text-amber',
        bgColor: 'bg-amber/10',
        borderColor: 'border-amber',
      }
    } else if (score <= 90) {
      return {
        headline: "You're highly aligned.",
        subtext: "Now it's about sustaining and deepening.",
        color: 'text-status-green',
        bgColor: 'bg-status-green/10',
        borderColor: 'border-status-green',
      }
    } else {
      return {
        headline: "You're living from the inside out.",
        subtext: "Keep going.",
        color: 'text-status-green',
        bgColor: 'bg-status-green/10',
        borderColor: 'border-status-green',
      }
    }
  }

  const scoreInfo = getScoreInfo(overallScore)

  // Get color for area score
  const getAreaColor = (rating: number | null) => {
    if (rating === null) return 'bg-warm-grey/20'
    if (rating <= 4) return 'bg-status-red'
    if (rating <= 6) return 'bg-status-yellow'
    return 'bg-status-green'
  }

  const getAreaStatus = (rating: number | null) => {
    if (rating === null) return ''
    if (rating <= 4) return 'Needs urgent attention'
    if (rating <= 6) return 'Requires realignment'
    return 'Aligned'
  }

  // Sort areas by score (lowest first)
  const sortedAreas = [...quizData.areas].sort((a, b) => {
    if (a.rating === null) return 1
    if (b.rating === null) return -1
    return a.rating - b.rating
  })

  // Get key insights
  const getKeyInsights = () => {
    const insights = []
    const lowestArea = sortedAreas[0]
    const lowScoreAreas = quizData.areas.filter(area => area.rating !== null && area.rating <= 4)

    // Career-specific insight
    if (lowestArea.id === 'career') {
      insights.push({
        title: "Your professional life needs attention",
        text: "Your career is where the biggest misalignment lives. This is draining your energy and affecting other areas. Addressing this could create a cascade of positive change.",
      })
    }

    // Purpose-specific insight
    if (sortedAreas[0].id === 'purpose' || sortedAreas[1]?.id === 'purpose') {
      insights.push({
        title: "Purpose matters more than you think",
        text: "You're succeeding but not for reasons that matter to you. Without clarity on purpose, even achievements feel hollow.",
      })
    }

    // Multiple low areas
    if (lowScoreAreas.length >= 3) {
      insights.push({
        title: "This level of misalignment isn't sustainable",
        text: "Multiple areas are below alignment. It's time for fundamental recalibration—not just tweaks.",
      })
    }

    // Mostly aligned with some low
    if (overallScore >= 60 && lowScoreAreas.length <= 2 && lowScoreAreas.length > 0) {
      insights.push({
        title: "You're doing well, but something's holding you back",
        text: "Most areas are aligned, but these specific areas are creating drag. Small, targeted shifts could unlock major breakthroughs.",
      })
    }

    return insights
  }

  const keyInsights = getKeyInsights()

  // Handle PDF download
  const handleDownloadPDF = () => {
    // For now, we'll create a simple download
    // In production, you'd use a library like jsPDF or react-pdf
    alert('PDF download functionality will be implemented. For now, you can screenshot your results!')
  }

  // Handle share
  const handleShare = (platform: string) => {
    const shareText = `I just took the Inside-Out Alignment Assessment and got a score of ${overallScore}/100. Discover where you stand: ${window.location.origin}/start-here`

    const urls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + '/start-here')}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/start-here')}`,
    }

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400')
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '/start-here')
    alert('Link copied to clipboard!')
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header with download button */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-warm-grey/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-ocean-blue font-semibold hover:text-ocean-blue-light transition-colors">
            ← Back to Home
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="px-6 py-2 bg-ocean-blue text-white rounded-lg hover:bg-ocean-blue-dark transition-colors font-semibold"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* SECTION 1: OVERALL SCORE */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${scoreInfo.bgColor} rounded-card p-8 md:p-12 border-2 ${scoreInfo.borderColor}`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Score Circle */}
              <div className="relative">
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-white/50"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 88}`}
                    strokeDashoffset={`${2 * Math.PI * 88 * (1 - overallScore / 100)}`}
                    className={scoreInfo.color}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-5xl font-bold ${scoreInfo.color}`}>{overallScore}</div>
                    <div className="text-charcoal text-sm font-semibold">/ 100</div>
                  </div>
                </div>
              </div>

              {/* Score Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-h2 font-bold text-ocean-blue mb-4">
                  {scoreInfo.headline}
                </h1>
                <p className="text-body-lg text-charcoal">
                  {scoreInfo.subtext}
                </p>
              </div>
            </div>
          </motion.section>

          {/* SECTION 2: AREA BREAKDOWN */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-card p-8 md:p-12 shadow-md"
          >
            <h2 className="text-h3 font-bold text-ocean-blue mb-8">
              Your Alignment Breakdown
            </h2>

            <div className="space-y-6">
              {sortedAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-charcoal">{area.name}</span>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-semibold ${
                        area.rating !== null && area.rating <= 4 ? 'text-status-red' :
                        area.rating !== null && area.rating <= 6 ? 'text-status-yellow' :
                        'text-status-green'
                      }`}>
                        {getAreaStatus(area.rating)}
                      </span>
                      <span className="font-bold text-charcoal w-8 text-right">
                        {area.rating !== null ? area.rating : '-'}/10
                      </span>
                    </div>
                  </div>
                  <div className="relative h-3 bg-warm-grey/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${area.rating !== null ? (area.rating / 10) * 100 : 0}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                      className={`h-full ${getAreaColor(area.rating)} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* SECTION 3: KEY INSIGHTS */}
          {keyInsights.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-ocean-blue text-white rounded-card p-8 md:p-12"
            >
              <h2 className="text-h3 font-bold mb-8">
                What this means
              </h2>

              <div className="space-y-6">
                {keyInsights.map((insight, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-bold">{insight.title}</h3>
                    <p className="text-lg opacity-90">{insight.text}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* SECTION 4: YOUR BIGGEST GAP (if career data exists) */}
          {quizData.areas[0].followUp && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-card p-8 md:p-12 shadow-md border-l-4 border-terracotta"
            >
              <h2 className="text-h3 font-bold text-ocean-blue mb-6">
                Based on your responses
              </h2>

              <div className="space-y-4">
                {sortedAreas.slice(0, 2).map((area) => {
                  if (area.followUp) {
                    return (
                      <div key={area.id} className="space-y-2">
                        <p className="text-body text-charcoal">
                          In <span className="font-semibold">{area.name}</span>, you said:
                        </p>
                        <blockquote className="pl-4 border-l-2 border-terracotta italic text-warm-grey">
                          &quot;{area.followUp}&quot;
                        </blockquote>
                      </div>
                    )
                  }
                  return null
                })}
                <p className="text-body text-charcoal pt-4">
                  This is where your biggest opportunity for transformation lives.
                </p>
              </div>
            </motion.section>
          )}

          {/* SECTION 5: NEXT STEPS */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-card p-8 md:p-12 shadow-md"
          >
            <h2 className="text-h3 font-bold text-ocean-blue mb-6 text-center">
              What now?
            </h2>

            <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
              <p className="text-body-lg text-charcoal">
                You have clarity. That&apos;s the first step.
              </p>
              <p className="text-body text-charcoal">
                The next question is: What are you willing to do about it?
              </p>
              <p className="text-body text-charcoal">
                This isn&apos;t about blowing up your life.
                It&apos;s about recalibrating. Aligning. Living from the inside out.
              </p>
            </div>

            {/* CTA BLOCK 1: FULL PROGRAM */}
            <div className="bg-terracotta text-white rounded-card p-8 mb-8">
              <h3 className="text-h4 font-bold mb-4">
                Ready for deep transformation?
              </h3>
              <div className="space-y-2 mb-6 text-white/90">
                <p>The Purpose Discovery Program gives you:</p>
                <ul className="space-y-2 ml-4">
                  <li>→ Deep clarity on your values, gifts, and vision</li>
                  <li>→ A practical roadmap to aligned action</li>
                  <li>→ A Purpose Portfolio that positions you for your next chapter</li>
                </ul>
                <p className="pt-2">
                  Transform from &quot;something&apos;s off&quot; to &quot;here&apos;s exactly what I&apos;m building.&quot;
                </p>
              </div>
              <Link
                href="/your-journey"
                className="inline-block bg-white text-terracotta px-8 py-3 rounded-lg font-bold hover:bg-cream transition-colors"
              >
                Explore The Program
              </Link>
            </div>

            {/* CTA BLOCK 2: MINI-COURSE */}
            <div className="border-2 border-ocean-blue rounded-card p-8 mb-8">
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                Want to start smaller?
              </h3>
              <div className="space-y-2 mb-6 text-charcoal">
                <p className="font-semibold">Get the 2-Week Purpose Clarity Intensive</p>
                <ul className="space-y-2 ml-4 text-body">
                  <li>→ Condensed version of Steps 1, 2, 4</li>
                  <li>→ Video lessons + guided worksheets</li>
                  <li>→ Email-delivered over 2 weeks</li>
                  <li>→ Just $47 AUD</li>
                </ul>
                <p className="pt-2">Turn this clarity into action.</p>
              </div>
              <button className="bg-ocean-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-ocean-blue-dark transition-colors">
                Get The Mini-Course
              </button>
            </div>

            {/* CTA BLOCK 3: NEWSLETTER */}
            <div className="bg-cream rounded-card p-8 mb-8">
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                Want more insights like this?
              </h3>
              <p className="text-body text-charcoal mb-4">
                Join the newsletter for:
              </p>
              <ul className="space-y-2 ml-4 text-body text-charcoal mb-6">
                <li>→ Practical tips on living from the inside out</li>
                <li>→ Weekly reflections on alignment vs. achievement</li>
                <li>→ Early access to new programs</li>
              </ul>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-warm-grey/30 focus:border-ocean-blue focus:outline-none"
                />
                <button className="bg-ocean-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ocean-blue-dark transition-colors">
                  Send Me Insights
                </button>
              </div>
            </div>

            {/* CTA BLOCK 4: SHARE */}
            <div className="text-center pt-8 border-t border-warm-grey/20">
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                Share this assessment
              </h3>
              <p className="text-body text-charcoal mb-6">
                Know someone who needs this clarity?
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={handleCopyLink}
                  className="px-6 py-3 bg-warm-grey/10 text-charcoal rounded-lg hover:bg-warm-grey/20 transition-colors font-semibold"
                >
                  📋 Copy Link
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors font-semibold"
                >
                  Share on LinkedIn
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors font-semibold"
                >
                  Share on Twitter
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#1565c0] transition-colors font-semibold"
                >
                  Share on Facebook
                </button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
