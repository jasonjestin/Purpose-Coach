import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Videos() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  // TODO: Fetch videos from D1 database
  const videos = [
    {
      id: '1',
      title: 'Finding Your Purpose - Introduction',
      description: 'Learn the fundamentals of discovering your life purpose',
      duration: '15:30',
      thumbnail: '/placeholder-video.jpg',
    },
    {
      id: '2',
      title: 'Values Assessment Workshop',
      description: 'Identify your core values and how they guide your purpose',
      duration: '22:45',
      thumbnail: '/placeholder-video.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/dashboard" className="text-2xl font-bold">
              Purpose Coach
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Coaching Videos</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Watch your exclusive coaching content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/videos/${video.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-6xl">▶️</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {video.description}
                </p>
                <span className="text-sm text-primary-600">{video.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
