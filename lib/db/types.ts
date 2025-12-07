export interface User {
  id: string
  email: string
  name: string | null
  email_verified: number
  image: string | null
  created_at: number
  updated_at: number
}

export interface Subscription {
  id: string
  user_id: string
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  stripe_price_id: string | null
  status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'incomplete'
  current_period_start: number | null
  current_period_end: number | null
  cancel_at_period_end: number
  created_at: number
  updated_at: number
}

export interface Video {
  id: string
  title: string
  description: string | null
  cloudflare_video_uid: string
  thumbnail_url: string | null
  duration: number | null
  order_index: number
  required_tier: 'basic' | 'premium' | 'pro'
  published: number
  created_at: number
  updated_at: number
}

export interface Workbook {
  id: string
  title: string
  description: string | null
  file_url: string
  file_size: number | null
  order_index: number
  required_tier: 'basic' | 'premium' | 'pro'
  published: number
  created_at: number
  updated_at: number
}

export interface VideoProgress {
  id: string
  user_id: string
  video_id: string
  progress_seconds: number
  completed: number
  last_watched: number
}

export interface WorkbookDownload {
  id: string
  user_id: string
  workbook_id: string
  downloaded_at: number
}

export type SubscriptionTier = 'free' | 'basic' | 'premium' | 'pro'
