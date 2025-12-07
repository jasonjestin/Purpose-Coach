# Purpose Coach - Quick Start Guide

## 🎉 Your Website is Ready!

All the foundation has been set up. Here's what you have:

### ✅ What's Complete

1. **Full Next.js Application**
   - Modern landing page with testimonials
   - Authentication system (NextAuth.js)
   - User dashboard
   - Video library page
   - Workbooks page
   - Pricing page with 3 tiers

2. **Database (Cloudflare D1)**
   - Local database: ✅ Created and initialized
   - Production database: ✅ Created and initialized
   - Database ID: `2a61ade2-9614-4bb5-b2fc-bf60948b863c`

3. **Security**
   - Secure session secret: ✅ Generated
   - Environment variables: ✅ Configured

4. **Build System**
   - TypeScript compilation: ✅ Passing
   - Build process: ✅ Working
   - Development server: ✅ Tested

---

## 🚀 Start Working Locally

### 1. Start the Development Server

```powershell
npm run dev
```

Visit: http://localhost:3000

### 2. Available Pages

- **Landing**: http://localhost:3000
- **Sign In**: http://localhost:3000/auth/signin
- **Sign Up**: http://localhost:3000/auth/signup
- **Pricing**: http://localhost:3000/pricing
- **Dashboard**: http://localhost:3000/dashboard (requires login)
- **Videos**: http://localhost:3000/videos (requires login)
- **Workbooks**: http://localhost:3000/workbooks (requires login)

---

## 📝 Next Steps (In Order)

### Step 1: Set Up Stripe (30 minutes)

1. Go to https://dashboard.stripe.com
2. Create 3 products (Basic $29, Premium $49, Pro $99)
3. Copy the price IDs to `.env.local`:
   ```env
   STRIPE_BASIC_PRICE_ID=price_xxxxx
   STRIPE_PREMIUM_PRICE_ID=price_xxxxx
   STRIPE_PRO_PRICE_ID=price_xxxxx
   ```
4. Copy API keys to `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
   STRIPE_SECRET_KEY=sk_test_xxxxx
   ```
5. Set up webhook (see DEPLOYMENT.md for details)

### Step 2: Set Up Cloudflare Stream (20 minutes)

1. Go to https://dash.cloudflare.com
2. Navigate to Stream
3. Upload your first video
4. Update `.env.local` with credentials
5. Add video to database (see DEPLOYMENT.md)

### Step 3: Customize Content (1-2 hours)

**Update Testimonials** in `app/page.tsx`:
```typescript
const testimonials = [
  {
    name: 'Your Real Customer Name',
    role: 'Their Role',
    content: 'Their actual testimonial...',
    image: '👤', // or URL to real image
  },
  // Add more...
]
```

**Update Pricing** in `lib/stripe.ts` if needed

**Customize Landing Page** sections in `app/page.tsx`

### Step 4: Test Everything (1 hour)

- [ ] Sign up flow
- [ ] Sign in flow
- [ ] Payment flow (use Stripe test cards)
- [ ] Navigate through all pages
- [ ] Mobile responsiveness

### Step 5: Deploy to Production

**See DEPLOYMENT.md for complete instructions**

Quick version:
1. Push to GitHub
2. Connect GitHub to Cloudflare Pages
3. Add environment variables
4. Deploy!

---

## 🛠️ Helpful Commands

### Development
```powershell
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run linter
```

### Database
```powershell
# View local database
npx wrangler d1 execute purpose-coach-db --local --command="SELECT * FROM users"

# View production database
npx wrangler d1 execute purpose-coach-db --remote --command="SELECT * FROM users"

# Add a video
npx wrangler d1 execute purpose-coach-db --remote --command="INSERT INTO videos (id, title, description, cloudflare_video_uid, required_tier, published) VALUES ('vid-1', 'Video Title', 'Description', 'VIDEO_UID', 'basic', 1)"
```

### Testing Stripe Webhooks Locally
```powershell
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## 📂 Project Structure

```
purpose-coach-website/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Landing page
│   ├── layout.tsx           # Root layout
│   ├── auth/                # Auth pages (signin/signup)
│   ├── dashboard/           # User dashboard
│   ├── videos/              # Video library
│   ├── workbooks/           # Workbooks
│   ├── pricing/             # Pricing page
│   └── api/                 # API routes
│       ├── auth/            # NextAuth endpoints
│       ├── create-checkout/ # Stripe checkout
│       └── webhooks/stripe/ # Stripe webhooks
├── lib/
│   ├── auth.ts              # NextAuth config
│   ├── stripe.ts            # Stripe config
│   └── db/
│       ├── schema.sql       # Database schema
│       └── types.ts         # TypeScript types
├── .env.local               # Environment variables (SECRET!)
├── wrangler.toml            # Cloudflare config
├── README.md                # Project overview
├── DEPLOYMENT.md            # Full deployment guide
└── QUICK-START.md           # This file
```

---

## 🎨 Design System

Your website uses:
- **Colors**: Navy blue (#001f31), Orange (#ff914d), Primary blue (#0ea5e9)
- **Fonts**: Inter (default)
- **Framework**: Tailwind CSS

To customize colors, edit `tailwind.config.ts`

---

## 💡 Tips

1. **Keep `.env.local` secure** - Never commit it to Git
2. **Test with Stripe test mode first** before going live
3. **Use the local database** for development
4. **Exit VS Code before deploying** (per your preferences)
5. **Run `npm run build`** before every deployment

---

## ❓ Common Issues

### "NEXTAUTH_SECRET is not set"
- Check that `.env.local` exists and contains NEXTAUTH_SECRET

### Stripe not working
- Verify you're using test mode keys
- Check webhook is running (`stripe listen`)

### Database errors
- Make sure database is initialized: `npx wrangler d1 execute purpose-coach-db --local --file=lib/db/schema.sql`

### Build fails
- Run `npm run build` and check for TypeScript errors
- Clear `.next` folder and rebuild

---

## 📞 Need Help?

- **Detailed deployment**: See `DEPLOYMENT.md`
- **Project overview**: See `README.md`
- **Stripe docs**: https://stripe.com/docs
- **Next.js docs**: https://nextjs.org/docs
- **Cloudflare docs**: https://developers.cloudflare.com

---

## 🎯 Your Next Action

**Run the dev server and explore:**
```powershell
npm run dev
```

Then open http://localhost:3000 and start customizing!

When ready to go live, follow the deployment guide in `DEPLOYMENT.md`.

**Good luck with your Purpose Coach website! 🚀**
