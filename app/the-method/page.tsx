'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function TheMethod() {
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
            The science of living from the inside out
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl opacity-90"
          >
            Evidence-based transformation. Not theory. Not fluff.
          </motion.p>
        </div>
      </section>

      {/* CORE CONCEPTS */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            The framework
          </h2>

          <div className="space-y-16">
            {/* CONCEPT 1: WORKABILITY */}
            <div className="bg-white rounded-card p-8 md:p-12 shadow-md">
              <h3 className="text-h3 font-bold text-ocean-blue mb-4">
                Workability
              </h3>
              <p className="text-body-lg text-terracotta font-semibold mb-6">
                Aligning your behaviors with who you truly are and what you genuinely want.
              </p>

              <div className="space-y-4 text-body text-charcoal">
                <p>
                  When your behaviors align with your core values and vision,
                  you experience <span className="font-semibold">workability</span>—flow, ease, effectiveness.
                </p>
                <p>
                  When they don&apos;t, you experience <span className="font-semibold">cognitive dissonance</span>—
                  stress, anxiety, emptiness despite external success.
                </p>
                <p>
                  Most people optimize for the wrong things:
                  Job title. Salary. Status. Someone else&apos;s definition of success.
                </p>
                <p className="font-semibold text-ocean-blue">
                  Workability means optimizing for alignment first.
                  <br />
                  Everything else follows.
                </p>
              </div>

              {/* Diagram */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-status-red/10 border-2 border-status-red rounded-card p-6">
                  <h4 className="font-bold text-status-red mb-4">MISALIGNED PATH:</h4>
                  <div className="space-y-3 text-charcoal">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-status-red mr-3"></div>
                      <span>External expectations</span>
                    </div>
                    <div className="ml-3 border-l-2 border-status-red/30 pl-3 py-2">
                      <div className="text-warm-grey">↓</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-status-red mr-3"></div>
                      <span>Behaviors out of alignment</span>
                    </div>
                    <div className="ml-3 border-l-2 border-status-red/30 pl-3 py-2">
                      <div className="text-warm-grey">↓</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-status-red mr-3"></div>
                      <span>Cognitive dissonance</span>
                    </div>
                    <div className="ml-3 border-l-2 border-status-red/30 pl-3 py-2">
                      <div className="text-warm-grey">↓</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-status-red mr-3"></div>
                      <span className="font-semibold">Emptiness despite success</span>
                    </div>
                  </div>
                </div>

                <div className="bg-status-green/10 border-2 border-status-green rounded-card p-6">
                  <h4 className="font-bold text-status-green mb-4">ALIGNED PATH:</h4>
                  <div className="space-y-3 text-charcoal">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-status-green mr-3"></div>
                      <span>Your values & vision</span>
                    </div>
                    <div className="ml-3 border-l-2 border-status-green/30 pl-3 py-2">
                      <div className="text-warm-grey">↓</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-status-green mr-3"></div>
                      <span>Aligned behaviors</span>
                    </div>
                    <div className="ml-3 border-l-2 border-status-green/30 pl-3 py-2">
                      <div className="text-warm-grey">↓</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-status-green mr-3"></div>
                      <span>Workability (flow, ease)</span>
                    </div>
                    <div className="ml-3 border-l-2 border-status-green/30 pl-3 py-2">
                      <div className="text-warm-grey">↓</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-status-green mr-3"></div>
                      <span className="font-semibold">Rich, full, meaningful life</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-body-lg text-ocean-blue font-semibold mt-12">
                Most career advice starts with: &quot;What job do you want?&quot;
                <br />
                We start with: &quot;Who are you?&quot;
              </p>
            </div>

            {/* CONCEPT 2: PROBABILITY VS POSSIBILITY */}
            <div className="bg-white rounded-card p-8 md:p-12 shadow-md">
              <h3 className="text-h3 font-bold text-ocean-blue mb-6">
                Probability vs. Possibility Mindset
              </h3>

              <div className="space-y-6 text-body text-charcoal">
                <div>
                  <h4 className="font-bold text-status-red mb-2">PROBABILITY MINDSET:</h4>
                  <p>
                    Your future is a projection of your past.
                    <br />
                    <em className="text-warm-grey">&quot;I&apos;ve always been this way, so I probably always will be.&quot;</em>
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-status-green mb-2">POSSIBILITY MINDSET:</h4>
                  <p>
                    Your future is unwritten.
                    <br />
                    <em className="text-warm-grey">&quot;What if anything were possible?&quot;</em>
                  </p>
                </div>

                <div className="bg-cream rounded-card p-6 mt-8">
                  <p className="mb-4">
                    Most of us operate from probability.
                    We let our past dictate our future.
                  </p>
                  <p className="font-semibold text-ocean-blue">
                    This program helps you shift to possibility.
                  </p>
                  <p className="mt-4">
                    Not through magical thinking.
                    <br />
                    Through clarity about who you actually are—independent of your history.
                  </p>
                </div>
              </div>

              {/* Diagram */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-warm-grey/10 border-2 border-warm-grey/30 rounded-card p-6">
                  <h4 className="font-bold text-charcoal mb-4 text-center">Probability</h4>
                  <div className="flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="px-4 py-2 bg-warm-grey/20 rounded">Past</div>
                      <div className="text-warm-grey">↓</div>
                      <div className="px-4 py-2 bg-warm-grey/20 rounded">Present</div>
                      <div className="text-warm-grey">↓</div>
                      <div className="px-4 py-2 bg-warm-grey/30 rounded">Predicted Future</div>
                      <div className="text-sm text-warm-grey italic">(closed loop)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-status-green/10 border-2 border-status-green rounded-card p-6">
                  <h4 className="font-bold text-status-green mb-4 text-center">Possibility</h4>
                  <div className="flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="px-4 py-2 bg-status-green/20 rounded">Present</div>
                      <div className="text-status-green">↓</div>
                      <div className="space-y-2">
                        <div className="px-4 py-1 bg-status-green/10 rounded text-sm">Path A</div>
                        <div className="px-4 py-1 bg-status-green/10 rounded text-sm">Path B</div>
                        <div className="px-4 py-1 bg-status-green/10 rounded text-sm">Path C</div>
                      </div>
                      <div className="text-sm text-status-green italic">(open future)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONCEPT 3: KNOWING-DOING GAP */}
            <div className="bg-white rounded-card p-8 md:p-12 shadow-md">
              <h3 className="text-h3 font-bold text-ocean-blue mb-6">
                The Knowing-Doing Gap
              </h3>

              <div className="space-y-4 text-body text-charcoal">
                <p className="text-body-lg font-semibold text-terracotta">
                  Why do we know what we should do but don&apos;t do it?
                </p>

                <p>
                  Research shows: Knowledge alone doesn&apos;t drive behavior.
                  <br />
                  <span className="font-semibold">Beliefs do.</span>
                </p>

                <p>
                  Your beliefs about yourself, about what&apos;s possible,
                  about what you deserve—these shape your actions.
                </p>

                <div className="bg-ocean-blue/5 rounded-card p-6 my-8">
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-terracotta text-white flex items-center justify-center font-bold text-lg mb-2">
                        Beliefs
                      </div>
                      <p className="text-sm text-warm-grey">The leverage point</p>
                    </div>
                    <div className="text-3xl text-warm-grey">→</div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-ocean-blue/20 flex items-center justify-center font-bold mb-2">
                        Behaviors
                      </div>
                    </div>
                    <div className="text-3xl text-warm-grey">→</div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-status-green/20 flex items-center justify-center font-bold mb-2">
                        Outcomes
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-semibold text-ocean-blue text-center text-body-lg">
                  Change your beliefs, change your behaviors.
                  <br />
                  Change your behaviors, change your outcomes.
                </p>

                <p className="pt-4">
                  This program helps you examine and reshape the beliefs
                  that have been driving your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTEGRATION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            Grounded in evidence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream rounded-card p-8">
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                Emotions & Decision-Making
              </h3>
              <p className="text-body text-charcoal">
                Research shows decisions are initially emotional,
                then rationalized.
              </p>
              <p className="text-body text-charcoal mt-4">
                We help you understand your emotional triggers
                and patterns—so you can make aligned decisions,
                not reactive ones.
              </p>
            </div>

            <div className="bg-cream rounded-card p-8">
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                The Body Keeps The Score
              </h3>
              <p className="text-body text-charcoal">
                Your past experiences live in your body,
                not just your mind.
              </p>
              <p className="text-body text-charcoal mt-4">
                We work with the whole person—
                mind, body, emotions—for lasting transformation.
              </p>
            </div>

            <div className="bg-cream rounded-card p-8">
              <h3 className="text-h4 font-bold text-ocean-blue mb-4">
                Neuroplasticity
              </h3>
              <p className="text-body text-charcoal">
                Your brain can change.
                New neural pathways can form.
              </p>
              <p className="text-body text-charcoal mt-4">
                But only through intentional practice
                and aligned action.
                <br />
                <br />
                This program gives you both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS WORKS */}
      <section className="py-20 px-6 bg-ocean-blue text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 font-bold text-center mb-12">
            Transformation requires more than insight
          </h2>

          <div className="space-y-6 text-body-lg">
            <p>
              Most programs give you frameworks and send you on your way.
            </p>

            <p className="font-semibold">
              We go deeper:
            </p>

            <ul className="space-y-3 ml-4">
              <li className="flex items-start">
                <span className="text-terracotta mr-3">→</span>
                <span>Examine the source of your beliefs (Life Discovery)</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3">→</span>
                <span>Connect emotionally with what matters (Values & Gifts)</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3">→</span>
                <span>Create visceral experiences of alignment (Embodiment)</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3">→</span>
                <span>Build a practical roadmap (Vision, Mission, Goals)</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3">→</span>
                <span>Sustain the transformation (Habits, accountability)</span>
              </li>
            </ul>

            <p className="pt-6 text-center text-xl font-semibold">
              The outcome isn&apos;t just clarity.
              <br />
              It&apos;s a new way of being.
            </p>

            <p className="text-center text-body-lg">
              With tangible proof: <span className="font-bold">Your Purpose Portfolio.</span>
            </p>
          </div>
        </div>
      </section>

      {/* THE THREE PILLARS */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h2 font-bold text-ocean-blue text-center mb-16">
            Our approach
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

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-terracotta to-coral text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold mb-6">
            Experience it yourself
          </h2>
          <p className="text-body-lg mb-8 opacity-90">
            Start with the Inside-Out Alignment Assessment.
            <br />
            See where you stand. Then explore the program.
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
