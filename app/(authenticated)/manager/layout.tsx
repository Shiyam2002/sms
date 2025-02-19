import { AppSidebar } from "@/components/sidebar"
import type React from "react"

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <AppSidebar role="manager" />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  )
}

