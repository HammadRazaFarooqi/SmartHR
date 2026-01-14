'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, ChevronsUp, Circle, Edit3, Trash2, ChevronDown, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

const categories = [
  { name: 'Evlovution', date: '12 Sep 2024', status: 'Active' },
  { name: 'Guide', date: '24 Oct 2024', status: 'Active' },
  { name: 'Security', date: '18 Feb 2024', status: 'Active' },
  { name: 'Recruitment', date: '17 Oct 2024', status: 'Active' },
  { name: 'Payroll', date: '20 Jul 2024', status: 'Active' },
  { name: 'Benefits', date: '10 Apr 2024', status: 'Active' },
  { name: 'Employee', date: '29 Aug 2024', status: 'Active' },
  { name: 'Onboarding', date: '22 Feb 2024', status: 'Active' },
  { name: 'Implementation', date: '03 Nov 2024', status: 'Active' },
  { name: 'Management', date: '17 Dec 2024', status: 'Active' },
]

export default function BlogCategoriesPage() {
  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [cardCollapsed, setCardCollapsed] = useState(false)

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-1 text-2xl font-semibold">Blog Categories</h2>
          <nav>
            <ol className="flex items-center text-xs text-gray-600">
              <li className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Home className="h-3 w-3" />
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1 text-xs">/</span>
                <span>Content</span>
              </li>
              <li className="flex items-center">
                <span className="mx-1 text-xs">/</span>
                <span className="text-gray-900">Blog Categories</span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            className="h-9 bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => setAddOpen(true)}
          >
            <span className="mr-2 text-lg leading-none">+</span>
            Add Category
          </Button>
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
          <h5 className="text-base font-semibold">Blog Categories List</h5>
          <div className="flex flex-wrap items-center gap-3">
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
                    Category
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Created Date
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-2 text-right font-medium text-gray-600" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categories.map(category => (
                  <tr key={category.name} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <input type="checkbox" className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 text-gray-900">{category.name}</td>
                    <td className="px-4 py-3 text-gray-700">{category.date}</td>
                    <td className="px-4 py-3">
                      <Badge className="inline-flex items-center bg-green-500 px-2 py-1 text-xs text-white">
                        <Circle className="mr-1 h-2 w-2 fill-current" />
                        {category.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-2 text-gray-500">
                        <button
                          className="hover:text-blue-600"
                          onClick={() => setEditOpen(true)}
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          className="hover:text-red-600"
                          onClick={() => setDeleteOpen(true)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      )}

      {/* Add Category Modal */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Blog Category</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Tag
              </label>
              <Input
                placeholder="HRMS,Recruitment,HRTech"
                className="h-10"
              />
              <p className="mt-1 text-xs text-gray-500">
                Separate tags with commas.
              </p>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Status
              </label>
              <Select defaultValue="active">
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button
              variant="white"
              className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              onClick={() => setAddOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600"
              onClick={() => setAddOpen(false)}
            >
              Add Tag
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Category Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Blog Category</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Tag
              </label>
              <Input
                defaultValue="HRMS,Recruitment,HRTech"
                className="h-10"
              />
              <p className="mt-1 text-xs text-gray-500">
                Separate tags with commas.
              </p>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Status
              </label>
              <Select defaultValue="active">
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button
              variant="white"
              className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              onClick={() => setEditOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600"
              onClick={() => setEditOpen(false)}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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

