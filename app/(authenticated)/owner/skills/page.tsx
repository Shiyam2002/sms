import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsTraining() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Skills & Training Overview</h1>

      {/* Skills Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Skills Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Detailed view of skills across different departments and teams.</p>
        </CardContent>
      </Card>

      {/* Training Participation Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Training Participation Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Insights into training participation and effectiveness trends.</p>
        </CardContent>
      </Card>

      {/* ROI Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>ROI Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Evaluate the return on investment for training initiatives.</p>
          {/* Adding a progress bar with accessibility improvements */}
          <Progress value={60} max={100} className="mt-2" aria-label="Training ROI Progress" />
        </CardContent>
      </Card>
    </div>
  );
}
