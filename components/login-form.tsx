"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";

const defaultCredentials = {
  employee: { email: "employee@example.com", password: "employee123" },
  manager: { email: "manager@example.com", password: "manager123" },
  owner: { email: "owner@example.com", password: "owner123" },
};

declare const users: { email: string; password: string; role: string }[];

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    for (const [role, creds] of Object.entries(defaultCredentials)) {
      if (email === creds.email && password === creds.password) {
        router.push(`/${role}/dashboard`);
        return;
      }
    }
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      router.push(`/${user.role}/dashboard`);
      return;
    }
    toast({
      title: "Error",
      description: "Invalid credentials. Please try again.",
      variant: "destructive",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-300"
    >
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#05387D] font-bold text-lg">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-gray-400 text-[#05387D] placeholder-gray-500"
        />
      </div>

      <div className="space-y-2 relative">
        <Label htmlFor="password" className="text-[#05387D] font-bold text-lg">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-gray-400 text-[#05387D] placeholder-gray-500 pr-10"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="text-gray-500" />
            ) : (
              <Eye className="text-gray-500" />
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded text-[#05387D]" />
          <span className="text-[#05387D]">Remember me</span>
        </label>
        <a href="#" className="text-[#05387D] hover:underline">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="w-full bg-[#05387D] text-white hover:bg-[#042b63]">
        Login
      </Button>

      <div className="text-center text-sm text-[#05387D] mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="font-bold hover:underline">
          Sign up
        </a>
      </div>
    </form>
  );
}
