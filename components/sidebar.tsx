"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Home,
  BookOpen,
  ClipboardList,
  Users,
  BarChart2,
  LogOut,
  Settings,
  Bell,
  User,
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

type SidebarLinkProps = {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
};

function SidebarLink({ href, icon: Icon, children }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

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
  );
}

type AppSidebarProps = {
  role: "employee" | "manager" | "owner";
  user?: {
    name?: string;
    profileImage?: string;
  };
};

export function AppSidebar({ role, user }: AppSidebarProps) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const defaultUser = {
    name: "Shiyam KS",
    profileImage: "/images.jpg",
  };

  const activeUser = user || defaultUser;

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
      { href: "/manager/approvals", icon: Settings, label: "Approvals" },
    ],
    owner: [
      { href: "/owner/dashboard", icon: Home, label: "Dashboard" },
      { href: "/owner/skills", icon: BookOpen, label: "Skills & Training" },
      { href: "/owner/reports", icon: BarChart2, label: "Reports" },
      { href: "/owner/management", icon: Settings, label: "Management" },
    ],
  };

  return (
    <>
      <Sidebar className="bg-white text-gray-900 w-64 h-screen fixed flex flex-col p-4 shadow-md border-r">
        {/* Sidebar Header */}
        <SidebarHeader className="border-b pb-4 mb-4">
          <div className="flex items-center gap-2 justify-center">
            <img src="/Synergech.png" className="h-8" alt="Logo" />
          </div>
        </SidebarHeader>

        {/* Sidebar Content */}
        <div className="flex flex-col flex-grow">
          <SidebarContent>
            <SidebarMenu className="space-y-2">
              {links[role].map((link) => (
                <SidebarLink key={link.href} href={link.href} icon={link.icon}>
                  {link.label}
                </SidebarLink>
              ))}
              <SidebarLink href="/" icon={LogOut}>
                Logout
              </SidebarLink>
            </SidebarMenu>
          </SidebarContent>
        </div>

        {/* Profile Section with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full text-left">
            <div className="flex items-center gap-3 p-3 mt-4 cursor-pointer hover:bg-gray-200 rounded-md transition-all">
              <img
                src={activeUser.profileImage || "/default-profile.jpg"}
                className="h-10 w-10 rounded-full border border-gray-300"
                alt="Profile"
              />
              <div>
                <p className="text-sm font-semibold">{activeUser.name || "Guest User"}</p>
                <p className="text-xs text-gray-500">View Profile</p>
              </div>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52 bg-white shadow-lg rounded-lg border">
            <div className="p-3 border-b">
              <p className="text-sm font-semibold">{activeUser.name || "Guest User"}</p>
              <p className="text-xs text-gray-500">{role.charAt(0).toUpperCase() + role.slice(1)}</p>
            </div>

            <DropdownMenuItem asChild>
              <Link href="/profile" className="flex items-center gap-3 p-3 hover:bg-gray-100 transition-all rounded-md">
                <User className="h-5 w-5 text-gray-700" />
                <span className="text-sm">Profile</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setIsNotificationOpen(true)} className="flex items-center gap-3 p-3 hover:bg-gray-100 transition-all rounded-md cursor-pointer">
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="text-sm">Notifications</span>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                href="/"
                className="flex items-center gap-3 p-3 text-red-600 hover:bg-red-100 rounded-md transition-all font-semibold"
              >
                <LogOut className="h-5 w-5" />
                <span className="text-sm">Logout</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Sidebar>

      {/* Notification Modal */}
      <Dialog open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
        <DialogContent className="bg-white shadow-lg rounded-lg p-6 max-w-md border" >
          <DialogHeader>
            <DialogTitle>Notifications</DialogTitle>
            <DialogDescription>
              Here are your latest notifications.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            <p className="text-sm text-gray-700">🔔 System update scheduled for tomorrow at 2 AM.</p>
            <p className="text-sm text-gray-700">🔔 New assessment assigned for your skill set.</p>
            <p className="text-sm text-gray-700">🔔 Your leave request has been approved.</p>
            <p className="text-sm text-gray-700">🔔 Reminder: Project deadline approaching in 3 days.</p>
            <p className="text-sm text-gray-700">🔔 A new training session is available for you.</p>
            <p className="text-sm text-gray-700">🔔 Performance review meeting scheduled for next week.</p>
            <p className="text-sm text-gray-700">🔔 Your profile update was successful.</p>
            <p className="text-sm text-gray-700">🔔 New company policies have been updated.</p>
          </div>
          <DialogClose asChild>
            <button className="mt-4 w-full bg-[#05387D] text-white px-4 py-2 rounded-md">Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
