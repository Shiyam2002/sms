import { SignUpForm } from "@/components/signup-form"
import Link from "next/link"

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
      <SignUpForm />
      <p className="mt-4">
        Already have an account?{" "}
        <Link href="/" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </main>
  )
}

