import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ManagerEmployeeManagement() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Manager & Employee Management</h1>

      {/* Create & Manage Roles */}
      <Card>
        <CardHeader>
          <CardTitle>Create & Manage Roles</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Ability to create and manage both managers and employees.</p>
        </CardContent>
      </Card>

      {/* Role Assignment */}
      <Card>
        <CardHeader>
          <CardTitle>Role Assignment</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Assign roles and responsibilities within the organization.</p>
        </CardContent>
      </Card>

      {/* Performance Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Monitor manager and employee performance to ensure effective team management.</p>
          <Button className="w-full">Monitor Performance</Button>
        </CardContent>
      </Card>
    </div>
  );
}
