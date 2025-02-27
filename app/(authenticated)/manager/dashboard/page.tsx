import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaSyncAlt, FaExclamationTriangle, FaTools } from "react-icons/fa";

export default function ManagerDashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800">Manager Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Employees */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">25</div>
            <p className="text-sm text-gray-500">5 on bench</p>
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">8</div>
            <p className="text-sm text-gray-500">3 in planning</p>
          </CardContent>
        </Card>

        {/* Skill Gaps */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Skill Gaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">3</div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-gray-300 rounded-full mt-2">
              <div className="h-3 bg-blue-600 rounded-full" style={{ width: "30%" }}></div>
            </div>

            <p className="text-sm text-gray-500 mt-2">30% employees need upskilling</p>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">5</div>
            <p className="text-sm text-gray-500">Training & project requests</p>
          </CardContent>
        </Card>
      </div>

      {/* Employee & Project Status */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Employee Status */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Employee Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600" /> <span>20 Active Employees</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaSyncAlt className="text-blue-600" /> <span>3 Training in Progress</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaExclamationTriangle className="text-orange-600" /> <span>2 On Bench</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Project Progress */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600" /> <span>5 Completed Projects</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaSyncAlt className="text-blue-600" /> <span>3 In Progress</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaTools className="text-gray-600" /> <span>2 Pending Kickoff</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Training & Upskilling */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Training & Upskilling</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <FaCheckCircle className="text-green-600" /> <span>10 Employees Enrolled</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaSyncAlt className="text-blue-600" /> <span>3 Courses Completed</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <FaTools className="text-gray-600" /> <span>2 New Courses Assigned</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Assign Employees */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full py-2 text-white font-semibold bg-blue-700 hover:bg-blue-800 transition"
            >
              Assign Employees to Projects
            </Button>
          </CardContent>
        </Card>

        {/* Start New Project */}
        <Card className="shadow-md hover:shadow-lg transition">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Start New Project</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full py-2 text-white font-semibold bg-blue-700 hover:bg-blue-800 transition"
            >
              Create Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
