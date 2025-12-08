'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Navigation from '@/components/Navigation'

export default function YourJourney() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const steps = [
    {
      number: 1,
      name: 'Life Discovery',
      brief: 'Uncover the defining moments that shaped you. Reframe your past to reclaim your power.',
      whatItIs: 'Most of us operate on autopilot, shaped by beliefs formed from past experiences. In this step, you\'ll examine your most significant life moments to understand the beliefs that drive your current behaviors.',
      whatYouDo: [
        'Map your defining life moments',
        'Identify patterns in how you\'ve interpreted these experiences',
        'Reframe limiting beliefs into empowering perspectives',
      ],
      whatYouGain: [
        'Understanding of how your past shapes your present',
        'Freedom from outdated beliefs that no longer serve you',
        'New perspective on who you are beyond your history',
      ],
    },
    {
      number: 2,
      name: 'Values & Gifts',
      brief: 'Identify your core values and true gifts. Discover what gives your life meaning.',
      whatItIs: 'Your core values are what matter most to you. Your true gifts are the natural strengths that energize you. Together, they form the foundation of a fulfilling life.',
      whatYouDo: [
        'Distill your defining moments into clear values',
        'Identify your natural gifts and patterns of behavior',
        'Narrow to your top 10 core values and top 10 true gifts',
      ],
      whatYouGain: [
        'Crystal clear understanding of what drives fulfillment',
        'Language to articulate who you are',
        'Framework for evaluating decisions and opportunities',
      ],
    },
    {
      number: 3,
      name: 'Embodiment',
      brief: 'Live your values daily. Close the gap between who you are and how you show up.',
      whatItIs: 'Knowing your values isn\'t enough. This step helps you integrate them into your daily life and identify where you\'re out of alignment.',
      whatYouDo: [
        'Assess alignment across all life areas (career, relationships, health, etc.)',
        'Identify low-hanging fruit for quick wins',
        'Visualize an ideal day living fully aligned',
      ],
      whatYouGain: [
        'Clear picture of where misalignment is costing you',
        'Practical steps to close alignment gaps',
        'Embodied experience of living your values',
      ],
    },
    {
      number: 4,
      name: 'Vision',
      brief: 'Design a vision for your life that excites you. Your Northern Star.',
      whatItIs: 'Your vision is the ultimate expression of your values and gifts. It\'s what becomes possible when you live fully aligned—your North Star for all decisions.',
      whatYouDo: [
        'Imagine a world where everyone lived your values',
        'Craft a vision statement that captures your highest aspiration',
        'Connect emotionally with what you\'re building toward',
      ],
      whatYouGain: [
        'A compelling vision that guides every decision',
        'Clarity on the impact you want to create',
        'Emotional fuel for staying aligned through challenges',
      ],
    },
    {
      number: 5,
      name: 'Mission',
      brief: 'Reverse-engineer your vision into practical milestones. Your roadmap.',
      whatItIs: 'Your vision is the summit. Your missions are the base camps along the way—key themes you\'ll pursue to fulfill your vision.',
      whatYouDo: [
        'Break your vision into 3-5 distinct missions',
        'Create purpose statements for each mission',
        'Identify which values and gifts serve each purpose',
      ],
      whatYouGain: [
        'Clear milestones on the path to your vision',
        'Multiple avenues for living your purpose',
        'Framework for choosing where to focus energy',
      ],
    },
    {
      number: 6,
      name: 'Goals',
      brief: 'Set strategic, aligned SMART goals. Turn possibility into action.',
      whatItIs: 'Goals are where vision meets reality. In this step, you\'ll create concrete, achievable goals for the next 12 months that move you toward your missions.',
      whatYouDo: [
        'Identify top 10 goals aligned with your missions',
        'Make them SMART (Specific, Measurable, Achievable, Relevant, Time-bound)',
        'Outline resources, support, and top 3 action steps for each',
      ],
      whatYouGain: [
        'Clear 90-day roadmap of aligned action',
        'Confidence about what to pursue (and what to let go)',
        'Practical plan for moving from clarity to execution',
      ],
    },
    {
      number: 7,
      name: 'Transformation',
      brief: 'Sustain the journey. Build habits that keep you aligned and alive.',
      whatItIs: 'Transformation isn\'t a one-time event. This step helps you reflect on your progress, celebrate wins, and build systems for sustained alignment.',
      whatYouDo: [
        'Review your journey and key breakthroughs',
        'Identify patterns in what worked (and what didn\'t)',
        'Create habits and practices for staying aligned',
      ],
      whatYouGain: [
        'Deep reflection on your growth',
        'Resilience practices for handling setbacks',
        'Sustainable approach to living from the inside out',
      ],
    },
  ]

  const tiers = [
    {
      name: 'Self-Guided',
      price: 'From $2,000 AUD',
      included: [
        'All 7 video lessons + workbooks',
        'Self-paced (8-12 weeks suggested)',
        'Email support',
        'Private community access (coming soon)',
        'DIY Purpose Portfolio template',
      ],
      deliverables: [
        'Completed workbook (all 7 steps)',
        'Core values + true gifts defined',
        'Vision + mission statements',
        '90-day roadmap',
        'Personal website template to build yourself',
      ],
      bestFor: 'Self-starters, budget-conscious, DIY mentality',
      cta: 'Learn More',
      featured: false,
    },
    {
      name: 'Guided',
      price: 'From $3,500 AUD',
      badge: '⭐ Most Popular',
      included: [
        'Everything in Self-Guided PLUS:',
        '7 × 60-min 1-on-1 coaching calls (one per step)',
        'Done-WITH-You Purpose Portfolio (2 build sessions)',
        'Custom domain setup',
        '3 months website support/tweaks',
        'Direct messaging access (Voxer/WhatsApp)',
      ],
      deliverables: [
        'Everything from Self-Guided',
        'Professional personal website (built together)',
        'Personalized guidance throughout',
      ],
      bestFor: 'People who want accountability and personalized support',
      cta: 'Book Discovery Call',
      featured: true,
    },
    {
      name: 'VIP',
      price: 'From $5,000 AUD',
      included: [
        'Everything in Guided PLUS:',
        'Professional photoshoot for website',
        'LinkedIn content strategy + profile optimization',
        '90-Day Execution Sprint (3 coaching calls post-program)',
        '"Your Story" 15-min talk outline + practice session',
        '6 months ongoing support',
        'Priority access',
      ],
      deliverables: [
        'Everything from Guided',
        'Professional photos',
        'Polished LinkedIn presence',
        'Signature talk ready to deliver',
        'Continued accountability through execution',
      ],
      bestFor: 'Serious about transformation, want full support, ready to invest',
      cta: 'Apply Now',
      featured: false,
    },
  ]

  const faqs = [
    {
      question: 'How is this different from regular career coaching?',
      answer: 'Career coaching asks "What job do you want?" We ask "Who are you?" first. Everything flows from clarity about your values, gifts, and vision—not from market trends or job titles. This is transformation work with practical application, not resume writing or LinkedIn optimization.',
    },
    {
      question: 'How long does the program take?',
      answer: 'Self-Guided: Fully self-paced. Guided: 7 weekly or bi-weekly coaching calls. VIP: Same timeline + ongoing support after. Most people complete it in 2-3 months at a comfortable pace.',
    },
    {
      question: 'Do I need to quit my job to do this?',
      answer: 'No. Most participants are currently employed. This helps you figure out what changes (if any) to make—not force a decision. You might discover you\'re in the right place but need boundary shifts. Or that a different role/industry is calling. Or that you want to build something entirely new. The clarity comes first. The decision follows.',
    },
    {
      question: 'What if I don\'t know what I want?',
      answer: 'That\'s exactly why you\'re here. The program is designed to help you discover what matters to you. You don\'t need to know the answer coming in. That\'s what the 7 steps are for.',
    },
    {
      question: 'Is this confidential?',
      answer: 'Completely. Your journey is private. Your Purpose Portfolio is yours to share (or not) as you choose. Coaching conversations are confidential. Your workbook is for you only.',
    },
    {
      question: 'What\'s the time commitment?',
      answer: 'Self-Guided: 2-3 hours per week. Guided: 2-3 hours per week + 1 hour coaching call per step. VIP: Same as Guided + additional support sessions. This is deep work. It requires focus. But it\'s designed to fit into a working professional\'s life.',
    },
    {
      question: 'What if I\'ve done other programs and they didn\'t work?',
      answer: 'Most programs focus on external strategies (resume, networking, job search). We start internal: Who are you? What do you want? Then we help you build external alignment from that foundation. This isn\'t another personality test or motivational seminar. It\'s a proven methodology for getting to the core of what drives you—and turning that into practical action.',
    },
    {
      question: 'Do I get ongoing support after the program?',
      answer: 'Self-Guided: Email support during program, community access. Guided: 3 months website support post-program. VIP: 6 months ongoing support + execution sprint. You also get lifetime access to program materials and updates.',
    },
  ]

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-ocean-blue to-ocean-blue-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Your journey from disconnected to aligned
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl opacity-90"
          >
            A 7-step transformation. Two to three months. A lifetime of impact.
          </motion.p>
        </div>
      </section>

      {/* THE APPROACH */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            How this is different
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-card p-8 shadow-md text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">Scientific</h3>
              <p className="text-body text-charcoal">
                Evidence-based, first-principle diagnostic methods. Not fluff.
              </p>
            </div>

            <div className="bg-white rounded-card p-8 shadow-md text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">Holistic</h3>
              <p className="text-body text-charcoal">
                Whole-person view: mind, body, emotions, environment.
              </p>
            </div>

            <div className="bg-white rounded-card p-8 shadow-md text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">Experiential</h3>
              <p className="text-body text-charcoal">
                Real-world interventions. Breakthrough results, not just insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            Is this for you?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-h4 font-bold text-status-green mb-6">This IS For You If:</h3>
              <ul className="space-y-4">
                {[
                  'You\'ve achieved professional success but feel disconnected',
                  'You\'re ready for change but don\'t know where to start',
                  'You want clarity on what YOU actually want (not what you should want)',
                  'You\'re willing to do deep internal work for external results',
                  'You value authenticity over performance',
                  'You\'re seeking transformation, not just a new job title',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-status-green text-xl mr-3">✓</span>
                    <span className="text-body text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-h4 font-bold text-status-red mb-6">This ISN&apos;T For You If:</h3>
              <ul className="space-y-4">
                {[
                  'You want quick-fix motivational content',
                  "You're looking for resume/LinkedIn optimization only",
                  "You're not willing to examine your beliefs and patterns",
                  'You want someone to tell you what to do',
                  "You're seeking hustle culture or grind mentality",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-status-red text-xl mr-3">✗</span>
                    <span className="text-body text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE 7 STEPS */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            The 7-step journey
          </h2>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-card shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                  className="w-full p-6 text-left flex items-start gap-4 hover:bg-ocean-blue/5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 font-bold text-ocean-blue mb-2">
                      {step.name}
                    </h3>
                    <p className="text-body text-charcoal">{step.brief}</p>
                  </div>
                  <div className="text-terracotta text-2xl flex-shrink-0">
                    {expandedStep === step.number ? '−' : '+'}
                  </div>
                </button>

                {expandedStep === step.number && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 space-y-6 border-t border-warm-grey/20"
                  >
                    <div className="pt-6">
                      <h4 className="font-bold text-ocean-blue mb-2">WHAT IT IS:</h4>
                      <p className="text-body text-charcoal">{step.whatItIs}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-ocean-blue mb-2">WHAT YOU&apos;LL DO:</h4>
                      <ul className="space-y-2">
                        {step.whatYouDo.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-terracotta mr-2">→</span>
                            <span className="text-body text-charcoal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-ocean-blue mb-2">WHAT YOU&apos;LL GAIN:</h4>
                      <ul className="space-y-2">
                        {step.whatYouGain.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-terracotta mr-2">→</span>
                            <span className="text-body text-charcoal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-warm-grey/10 rounded p-4 text-center">
                      <p className="text-sm text-warm-grey">Video Overview - Coming Soon</p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM TIERS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            Choose your path
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-card p-8 relative ${
                  tier.featured
                    ? 'bg-terracotta text-white shadow-2xl scale-105'
                    : 'bg-white border-2 border-warm-grey/30 shadow-md'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber text-charcoal px-4 py-1 rounded-full text-sm font-bold">
                    {tier.badge}
                  </div>
                )}

                <h3 className={`text-h3 font-bold mb-2 ${tier.featured ? 'text-white' : 'text-ocean-blue'}`}>
                  {tier.name}
                </h3>
                <p className={`text-2xl font-bold mb-6 ${tier.featured ? 'text-white/90' : 'text-charcoal'}`}>
                  {tier.price}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className={`font-bold text-sm ${tier.featured ? 'text-white' : 'text-ocean-blue'}`}>
                    WHAT&apos;S INCLUDED:
                  </h4>
                  <ul className="space-y-2">
                    {tier.included.map((item, i) => (
                      <li key={i} className={`text-sm ${tier.featured ? 'text-white/90' : 'text-charcoal'} flex items-start`}>
                        <span className="mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-6 pt-4 border-t border-white/20">
                  <h4 className={`font-bold text-sm ${tier.featured ? 'text-white' : 'text-ocean-blue'}`}>
                    DELIVERABLES:
                  </h4>
                  <ul className="space-y-2">
                    {tier.deliverables.map((item, i) => (
                      <li key={i} className={`text-sm ${tier.featured ? 'text-white/90' : 'text-charcoal'} flex items-start`}>
                        <span className="mr-2">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`text-sm italic mb-6 ${tier.featured ? 'text-white/80' : 'text-warm-grey'}`}>
                  Best for: {tier.bestFor}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition-colors ${
                    tier.featured
                      ? 'bg-white text-terracotta hover:bg-cream'
                      : 'bg-ocean-blue text-white hover:bg-ocean-blue-dark'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            Questions?
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-card shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-start gap-4 hover:bg-ocean-blue/5 transition-colors"
                >
                  <h3 className="font-bold text-ocean-blue">{faq.question}</h3>
                  <div className="text-terracotta text-2xl flex-shrink-0">
                    {expandedFaq === index ? '−' : '+'}
                  </div>
                </button>

                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-warm-grey/20"
                  >
                    <p className="text-body text-charcoal pt-4">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-terracotta to-coral text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold mb-6">
            Ready to begin?
          </h2>
          <p className="text-body-lg mb-8 opacity-90">
            Start with the Inside-Out Alignment Assessment.
            <br />
            Discover where you stand. Get clarity on what&apos;s next.
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
