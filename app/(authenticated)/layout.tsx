import type React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SidebarProvider>{children}</SidebarProvider>
}

