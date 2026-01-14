'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, ChevronsUp, Trash2, Star, ChevronDown, FileDown, FileText, Table } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const comments = [
  {
    text: 'Useful breakdown of HRMS evolution!',
    date: '12 Sep 2024',
    review: 5,
    blog: 'The Evolution of HRMS: From Manual to Digital',
    by: 'Gertrude',
    status: 'unpublish',
  },
  {
    text: 'Easy-to-follow HRMS guide!',
    date: '24 Oct 2024',
    review: 5,
    blog: 'HRMS Implementation: A Step-by-Step Guide',
    by: 'Edward',
    status: 'unpublish',
  },
  {
    text: 'Essential tips on HRMS data security!',
    date: '18 Feb 2024',
    review: 5,
    blog: 'Data Security in HRMS: What Matters',
    by: 'Mark',
    status: 'unpublish',
  },
  {
    text: 'Great HRMS recruitment tips',
    date: '17 Oct 2024',
    review: 5,
    blog: 'Improving Recruitment with HRMS',
    by: 'Nidia',
    status: 'unpublish',
  },
  {
    text: 'Great look at how HRMS affects culture',
    date: '20 Jul 2024',
    review: 5,
    blog: 'Impact of HRMS on Company Culture',
    by: 'Rebecca',
    status: 'unpublish',
  },
  {
    text: 'Valuable points on HRMS benefits',
    date: '10 Apr 2024',
    review: 5,
    blog: 'Key Benefits of Implementing HRMS',
    by: 'Jimmy',
    status: 'unpublish',
  },
  {
    text: 'Great points on why an HRMS is crucial',
    date: '29 Aug 2024',
    review: 5,
    blog: 'Why Your Company Needs an HRMS',
    by: 'Richard',
    status: 'unpublish',
  },
  {
    text: 'Great take on HRMS technology\'s future',
    date: '22 Feb 2024',
    review: 5,
    blog: 'The Future of HRMS Technology',
    by: 'Rachael',
    status: 'unpublish',
  },
  {
    text: 'Valuable insights on scaling HR with HRMS!',
    date: '03 Nov 2024',
    review: 5,
    blog: 'Scaling Your HR Operations with HRMS',
    by: 'Tammy',
    status: 'unpublish',
  },
]

export default function BlogCommentsPage() {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [cardCollapsed, setCardCollapsed] = useState(false)
  const [statuses, setStatuses] = useState<Record<number, string>>(
    comments.reduce((acc, _, index) => {
      acc[index] = 'unpublish'
      return acc
    }, {} as Record<number, string>)
  )

  const handleStatusChange = (index: number, status: string) => {
    setStatuses(prev => ({ ...prev, [index]: status }))
  }

  const handleExportPDF = () => {
    // Export functionality - can be implemented later
    console.log('Exporting as PDF...')
  }

  const handleExportExcel = () => {
    // Export functionality - can be implemented later
    console.log('Exporting as Excel...')
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-1 text-2xl font-semibold">Blog Comments</h2>
          <nav>
            <ol className="flex items-center text-xs text-gray-600">
              <li className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Home className="h-3 w-3" />
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1 text-xs">/</span>
                <span>Comments</span>
              </li>
              <li className="flex items-center">
                <span className="mx-1 text-xs">/</span>
                <span className="text-gray-900">Blog Comments</span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="white"
                className="h-9 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 inline-flex items-center"
              >
                <FileDown className="h-4 w-4 mr-1" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={handleExportPDF} className="cursor-pointer">
                <FileText className="h-4 w-4 mr-2" />
                Export as PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportExcel} className="cursor-pointer">
                <Table className="h-4 w-4 mr-2" />
                Export as Excel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 border border-gray-200 bg-white hover:bg-gray-50"
            onClick={() => setCardCollapsed(!cardCollapsed)}
            title="Collapse"
          >
            <ChevronsUp className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!cardCollapsed && (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-3 border-b border-gray-200 px-4 py-3">
          <h5 className="text-base font-semibold">Blog Comments List</h5>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <input
                type="text"
                className="h-9 rounded-md border border-gray-300 pr-9 pl-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="dd/mm/yyyy - dd/mm/yyyy"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                <ChevronsUp className="h-4 w-4 rotate-90" />
              </span>
            </div>
            <Button
              variant="white"
              className="h-9 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 inline-flex items-center"
            >
              Sort By : Last 7 Days
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="w-10 px-4 py-2 text-left">
                    <input type="checkbox" className="h-4 w-4" />
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Comment
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Created Date
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Review
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Blog
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    By
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-2 text-right font-medium text-gray-600" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comments.map((comment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 text-gray-900">{comment.text}</td>
                    <td className="px-4 py-3 text-gray-700">{comment.date}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center text-yellow-500">
                        {Array.from({ length: comment.review }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-900">{comment.blog}</td>
                    <td className="px-4 py-3 text-gray-700">{comment.by}</td>
                    <td className="px-4 py-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="white"
                            className="h-8 border border-gray-300 bg-white px-3 text-xs capitalize text-gray-700 hover:bg-gray-50"
                          >
                            {statuses[index] || comment.status}
                            <ChevronDown className="ml-1 h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          <DropdownMenuItem
                            onClick={() => handleStatusChange(index, 'unpublish')}
                            className="cursor-pointer"
                          >
                            unpublish
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleStatusChange(index, 'publish')}
                            className="cursor-pointer"
                          >
                            publish
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        className="inline-flex items-center text-gray-500 hover:text-red-600"
                        onClick={() => setDeleteOpen(true)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      )}

      {/* Delete Modal */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="max-w-md">
          <div className="flex flex-col items-center text-center space-y-3">
            <span className="mb-1 inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600">
              <Trash2 className="h-7 w-7" />
            </span>
            <DialogHeader>
              <DialogTitle>Confirm Delete</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-gray-600">
              You want to delete all the marked items, this can&apos;t be undone once you
              delete.
            </p>
            <div className="mt-2 flex w-full justify-center gap-3">
              <Button
                variant="white"
                className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                onClick={() => setDeleteOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-red-600 text-white hover:bg-red-700"
                onClick={() => setDeleteOpen(false)}
              >
                Yes, Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
