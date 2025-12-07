# Purpose Coach Website

A Next.js application with gated video content and downloadable workbooks, powered by Stripe for payments and Cloudflare infrastructure.

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Database**: Cloudflare D1 (SQLite)
- **Video Hosting**: Cloudflare Stream
- **Hosting**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Cloudflare account
- Stripe account

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Copy the environment variables:
```bash
copy .env.local.example .env.local
```

3. Fill in your environment variables in `.env.local`:
   - `NEXTAUTH_SECRET`: Generate with `openssl rand -base64 32`
   - Stripe API keys from your Stripe dashboard
   - Cloudflare credentials

4. Set up the Cloudflare D1 database:
```bash
# Create the database
npx wrangler d1 create purpose-coach-db

# Update wrangler.toml with the database_id from the output above

# Initialize the database schema
npx wrangler d1 execute purpose-coach-db --local --file=./lib/db/schema.sql
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Database Management

### Local Development
```bash
# Execute SQL locally
npx wrangler d1 execute purpose-coach-db --local --file=./lib/db/schema.sql

# Query the database
npx wrangler d1 execute purpose-coach-db --local --command="SELECT * FROM users"
```

### Production
```bash
# Apply schema to production
npx wrangler d1 execute purpose-coach-db --file=./lib/db/schema.sql

# Query production database
npx wrangler d1 execute purpose-coach-db --command="SELECT * FROM users"
```

## Stripe Setup

1. Create products in Stripe Dashboard:
   - Basic Plan ($29/month)
   - Premium Plan ($49/month)
   - Pro Plan ($99/month)

2. Copy the price IDs and add them to `.env.local`:
```
STRIPE_BASIC_PRICE_ID=price_xxx
STRIPE_PREMIUM_PRICE_ID=price_xxx
STRIPE_PRO_PRICE_ID=price_xxx
```

3. Set up webhook endpoint:
   - Development: Use Stripe CLI (`stripe listen --forward-to localhost:3000/api/webhooks/stripe`)
   - Production: Add webhook in Stripe Dashboard pointing to `https://yourdomain.com/api/webhooks/stripe`

## Cloudflare Stream Setup

1. Upload videos to Cloudflare Stream
2. Get the video UIDs
3. Add them to the database via the videos table
4. Update `next.config.js` with your Stream customer code

## Deployment to Cloudflare Pages

### First-time Setup

1. Install Wrangler CLI globally:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
npx wrangler login
```

3. Create D1 database in production:
```bash
npx wrangler d1 create purpose-coach-db
```

4. Update `wrangler.toml` with the production database ID

5. Initialize production database:
```bash
npx wrangler d1 execute purpose-coach-db --file=./lib/db/schema.sql
```

### Deploy

**IMPORTANT**: Exit VS Code before deploying to avoid build errors!

1. Build the application:
```bash
npm run build
```

2. Deploy to Cloudflare Pages:
```bash
# Connect your GitHub repo to Cloudflare Pages via the dashboard
# OR use Wrangler Pages:
npx wrangler pages deploy .next
```

3. Set environment variables in Cloudflare Pages dashboard:
   - `NEXTAUTH_URL`: Your production URL
   - `NEXTAUTH_SECRET`: Same secret from local env
   - All Stripe keys
   - Cloudflare credentials

### Continuous Deployment

Connect your GitHub repository to Cloudflare Pages for automatic deployments on push:

1. Go to Cloudflare Dashboard → Pages
2. Create a new project
3. Connect your GitHub repository
4. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Environment variables: Add all from `.env.local`

## Project Structure

```
├── app/
│   ├── api/              # API routes
│   ├── auth/             # Authentication pages
│   ├── dashboard/        # User dashboard
│   ├── videos/           # Video pages
│   ├── workbooks/        # Workbook pages
│   └── pricing/          # Pricing page
├── lib/
│   ├── auth.ts           # NextAuth configuration
│   ├── stripe.ts         # Stripe configuration
│   └── db/               # Database schema and types
├── types/                # TypeScript type definitions
└── wrangler.toml         # Cloudflare configuration
```

## Features

- User authentication with NextAuth.js
- Stripe subscription management
- Gated video content with Cloudflare Stream
- Downloadable workbooks
- Progress tracking for videos
- Three subscription tiers (Basic, Premium, Pro)

## TODO

- [ ] Implement password hashing for credentials auth
- [ ] Add email verification
- [ ] Create admin panel for content management
- [ ] Add video player with progress tracking
- [ ] Implement workbook file storage
- [ ] Add user profile management
- [ ] Set up email notifications
- [ ] Add analytics tracking

## License

Private - All rights reserved
