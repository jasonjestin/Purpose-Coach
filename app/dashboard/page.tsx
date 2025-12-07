import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Purpose Coach</h1>
            <div className="flex gap-4 items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {session.user?.email}
              </span>
              <Link
                href="/api/auth/signout"
                className="text-sm text-red-600 hover:text-red-700"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome back, {session.user?.name || 'there'}!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Continue your journey to living with purpose
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/videos"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="text-primary-600 text-4xl mb-4">📹</div>
            <h3 className="text-2xl font-bold mb-2">Coaching Videos</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access your exclusive coaching content and training videos
            </p>
          </Link>

          <Link
            href="/workbooks"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="text-primary-600 text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-2">Workbooks</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Download and work through your personalized workbooks
            </p>
          </Link>

          <Link
            href="/pricing"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="text-primary-600 text-4xl mb-4">⬆️</div>
            <h3 className="text-2xl font-bold mb-2">Upgrade Plan</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Unlock more content and features with a premium plan
            </p>
          </Link>

          <Link
            href="/profile"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="text-primary-600 text-4xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-2">Settings</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your account and subscription settings
            </p>
          </Link>
        </div>
      </main>
    </div>
  )
}
