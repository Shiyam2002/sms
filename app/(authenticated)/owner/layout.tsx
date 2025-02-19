import { AppSidebar } from "@/components/sidebar"
import type React from "react" // Added import for React

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <AppSidebar role="owner" />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  )
}

