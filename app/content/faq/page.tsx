'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, ChevronsUp, Edit3, Trash2 } from 'lucide-react'
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

const faqs = [
  {
    question: 'What is SmartHR?',
    answer:
      'SmartHR is a comprehensive HR management system designed to streamline employee data, payroll, attendance, and performance tracking.',
  },
  {
    question: 'Can I customize workflows?',
    answer:
      'Yes, SmartHR allows you to configure approval workflows, notifications, and role-based permissions to match your organization structure.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is stored with enterprise-grade encryption and access control, ensuring compliance with major data protection standards.',
  },
]

export default function FAQPage() {
  const [cardCollapsed, setCardCollapsed] = useState(false)
  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  
  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-1 text-2xl font-semibold">FAQ&apos;S</h2>
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
                <span className="text-gray-900">FAQ&apos;S</span>
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
            Add Question
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
        <CardHeader className="border-b border-gray-200 px-4 py-3">
          <h5 className="text-base font-semibold">FAQ&apos;S List</h5>
        </CardHeader>
        <CardContent className="divide-y divide-gray-200 p-0">
          {faqs.map((faq, index) => (
            <div key={index} className="px-4 py-3 flex items-start justify-between">
              <div className="flex-1">
                <h6 className="mb-1 text-sm font-semibold text-gray-900">
                  {faq.question}
                </h6>
                <p className="text-sm text-gray-700">{faq.answer}</p>
              </div>
              <div className="ml-4 flex items-center gap-2 text-gray-500">
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
          ))}
        </CardContent>
      </Card>
      )}

      {/* Add FAQ Modal */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add FAQ</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-900">Category</label>
              <Input id="category" placeholder="Enter Category" />
            </div>
            <div className="space-y-2">
              <label htmlFor="question" className="block text-sm font-medium text-gray-900">Questions</label>
              <Input id="question" placeholder="Enter Question" />
            </div>
            <div className="space-y-2">
              <label htmlFor="answer" className="block text-sm font-medium text-gray-900">Answer</label>
              <Textarea id="answer" rows={3} placeholder="Enter Answer" />
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
              Add FAQ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit FAQ Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit FAQ</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="edit-category" className="block text-sm font-medium text-gray-900">Category</label>
              <Input id="edit-category" defaultValue="General" />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-question" className="block text-sm font-medium text-gray-900">Questions</label>
              <Input id="edit-question" defaultValue="What is SmartHR?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-answer" className="block text-sm font-medium text-gray-900">Answer</label>
              <Textarea 
                id="edit-answer" 
                rows={3} 
                defaultValue="SmartHR is a comprehensive HR management system designed to streamline employee data, payroll, attendance, and performance tracking." 
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


