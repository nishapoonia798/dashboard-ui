'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileText,
  Newspaper,
  Settings,
  NetworkIcon,
  Share2,
  Puzzle,
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

type SidebarProps = {
  setActiveSubPage: (page: string) => void;
};

const linkMap: Record<string, string> = {
  'Create Article': '/dashboard/create-article',
  'Generated Articles': '/dashboard/generated-articles'
};

export default function Sidebar() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleSubItems = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name)
  }

   const [activeSubPage, setActiveSubPage] = useState<string | null>(null)

    return (
    <aside className="w-64 bg-white border-r h-screen fixed overflow-y-auto pt-[90px]">
      <nav className="flex flex-col p-4 gap-2">
        {sidebarItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={() =>
                item.subItems
                  ? setExpandedItem(expandedItem === item.name ? null : item.name)
                  : undefined
              }
              className={cn(
                'flex items-center justify-between w-full p-2 text-sm rounded-md hover:bg-gray-100',
                expandedItem === item.name && 'bg-gray-100'
              )}
            >
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                {item.name}
              </div>
              {item.subItems && (
                expandedItem === item.name
                  ? <ChevronUp className="w-4 h-4" />
                  : <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {item.subItems && expandedItem === item.name && (
              <div className="ml-6 mt-1 flex flex-col gap-1">
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.name}
                    href={linkMap[sub.name] ?? '#'}
                    className="text-left text-sm text-gray-600 hover:text-black py-0.5"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}