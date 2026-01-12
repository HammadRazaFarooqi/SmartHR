'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Home, 
  ArrowLeft,
  Circle,
  Calendar,
  MessageCircle,
  ArrowUpRight,
  Download,
  ChevronsUp,
  FileDown,
  Plus
} from 'lucide-react'

export default function TicketDetailsPage() {
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
                <div className="flex items-center mb-2">
                  <Link href="/tickets" className="mr-2">
                    <ArrowLeft className="h-5 w-5 text-gray-600" />
                  </Link>
                  <h2 className="text-2xl font-semibold">Ticket Details</h2>
                </div>
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
                      <span className="text-gray-900">Ticket Details</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="flex items-center gap-2">
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
                <Button className="h-9 bg-orange-500 hover:bg-orange-600 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Ticket
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <ChevronsUp className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8 xl:col-span-9">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-3 px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <h5 className="text-base font-medium text-blue-600">IT Support</h5>
                      <Badge className="inline-flex items-center bg-red-600 text-white text-xs px-2 py-1">
                        <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                        High
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm text-gray-600">Mark as Private</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div>
                      <div className="flex items-center justify-between flex-wrap border-b border-gray-200 mb-3 pb-3">
                        <div className="flex items-center flex-wrap">
                          <div className="mb-3">
                            <Badge className="rounded-full mb-2 bg-cyan-50 text-cyan-800 text-xs px-2 py-1">Tic - 001</Badge>
                            <div className="flex items-center mb-2">
                              <h5 className="font-semibold mr-2 text-base">Laptop Issue</h5>
                              <Badge className="ml-1 bg-pink-50 text-pink-700 border border-pink-200 inline-flex items-center text-xs px-2 py-1">
                                <Circle className="h-2.5 w-2.5 mr-1 fill-current" />
                                Open
                              </Badge>
                            </div>
                            <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
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
                                <MessageCircle className="h-4 w-4 mr-1" />
                                9 Comments
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                            Post a Reply
                          </Button>
                        </div>
                      </div>

                      {/* Ticket Description */}
                      <div className="border-b border-gray-200 mb-3 pb-3">
                        <div>
                          <p className="mb-3 text-gray-700">
                            For the past week, my laptop has been experiencing intermittent freezing issues. The freezes occur randomly, approximately 3-4 times a day, and last about 30-60 seconds each time. During these freezes, the cursor becomes unresponsive, and I am unable to click on anything or use keyboard shortcuts. The issue usually resolves itself, but it significantly disrupts my work.
                          </p>
                          <ul className="list-disc ml-6 mb-3 pb-3 border-b border-gray-200 space-y-3">
                            <li className="text-gray-700">
                              I first noticed the problem on February 1, 2024, while using Google Meet for a video conference. Since then, the issue has occurred during various tasks, including browsing with Chrome, using Microsoft Office applications, and even when the laptop is idle.
                            </li>
                            <li className="text-gray-700">
                              Error messages: No specific error messages have appeared, but the Task Manager (when accessible) shows a spike in CPU usage to 100% during these freezes.
                            </li>
                          </ul>
                        </div>

                        {/* Comment 1 */}
                        <div className="mt-4">
                          <div className="flex items-center mb-3">
                            <Image 
                              src="/assets/img/users/user-09.jpg" 
                              alt="avatar" 
                              width={48} 
                              height={48} 
                              className="rounded-full mr-2 flex-shrink-0"
                            />
                            <div>
                              <h6 className="font-medium mb-1">James Hendriques</h6>
                              <p className="text-sm text-gray-600 flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Updated 5 hours ago
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="mb-3">
                              <p className="text-gray-700">This issue disrupts meetings, delays task completion, and affects my overall productivity.</p>
                            </div>
                            <Badge className="bg-gray-100 text-gray-700 font-normal border-0 text-xs px-2 py-1">
                              Screenshot.png
                              <Download className="h-3 w-3 ml-1 inline" />
                            </Badge>
                            <div className="flex items-center mt-3">
                              <a href="#" className="inline-flex items-center text-blue-600 font-medium mr-3 hover:underline">
                                <ArrowUpRight className="h-4 w-4 mr-1" />
                                Reply
                              </a>
                              <p>
                                <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  1 Comments
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Comment 2 */}
                      <div className="border-b border-gray-200 mb-3 pb-3">
                        <div>
                          <div className="flex items-center mb-3">
                            <Image 
                              src="/assets/img/users/user-02.jpg" 
                              alt="avatar" 
                              width={48} 
                              height={48} 
                              className="rounded-full mr-2 flex-shrink-0"
                            />
                            <div>
                              <h6 className="mb-1">Marilyn Siegle</h6>
                              <p className="text-sm text-gray-600 flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Updated 6 hours ago
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="mb-3">
                              <p className="text-gray-700">Check the System and Application logs in the Event Viewer for warnings or errors that coincide with the times the freezes occur.</p>
                            </div>
                            <div className="flex items-center flex-wrap gap-2 mb-3">
                              <Badge className="bg-gray-100 text-gray-700 font-normal border-0 text-xs px-2 py-1">
                                Screenshot.png
                                <Download className="h-3 w-3 ml-1 inline" />
                              </Badge>
                              <Badge className="bg-gray-100 text-gray-700 font-normal border-0 text-xs px-2 py-1">
                                Screenshot.png
                                <Download className="h-3 w-3 ml-1 inline" />
                              </Badge>
                              <Badge className="bg-gray-100 text-gray-700 font-normal border-0 text-xs px-2 py-1">
                                Screenshot.png
                                <Download className="h-3 w-3 ml-1 inline" />
                              </Badge>
                              <Badge className="bg-gray-100 text-gray-700 font-normal border-0 text-xs px-2 py-1">
                                Screenshot.png
                                <Download className="h-3 w-3 ml-1 inline" />
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              <a href="#" className="inline-flex items-center text-blue-600 font-medium mr-3 hover:underline">
                                <ArrowUpRight className="h-4 w-4 mr-1" />
                                Reply
                              </a>
                              <p>
                                <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  1 Comments
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Comment 3 */}
                      <div>
                        <div>
                          <div className="flex items-center mb-3">
                            <Image 
                              src="/assets/img/profiles/avatar-22.jpg" 
                              alt="avatar" 
                              width={48} 
                              height={48} 
                              className="rounded-full mr-2 flex-shrink-0"
                            />
                            <div>
                              <h6 className="mb-1">Marilyn Siegle</h6>
                              <p className="text-sm text-gray-600 flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Updated 8 hours ago
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="mb-3">
                              <p className="text-gray-700">Check for any pending updates and installing them to see if it resolves the issue</p>
                            </div>
                            <div className="flex items-center">
                              <a href="#" className="inline-flex items-center text-blue-600 font-medium mr-3 hover:underline">
                                <ArrowUpRight className="h-4 w-4 mr-1" />
                                Reply
                              </a>
                              <p>
                                <a href="#" className="flex items-center text-gray-600 hover:text-blue-600">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  1 Comments
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-4 xl:col-span-3">
                <Card>
                  <CardHeader className="p-3 border-b border-gray-200">
                    <h4 className="text-lg font-semibold">Ticket Details</h4>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="border-b border-gray-200 p-3">
                      <div className="mb-3">
                        <label className="text-sm font-medium mb-2 block">Change Priority</label>
                        <Select defaultValue="high">
                          <SelectTrigger className="h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="mb-3">
                        <label className="text-sm font-medium mb-2 block">Assign To</label>
                        <Select defaultValue="edgar">
                          <SelectTrigger className="h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="edgar">Edgar Hansel</SelectItem>
                            <SelectItem value="juan">Juan Hermann</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ticket Status</label>
                        <Select defaultValue="open">
                          <SelectTrigger className="h-10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="onhold">On Hold</SelectItem>
                            <SelectItem value="reopened">Reopened</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-center border-b border-gray-200 p-3">
                      <Image 
                        src="/assets/img/users/user-01.jpg" 
                        alt="avatar" 
                        width={40} 
                        height={40} 
                        className="rounded-full mr-2 flex-shrink-0"
                      />
                      <div>
                        <span className="text-xs text-gray-600 block">User</span>
                        <p className="text-gray-900 font-medium">Anthony Lewis</p>
                      </div>
                    </div>
                    <div className="flex items-center border-b border-gray-200 p-3">
                      <Image 
                        src="/assets/img/users/user-05.jpg" 
                        alt="avatar" 
                        width={40} 
                        height={40} 
                        className="rounded-full mr-2 flex-shrink-0"
                      />
                      <div>
                        <span className="text-xs text-gray-600 block">Support Agent</span>
                        <p className="text-gray-900 font-medium">Edgar Hansel</p>
                      </div>
                    </div>
                    <div className="border-b border-gray-200 p-3">
                      <span className="text-xs text-gray-600 block mb-1">Category</span>
                      <p className="text-gray-900">Repair &amp; Service</p>
                    </div>
                    <div className="border-b border-gray-200 p-3">
                      <span className="text-xs text-gray-600 block mb-1">Email</span>
                      <p className="text-gray-900">Hellana@example.com</p>
                    </div>
                    <div className="p-3">
                      <span className="text-xs text-gray-600 block mb-1">Last Updated / Closed On</span>
                      <p className="text-gray-900">25 May 2024</p>
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
