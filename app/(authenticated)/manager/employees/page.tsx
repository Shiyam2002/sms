"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Plus, Inbox } from "lucide-react"; // Import icons

interface Employee {
  id: number;
  name: string;
  role: string;
  primarySkill: string;
  experience: number;
  dp: string; // Profile picture URL
  email: string;
  phone: string;
  location: string;
}

const employeesData: Employee[] = [
  { id: 1, name: "John Doe", role: "Frontend Developer", primarySkill: "React.js", experience: 3, dp: "https://i.pravatar.cc/150?img=1", email: "john.doe@example.com", phone: "+1 234 567 890", location: "New York, USA" },
  { id: 2, name: "Jane Smith", role: "Data Analyst", primarySkill: "SQL, Python", experience: 5, dp: "https://i.pravatar.cc/150?img=2", email: "jane.smith@example.com", phone: "+1 987 654 321", location: "San Francisco, USA" },
  { id: 3, name: "Mike Lee", role: "Backend Developer", primarySkill: "Java, Spring Boot", experience: 2, dp: "https://i.pravatar.cc/150?img=3", email: "mike.lee@example.com", phone: "+44 123 456 789", location: "London, UK" },
  { id: 4, name: "Sarah Connor", role: "DevOps Engineer", primarySkill: "AWS, Docker", experience: 4, dp: "https://i.pravatar.cc/150?img=4", email: "sarah.connor@example.com", phone: "+61 400 123 456", location: "Sydney, Australia" },
  { id: 5, name: "David Johnson", role: "Project Manager", primarySkill: "Agile, Scrum", experience: 8, dp: "https://i.pravatar.cc/150?img=5", email: "david.johnson@example.com", phone: "+1 555 123 456", location: "Los Angeles, USA" },
  { id: 6, name: "Emma Watson", role: "UX Designer", primarySkill: "Figma, Sketch", experience: 6, dp: "https://i.pravatar.cc/150?img=6", email: "emma.watson@example.com", phone: "+44 789 123 456", location: "Manchester, UK" },
  { id: 7, name: "Liam Brown", role: "Cybersecurity Engineer", primarySkill: "Ethical Hacking, Firewall", experience: 5, dp: "https://i.pravatar.cc/150?img=7", email: "liam.brown@example.com", phone: "+1 222 333 444", location: "Washington, USA" },
  { id: 8, name: "Sophia Miller", role: "Full Stack Developer", primarySkill: "Node.js, Angular", experience: 4, dp: "https://i.pravatar.cc/150?img=8", email: "sophia.miller@example.com", phone: "+91 98765 43210", location: "Bangalore, India" },
  { id: 9, name: "James Wilson", role: "AI Engineer", primarySkill: "TensorFlow, PyTorch", experience: 7, dp: "https://i.pravatar.cc/150?img=9", email: "james.wilson@example.com", phone: "+33 987 654 321", location: "Paris, France" },
  { id: 10, name: "Olivia Martin", role: "Cloud Architect", primarySkill: "Azure, Kubernetes", experience: 9, dp: "https://i.pravatar.cc/150?img=10", email: "olivia.martin@example.com", phone: "+61 987 654 321", location: "Melbourne, Australia" },
];

const newJoinRequests: Employee[] = [
  { id: 11, name: "Alex Carter", role: "Cloud Engineer", primarySkill: "AWS, Kubernetes", experience: 2, dp: "https://i.pravatar.cc/150?img=11", email: "alex.carter@example.com", phone: "+1 555 678 999", location: "Seattle, USA" }
];

export default function EmployeeList() {
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "experience">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);
  const [isRequestListOpen, setIsRequestListOpen] = useState(false);

  const filteredEmployees = employeesData
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
    });

  const handleEmployeeCardClick = (empId: number) => {
    setSelectedEmployee(selectedEmployee === empId ? null : empId);
  };

  return (
    <div className="p-6 w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Employees</CardTitle>
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
                      <h3 className="text-lg font-semibold">{emp.name}</h3>
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
              <h2 className="text-2xl font-semibold text-gray-800">Add Employee</h2>
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
