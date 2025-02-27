import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OverviewCard = ({ title, value }: { title: string; value: string | number }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const PerformanceSummary = () => (
  <Card>
    <CardHeader>
      <CardTitle>Performance Summary</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600 mb-2">Overall Progress</p>
      {/* Progress bar with custom color */}
      <div className="relative w-full h-3 bg-gray-200 rounded-full">
        <div
          className="absolute top-0 left-0 h-full rounded-full"
          style={{ width: "75%", backgroundColor: "#05387D" }} // Custom color
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-1">75% completion</p>
    </CardContent>
  </Card>
);

const UpcomingAssessment = () => (
  <Card>
    <CardHeader>
      <CardTitle>Upcoming Assessment</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-lg font-bold">JavaScript Advanced Test</p>
      <p className="text-sm text-gray-600">
        Scheduled on: <span className="font-semibold">Feb 20, 2025</span>
      </p>
      <Badge className="mt-2 bg-yellow-400 text-black">Pending</Badge>
    </CardContent>
  </Card>
);

const RecentActivities = () => (
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
);

const Notifications = () => (
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
);

export default function EmployeeDashboard() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Employee Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard title="Total Skills" value={15} />
        <OverviewCard title="Average Proficiency" value={7.5} />
        <OverviewCard title="Ongoing Trainings" value={3} />
        <OverviewCard title="Pending Assessments" value={2} />
      </div>

      {/* Performance & Progress */}
      <div className="grid gap-4 md:grid-cols-2">
        <PerformanceSummary />
        <UpcomingAssessment />
      </div>

      {/* Activity & Notifications */}
      <div className="grid gap-4 md:grid-cols-2">
        <RecentActivities />
        <Notifications />
      </div>
    </div>
  );
}
