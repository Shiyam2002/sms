import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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
            <CardTitle className="text-sm font-medium">Training ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
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

      {/* More Useful Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Financial Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>💰 Revenue: $500,000</li>
              <li>💸 Expenses: $350,000</li>
              <li>📈 Profit: $150,000</li>
            </ul>
          </CardContent>
        </Card>

        {/* Operational Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Operational Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>⏳ Average Project Completion Time: 8 weeks</li>
              <li>⚙️ Efficiency: 90%</li>
              <li>🛠 Upcoming Projects: 5</li>
            </ul>
          </CardContent>
        </Card>

        {/* Client Feedback & Satisfaction */}
        <Card>
          <CardHeader>
            <CardTitle>Client Feedback & Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>⭐ 4.5/5 Average Rating</li>
              <li>📊 90% Clients Satisfied</li>
              <li>💬 "Excellent service" - Client A</li>
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
