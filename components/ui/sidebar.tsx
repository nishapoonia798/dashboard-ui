'use client'
import { useState } from 'react';

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
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { cn } from '@/lib/utils'

const sidebarItems = [
  {name: "Articles", icon: ScrollText, href: "#",
     subItems: [
      { name: "Create Article", href: "#article1" },
      { name: "Generated Articles", href: "#article2" },
      { name: "Keyword Projects", href: "#article3" },
      { name: "AI Keyword to Article", href: "#article4" },
      {name: "Steal Competitor Keyword", href: "#article5" },
      {name: "Import Keyword from GSC", href: "#article6" },
      {name: "Manual Keyword to Article", href: "#article7" },
      {name: "Bulk Keyword to Article", href: "#article8" },
      {name: "Longtail Keyword to Article", href: "#article9" },
      {name: "Article Settings", href: "#article10" },

    ],
  },
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
  const [expandedItem, setExpandedItem] = useState(null)

  const toggleSubItems = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName)
  }

  return (
    <div className="w-64 bg-white border-r h-screen fixed overflow-y-auto">
      <h1 className="p-4 font-bold text-lg border-b">My Dashboard</h1>
      <nav className="flex flex-col p-4 gap-2">
        {sidebarItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => item.subItems ? toggleSubItems(item.name) : null}
              className={cn(
                "flex items-center justify-between w-full p-2 text-sm rounded-md hover:bg-gray-100",
                expandedItem === item.name && "bg-gray-100"
              )}
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </div>
              {item.subItems && (
                expandedItem === item.name ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {item.subItems && expandedItem === item.name && (
              <div className="ml-6 mt-1 flex flex-col gap-1">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className="text-sm text-gray-600 hover:text-black"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}