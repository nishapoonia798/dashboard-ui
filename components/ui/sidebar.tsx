'use client'

import {
  FileText,
  Newspaper,
  Settings,
  Link,
  NetworkIcon,
  Share2,
  Puzzle,
  CreditCard,
  Users,
  HelpCircle,
  RefreshCcw,
  MessageCircle,
  User,
  Bell,
  InfoIcon,
  ScrollText,
  CircleDollarSign,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils'

const sidebarItems = [
  {name: "Articles", icon: ScrollText, href: "#"},
  {name: "Auto Blog", icon: Settings, href: "#"},
  {name: "Internal Links", icon: NetworkIcon, href: "#"},
  {name: "Free Backlinks", icon: Share2, href: "#"},    
  {name: "Integrations", icon: Puzzle, href: "#"},
  {name: "Subscription", icon: Star, href: "#"}, 
  {name: "Affiliate Program", icon: CircleDollarSign, href: "#"},
  {name: "Help Center", icon: InfoIcon, href: "#"},
  {name: "Updates", icon: Bell, href: "#"},
  {name: "Live Chat Supoort", icon: MessageCircle, href: "#"},
  {name: "Profile", icon: User, href: "#"},
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