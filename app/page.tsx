"use client";
import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-6 pt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-full max-w-5xl h-[600px] shadow-2xl bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl overflow-hidden flex "
      >
        {/* Left Side - Illustration */}
        <div className="w-1/2 hidden lg:flex flex-col items-center justify-center p-10 bg-gradient-to-r from-[#05387D] to-[#042b63] text-white">
        <div className="bg-white p-3 rounded-lg">
            <Image src="/Synergech.png" alt="Logo" width={180} height={60} />
          </div>
          <h1 className="text-4xl font-bold mt-6 text-center">Welcome Aboard!</h1>
          <p className="text-lg text-gray-200 text-center mt-4">Log in to manage your skills efficiently.</p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-semibold text-[#05387D] mb-4">Login</h2>
          <LoginForm />
        </div>
      </motion.div>
    </main>
  );
}
