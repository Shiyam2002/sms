"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Plus, Inbox } from "lucide-react"; // Icons

interface Employee {
  id: number;
  name: string;
  role: "Manager" | "Employee";
  primarySkill: string;
  experience: number;
  dp: string;
  email: string;
  phone: string;
  location: string;
  managerId: number | null;
}

const initialEmployees: Employee[] = [
  // Managers (managerId: null)
  { id: 1, name: "Arun Sundar", role: "Manager", primarySkill: "Leadership", experience: 10, dp: "https://i.pravatar.cc/150?img=13", email: "arun@example.com", phone: "+91 98765 43210", location: "சென்னை, இந்தியா (Chennai, India)", managerId: null },
  { id: 3, name: "Krishnan Bala", role: "Manager", primarySkill: "Project Management", experience: 8, dp: "https://i.pravatar.cc/150?img=14", email: "krishnan@example.com", phone: "+91 87654 32109", location: "மதுரை, இந்தியா (Madurai, India)", managerId: null },
  { id: 5, name: "Latha Ravi", role: "Manager", primarySkill: "Agile Coaching", experience: 12, dp: "https://i.pravatar.cc/150?img=15", email: "latha@example.com", phone: "+91 76543 21098", location: "கோயம்புத்தூர், இந்தியா (Coimbatore, India)", managerId: null },

  // Employees (linked to managers)
  { id: 2, name: "Murali Raja", role: "Employee", primarySkill: "React.js", experience: 3, dp: "https://i.pravatar.cc/150?img=16", email: "murali@example.com", phone: "+91 65432 10987", location: "Trichy, India", managerId: 1 },
  { id: 4, name: "Chandran Selvam", role: "Employee", primarySkill: "Node.js", experience: 5, dp: "https://i.pravatar.cc/150?img=17", email: "chandran@example.com", phone: "+91 54321 09876", location: "Salem, India", managerId: 3 },
  { id: 6, name: "Naresh Anand", role: "Employee", primarySkill: "Python", experience: 4, dp: "https://i.pravatar.cc/150?img=18", email: "naresh@example.com", phone: "+91 43210 98765", location: "Thanjavur, India", managerId: 5 },
  { id: 7, name: "Dharani Prabu", role: "Employee", primarySkill: "Java", experience: 6, dp: "https://i.pravatar.cc/150?img=19", email: "dharani@example.com", phone: "+91 32109 87654", location: "Vellore, India", managerId: 1 },
  { id: 8, name: "Mohan Kumar", role: "Employee", primarySkill: "DevOps", experience: 7, dp: "https://i.pravatar.cc/150?img=20", email: "mohan@example.com", phone: "+91 21098 76543", location: "Ramanathapuram, India", managerId: 3 },
  { id: 9, name: "Santhi Venkatesh", role: "Employee", primarySkill: "Cybersecurity", experience: 9, dp: "https://i.pravatar.cc/150?img=21", email: "santhi@example.com", phone: "+91 10987 65432", location: "Nagercoil, India", managerId: 5 },
  { id: 10, name: "Vignesh Arun", role: "Employee", primarySkill: "Full Stack", experience: 5, dp: "https://i.pravatar.cc/150?img=22", email: "vignesh@example.com", phone: "+91 09876 54321", location: "Thoothukudi, India", managerId: 1 },
  { id: 11, name: "Keerthana Mohan", role: "Employee", primarySkill: "Testing", experience: 4, dp: "https://i.pravatar.cc/150?img=23", email: "keerthana@example.com", phone: "+91 98765 43210", location: "Tiruppur, India", managerId: 3 },
  { id: 12, name: "Aadhi Karthik", role: "Employee", primarySkill: "Data Science", experience: 6, dp: "https://i.pravatar.cc/150?img=24", email: "aadhi@example.com", phone: "+91 87654 32109", location: "Cuddalore, India", managerId: 5 },
];



const newJoinRequests: Employee[] = [
  { id: 15, name: "Charlie Adams", role: "Manager", primarySkill: "Project Management", experience: 8, dp: "https://i.pravatar.cc/150?img=22", email: "charlie@example.com", phone: "+1 555 678 999", location: "Seattle, USA", managerId: null }
];

export default function OwnerPage() {
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "experience">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const [isRequestListOpen, setIsRequestListOpen] = useState(false);
  const [roleFilter, setRoleFilter] = useState<"All" | "Manager" | "Employee">("All");
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState<number | null>(null);


  const filteredEmployees = employees
    .filter(emp =>
      search
        .toLowerCase()
        .split(" ")
        .every(term =>
          emp.name.toLowerCase().includes(term) ||
          emp.role.toLowerCase().includes(term) ||
          emp.primarySkill.toLowerCase().includes(term) ||
          emp.experience.toString().includes(term)
        )
    )
    .sort((a, b) => {
      const factor = sortOrder === "asc" ? 1 : -1;
      return sortBy === "name"
        ? a.name.localeCompare(b.name) * factor
        : (a.experience - b.experience) * factor;
    })
    .filter(emp =>
      (roleFilter === "All" || emp.role === roleFilter) &&
      search.toLowerCase().split(" ").every(term =>
        emp.name.toLowerCase().includes(term) ||
        emp.primarySkill.toLowerCase().includes(term) ||
        emp.experience.toString().includes(term)
      )
    )
    .filter(emp =>
      (selectedManager === null || emp.managerId === selectedManager) &&  // New filter condition
      search.toLowerCase().split(" ").every(term =>
        emp.name.toLowerCase().includes(term) ||
        emp.primarySkill.toLowerCase().includes(term) ||
        emp.experience.toString().includes(term)
      )
    );

  const handleEmployeeCardClick = (empId: number) => {
    setSelectedEmployee(selectedEmployee === empId ? null : empId);
  };

  return (
    <div className="p-6 w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Employees & Managers</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Search Input */}
          <Input
            type="text"
            placeholder="🔍 Search by Name, Skill, Role, Experience..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />

          {/* Sorting Options & Add Employee / Requests */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium">Sort By:</span>
            <Button variant="outline" onClick={() => setSortBy("name")} className={sortBy === "name" ? "bg-gray-200" : ""}>
              Name
            </Button>
            <Button variant="outline" onClick={() => setSortBy("experience")} className={sortBy === "experience" ? "bg-gray-200" : ""}>
              Experience
            </Button>
            <Button variant="outline" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
              {sortOrder === "asc" ? "⬆ Ascending" : "⬇ Descending"}
            </Button>

            {/* Role Filter Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={roleFilter !== "All" ? "bg-gray-200" : ""}
              >
                {roleFilter}
              </Button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                  {["All", "Manager", "Employee"].map((role) => (
                    <div
                      key={role}
                      onClick={() => {
                        setRoleFilter(role as "Manager" | "Employee" | "All");
                        setIsDropdownOpen(false);
                      }}
                      className={`px-4 py-2 cursor-pointer ${roleFilter === role ? "bg-gray-200" : ""
                        }`}
                    >
                      {role}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <select
                className="border rounded px-1 py-2"
                value={selectedManager || ""}
                onChange={(e) => setSelectedManager(e.target.value ? Number(e.target.value) : null)}
              >
                <option value="">All Managers</option>
                {employees
                  .filter((emp) => emp.role === "Manager")
                  .map((manager) => (
                    <option key={manager.id} value={manager.id}>
                      {manager.name}
                    </option>
                  ))}
              </select>
            </div>


            {/* Add Employee Button */}
            <button onClick={() => setIsAddEmployeeOpen(true)} className="ml-auto p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              <Plus size={20} />
            </button>

            {/* View Requests Button */}
            <button onClick={() => setIsRequestListOpen(true)} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
              <Inbox size={20} />
            </button>
          </div>

          {/* Employee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEmployees.map((emp) => (
              <div key={emp.id} className="w-full">
                <Card
                  className="p-4 shadow-lg hover:shadow-xl transition cursor-pointer"
                  onClick={() => handleEmployeeCardClick(emp.id)}
                >
                  <CardContent className="flex items-center space-x-4">
                    <img src={emp.dp} alt={emp.name} className="w-16 h-16 rounded-full border" />
                    <div>
                      <h3 className="text-lg font-semibold">{emp.name} {emp.role === "Manager" && "⭐"}</h3>
                      <p className="text-sm text-gray-500">{emp.role}</p>
                      <p className="text-sm text-gray-500">🛠 {emp.primarySkill}</p>
                      <p className="text-sm text-gray-500">⏳ {emp.experience} Years</p>
                    </div>
                  </CardContent>
                </Card>
                {selectedEmployee === emp.id && (
                  <div className="w-full p-4 mt-4 bg-white shadow-lg rounded-lg">
                    <CardTitle className="text-xl font-semibold">{emp.name}</CardTitle>
                    <div className="mt-2">
                      <p><strong>Role:</strong> {emp.role}</p>
                      <p><strong>Primary Skill:</strong> {emp.primarySkill}</p>
                      <p><strong>Experience:</strong> {emp.experience} Years</p>
                      <p><strong>Email:</strong> {emp.email}</p>
                      <p><strong>Phone:</strong> {emp.phone}</p>
                      <p><strong>Location:</strong> {emp.location}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add Employee Modal */}
      {isAddEmployeeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-xl max-h-[85vh] overflow-y-auto relative">

            {/* Fixed Header */}
            <div className="sticky top-0 bg-white z-10 border-b pb-4 mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Add Employee/Manager</h2>
                <button
                  onClick={() => setIsAddEmployeeOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Employee Form */}
            <form className="space-y-6">

              {/* Employee Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Employee Number</label>
                <input
                  type="text"
                  placeholder="Enter employee number"
                  className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Two-column Layout */}
              <div className="grid grid-cols-2 gap-4">
                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Department</label>
                  <select className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:ring-blue-300">
                    <option>Select Department</option>
                    <option>HR</option>
                    <option>IT</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                  </select>
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Designation</label>
                  <input
                    type="text"
                    placeholder="Enter designation"
                    className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>

              {/* Experience & Joining Date in Two Columns */}
              <div className="grid grid-cols-2 gap-4">
                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Experience (in years)</label>
                  <input
                    type="number"
                    placeholder="Enter experience"
                    className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>

                {/* Joining Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Joining Date</label>
                  <input
                    type="date"
                    className="mt-1 block w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddEmployeeOpen(false)}
                  className="px-6 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Requests List Modal */}
      {isRequestListOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-lg shadow-xl relative">
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-2xl font-semibold text-gray-800">New Join Requests</h2>
              <button onClick={() => setIsRequestListOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <div className="mt-4">
              {newJoinRequests.length === 0 ? (
                <p className="text-gray-500 text-center">No new requests.</p>
              ) : (
                newJoinRequests.map((request) => (
                  <div key={request.id} className="p-4 border rounded-lg shadow-md mb-4 flex items-center space-x-4">
                    <img src={request.dp} alt={request.name} className="w-14 h-14 rounded-full border" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{request.name}</h3>
                      <p className="text-sm text-gray-500">{request.role} - {request.primarySkill}</p>
                      <p className="text-sm text-gray-500">⏳ {request.experience} Years</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">
                        View Details
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600">
                        Reject
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
