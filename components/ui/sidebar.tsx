'use client'

import {
  Home,
  FileText,
  Settings,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const sidebarItems = [
  {name: "Dashboard", icon: Home, href: "/"},
  {name: "Articles", icon: FileText, href: "#"},
  {name: "Settings", icon: Settings, href: ""#},
]

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r h-screen fixed">
      <h1 className="p-4 font-bold text-lg border-b">My Dashboard</h1>
      <nav className="flex flex-col p-4 gap-2">
        {sidebarItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 p-2 text-sm rounded-md hover:bg-gray-100"
            )}
          >
            <item.icon className="w-4 h-4 mr-2" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  )
}