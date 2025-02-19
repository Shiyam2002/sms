import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function ManagerDashboard() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Total Employees */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-sm text-gray-500">5 on bench</p>
          </CardContent>
        </Card>

        {/* Active Projects */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-sm text-gray-500">3 in planning</p>
          </CardContent>
        </Card>

        {/* Skill Gaps */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skill Gaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <Progress value={30} className="mt-2" />
            <p className="text-sm text-gray-500">30% employees need upskilling</p>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-sm text-gray-500">Training & project requests</p>
          </CardContent>
        </Card>
      </div>

      {/* Employee & Project Status */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Employee Status */}
        <Card>
          <CardHeader>
            <CardTitle>Employee Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>✔ 20 Active Employees</li>
              <li>🔄 3 Training in Progress</li>
              <li>🛑 2 On Bench</li>
            </ul>
          </CardContent>
        </Card>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>✔ 5 Completed Projects</li>
              <li>🔄 3 In Progress</li>
              <li>🛠 2 Pending Kickoff</li>
            </ul>
          </CardContent>
        </Card>

        {/* Training & Upskilling */}
        <Card>
          <CardHeader>
            <CardTitle>Training & Upskilling</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>📚 10 Employees Enrolled</li>
              <li>🎯 3 Courses Completed</li>
              <li>🚀 2 New Courses Assigned</li>
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
            <Button className="w-full">Assign Employees to Projects</Button>
          </CardContent>
        </Card>

        {/* Start New Project */}
        <Card>
          <CardHeader>
            <CardTitle>Start New Project</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Create Project</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
