import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export const STRIPE_PRICE_IDS = {
  basic: process.env.STRIPE_BASIC_PRICE_ID || '',
  premium: process.env.STRIPE_PREMIUM_PRICE_ID || '',
  pro: process.env.STRIPE_PRO_PRICE_ID || '',
}

export const SUBSCRIPTION_TIERS = {
  basic: {
    name: 'Foundation',
    price: '$29',
    priceId: STRIPE_PRICE_IDS.basic,
    description: 'For those ready to start the work on their own terms',
    features: [
      'Complete video coaching library',
      'All workbooks and exercises',
      'Community access',
      'Self-paced progression',
      'Cancel anytime',
    ],
  },
  premium: {
    name: 'Guided',
    price: '$49',
    priceId: STRIPE_PRICE_IDS.premium,
    description: 'For those who want structured support along the way',
    features: [
      'Everything in Foundation',
      'Monthly 1-on-1 coaching call',
      'Advanced frameworks and tools',
      'Priority email support',
      'Accountability partnership matching',
      'Extended content library',
    ],
  },
  pro: {
    name: 'Intensive',
    price: '$99',
    priceId: STRIPE_PRICE_IDS.pro,
    description: 'For those committed to going all-in on transformation',
    features: [
      'Everything in Guided',
      'Weekly 1-on-1 coaching sessions',
      'Personalized action planning',
      'Direct messaging access',
      'Priority booking for workshops',
      'Lifetime access to all new content',
    ],
  },
}
