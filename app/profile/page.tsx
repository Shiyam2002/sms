"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function Profile() {
  const router = useRouter();

  const [user] = useState({
    name: "Shiyam",
    email: "shiyam@example.com",
    phone: "+91 98765 43210",
    address: "Chennai, India",
    profileImage: "/images.jpg",
    role: "Software Engineer",
    department: "IT",
    joiningDate: "January 10, 2022",
    employeeID: "EMP-12345",
    manager: "John Doe",
    skills: ["Java", "Spring Boot", "Next.js", "Tailwind CSS", "MySQL"],
    linkedIn: "https://www.linkedin.com/in/shiyam",
    github: "https://github.com/shiyam",
    projects: [
      { name: "Healthcare Management System", link: "#" },
      { name: "Taxi Booking App", link: "#" },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="relative bg-white shadow-lg rounded-lg w-full max-w-3xl p-6 pt-12">
        {/* Back Button (Properly Positioned) */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        {/* Profile Image and Info */}
        <div className="flex items-center space-x-6">
          <img
            src={user.profileImage}
            className="h-28 w-28 rounded-full border shadow-md object-cover"
            alt="Profile"
          />
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{user.role} - {user.department}</p>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-6 border-t pt-4 space-y-3">
          <p><strong>Employee ID:</strong> {user.employeeID}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Joining Date:</strong> {user.joiningDate}</p>
          <p><strong>Manager:</strong> {user.manager}</p>
        </div>

        {/* Skills Section */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold">Profiles</h2>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={user.linkedIn} target="_blank" className="text-blue-500 hover:underline">
              {user.linkedIn}
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href={user.github} target="_blank" className="text-blue-500 hover:underline">
              {user.github}
            </a>
          </p>
        </div>

        {/* Projects */}
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold">Projects</h2>
          <ul className="list-disc list-inside mt-2">
            {user.projects.map((project, index) => (
              <li key={index}>
                <a href={project.link} className="text-blue-500 hover:underline">
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
