import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectAllocation() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Project Allocation</h1>

      {/* Assign Employees to Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Assign Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Allocate employees to new projects based on their skill fit.</p>
          <Button className="mt-2">Assign Employees</Button>
        </CardContent>
      </Card>

      {/* Monitor Workload */}
      <Card>
        <CardHeader>
          <CardTitle>Monitor Workload</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Ensure a balanced workload across teams.</p>
          <Button className="mt-2">View Workload</Button>
        </CardContent>
      </Card>
    </div>
  );
}
