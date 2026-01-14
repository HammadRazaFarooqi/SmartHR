'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useTransition } from 'react'
import {
  Home,
  Star,
  LayoutGrid,
  Layout,
  Users,
  Box,
  Shield,
  Building,
  HeartHandshake,
  UserCheck,
  GitBranch,
  BarChart3,
  Activity,
  Ticket,
  Calendar,
  Clock,
  School,
  Edit,
  Megaphone,
  ExternalLink,
  X,
  ChevronDown,
  ChevronRight,
  Search,
  MessageCircle,
  Bell,
  Mail,
  Grid3x3,
  FileText,
  BookOpen,
  MapPin,
  MessageSquare,
  HelpCircle
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Sidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<string[]>(['tickets'])
  
  // Auto-open menus based on current path
  useEffect(() => {
    if (pathname?.startsWith('/content/blogs')) {
      setOpenMenus(prev => prev.includes('blogs') ? prev : [...prev, 'blogs'])
    }
    if (pathname?.startsWith('/content/locations')) {
      setOpenMenus(prev => prev.includes('locations') ? prev : [...prev, 'locations'])
    }
  }, [pathname])

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => 
      prev.includes(menu) 
        ? prev.filter(m => m !== menu)
        : [...prev, menu]
    )
  }

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/')

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      {/* Menu */}
      <div className="p-3 space-y-1">
        {/* MAIN MENU */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">MAIN MENU</div>
          <div className="space-y-1">
            <div>
              <button 
                onClick={() => toggleMenu('dashboard')}
                className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  <span>Dashboard</span>
                  <Badge variant="danger" className="ml-2 text-[10px] px-1 py-0">Hot</Badge>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('dashboard') ? '' : '-rotate-90'}`} />
              </button>
              {openMenus.includes('dashboard') && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link href="#" className="block px-2 py-1.5 text-sm hover:bg-gray-50 rounded">Admin Dashboard</Link>
                  <Link href="#" className="block px-2 py-1.5 text-sm hover:bg-gray-50 rounded">Employee Dashboard</Link>
                  <Link href="#" className="block px-2 py-1.5 text-sm hover:bg-gray-50 rounded">Deals Dashboard</Link>
                  <Link href="#" className="block px-2 py-1.5 text-sm hover:bg-gray-50 rounded">Leads Dashboard</Link>
                </div>
              )}
            </div>
            <div>
              <button 
                onClick={() => toggleMenu('applications')}
                className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="flex items-center">
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  <span>Applications</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('applications') ? '' : '-rotate-90'}`} />
              </button>
            </div>
            <div>
              <button 
                onClick={() => toggleMenu('superadmin')}
                className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="flex items-center">
                  {/* <UserStar className="h-4 w-4 mr-2" /> */}
                  <span>Super Admin</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('superadmin') ? '' : '-rotate-90'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">CONTENT</div>
          <div className="space-y-1">
            <Link 
              href="/content/pages"
              prefetch={true}
              className={`flex items-center px-2 py-2 rounded text-sm ${isActive('/content/pages') ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'}`}
            >
              <FileText className="h-4 w-4 mr-2" />
              <span>Pages</span>
            </Link>
            <div>
              <button 
                onClick={() => toggleMenu('blogs')}
                className={`w-full flex items-center justify-between px-2 py-2 rounded text-sm ${
                  isActive('/content/blogs') ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Blogs</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('blogs') ? '' : '-rotate-90'}`} />
              </button>
              {openMenus.includes('blogs') && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link 
                    href="/content/blogs"
                    prefetch={true}
                    className={`block px-2 py-1.5 text-sm rounded ${
                      pathname === '/content/blogs'
                        ? 'text-orange-600 font-medium' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    All Blogs
                  </Link>
                  <Link 
                    href="/content/blogs/categories"
                    prefetch={true}
                    className={`block px-2 py-1.5 text-sm rounded ${
                      isActive('/content/blogs/categories') ? 'text-orange-600 font-medium' : 'hover:bg-gray-50'
                    }`}
                  >
                    Categories
                  </Link>
                  <Link 
                    href="/content/blogs/comments"
                    prefetch={true}
                    className={`block px-2 py-1.5 text-sm rounded ${
                      isActive('/content/blogs/comments') ? 'text-orange-600 font-medium' : 'hover:bg-gray-50'
                    }`}
                  >
                    Comments
                  </Link>
                  <Link 
                    href="/content/blogs/tags"
                    prefetch={true}
                    className={`block px-2 py-1.5 text-sm rounded ${
                      isActive('/content/blogs/tags') ? 'text-orange-600 font-medium' : 'hover:bg-gray-50'
                    }`}
                  >
                    Blog Tags
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button 
                onClick={() => toggleMenu('locations')}
                className={`w-full flex items-center justify-between px-2 py-2 rounded text-sm ${
                  isActive('/content/locations') ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Locations</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('locations') ? '' : '-rotate-90'}`} />
              </button>
              {openMenus.includes('locations') && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link 
                    href="/content/locations/countries"
                    prefetch={true}
                    className={`block px-2 py-1.5 text-sm rounded ${
                      isActive('/content/locations/countries') ? 'text-orange-600 font-medium' : 'hover:bg-gray-50'
                    }`}
                  >
                    Countries
                  </Link>
                  <Link 
                    href="/content/locations/states"
                    prefetch={true}
                    className={`block px-2 py-1.5 text-sm rounded ${
                      isActive('/content/locations/states') ? 'text-orange-600 font-medium' : 'hover:bg-gray-50'
                    }`}
                  >
                    States
                  </Link>
                  <Link 
                    href="/content/locations/cities"
                    prefetch={true}
                    className={`block px-2 py-1.5 text-sm rounded ${
                      isActive('/content/locations/cities') ? 'text-orange-600 font-medium' : 'hover:bg-gray-50'
                    }`}
                  >
                    Cities
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/content/testimonials"
              prefetch={true}
              className={`flex items-center px-2 py-2 rounded text-sm ${isActive('/content/testimonials') ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'}`}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              <span>Testimonials</span>
            </Link>
            <Link 
              href="/content/faq"
              prefetch={true}
              className={`flex items-center px-2 py-2 rounded text-sm ${isActive('/content/faq') ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'}`}
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              <span>FAQ&apos;S</span>
            </Link>
          </div>
        </div>

        {/* LAYOUT */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">LAYOUT</div>
          <div className="space-y-1">
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Horizontal</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Detached</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Modern</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Two Column</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Hovered</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Boxed</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Horizontal Single</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 bg-blue-50 text-blue-600 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Horizontal Overlay</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Horizontal Box</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Menu Aside</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Transparent</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Without Header</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>RTL</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Layout className="h-4 w-4 mr-2" />
              <span>Dark</span>
            </Link>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">PROJECTS</div>
          <div className="space-y-1">
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Users className="h-4 w-4 mr-2" />
              <span>Clients</span>
            </Link>
            <div>
              <button 
                onClick={() => toggleMenu('projects')}
                className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="flex items-center">
                  <Box className="h-4 w-4 mr-2" />
                  <span>Projects</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('projects') ? '' : '-rotate-90'}`} />
              </button>
              {openMenus.includes('projects') && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link href="#" className="block px-2 py-1.5 text-sm hover:bg-gray-50 rounded">Projects</Link>
                  <Link href="#" className="block px-2 py-1.5 text-sm hover:bg-gray-50 rounded">Tasks</Link>
                  <Link href="#" className="block px-2 py-1.5 text-sm hover:bg-gray-50 rounded">Task Board</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CRM */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">CRM</div>
          <div className="space-y-1">
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              {/* <UserShield className="h-4 w-4 mr-2" /> */}
              <span>Contacts</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Building className="h-4 w-4 mr-2" />
              <span>Companies</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <HeartHandshake className="h-4 w-4 mr-2" />
              <span>Deals</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <UserCheck className="h-4 w-4 mr-2" />
              <span>Leads</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <GitBranch className="h-4 w-4 mr-2" />
              <span>Pipeline</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              <span>Analytics</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Activity className="h-4 w-4 mr-2" />
              <span>Activities</span>
            </Link>
          </div>
        </div>

        {/* HRM */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">HRM</div>
          <div className="space-y-1">
            <div>
              <button 
                onClick={() => toggleMenu('employees')}
                className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Employees</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('employees') ? '' : '-rotate-90'}`} />
              </button>
            </div>
            <div>
              <button 
                onClick={() => toggleMenu('tickets')}
                className={`w-full flex items-center justify-between px-2 py-2 rounded text-sm ${isActive('/tickets') || isActive('/ticket-details') || isActive('/tickets-grid') ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center">
                  <Ticket className="h-4 w-4 mr-2" />
                  <span>Tickets</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('tickets') ? '' : '-rotate-90'}`} />
              </button>
              {openMenus.includes('tickets') && (
                <div className="ml-6 mt-1 space-y-1">
                  <Link 
                    href="/tickets" 
                    className={`block px-2 py-1.5 text-sm rounded ${isActive('/tickets') ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    Tickets
                  </Link>
                  <Link 
                    href="/tickets-grid" 
                    className={`block px-2 py-1.5 text-sm rounded ${isActive('/tickets-grid') ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    Tickets Grid
                  </Link>
                  <Link 
                    href="/ticket-details" 
                    className={`block px-2 py-1.5 text-sm rounded ${isActive('/ticket-details') ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    Ticket Details
                  </Link>
                </div>
              )}
            </div>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Holidays</span>
            </Link>
            <div>
              <button 
                onClick={() => toggleMenu('attendance')}
                className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Attendance</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('attendance') ? '' : '-rotate-90'}`} />
              </button>
            </div>
            <div>
              <button 
                onClick={() => toggleMenu('performance')}
                className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="flex items-center">
                  <School className="h-4 w-4 mr-2" />
                  <span>Performance</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('performance') ? '' : '-rotate-90'}`} />
              </button>
            </div>
            <div>
              <button 
                onClick={() => toggleMenu('training')}
                className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="flex items-center">
                  <Edit className="h-4 w-4 mr-2" />
                  <span>Training</span>
                </div>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenus.includes('training') ? '' : '-rotate-90'}`} />
              </button>
            </div>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <Megaphone className="h-4 w-4 mr-2" />
              <span>Promotion</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              <span>Resignation</span>
            </Link>
            <Link href="#" className="flex items-center px-2 py-2 hover:bg-gray-50 rounded text-sm">
              <X className="h-4 w-4 mr-2" />
              <span>Termination</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

