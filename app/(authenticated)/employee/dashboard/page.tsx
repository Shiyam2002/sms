import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function EmployeeDashboard() {
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

      {/* Performance & Progress */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">Overall Progress</p>
            <Progress value={75} className="h-3" />
            <p className="text-xs text-gray-500 mt-1">75% completion</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold">JavaScript Advanced Test</p>
            <p className="text-sm text-gray-600">Scheduled on: <span className="font-semibold">Feb 20, 2025</span></p>
            <Badge className="mt-2 bg-yellow-400 text-black">Pending</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Activity & Notifications */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>✅ Completed React.js Training</li>
              <li>📝 Submitted TypeScript Assessment</li>
              <li>📢 Enrolled in Azure Cloud Workshop</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2">
              <li>⚡ Your AWS Certification expires soon</li>
              <li>📅 Upcoming skill assessment in 5 days</li>
              <li>🎓 New training recommendations available</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
