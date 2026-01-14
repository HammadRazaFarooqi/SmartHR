import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div className="p-4 md:p-6 flex-1">
            {children}
          </div>
          <div className="border-t border-gray-200 bg-white p-3 flex flex-col sm:flex-row items-center justify-between">
            <p className="mb-0 text-sm">2014 - 2025 &copy; SmartHR.</p>
            <p className="text-sm">
              Designed &amp; Developed By{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Dreams
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


