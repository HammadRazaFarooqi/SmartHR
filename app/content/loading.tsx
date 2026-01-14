export default function Loading() {
  return (
    <div className="w-full">
      {/* Breadcrumb skeleton */}
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-64"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-9 bg-gray-200 rounded w-32 animate-pulse"></div>
          <div className="h-9 w-9 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
      {/* Card skeleton */}
      <div className="bg-white border border-gray-200 rounded-lg animate-pulse">
        <div className="h-12 bg-gray-100 border-b border-gray-200 rounded-t-lg"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  )
}

