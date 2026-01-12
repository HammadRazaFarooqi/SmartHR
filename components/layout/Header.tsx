'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Search,
  LayoutGrid,
  Settings,
  Maximize,
  Grid3x3,
  MessageCircle,
  Bell,
  Mail,
  ChevronRight,
  Shield,
  HeartHandshake,
  GitBranch,
  Building,
  UserCheck,
  Activity,
  Menu,
  X
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/img/logo.svg" 
              alt="Logo" 
              width={120} 
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Header Right Section */}
        <div className="hidden md:flex items-center flex-1 justify-end gap-2 ml-4">
          {/* Toggle Button */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Search */}
          <div className="flex items-center border border-gray-300 rounded-md bg-white">
            <div className="flex items-center px-3 py-2">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input 
              type="text" 
              className="border-0 outline-none px-2 py-2 text-sm w-48 focus:ring-0"
              placeholder="Search in HRMS"
            />
            <div className="flex items-center px-2 border-l border-gray-300">
              <kbd className="px-1.5 py-0.5 text-xs font-semibold text-gray-500 bg-gray-50 border border-gray-200 rounded">CTRL + /</kbd>
            </div>
          </div>

          {/* CRM Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-96 p-0">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h4 className="font-semibold">CRM</h4>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Link href="#" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-gray-600" />
                          <span>Contacts</span>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      <Link href="#" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <HeartHandshake className="h-4 w-4 mr-2 text-gray-600" />
                          <span>Deals</span>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      <Link href="#" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <GitBranch className="h-4 w-4 mr-2 text-gray-600" />
                          <span>Pipeline</span>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="space-y-3">
                      <Link href="#" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2 text-gray-600" />
                          <span>Companies</span>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      <Link href="#" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <UserCheck className="h-4 w-4 mr-2 text-gray-600" />
                          <span>Leads</span>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                      <Link href="#" className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center">
                          <Activity className="h-4 w-4 mr-2 text-gray-600" />
                          <span>Activities</span>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Settings className="h-4 w-4" />
          </Button>

          {/* Fullscreen */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Maximize className="h-4 w-4" />
          </Button>

          {/* Applications Grid */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Grid3x3 className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-0">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h4 className="font-semibold">Applications</h4>
                </div>
                <div className="p-4 space-y-2">
                  <Link href="#" className="flex items-center p-2 hover:bg-gray-50 rounded">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                      <Activity className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm">Calendar</span>
                  </Link>
                  <Link href="#" className="flex items-center p-2 hover:bg-gray-50 rounded">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                      <Activity className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm">To Do</span>
                  </Link>
                  <Link href="#" className="flex items-center p-2 hover:bg-gray-50 rounded">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                      <Activity className="h-4 w-4 text-gray-600" />
                    </div>
                    <span className="text-sm">Notes</span>
                  </Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Chat */}
          <Button variant="ghost" size="icon" className="h-9 w-9 relative">
            <MessageCircle className="h-4 w-4" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-blue-500 text-white text-[10px] rounded-full flex items-center justify-center">5</span>
          </Button>

          {/* Email */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Mail className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-0">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h4 className="font-semibold">Notifications (2)</h4>
                  <div className="flex items-center gap-2">
                    <button className="text-blue-600 text-sm">Mark all as read</button>
                  </div>
                </div>
                <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                  <div className="flex gap-3 pb-3 border-b">
                    <Image 
                      src="/assets/img/profiles/avatar-27.jpg" 
                      alt="avatar" 
                      width={48} 
                      height={48} 
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-sm"><span className="font-semibold">Shawn</span> performance in Math is below the threshold.</p>
                      <span className="text-xs text-gray-500">Just Now</span>
                    </div>
                  </div>
                  <div className="flex gap-3 pb-3 border-b">
                    <Image 
                      src="/assets/img/profiles/avatar-23.jpg" 
                      alt="avatar" 
                      width={48} 
                      height={48} 
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-sm"><span className="font-semibold">Sylvia</span> added appointment on 02:00 PM</p>
                      <span className="text-xs text-gray-500">10 mins ago</span>
                      <div className="flex gap-2 mt-2">
                        <Button variant="outline" size="sm" className="h-7 text-xs">Deny</Button>
                        <Button variant="primary" size="sm" className="h-7 text-xs">Approve</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t border-gray-200 flex gap-2">
                  <Button variant="outline" className="flex-1">Cancel</Button>
                  <Button variant="primary" className="flex-1">View All</Button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center">
                <Image 
                  src="/assets/img/profiles/avatar-12.jpg" 
                  alt="profile" 
                  width={32} 
                  height={32} 
                  className="rounded-full"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-0">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="/assets/img/profiles/avatar-12.jpg" 
                      alt="profile" 
                      width={48} 
                      height={48} 
                      className="rounded-full"
                    />
                    <div>
                      <h5 className="font-semibold">Kevin Larry</h5>
                      <p className="text-xs text-gray-500">warren@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
                    <Activity className="h-4 w-4 mr-2" />
                    My Profile
                  </Link>
                  <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                  <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
                    <Activity className="h-4 w-4 mr-2" />
                    My Account
                  </Link>
                </div>
                <div className="px-2 py-2 border-t border-gray-200">
                  <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
                    <Activity className="h-4 w-4 mr-2" />
                    Logout
                  </Link>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

