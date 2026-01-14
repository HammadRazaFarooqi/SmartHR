'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, ChevronsUp, Circle, Edit3, Trash2 } from 'lucide-react'
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
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

const pages = [
  { name: 'Employee', slug: 'employee', status: 'Active' },
  { name: 'Clients', slug: 'clients', status: 'Active' },
  { name: 'Projects', slug: 'projects', status: 'Active' },
  { name: 'Tickets', slug: 'tickets', status: 'Active' },
  { name: 'Contacts', slug: 'contacts', status: 'Active' },
  { name: 'Companies', slug: 'companies', status: 'Active' },
  { name: 'Deals', slug: 'deals', status: 'Active' },
  { name: 'Leads', slug: 'leads', status: 'Active' },
  { name: 'Pipeline', slug: 'pipeline', status: 'Active' },
  { name: 'Activities', slug: 'activities', status: 'Active' },
]

export default function ContentPagesList() {
  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [cardCollapsed, setCardCollapsed] = useState(false)

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-1 text-2xl font-semibold">Pages</h2>
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
                <span className="text-gray-900">Pages</span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            className="h-9 bg-orange-500 text-white hover:bg-orange-600 inline-flex items-center"
            onClick={() => setAddOpen(true)}
          >
            <span className="mr-2 text-lg leading-none">+</span>
            Add Page
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
        <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-3 border-b border-gray-200 px-4 py-3">
          <h5 className="text-base font-semibold">Pages List</h5>
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
                    Page
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Page Slug
                  </th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-2 text-right font-medium text-gray-600" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pages.map(page => (
                  <tr key={page.slug} className="hover:bg-gray-50">
                    <td className="px-4 py-3 align-middle">
                      <input type="checkbox" className="h-4 w-4" />
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <h6 className="text-sm font-medium text-gray-900">
                        <a href="#" className="hover:text-blue-600">
                          {page.name}
                        </a>
                      </h6>
                    </td>
                    <td className="px-4 py-3 align-middle text-gray-700">
                      {page.slug}
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <Badge className="inline-flex items-center bg-green-500 px-2 py-1 text-xs text-white">
                        <Circle className="mr-1 h-2 w-2 fill-current" />
                        {page.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 align-middle text-right">
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

      {/* Add Page Modal */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Pages</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Title
              </label>
              <Input className="h-10" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Slug
              </label>
              <Input className="h-10" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Keywords
              </label>
              <Input className="h-10" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Description
              </label>
              <Textarea rows={3} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Status
              </label>
              <Select defaultValue="select">
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select">Select</SelectItem>
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
              Add Page
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Page Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Pages</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Title
              </label>
              <Input defaultValue="Employee" className="h-10" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Slug
              </label>
              <Input defaultValue="employee" className="h-10" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Keywords
              </label>
              <Input className="h-10" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Description
              </label>
              <Textarea rows={3} />
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
                  <SelectItem value="select">Select</SelectItem>
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
          <div className="flex flex-col items-center space-y-3 text-center">
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

