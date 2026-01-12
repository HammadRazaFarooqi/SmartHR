'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Home, 
  ListTree, 
  Grid3x3, 
  FileDown, 
  Plus, 
  ChevronsUp,
  Ticket,
  FolderOpen,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MessageSquare,
  Circle,
  ArrowUpRight,
  X
} from 'lucide-react'

// Assign To Input Component with Tags
function AssignToInput() {
  const [tags, setTags] = useState<string[]>(['Vaughan Lewis'])
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault()
      setTags([...tags, inputValue.trim()])
      setInputValue('')
    }
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index))
  }

  return (
    <div className="border border-gray-300 rounded-md px-3 py-2 min-h-[40px] flex flex-wrap items-center gap-2 bg-white">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(index)}
            className="ml-1 hover:text-gray-900"
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={tags.length === 0 ? "Add new" : ""}
        className="flex-1 min-w-[120px] outline-none border-0 bg-transparent text-sm"
      />
    </div>
  )
}

export default function TicketsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="p-4 md:p-6">
            {/* Breadcrumb */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-3">
              <div>
                <h2 className="text-2xl font-semibold mb-1">Tickets</h2>
                <nav>
                  <ol className="flex items-center text-xs text-gray-600">
                    <li className="flex items-center">
                      <Link href="/" className="flex items-center">
                        <Home className="h-3 w-3" />
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-1 text-xs">/</span>
                      <span>Employee</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-1 text-xs">/</span>
                      <span className="text-gray-900">Tickets</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center border bg-white rounded p-1">
                  <Button variant="primary" size="sm" className="h-8 w-8 p-0 mr-1 bg-orange-500">
                    <ListTree className="h-4 w-4" />
                  </Button>
                  <Link href="/tickets-grid">
                    <Button variant="white" size="sm" className="h-8 w-8 p-0">
                      <Grid3x3 className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="white" className="h-9 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                      <FileDown className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="p-3">
                    <DropdownMenuItem>
                      <FileDown className="h-4 w-4 mr-1" />
                      Export as PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileDown className="h-4 w-4 mr-1" />
                      Export as Excel
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="h-9 bg-orange-500 hover:bg-orange-600 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Ticket
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Add Ticket</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-semibold mb-2 block text-gray-900">Title</label>
                        <Input placeholder="Enter Title" className="h-10" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block text-gray-900">Event Category</label>
                        <Select>
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="internet">Internet Issue</SelectItem>
                            <SelectItem value="redistribute">Redistribute</SelectItem>
                            <SelectItem value="computer">Computer</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block text-gray-900">Subject</label>
                        <Input placeholder="Enter Subject" className="h-10" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block text-gray-900">Assign To</label>
                        <AssignToInput />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block text-gray-900">Ticket Description</label>
                        <Textarea placeholder="Add Question" className="min-h-[100px]" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block text-gray-900">Priority</label>
                        <Select>
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-2 block text-gray-900">Status</label>
                        <Select>
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="closed">Closed</SelectItem>
                            <SelectItem value="reopened">Reopened</SelectItem>
                            <SelectItem value="inprogress">Inprogress</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter className="mt-6">
                      <Button variant="light" onClick={() => setIsDialogOpen(false)} className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        Cancel
                      </Button>
                      <Button onClick={() => setIsDialogOpen(false)} className="bg-orange-500 hover:bg-orange-600 text-white">
                        Add Ticket
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button variant="ghost" size="icon" className="ml-2 h-9 w-9">
                  <ChevronsUp className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {/* New Tickets */}
              <Card className="flex-1">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="flex">
                      <div className="flex-1">
                        <div className="border border-dashed border-orange-500 rounded-full inline-flex items-center justify-center p-1 mb-3">
                          <div className="h-10 w-10 rounded-full bg-[#FEF1EB] flex items-center justify-center">
                            <Ticket className="h-5 w-5 text-[#F26522]" />
                          </div>
                        </div>
                        <p className="text-xs font-medium mb-1 text-gray-600">New Tickets</p>
                        <h4 className="text-2xl font-semibold">120</h4>
                      </div>
                    </div>
                    <div className="text-right flex">
                      <div className="flex flex-col justify-between items-end ml-auto">
                        <Badge className="mb-3 bg-[#F7EEF9] text-[#AB47BC] border-0 inline-flex items-center text-xs px-2 py-1">
                          <span className="text-xs mr-1">↗</span>
                          +19.01%
                        </Badge>
                        <div className="h-[70px] w-24">
                          <Bar
                            data={{
                              labels: ['', '', '', '', '', '', '', '', '', ''],
                              datasets: [{
                                data: [8, 5, 6, 3, 4, 6, 7, 3, 8, 6],
                                backgroundColor: '#F26522',
                                borderRadius: 2,
                                maxBarThickness: 8,
                              }]
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: { display: false },
                                tooltip: { enabled: false },
                              },
                              scales: {
                                x: { 
                                  display: false, 
                                  grid: { display: false },
                                },
                                y: { display: false, grid: { display: false }, beginAtZero: true },
                              },
                              barPercentage: 0.95,
                              categoryPercentage: 0.95,
                            } as any}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Open Tickets */}
              <Card className="flex-1">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="flex">
                      <div className="flex-1">
                        <div className="border border-dashed border-purple-500 rounded-full inline-flex items-center justify-center p-1 mb-3">
                          <div className="h-10 w-10 rounded-full bg-[#F7EEF9] flex items-center justify-center">
                            <FolderOpen className="h-5 w-5 text-[#AB47BC]" />
                          </div>
                        </div>
                        <p className="text-xs font-medium mb-1 text-gray-600">Open Tickets</p>
                        <h4 className="text-2xl font-semibold">60</h4>
                      </div>
                    </div>
                    <div className="text-right flex">
                      <div className="flex flex-col justify-between items-end ml-auto">
                        <Badge className="mb-3 bg-[#E8E9EA] text-gray-700 border-0 inline-flex items-center text-xs px-2 py-1">
                          <span className="text-xs mr-1">↗</span>
                          +19.01%
                        </Badge>
                        <div className="h-[70px] w-24">
                          <Bar
                            data={{
                              labels: ['', '', '', '', '', '', '', '', '', ''],
                              datasets: [{
                                data: [8, 5, 6, 3, 4, 6, 7, 3, 8, 6],
                                backgroundColor: '#AB47BC',
                                borderRadius: 2,
                                maxBarThickness: 8,
                              }]
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: { display: false },
                                tooltip: { enabled: false },
                              },
                              scales: {
                                x: { 
                                  display: false, 
                                  grid: { display: false },
                                },
                                y: { display: false, grid: { display: false }, beginAtZero: true },
                              },
                              barPercentage: 0.95,
                              categoryPercentage: 0.95,
                            } as any}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Solved Tickets */}
              <Card className="flex-1">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="flex">
                      <div className="flex-1">
                        <div className="border border-dashed border-green-600 rounded-full inline-flex items-center justify-center p-1 mb-3">
                          <div className="h-10 w-10 rounded-full bg-[#D2F5E1] flex items-center justify-center">
                            <CheckCircle2 className="h-5 w-5 text-[#03C95A]" />
                          </div>
                        </div>
                        <p className="text-xs font-medium mb-1 text-gray-600">Solved Tickets</p>
                        <h4 className="text-2xl font-semibold">50</h4>
                      </div>
                    </div>
                    <div className="text-right flex">
                      <div className="flex flex-col justify-between items-end ml-auto">
                        <Badge className="mb-3 bg-[#D6E9FF] text-[#1B84FF] border-0 inline-flex items-center text-xs px-2 py-1">
                          <span className="text-xs mr-1">↗</span>
                          +19.01%
                        </Badge>
                        <div className="h-[70px] w-24">
                          <Bar
                            data={{
                              labels: ['', '', '', '', '', '', '', '', '', ''],
                              datasets: [{
                                data: [8, 5, 6, 3, 4, 6, 7, 3, 8, 6],
                                backgroundColor: '#03C95A',
                                borderRadius: 2,
                                maxBarThickness: 8,
                              }]
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: { display: false },
                                tooltip: { enabled: false },
                              },
                              scales: {
                                x: { 
                                  display: false, 
                                  grid: { display: false },
                                },
                                y: { display: false, grid: { display: false }, beginAtZero: true },
                              },
                              barPercentage: 0.95,
                              categoryPercentage: 0.95,
                            } as any}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pending Tickets */}
              <Card className="flex-1">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="flex">
                      <div className="flex-1">
                        <div className="border border-dashed border-blue-500 rounded-full inline-flex items-center justify-center p-1 mb-3">
                          <div className="h-10 w-10 rounded-full bg-[#D6E9FF] flex items-center justify-center">
                            <AlertCircle className="h-5 w-5 text-[#1B84FF]" />
                          </div>
                        </div>
                        <p className="text-xs font-medium mb-1 text-gray-600">Pending Tickets</p>
                        <h4 className="text-2xl font-semibold">10</h4>
                      </div>
                    </div>
                    <div className="text-right flex">
                      <div className="flex flex-col justify-between items-end ml-auto">
                        <Badge className="mb-3 bg-[#EDF2F4] text-[#3B7080] border-0 inline-flex items-center text-xs px-2 py-1">
                          <span className="text-xs mr-1">↗</span>
                          +19.01%
                        </Badge>
                        <div className="h-[70px] w-24">
                          <Bar
                            data={{
                              labels: ['', '', '', '', '', '', '', '', '', ''],
                              datasets: [{
                                data: [8, 5, 6, 3, 4, 6, 7, 3, 8, 6],
                                backgroundColor: '#0DCAF0',
                                borderRadius: 2,
                                maxBarThickness: 8,
                              }]
                            }}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false,
                              plugins: {
                                legend: { display: false },
                                tooltip: { enabled: false },
                              },
                              scales: {
                                x: { 
                                  display: false, 
                                  grid: { display: false },
                                },
                                y: { display: false, grid: { display: false }, beginAtZero: true },
                              },
                              barPercentage: 0.95,
                              categoryPercentage: 0.95,
                            } as any}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-4">
              <CardContent className="p-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <h5 className="text-lg font-semibold">Ticket List</h5>
                  <div className="flex items-center flex-wrap gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="white" size="sm" className="h-8 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                          Priority
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="p-3">
                        <DropdownMenuItem>Priority</DropdownMenuItem>
                        <DropdownMenuItem>High</DropdownMenuItem>
                        <DropdownMenuItem>Low</DropdownMenuItem>
                        <DropdownMenuItem>Medium</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="white" size="sm" className="h-8 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                          Select Status
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="p-3">
                        <DropdownMenuItem>Open</DropdownMenuItem>
                        <DropdownMenuItem>On Hold</DropdownMenuItem>
                        <DropdownMenuItem>Reopened</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="white" size="sm" className="h-8 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                          Sort By : Last 7 Days
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="p-3">
                        <DropdownMenuItem>Recently Added</DropdownMenuItem>
                        <DropdownMenuItem>Ascending</DropdownMenuItem>
                        <DropdownMenuItem>Desending</DropdownMenuItem>
                        <DropdownMenuItem>Last Month</DropdownMenuItem>
                        <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tickets List */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8 xl:col-span-9 space-y-4">
                {/* Ticket 1 */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-3 px-4 py-3 border-b border-gray-200">
                    <h5 className="text-base font-medium text-blue-600">IT Support</h5>
                    <Badge className="inline-flex items-center bg-red-600 text-white text-xs px-2 py-1">
                      <Circle className="h-2 w-2 mr-1 fill-current" />
                      High
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge className="rounded-full mb-2 bg-cyan-50 text-cyan-800 text-xs px-2 py-1">Tic - 001</Badge>
                    <div className="flex items-center mb-2">
                      <h5 className="font-semibold mr-2 text-base">
                        <Link href="/ticket-details" className="hover:underline text-gray-900">Laptop Issue</Link>
                      </h5>
                      <Badge className="ml-1 bg-pink-50 text-pink-700 border border-pink-200 inline-flex items-center text-xs px-2 py-1">
                        <Circle className="h-2 w-2 mr-1 fill-current" />
                        Open
                      </Badge>
                    </div>
                    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-0">
                      <p className="flex items-center mb-0 mr-2">
                        <Image 
                          src="/assets/img/profiles/avatar-03.jpg" 
                          alt="avatar" 
                          width={20} 
                          height={20} 
                          className="rounded-full mr-2"
                        />
                        Assigned to <span className="text-gray-900 ml-1 font-medium">Edgar Hansel</span>
                      </p>
                      <p className="flex items-center mb-0 mr-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        Updated 10 hours ago
                      </p>
                      <p className="flex items-center mb-0">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        9 Comments
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Ticket 2 */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-3 px-4 py-3 border-b border-gray-200">
                    <h5 className="text-base font-medium text-blue-600">IT Support</h5>
                    <Badge className="inline-flex items-center bg-green-600 text-white text-xs px-2 py-1">
                      <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                      Low
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge className="rounded-full mb-2 bg-cyan-50 text-cyan-800 text-xs px-2 py-1">Tic - 002</Badge>
                    <div className="flex items-center mb-2">
                      <h5 className="font-semibold mr-2 text-base">
                        <Link href="/ticket-details" className="hover:underline text-gray-900">Payment Issue</Link>
                      </h5>
                      <Badge className="ml-1 bg-yellow-50 text-yellow-700 border border-yellow-200 inline-flex items-center text-xs px-2 py-1">
                        <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                        On Hold
                      </Badge>
                    </div>
                    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-0">
                      <p className="flex items-center mb-0 mr-2">
                        <Image 
                          src="/assets/img/profiles/avatar-01.jpg" 
                          alt="avatar" 
                          width={20} 
                          height={20} 
                          className="rounded-full mr-2"
                        />
                        Assigned to <span className="text-gray-900 ml-1 font-medium">Ann Lynch</span>
                      </p>
                      <p className="flex items-center mb-0 mr-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        Updated 15 hours ago
                      </p>
                      <p className="flex items-center mb-0">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        9 Comments
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Ticket 3 */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-3 px-4 py-3 border-b border-gray-200">
                    <h5 className="text-base font-medium text-blue-600">IT Support</h5>
                    <Badge className="inline-flex items-center bg-yellow-500 text-white text-xs px-2 py-1">
                      <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                      Medium
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge className="rounded-full mb-2 bg-cyan-50 text-cyan-800 text-xs px-2 py-1">Tic - 003</Badge>
                    <div className="flex items-center mb-2">
                      <h5 className="font-semibold mr-2 text-base">
                        <Link href="/ticket-details" className="hover:underline text-gray-900">Bug Report</Link>
                      </h5>
                      <Badge className="ml-1 bg-purple-50 text-purple-700 border border-purple-200 inline-flex items-center text-xs px-2 py-1">
                        <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                        Reopened
                      </Badge>
                    </div>
                    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-0">
                      <p className="flex items-center mb-0 mr-2">
                        <Image 
                          src="/assets/img/profiles/avatar-06.jpg" 
                          alt="avatar" 
                          width={20} 
                          height={20} 
                          className="rounded-full mr-2"
                        />
                        Assigned to <span className="text-gray-900 ml-1 font-medium">Juan Hermann</span>
                      </p>
                      <p className="flex items-center mb-0 mr-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        Updated 20 hours ago
                      </p>
                      <p className="flex items-center mb-0">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        9 Comments
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Ticket 4 */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-3 px-4 py-3 border-b border-gray-200">
                    <h5 className="text-base font-medium text-blue-600">IT Support</h5>
                    <Badge className="inline-flex items-center bg-green-600 text-white text-xs px-2 py-1">
                      <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                      Low
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge className="rounded-full mb-2 bg-cyan-50 text-cyan-800 text-xs px-2 py-1">Tic - 004</Badge>
                    <div className="flex items-center mb-2">
                      <h5 className="font-semibold mr-2 text-base">
                        <Link href="/ticket-details" className="hover:underline text-gray-900">Access Denied</Link>
                      </h5>
                      <Badge className="ml-1 bg-pink-50 text-pink-700 border border-pink-200 inline-flex items-center text-xs px-2 py-1">
                        <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                        Open
                      </Badge>
                    </div>
                    <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 mb-0">
                      <p className="flex items-center mb-0 mr-2">
                        <Image 
                          src="/assets/img/profiles/avatar-05.jpg" 
                          alt="avatar" 
                          width={20} 
                          height={20} 
                          className="rounded-full mr-2"
                        />
                        Assigned to <span className="text-gray-900 ml-1 font-medium">Jessie Otero</span>
                      </p>
                      <p className="flex items-center mb-0 mr-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        Updated 23 hours ago
                      </p>
                      <p className="flex items-center mb-0">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        9 Comments
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center mb-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Load More
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-4 xl:col-span-3 space-y-4">
                {/* Ticket Categories */}
                <Card>
                  <CardHeader className="px-4 py-3 border-b border-gray-200">
                    <h4 className="text-lg font-semibold">Ticket Categories</h4>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between border-b border-gray-200 p-3">
                        <a href="#" className="text-sm hover:text-blue-600">Internet Issue</a>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs font-medium">0</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b border-gray-200 p-3">
                        <a href="#" className="text-sm hover:text-blue-600">Computer</a>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs font-medium">1</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b border-gray-200 p-3">
                        <a href="#" className="text-sm hover:text-blue-600">Redistribute</a>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs font-medium">0</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b border-gray-200 p-3">
                        <a href="#" className="text-sm hover:text-blue-600">Payment</a>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs font-medium">2</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3">
                        <a href="#" className="text-sm hover:text-blue-600">Complaint</a>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs font-medium">1</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support Agents */}
                <Card>
                  <CardHeader className="px-4 py-3 border-b border-gray-200">
                    <h4 className="text-lg font-semibold">Support Agents</h4>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between border-b border-gray-200 p-3">
                        <div className="flex items-center">
                          <Image 
                            src="/assets/img/profiles/avatar-01.jpg" 
                            alt="avatar" 
                            width={24} 
                            height={24} 
                            className="rounded-full mr-2"
                          />
                          <span className="text-sm">Edgar Hansel</span>
                        </div>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs">0</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b border-gray-200 p-3">
                        <div className="flex items-center">
                          <Image 
                            src="/assets/img/profiles/avatar-02.jpg" 
                            alt="avatar" 
                            width={24} 
                            height={24} 
                            className="rounded-full mr-2"
                          />
                          <span className="text-sm">Ann Lynch</span>
                        </div>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs">1</Badge>
                      </div>
                      <div className="flex items-center justify-between border-b border-gray-200 p-3">
                        <div className="flex items-center">
                          <Image 
                            src="/assets/img/profiles/avatar-03.jpg" 
                            alt="avatar" 
                            width={24} 
                            height={24} 
                            className="rounded-full mr-2"
                          />
                          <span className="text-sm">Juan Hermann</span>
                        </div>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs">0</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3">
                        <div className="flex items-center">
                          <Image 
                            src="/assets/img/profiles/avatar-04.jpg" 
                            alt="avatar" 
                            width={24} 
                            height={24} 
                            className="rounded-full mr-2"
                          />
                          <span className="text-sm">Jessie Otero</span>
                        </div>
                        <Badge className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-gray-900 text-white text-xs">2</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-white p-3 flex flex-col sm:flex-row items-center justify-between">
            <p className="mb-0 text-sm">2014 - 2025 &copy; SmartHR.</p>
            <p className="text-sm">
              Designed &amp; Developed By <a href="#" className="text-blue-600 hover:underline">Dreams</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
