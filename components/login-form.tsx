"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const defaultCredentials = {
  employee: { email: "employee@example.com", password: "employee123" },
  manager: { email: "manager@example.com", password: "manager123" },
  owner: { email: "owner@example.com", password: "owner123" },
}

// This should be imported from the same file where it's defined in SignUpForm
declare const users: { email: string; password: string; role: string }[]

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Check default credentials
    for (const [role, creds] of Object.entries(defaultCredentials)) {
      if (email === creds.email && password === creds.password) {
        router.push(`/${role}/dashboard`)
        return
      }
    }
    // Check newly created users
    const user = users.find((u) => u.email === email && u.password === password)
    if (user) {
      router.push(`/${user.role}/dashboard`)
      return
    }
    // If no match found
    toast({
      title: "Error",
      description: "Invalid credentials. Please try again.",
      variant: "destructive",
    })
  }

  const setDefaultCredentials = (role: keyof typeof defaultCredentials) => {
    setEmail(defaultCredentials[role].email)
    setPassword(defaultCredentials[role].password)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md ">
      <div className="space-y-2">
        <Label htmlFor="role" className="text-[#05387D]">Quick Login (Optional)</Label>
        <Select onValueChange={setDefaultCredentials}>
          <SelectTrigger className="border-[#05387D] text-[#05387D]">
            <SelectValue placeholder="Select a role for quick login" />
          </SelectTrigger>
          <SelectContent className="border-[#05387D] text-[#05387D]">
            <SelectItem value="employee" className="text-[#05387D]">Employee</SelectItem>
            <SelectItem value="manager" className="text-[#05387D]">Manager</SelectItem>
            <SelectItem value="owner" className="text-[#05387D]">Owner</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#05387D] font-bold text-xl">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-[#05387D] text-[#05387D] placeholder-[#05387D]/50 text-2xl "
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-[#05387D] font-bold text-xl">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border-[#05387D] text-[#05387D] placeholder-[#05387D]/50 text-2xl "
        />
      </div>
      <Button type="submit" className="w-full bg-[#05387D] text-white hover:bg-[#042b63] border-[#05387D]">
        Login
      </Button>
    </form>
  )
}
