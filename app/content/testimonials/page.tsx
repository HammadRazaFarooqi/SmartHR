'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, ChevronsUp, Edit3, Trash2, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
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

const testimonials = [
  {
    name: 'Robert Martin',
    role: 'HR Manager',
    company: 'TechSoft',
    message:
      'SmartHR has transformed the way we manage employee data and payroll. The automation features saved us countless hours every month.',
    avatar: '/assets/img/users/user-01.jpg',
  },
  {
    name: 'Angela Lee',
    role: 'People Operations',
    company: 'FinCorp',
    message:
      'The intuitive interface and powerful reporting tools helped us gain better visibility into our HR operations.',
    avatar: '/assets/img/users/user-02.jpg',
  },
]

export default function TestimonialsPage() {
  const [cardCollapsed, setCardCollapsed] = useState(false)
  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  
  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-1 text-2xl font-semibold">Testimonials</h2>
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
                <span className="text-gray-900">Testimonials</span>
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
            Add Testimonial
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
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map(testimonial => (
          <Card key={testimonial.name}>
            <CardContent className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="mr-3 h-10 w-10 rounded-full"
                  />
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
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
              </div>
              <p className="text-sm text-gray-700">{testimonial.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      )}

      {/* Add Testimonial Modal */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Testimonial</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded bg-gray-50 p-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-gray-300 bg-white text-gray-400">
                <ImageIcon className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h6 className="mb-1 text-sm font-semibold">Profile Image</h6>
                <p className="text-xs text-gray-500">Image should be below 4 mb</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button variant="primary" size="sm">
                    Upload
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="author" className="block text-sm font-medium text-gray-900">
                Author <span className="text-red-500">*</span>
              </label>
              <Input id="author" placeholder="Enter Author Name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="role" className="block text-sm font-medium text-gray-900">Select Role</label>
              <Select>
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr-manager">HR Manager</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-medium text-gray-900">Content</label>
              <Textarea id="content" rows={3} placeholder="Enter testimonial content" />
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
              Add Testimonial
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Testimonial Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Testimonial</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded bg-gray-50 p-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-gray-300 bg-white text-gray-400">
                <ImageIcon className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h6 className="mb-1 text-sm font-semibold">Profile Image</h6>
                <p className="text-xs text-gray-500">Image should be below 4 mb</p>
                <div className="mt-2 flex items-center gap-2">
                  <Button variant="primary" size="sm">
                    Upload
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-author" className="block text-sm font-medium text-gray-900">
                Author <span className="text-red-500">*</span>
              </label>
              <Input id="edit-author" defaultValue="Robert Martin" />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-role" className="block text-sm font-medium text-gray-900">Select Role</label>
              <Select defaultValue="hr-manager">
                <SelectTrigger id="edit-role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr-manager">HR Manager</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-content" className="block text-sm font-medium text-gray-900">Content</label>
              <Textarea 
                id="edit-content" 
                rows={3} 
                defaultValue="SmartHR has transformed the way we manage employee data and payroll. The automation features saved us countless hours every month." 
              />
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


