"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the router

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter(); // Initialize the router

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User signed up:", formData);

    // Redirect to the employee details page
    router.push("/employee-details");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full px-4 py-2 border rounded-lg text-black"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded-lg text-black"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded-lg text-bl"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-[#05387D] text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
