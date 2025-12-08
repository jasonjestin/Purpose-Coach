'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QuizResults from './QuizResults'

// Types
type LifeArea = {
  id: string
  name: string
  rating: number | null
  followUp: string
  diagnostics: string[]
}

type CareerDeepDive = {
  meaningfulWork: string
  changeWhat: string
  whyStay: string[]
  whyStayOther: string
}

type QuizData = {
  areas: LifeArea[]
  career: CareerDeepDive
}

const LIFE_AREAS = [
  { id: 'career', name: 'Career/Work' },
  { id: 'purpose', name: 'Purpose/Meaning' },
  { id: 'relationships', name: 'Relationships' },
  { id: 'health', name: 'Health/Vitality' },
  { id: 'growth', name: 'Personal Growth' },
  { id: 'creativity', name: 'Creativity/Expression' },
  { id: 'environment', name: 'Environment/Space' },
  { id: 'financial', name: 'Financial Wellbeing' },
]

const DIAGNOSTIC_OPTIONS = [
  'Operating on autopilot',
  'Doing what I think I should do',
  'Tolerating things that drain me',
  'Feeling stuck or limited',
  'Uncertain what I actually want',
  'Clear and intentional',
  'Energized and growing',
]

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentSubStep, setCurrentSubStep] = useState<'rating' | 'followup' | 'diagnostic' | 'career'>('rating')
  const [showResults, setShowResults] = useState(false)

  const [quizData, setQuizData] = useState<QuizData>({
    areas: LIFE_AREAS.map(area => ({
      id: area.id,
      name: area.name,
      rating: null,
      followUp: '',
      diagnostics: [],
    })),
    career: {
      meaningfulWork: '',
      changeWhat: '',
      whyStay: [],
      whyStayOther: '',
    },
  })

  const currentArea = quizData.areas[currentStep]
  const totalSteps = LIFE_AREAS.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  // Helper to update current area
  const updateCurrentArea = (updates: Partial<LifeArea>) => {
    const newAreas = [...quizData.areas]
    newAreas[currentStep] = { ...newAreas[currentStep], ...updates }
    setQuizData({ ...quizData, areas: newAreas })
  }

  const handleNext = () => {
    if (currentSubStep === 'rating') {
      setCurrentSubStep('followup')
    } else if (currentSubStep === 'followup') {
      setCurrentSubStep('diagnostic')
    } else if (currentSubStep === 'diagnostic') {
      // Check if this is the career area and we haven't done deep dive yet
      if (currentArea.id === 'career') {
        setCurrentSubStep('career')
      } else {
        // Move to next area
        if (currentStep < totalSteps - 1) {
          setCurrentStep(currentStep + 1)
          setCurrentSubStep('rating')
        } else {
          // Finished all areas
          setShowResults(true)
        }
      }
    } else if (currentSubStep === 'career') {
      // Move to next area after career deep dive
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1)
        setCurrentSubStep('rating')
      } else {
        setShowResults(true)
      }
    }
  }

  const handleBack = () => {
    if (currentSubStep === 'followup') {
      setCurrentSubStep('rating')
    } else if (currentSubStep === 'diagnostic') {
      setCurrentSubStep('followup')
    } else if (currentSubStep === 'career') {
      setCurrentSubStep('diagnostic')
    } else if (currentSubStep === 'rating' && currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setCurrentSubStep('diagnostic')
    }
  }

  const canProceed = () => {
    if (currentSubStep === 'rating') {
      return currentArea.rating !== null
    }
    if (currentSubStep === 'diagnostic') {
      return currentArea.diagnostics.length > 0
    }
    return true // followup and career questions are optional
  }

  if (showResults) {
    return <QuizResults quizData={quizData} />
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="h-2 bg-warm-grey/20">
          <motion.div
            className="h-full bg-terracotta"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center text-sm text-charcoal">
            <span className="font-semibold">{currentArea.name}</span>
            <span className="text-warm-grey">
              {currentStep + 1} of {totalSteps}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {/* RATING QUESTION */}
            {currentSubStep === 'rating' && (
              <motion.div
                key="rating"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-h2 font-bold text-ocean-blue mb-8">
                  On a scale of 0-10, how aligned does {currentArea.name} feel with who you truly are?
                </h2>

                {/* Rating Scale */}
                <div className="space-y-6 mb-12">
                  <div className="flex justify-between text-sm text-warm-grey mb-2">
                    <span>0 - Completely misaligned</span>
                    <span>10 - Fully aligned</span>
                  </div>

                  <div className="grid grid-cols-11 gap-2">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                      <button
                        key={value}
                        onClick={() => updateCurrentArea({ rating: value })}
                        className={`aspect-square rounded-lg font-bold text-lg transition-all ${
                          currentArea.rating === value
                            ? 'bg-terracotta text-white scale-110 shadow-lg'
                            : 'bg-white text-charcoal hover:bg-terracotta/10 hover:scale-105'
                        }`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>

                  {/* Labels for score ranges */}
                  <div className="grid grid-cols-3 gap-4 mt-6 text-sm text-center">
                    <div className="text-status-red font-semibold">
                      0-3: Draining
                    </div>
                    <div className="text-status-yellow font-semibold">
                      4-6: Getting by
                    </div>
                    <div className="text-status-green font-semibold">
                      7-10: Energizing
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FOLLOW-UP QUESTION */}
            {currentSubStep === 'followup' && (
              <motion.div
                key="followup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-h2 font-bold text-ocean-blue mb-8">
                  {currentArea.rating !== null && currentArea.rating <= 6
                    ? "What's the biggest gap between how this area is and how you want it to be?"
                    : "What makes this area feel aligned?"}
                </h2>

                <textarea
                  value={currentArea.followUp}
                  onChange={(e) => updateCurrentArea({ followUp: e.target.value })}
                  placeholder="Your answer (1-2 sentences, optional)"
                  className="w-full h-40 p-4 rounded-lg border-2 border-warm-grey/30 focus:border-terracotta focus:outline-none text-body resize-none"
                />

                <p className="text-sm text-warm-grey mt-2">
                  Optional, but encouraged for better insights
                </p>
              </motion.div>
            )}

            {/* DIAGNOSTIC QUESTION */}
            {currentSubStep === 'diagnostic' && (
              <motion.div
                key="diagnostic"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-h2 font-bold text-ocean-blue mb-8">
                  In this area, I&apos;m currently:
                </h2>

                <p className="text-body text-warm-grey mb-6">(select all that apply)</p>

                <div className="space-y-3">
                  {DIAGNOSTIC_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className="flex items-start p-4 rounded-lg border-2 border-warm-grey/30 hover:border-terracotta/50 cursor-pointer transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={currentArea.diagnostics.includes(option)}
                        onChange={(e) => {
                          const newDiagnostics = e.target.checked
                            ? [...currentArea.diagnostics, option]
                            : currentArea.diagnostics.filter(d => d !== option)
                          updateCurrentArea({ diagnostics: newDiagnostics })
                        }}
                        className="mt-1 mr-3 w-5 h-5 text-terracotta border-warm-grey rounded focus:ring-terracotta"
                      />
                      <span className="text-body text-charcoal">{option}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CAREER DEEP DIVE */}
            {currentSubStep === 'career' && currentArea.id === 'career' && (
              <motion.div
                key="career"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {/* Question 1: Meaningful work */}
                <div>
                  <h2 className="text-h3 font-bold text-ocean-blue mb-6">
                    How much of your work day feels meaningful?
                  </h2>
                  <div className="space-y-2">
                    {['Almost none', 'Some moments', 'About half', 'Most of it', 'Nearly all of it'].map((option) => (
                      <label
                        key={option}
                        className="flex items-center p-4 rounded-lg border-2 border-warm-grey/30 hover:border-terracotta/50 cursor-pointer transition-all"
                      >
                        <input
                          type="radio"
                          name="meaningfulWork"
                          checked={quizData.career.meaningfulWork === option}
                          onChange={() => setQuizData({ ...quizData, career: { ...quizData.career, meaningfulWork: option } })}
                          className="mr-3 w-5 h-5 text-terracotta border-warm-grey focus:ring-terracotta"
                        />
                        <span className="text-body text-charcoal">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 2: What to change */}
                <div>
                  <h2 className="text-h3 font-bold text-ocean-blue mb-6">
                    If you could change one thing about your professional life tomorrow, what would it be?
                  </h2>
                  <div className="space-y-2">
                    {[
                      'My role/responsibilities',
                      'My work environment',
                      'My workload/pace',
                      'The purpose/impact of the work',
                      'My level of autonomy',
                      'The people I work with',
                      'Something else',
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center p-4 rounded-lg border-2 border-warm-grey/30 hover:border-terracotta/50 cursor-pointer transition-all"
                      >
                        <input
                          type="radio"
                          name="changeWhat"
                          checked={quizData.career.changeWhat === option}
                          onChange={() => setQuizData({ ...quizData, career: { ...quizData.career, changeWhat: option } })}
                          className="mr-3 w-5 h-5 text-terracotta border-warm-grey focus:ring-terracotta"
                        />
                        <span className="text-body text-charcoal">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 3: Why you stay */}
                <div>
                  <h2 className="text-h3 font-bold text-ocean-blue mb-6">
                    Complete this sentence: &quot;I stay in my current role because...&quot;
                  </h2>
                  <p className="text-body text-warm-grey mb-4">(select all that apply)</p>
                  <div className="space-y-2">
                    {[
                      'It pays well',
                      'It\'s stable/secure',
                      'I\'m good at it',
                      'I don\'t know what else to do',
                      'It aligns with my values',
                      'I\'m building toward something meaningful',
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-start p-4 rounded-lg border-2 border-warm-grey/30 hover:border-terracotta/50 cursor-pointer transition-all"
                      >
                        <input
                          type="checkbox"
                          checked={quizData.career.whyStay.includes(option)}
                          onChange={(e) => {
                            const newWhyStay = e.target.checked
                              ? [...quizData.career.whyStay, option]
                              : quizData.career.whyStay.filter(s => s !== option)
                            setQuizData({ ...quizData, career: { ...quizData.career, whyStay: newWhyStay } })
                          }}
                          className="mt-1 mr-3 w-5 h-5 text-terracotta border-warm-grey rounded focus:ring-terracotta"
                        />
                        <span className="text-body text-charcoal">{option}</span>
                      </label>
                    ))}
                    <div className="p-4 rounded-lg border-2 border-warm-grey/30">
                      <input
                        type="text"
                        value={quizData.career.whyStayOther}
                        onChange={(e) => setQuizData({ ...quizData, career: { ...quizData.career, whyStayOther: e.target.value } })}
                        placeholder="Other reason..."
                        className="w-full text-body border-none focus:outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              onClick={handleBack}
              disabled={currentStep === 0 && currentSubStep === 'rating'}
              className="px-6 py-3 text-ocean-blue font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-ocean-blue/5 rounded-lg transition-colors"
            >
              ← Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="px-8 py-3 bg-terracotta text-white font-semibold rounded-lg hover:bg-terracotta-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              {currentStep === totalSteps - 1 && currentSubStep !== 'rating' && currentSubStep !== 'followup' && (currentSubStep !== 'diagnostic' || currentArea.id !== 'career')
                ? 'View Results'
                : 'Next'}
            </button>
          </div>

          {/* Encouraging message */}
          <div className="mt-8 text-center">
            <p className="text-warm-grey text-sm">
              {currentSubStep === 'rating' && 'Take your time. Be honest with yourself.'}
              {currentSubStep === 'followup' && 'Your insights will help create a more personalized assessment.'}
              {currentSubStep === 'diagnostic' && 'Choose all that resonate with you.'}
              {currentSubStep === 'career' && 'Just a few more questions about your career...'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
