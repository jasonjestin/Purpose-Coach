import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionChange(subscription)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCancellation(subscription)
        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        await handleSuccessfulPayment(invoice)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        await handleFailedPayment(invoice)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Error processing webhook:', err)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  // TODO: Update subscription in D1 database
  console.log('Subscription changed:', subscription.id)

  // Example update logic:
  // const db = getDatabase()
  // await db.prepare(`
  //   INSERT OR REPLACE INTO subscriptions
  //   (id, stripe_subscription_id, stripe_customer_id, status, current_period_end)
  //   VALUES (?, ?, ?, ?, ?)
  // `).bind(
  //   crypto.randomUUID(),
  //   subscription.id,
  //   subscription.customer as string,
  //   subscription.status,
  //   subscription.current_period_end
  // ).run()
}

async function handleSubscriptionCancellation(subscription: Stripe.Subscription) {
  // TODO: Update subscription status in D1 database
  console.log('Subscription canceled:', subscription.id)
}

async function handleSuccessfulPayment(invoice: Stripe.Invoice) {
  // TODO: Log successful payment, send confirmation email
  console.log('Payment succeeded:', invoice.id)
}

async function handleFailedPayment(invoice: Stripe.Invoice) {
  // TODO: Notify user of failed payment
  console.log('Payment failed:', invoice.id)
}
