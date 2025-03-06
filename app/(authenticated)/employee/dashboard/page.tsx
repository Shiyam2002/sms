"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RiArrowRightSLine } from "react-icons/ri";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function EmployeeDashboard() {

  const router = useRouter();

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Employee Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Proficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.5</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ongoing Trainings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Assessments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
      </div>

      {/* Skill-Based Insights */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Skill Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2"> JavaScript - 75%</li>
              <Progress value={75} className="my-2 bg-gray-200 [&>div]:bg-[#05387D]" />
              <li className="flex items-center gap-2"> Python - 60%</li>
              <Progress value={60} className="my-2 bg-gray-200 [&>div]:bg-[#05387D]" />
              <li className="flex items-center gap-2"> Java - 50%</li>
              <Progress value={50} className="my-2 bg-gray-200 [&>div]:bg-[#05387D]" />
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Gaps & In-Demand Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold flex items-center gap-2">JavaScript Advanced Test</p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              Scheduled on: <span className="font-semibold">Feb 20, 2025</span>
            </p>
            <Badge className="mt-2 bg-yellow-400 text-black">Pending</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-2">📌 You completed the "Cloud Security" training</li>
              <li className="flex items-center gap-2">⚡ Your AWS Certification expires in 10 days</li>
              <li className="flex items-center gap-2">📅 Upcoming project deadline in 3 days</li>
              <li className="flex items-center gap-2">🚀 New skill assessment assigned: "ReactJS Advanced Test"</li>
              <li className="flex items-center gap-2">📢 Manager feedback received on your latest project</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>My Skill Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }} onClick={() => router.push("/employee/dashboard/ViewSummary")}>
              View Summary
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>View Assigned Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }}>
              View Projects
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
