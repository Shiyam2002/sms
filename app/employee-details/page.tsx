"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmployeeDetailsForm() {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    jobTitle: "",
    department: "",
    experience: "",
    skills: "",
    joiningDate: "",
    salary: "",
    employeeID: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Employee details submitted:", employeeData);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#05387D] py-4 px-8 shadow-md fixed top-0 left-0 flex items-center z-10">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-white p-3 rounded-lg shadow-md">
            <Image src="/Synergech.png" alt="Logo" width={180} height={50} />
          </div>
        </div>
      </nav>

      {/* <Image src="/skill.jpg" alt="Logo" width="200" height="200"></Image> */}

      {/* Employee Details Form */}
      <div className="min-h-screen flex items-center justify-end bg-gray-100 px-8 pt-24">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
          {/* Back Button */}
          <button onClick={() => router.back()} className="text-black flex items-center mb-4">
            <ArrowLeft size={24} className="mr-2" /> Back
          </button>

          <h1 className="text-2xl font-semibold text-center text-[#05387D] mb-6">
            Employee Details Form
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">First Name</label>
                  <input type="text" name="firstName" className="input-field" value={employeeData.firstName} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-gray-600">Last Name</label>
                  <input type="text" name="lastName" className="input-field" value={employeeData.lastName} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-gray-600">Email</label>
                  <input type="email" name="email" className="input-field" value={employeeData.email} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-gray-600">Phone</label>
                  <input type="tel" name="phone" className="input-field" value={employeeData.phone} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-gray-600">Date of Birth</label>
                  <input type="date" name="dob" className="input-field" value={employeeData.dob} onChange={handleChange} required />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-600">Address</label>
                  <textarea name="address" className="input-field h-20" value={employeeData.address} onChange={handleChange} required />
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Job Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">Job Title</label>
                  <input type="text" name="jobTitle" className="input-field" value={employeeData.jobTitle} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-gray-600">Department</label>
                  <input type="text" name="department" className="input-field" value={employeeData.department} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-gray-600">Experience (Years)</label>
                  <input type="number" name="experience" className="input-field" value={employeeData.experience} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-gray-600">Skills</label>
                  <input type="text" name="skills" className="input-field" placeholder="Comma separated" value={employeeData.skills} onChange={handleChange} required />
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Additional Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600">Joining Date</label>
                  <input type="date" name="joiningDate" className="input-field" value={employeeData.joiningDate} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-gray-600">Salary</label>
                  <input type="number" name="salary" className="input-field" value={employeeData.salary} onChange={handleChange} required />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-600">Employee ID</label>
                  <input type="text" name="employeeID" className="input-field" value={employeeData.employeeID} onChange={handleChange} required />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-[#05387D] text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Tailwind Styles */}
      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          outline: none;
          transition: 0.3s;
        }
        .input-field:focus {
          border-color: #05387D;
          box-shadow: 0 0 5px rgba(5, 56, 125, 0.3);
        }
      `}</style>
    </>
  );
}
