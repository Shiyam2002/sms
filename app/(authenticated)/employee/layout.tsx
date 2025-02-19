import { AppSidebar } from "@/components/sidebar"
import type React from "react"

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <AppSidebar role="employee" />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  )
}

