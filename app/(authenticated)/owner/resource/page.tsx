import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResourcePlanning() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Resource Planning & Approval</h1>

      {/* Strategic Approvals */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Tools for approving resource planning and allocation strategies.</p>
        </CardContent>
      </Card>

      {/* Training Initiatives */}
      <Card>
        <CardHeader>
          <CardTitle>Training Initiatives</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Review and approve high-level training initiatives.</p>
        </CardContent>
      </Card>

      {/* Project Assignments */}
      <Card>
        <CardHeader>
          <CardTitle>Project Assignments</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Monitor and approve key project assignments.</p>
        </CardContent>
      </Card>
    </div>
  );
}
