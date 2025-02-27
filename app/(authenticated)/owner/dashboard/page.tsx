import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaChartPie, FaChartLine, FaClock, FaStar, FaCogs, FaTools, FaComment } from "react-icons/fa";

export default function OwnerDashboard() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Owner Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Employees */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150</div>
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>

        {/* Training ROI */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Technology Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>

        {/* Strategic Skill Gaps */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Strategic Skill Gaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
      </div>

      {/* Skill-Based Insights */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Skill Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2"> JavaScript - 30%</li>
              <Progress value={30} className="my-2 bg-gray-200 [&>div]:bg-[#05387D]" />
              <li className="flex items-center gap-2"> Python - 25%</li>
              <Progress value={25} className="my-2 bg-gray-200 [&>div]:bg-[#05387D]"/>
              <li className="flex items-center gap-2"> Java - 20%</li>
              <Progress value={20} className="my-2 bg-gray-200 [&>div]:bg-[#05387D]"/>
            </ul>
          </CardContent>
        </Card>

        {/* Skill Growth & Training Effectiveness */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Growth & Training</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2"><RiArrowRightSLine /> 40% Employees Upskilled</li>
              <li className="flex items-center gap-2"><RiArrowRightSLine /> Avg. Training Time: 15 Hours</li>
              <li className="flex items-center gap-2"><RiArrowRightSLine /> 85% Training Effectiveness</li>
            </ul>
          </CardContent>
        </Card>

        {/* Skill Gaps & High-Demand Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Gaps & In-Demand Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2"><RiArrowRightSLine /> AI/ML - 5 Employees Needed</li>
              <li className="flex items-center gap-2"><RiArrowRightSLine /> Cloud Computing - 8 Employees Needed</li>
              <li className="flex items-center gap-2"><RiArrowRightSLine /> "Need more DevOps Engineers" - Project Manager</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {/* Assign Employees */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }}>
              Assign Employees to Projects
            </Button>
          </CardContent>
        </Card>

        {/* Start New Project */}
        <Card>
          <CardHeader>
            <CardTitle>Start New Project</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }}>
              Create Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
