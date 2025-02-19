import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ProjectAllocation() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Project Allocation & Performance</h1>

      {/* Resource Utilization */}
      <Card>
        <CardHeader>
          <CardTitle>Resource Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Overview of how resources are allocated across projects.</p>
        </CardContent>
      </Card>

      {/* Team Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Analytics on team performance and project outcomes.</p>
          <Progress value={75} className="mt-2" />
        </CardContent>
      </Card>

      {/* Workload Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Workload Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Identify potential bottlenecks and ensure balanced workload distribution.</p>
        </CardContent>
      </Card>
    </div>
  );
}
