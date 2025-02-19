"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  Home,
  BookOpen,
  ClipboardList,
  Users,
  Briefcase,
  BarChart2,
  LogOut,
  Settings,
  FileText,
} from "lucide-react"
import type React from "react"

type SidebarLinkProps = {
  href: string
  icon: React.ElementType
  children: React.ReactNode
}

function SidebarLink({ href, icon: Icon, children }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link 
          href={href} 
          className={cn(
            "flex items-center gap-3 p-3 rounded-md text-gray-700 hover:bg-gray-200 transition-all duration-200",
            isActive && "bg-blue-500 text-white font-semibold"
          )}
        >
          <Icon className="h-5 w-5" />
          <span className="text-sm">{children}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

type AppSidebarProps = {
  role: "employee" | "manager" | "owner"
}

export function AppSidebar({ role }: AppSidebarProps) {
  const links = {
    employee: [
      { href: "/employee/dashboard", icon: Home, label: "Dashboard" },
      { href: "/employee/skills", icon: BookOpen, label: "Skills" },
      { href: "/employee/assessment", icon: ClipboardList, label: "Assessment" },
    ],
    manager: [
      { href: "/manager/dashboard", icon: Home, label: "Dashboard" },
      { href: "/manager/employees", icon: Users, label: "Employees" },
      { href: "/manager/assessment", icon: ClipboardList, label: "Assessment" },
      { href: "/manager/projects", icon: Briefcase, label: "Projects" },
      { href: "/manager/approvals", icon: Settings, label: "Approvals" },
    ],
    owner: [
      { href: "/owner/dashboard", icon: Home, label: "Dashboard" },
      { href: "/owner/skills", icon: BookOpen, label: "Skills & Training" },
      { href: "/owner/projects", icon: Briefcase, label: "Projects" },
      { href: "/owner/reports", icon: BarChart2, label: "Reports" },
      { href: "/owner/resource", icon: FileText, label: "Resource" },
      { href: "/owner/management", icon: Settings, label: "Management" },
    ],
  }

  return (
    <Sidebar className="bg-white text-gray-900 w-64 h-screen fixed flex flex-col p-4 shadow-md border-r">
      {/* Sidebar Header */}
      <SidebarHeader className="border-b pb-4 mb-4" >
        <div className="flex items-center gap-2 justify-center">
          <img src="\Synergech.png"  className="h-8" />
          <h2 className="text-lg font-semibold text-white"></h2>
        </div>
      </SidebarHeader>
      {/* Sidebar Links */}
      <SidebarContent>
        <SidebarMenu className="space-y-2">
          {links[role].map((link) => (
            <SidebarLink key={link.href} href={link.href} icon={link.icon}>
              {link.label}
            </SidebarLink>
          ))}
          <SidebarLink href="/" icon={LogOut}>Logout</SidebarLink>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
