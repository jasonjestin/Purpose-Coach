import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Workbooks() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  // TODO: Fetch workbooks from D1 database
  const workbooks = [
    {
      id: '1',
      title: 'Purpose Discovery Workbook',
      description: 'A comprehensive guide to uncovering your life purpose',
      fileSize: '2.5 MB',
    },
    {
      id: '2',
      title: 'Values Clarification Exercise',
      description: 'Interactive exercises to identify your core values',
      fileSize: '1.8 MB',
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
          <h2 className="text-3xl font-bold mb-2">Workbooks</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Download your exclusive workbooks and exercises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {workbooks.map((workbook) => (
            <div
              key={workbook.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-primary-600 text-4xl">📄</div>
                <span className="text-sm text-gray-500">{workbook.fileSize}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{workbook.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {workbook.description}
              </p>
              <button className="w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
