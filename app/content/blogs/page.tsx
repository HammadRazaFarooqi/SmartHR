'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Calendar, ChevronsUp, Edit3, Trash2, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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

const blogs = [
  {
    id: 1,
    image: '/assets/img/blogs/blog-01.jpg',
    category: 'Evlovution',
    status: 'Active',
    date: '05 Oct 2024',
    author: 'Gertrude Bowie',
    authorAvatar: '/assets/img/users/user-02.jpg',
    title: 'The Evolution of HRMS: Manual to Digital',
    likes: 3000,
    comments: 454,
    shares: 102,
    reviews: 350,
  },
  {
    id: 2,
    image: '/assets/img/blogs/blog-02.jpg',
    category: 'Guide',
    status: 'Active',
    date: '05 Oct 2024',
    author: 'Edward Marcus',
    authorAvatar: '/assets/img/users/user-03.jpg',
    title: 'HRMS Implementation: Step-by-Step Guide',
    likes: 2458,
    comments: 524,
    shares: 248,
    reviews: 450,
  },
  {
    id: 3,
    image: '/assets/img/blogs/blog-03.jpg',
    category: 'Security',
    status: 'Active',
    date: '05 Oct 2024',
    author: 'Mark Phillips',
    authorAvatar: '/assets/img/users/user-05.jpg',
    title: 'Data Security in HRMS: What Matters',
    likes: 3000,
    comments: 454,
    shares: 102,
    reviews: 350,
  },
  {
    id: 4,
    image: '/assets/img/blogs/blog-04.jpg',
    category: 'Recruitment',
    status: 'Active',
    date: '05 Oct 2024',
    author: 'Nidia Hale',
    authorAvatar: '/assets/img/users/user-04.jpg',
    title: 'Improving Recruitment with HRMS',
    likes: 2458,
    comments: 524,
    shares: 248,
    reviews: 450,
  },
]

export default function BlogsPage() {
  const [addOpen, setAddOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [cardCollapsed, setCardCollapsed] = useState(false)

  return (
    <>
      {/* Breadcrumb */}
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-1 text-2xl font-semibold">Blogs</h2>
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
                <span className="text-gray-900">Blogs</span>
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
            Add Blog
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 border border-gray-200 bg-white hover:bg-gray-50"
          >
            <ChevronsUp className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="mb-4">
        <CardContent className="p-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h5 className="text-base font-semibold">Blogs</h5>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  className="h-9 rounded-md border border-gray-300 pl-3 pr-9 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
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
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map(blog => (
          <Card key={blog.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative mb-3 w-full">
                <Link href="/content/blogs/categories" className="block">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={200}
                    className="h-[200px] w-full rounded-t object-cover"
                  />
                </Link>
                {/* Category Badge - Top Left */}
                <Link
                  href="/content/blogs/categories"
                  className="absolute left-5 top-5 inline-flex rounded bg-cyan-50 px-2 py-1 text-[10px] font-medium text-cyan-700 no-underline hover:bg-cyan-50 hover:text-cyan-700"
                >
                  {blog.category}
                </Link>
                {/* Status Badge - Top Right */}
                <span className="absolute right-5 top-5 inline-flex items-center rounded-full bg-green-500 px-2 py-1 text-[10px] font-medium text-white hover:bg-green-500 hover:text-white">
                  <span className="mr-1 h-1.5 w-1.5 rounded-full bg-white" />
                  {blog.status}
                </span>
              </div>
              <div className="px-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-600">
                    <span className="mr-2 flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {blog.date}
                    </span>
                    <a
                      href="#"
                      className="border-l border-gray-200 pl-2 text-sm font-normal text-gray-700 hover:text-blue-600"
                    >
                      <span className="mr-2 inline-flex items-center">
                        <Image
                          src={blog.authorAvatar}
                          alt={blog.author}
                          width={16}
                          height={16}
                          className="mr-2 h-4 w-4 flex-shrink-0 rounded-full"
                        />
                        {blog.author}
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => setEditOpen(true)}
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      className="text-gray-600 hover:text-red-600"
                      onClick={() => setDeleteOpen(true)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="mb-3 border-b border-gray-200 pb-3">
                  <h5 className="mb-0 text-base font-medium text-gray-900">
                    <Link
                      href="/content/blogs/categories"
                      className="line-clamp-2 hover:text-blue-600"
                    >
                      {blog.title}
                    </Link>
                  </h5>
                </div>
                <div className="mb-4 flex items-center justify-between text-center">
                  <div className="mr-3">
                    <h6 className="mb-0 text-sm font-medium text-gray-900">
                      {blog.likes}
                    </h6>
                    <span className="text-xs font-normal text-gray-600">Likes</span>
                  </div>
                  <div className="mr-3 border-l border-gray-200 pl-3">
                    <h6 className="mb-0 text-sm font-medium text-gray-900">
                      {blog.comments}
                    </h6>
                    <span className="text-xs font-normal text-gray-600">Comments</span>
                  </div>
                  <div className="mr-3 border-l border-gray-200 pl-3">
                    <h6 className="mb-0 text-sm font-medium text-gray-900">
                      {blog.shares}
                    </h6>
                    <span className="text-xs font-normal text-gray-600">Share</span>
                  </div>
                  <div className="border-l border-gray-200 pl-3">
                    <h6 className="mb-0 text-sm font-medium text-gray-900">
                      {blog.reviews}
                    </h6>
                    <span className="text-xs font-normal text-gray-600">Reviews</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Blog Modal */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Add Blog</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded bg-gray-50 p-3">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border border-dashed border-gray-300 bg-white text-gray-500">
                <span className="text-xs">Featured Image</span>
              </div>
              <div>
                <h6 className="mb-1 text-sm font-medium">Featured Image</h6>
                <p className="mb-2 text-xs text-gray-500">Image should be below 4 mb</p>
                <div className="flex items-center gap-2">
                  <Button className="h-8 bg-blue-600 text-xs text-white hover:bg-blue-700">
                    Upload
                  </Button>
                  <Button
                    variant="light"
                    className="h-8 border border-gray-300 bg-white text-xs text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Blog Title <span className="text-red-500">*</span>
              </label>
              <Input className="h-10" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Category <span className="text-red-500">*</span>
                </label>
                <Select defaultValue="select">
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="select">Select</SelectItem>
                    <SelectItem value="evolution">Evlovution</SelectItem>
                    <SelectItem value="guide">Guide</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Tags <span className="text-red-500">*</span>
                </label>
                <Input
                  className="h-10"
                  placeholder="HRMS,Recruitment"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Description
              </label>
              <div className="rounded border border-gray-200 p-3 text-sm text-gray-600">
                Write a new comment, send your team notification by typing @ followed by
                their name
              </div>
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
              Add Blog
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Blog Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Blog</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 rounded bg-gray-50 p-3">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border border-dashed border-gray-300 bg-white">
                <Image
                  src="/assets/img/blogs/blog-07.jpg"
                  alt="Featured"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="mb-1 text-sm font-medium">Featured Image</h6>
                <p className="mb-2 text-xs text-gray-500">Image should be below 4 mb</p>
                <div className="flex items-center gap-2">
                  <Button className="h-8 bg-blue-600 text-xs text-white hover:bg-blue-700">
                    Upload
                  </Button>
                  <Button
                    variant="light"
                    className="h-8 border border-gray-300 bg-white text-xs text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Blog Title <span className="text-red-500">*</span>
              </label>
              <Input
                defaultValue="The Evolution of HRMS: Manual to Digital"
                className="h-10"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Category <span className="text-red-500">*</span>
                </label>
                <Select defaultValue="evolution">
                  <SelectTrigger className="h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="select">Select</SelectItem>
                    <SelectItem value="evolution">Evlovution</SelectItem>
                    <SelectItem value="guide">Guide</SelectItem>
                    <SelectItem value="security">Security</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                  Tags <span className="text-red-500">*</span>
                </label>
                <Input
                  defaultValue="HRMS,Recruitment"
                  className="h-10"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900">
                Description
              </label>
              <Textarea
                rows={3}
                defaultValue="Write a new comment, send your team notification by typing @ followed by their name"
              />
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

