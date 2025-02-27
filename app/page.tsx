"use client";
import { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#05387D] py-4 px-8 shadow-md fixed top-0 left-0 flex justify-between items-center z-10">
        <div className="flex items-center">
          <div className="bg-white p-3 rounded-lg shadow-md">
            <Image src="/Synergech.png" alt="Logo" width={180} height={50} />
          </div>
        </div>
      </nav>

      {/* Main Content with extra space on top */}
      <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 px-6 pt-24 mt-15">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-full max-w-4xl h-[600px] shadow-2xl bg-white rounded-3xl overflow-hidden flex border border-gray-200"
        >
          {/* Left Side - Login */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: showSignup ? "-100%" : "0%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="lg:w-1/2 w-full flex flex-col items-center justify-center bg-[#05387D] text-white px-12 py-10 absolute top-0 left-0 h-full"
          >
            <h1 className="text-3xl font-bold mb-6 text-center leading-tight">
              Skill Management System
            </h1>
            <div className="w-[360px] max-w-sm space-y-6">
              <h2 className="text-2xl font-semibold text-center">Login</h2>
              <LoginForm />
              <p className="text-center text-sm">
                Don't have an account?{" "}
                <button
                  className="text-yellow-300 hover:underline transition"
                  onClick={() => setShowSignup(true)}
                >
                  Sign up
                </button>
              </p>
            </div>
          </motion.div>

          {/* Right Side - Signup with dynamic background transition */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: showSignup ? "0%" : "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`lg:w-1/2 w-full flex flex-col items-center justify-center px-12 py-10 absolute top-0 right-0 h-full ${
              showSignup ? "bg-[#05387D] text-white" : "bg-white"
            }`}
          >
            <h1
              className={`text-3xl font-bold mb-6 text-center leading-tight ${
                showSignup ? "text-white" : "text-[#05387D]"
              }`}
            >
              Skill Management System
            </h1>
            <div className="w-[360px] max-w-sm space-y-6">
              <h2
                className={`text-2xl font-semibold text-center ${
                  showSignup ? "text-white" : "text-[#05387D]"
                }`}
              >
                Sign Up
              </h2>
              <SignupForm />
              <p className="text-center text-sm">
                Already have an account?{" "}
                <button
                  className={`${
                    showSignup ? "text-yellow-300" : "text-blue-600"
                  } hover:underline transition`}
                  onClick={() => setShowSignup(false)}
                >
                  Login
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
