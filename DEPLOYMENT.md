# Purpose Coach - Complete Deployment Guide

## ✅ Completed Steps

1. ✅ Generated secure NEXTAUTH_SECRET
2. ✅ Created Cloudflare D1 database
3. ✅ Initialized database schema (local and remote)
4. ✅ Added comprehensive landing page with testimonials
5. ✅ Built and tested the application

## 🔧 Remaining Setup Steps

### 1. Stripe Configuration

#### A. Create Stripe Account & Products

1. **Sign up or login to Stripe**: https://dashboard.stripe.com

2. **Create Products** (Stripe Dashboard → Products → Add Product):

   **Basic Plan:**
   - Name: Purpose Coach - Basic
   - Price: $29/month (recurring)
   - Copy the Price ID (starts with `price_`)

   **Premium Plan:**
   - Name: Purpose Coach - Premium
   - Price: $49/month (recurring)
   - Copy the Price ID

   **Pro Plan:**
   - Name: Purpose Coach - Pro
   - Price: $99/month (recurring)
   - Copy the Price ID

3. **Update your `.env.local` file:**
   ```env
   STRIPE_BASIC_PRICE_ID=price_xxxxxxxxxxxxx
   STRIPE_PREMIUM_PRICE_ID=price_xxxxxxxxxxxxx
   STRIPE_PRO_PRICE_ID=price_xxxxxxxxxxxxx
   ```

4. **Get API Keys** (Stripe Dashboard → Developers → API Keys):
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
   STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
   ```

#### B. Set Up Stripe Webhooks

**For Development (Local Testing):**

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Run in PowerShell:
   ```powershell
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
3. Copy the webhook signing secret (starts with `whsec_`) to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
   ```

**For Production:**

1. Go to Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Enter your production URL: `https://purpose-coach.com/api/webhooks/stripe`
4. Select events to listen to:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Copy the webhook signing secret to Cloudflare Pages environment variables

### 2. Cloudflare Stream Setup

1. **Go to Cloudflare Dashboard**: https://dash.cloudflare.com
2. Navigate to Stream
3. **Get your credentials**:
   - Account ID: Found in the URL or dashboard
   - API Token: Create in "My Profile" → "API Tokens"

4. **Update `.env.local`**:
   ```env
   CLOUDFLARE_ACCOUNT_ID=your_account_id
   CLOUDFLARE_STREAM_API_TOKEN=your_api_token
   ```

5. **Upload your first video**:
   - Go to Stream → Upload
   - Upload your coaching video
   - Copy the Video UID
   - Update your database with video information

6. **Update `next.config.js`** with your Stream customer subdomain:
   ```javascript
   images: {
     domains: ['customer-YOUR_ACCOUNT_ID.cloudflarestream.com'],
   }
   ```

### 3. Deploy to Cloudflare Pages

#### Option A: Via GitHub (Recommended)

1. **Initialize Git repository** (if not already done):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**:
   ```powershell
   git remote add origin https://github.com/yourusername/purpose-coach-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your repository

4. **Configure build settings**:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node version: 18 or higher

5. **Add environment variables** (in Cloudflare Pages settings):
   ```
   NEXTAUTH_URL=https://purpose-coach.com
   NEXTAUTH_SECRET=nUqfd05RmuA4Mc6mybFNIOBl+n+t3jpEFUiF4KeRwIY=
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
   STRIPE_SECRET_KEY=sk_live_xxxxx
   STRIPE_WEBHOOK_SECRET=whsec_xxxxx
   STRIPE_BASIC_PRICE_ID=price_xxxxx
   STRIPE_PREMIUM_PRICE_ID=price_xxxxx
   STRIPE_PRO_PRICE_ID=price_xxxxx
   CLOUDFLARE_ACCOUNT_ID=xxxxx
   CLOUDFLARE_STREAM_API_TOKEN=xxxxx
   ```

6. **Configure custom domain**:
   - In Cloudflare Pages → Custom domains
   - Add `purpose-coach.com`
   - Follow DNS configuration instructions

#### Option B: Direct Upload via Wrangler

1. **Build the project**:
   ```powershell
   npm run build
   ```

2. **Deploy**:
   ```powershell
   npx wrangler pages deploy .next
   ```

### 4. Database Management

#### View Database Contents
```powershell
# Local
npx wrangler d1 execute purpose-coach-db --local --command="SELECT * FROM users"

# Production
npx wrangler d1 execute purpose-coach-db --remote --command="SELECT * FROM users"
```

#### Add Sample Video to Database
```powershell
npx wrangler d1 execute purpose-coach-db --remote --command="INSERT INTO videos (id, title, description, cloudflare_video_uid, required_tier, published) VALUES ('1', 'Introduction to Purpose', 'Welcome to the course', 'YOUR_VIDEO_UID', 'basic', 1)"
```

#### Add Sample Workbook
```powershell
npx wrangler d1 execute purpose-coach-db --remote --command="INSERT INTO workbooks (id, title, description, file_url, required_tier, published) VALUES ('1', 'Purpose Discovery Workbook', 'Find your purpose', 'https://yourdomain.com/workbooks/workbook1.pdf', 'basic', 1)"
```

### 5. Testing Checklist

Before going live, test:

- [ ] Sign up flow
- [ ] Sign in flow
- [ ] Stripe checkout process
- [ ] Video playback
- [ ] Workbook downloads
- [ ] Webhook handling (create test subscription)
- [ ] Dashboard access
- [ ] Responsive design on mobile
- [ ] All navigation links
- [ ] Error handling

## 📋 Pre-Deployment Checklist

**IMPORTANT: Before deploying, make sure to:**

- [ ] Exit VS Code to avoid build errors
- [ ] Run `npm run build` to verify build succeeds
- [ ] Update all placeholder content (testimonials, pricing, etc.)
- [ ] Replace test Stripe keys with live keys
- [ ] Set up proper SSL certificate
- [ ] Configure CORS if needed
- [ ] Test all payment flows
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure email service for notifications
- [ ] Review and update privacy policy & terms of service

## 🚀 Post-Deployment

1. **Test the live site thoroughly**
2. **Set up monitoring and alerts**
3. **Configure backups for D1 database**
4. **Set up analytics** (Google Analytics, Plausible, etc.)
5. **Create admin user account**
6. **Upload actual content** (videos, workbooks)
7. **Update testimonials** with real customer reviews
8. **Set up customer support** email/chat

## 🔒 Security Notes

- Never commit `.env.local` to git (it's in `.gitignore`)
- Use environment variables for all secrets
- Enable Stripe webhook signature verification
- Use HTTPS in production
- Set secure session cookies
- Regularly update dependencies

## 📞 Support

For issues:
- Check logs in Cloudflare Dashboard → Pages → Deployments
- Review Stripe Dashboard for payment issues
- Check D1 database for data issues
- Review Next.js build logs

## 🔄 Making Updates

After initial deployment:

1. Make your changes locally
2. Test with `npm run dev`
3. Run `npm run build` to verify
4. Commit and push to GitHub
5. Cloudflare Pages will auto-deploy

Or manually deploy:
```powershell
npm run build
npx wrangler pages deploy .next
```

---

**Your database ID**: `2a61ade2-9614-4bb5-b2fc-bf60948b863c`
**Your NEXTAUTH_SECRET**: `nUqfd05RmuA4Mc6mybFNIOBl+n+t3jpEFUiF4KeRwIY=`

Keep these secure and backed up!
