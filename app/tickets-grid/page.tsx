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
  MessageSquare,
  Phone,
  Circle,
  ArrowUpRight,
  MoreVertical,
  Edit,
  Trash2,
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

const tickets = [
  { id: '001', title: 'Laptop Issue', category: 'Hardware Issues', status: 'Open', priority: 'Low', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-03.jpg' },
  { id: '002', title: 'Payment Issue', category: 'Software Issues', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-01.jpg' },
  { id: '003', title: 'Bug Report', category: 'IT Support', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-06.jpg' },
  { id: '004', title: 'Access Denied', category: 'IT Support', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-05.jpg' },
  { id: '005', title: 'Display Glitch', category: 'Hardware Issues', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-02.jpg' },
  { id: '006', title: 'Security Alert', category: 'IT Support', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-04.jpg' },
  { id: '007', title: 'Connectivity Issue', category: 'Connectivity', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-07.jpg' },
  { id: '008', title: 'Update Error', category: 'IT Support', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-08.jpg' },
  { id: '009', title: 'Login Failure', category: 'IT Support', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-09.jpg' },
  { id: '010', title: 'Server Timeout', category: 'Connectivity', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-10.jpg' },
  { id: '011', title: 'Email Client Setup', category: 'IT Support', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-11.jpg' },
  { id: '012', title: 'Application Crashing', category: 'Software Issues', status: 'Open', priority: 'High', assigned: 'Edgar Hansel', avatar: '/assets/img/profiles/avatar-12.jpg' },
]

export default function TicketsGridPage() {
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
                  <ol className="flex items-center space-x-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <Link href="/" className="flex items-center">
                        <Home className="h-4 w-4" />
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2">/</span>
                      <span>Employee</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mx-2">/</span>
                      <span className="text-gray-900">Tickets Grid</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center border bg-white rounded p-1">
                  <Link href="/tickets">
                    <Button variant="white" size="sm" className="h-8 w-8 p-0">
                      <ListTree className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="primary" size="sm" className="h-8 w-8 p-0 mr-1 bg-orange-500">
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
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
                  <h5 className="text-lg font-semibold">Ticket Grid</h5>
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

            {/* Tickets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
              {tickets.map((ticket) => (
                <Card key={ticket.id} className="relative">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <div className="relative">
                        <Link href="/ticket-details" className="w-16 h-16 rounded-full border-2 border-blue-600 p-1 flex items-center justify-center block">
                          <Image 
                            src={ticket.avatar} 
                            alt="avatar" 
                            width={56} 
                            height={56} 
                            className="rounded-full"
                          />
                        </Link>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="mb-1 font-semibold text-base">
                        <Link href="/ticket-details" className="hover:text-blue-600 text-gray-900">
                          {ticket.title}
                        </Link>
                      </h6>
                      <Badge className="rounded-full bg-cyan-50 text-cyan-800 text-xs px-2 py-1">
                        Tic - {ticket.id}
                      </Badge>
                    </div>
                    <div className="flex flex-col space-y-3 mb-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Category</span>
                        <h6 className="text-sm font-medium text-gray-900">{ticket.category}</h6>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Status</span>
                        <Badge className="bg-pink-50 text-pink-700 border border-pink-200 inline-flex items-center text-xs px-2 py-1">
                          <Circle className="h-2 w-2 mr-1 fill-current" />
                          {ticket.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Priority</span>
                        <Badge className={`inline-flex items-center text-xs px-2 py-1 ${
                          ticket.priority === 'High' 
                            ? 'bg-red-600 text-white' 
                            : ticket.priority === 'Low'
                            ? 'bg-gray-100 text-gray-700 border border-gray-300'
                            : 'bg-yellow-500 text-white'
                        }`}>
                          <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                          {ticket.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t pt-3 mt-3">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Assigned To</p>
                        <div className="flex items-center">
                          <Image 
                            src={ticket.avatar} 
                            alt="avatar" 
                            width={20} 
                            height={20} 
                            className="rounded-full mr-2"
                          />
                          <h6 className="text-sm font-normal text-gray-900">{ticket.assigned}</h6>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-blue-50 hover:bg-blue-100">
                          <MessageSquare className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 bg-gray-100 hover:bg-gray-200">
                          <Phone className="h-4 w-4 text-gray-600" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mb-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Load More
              </Button>
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

