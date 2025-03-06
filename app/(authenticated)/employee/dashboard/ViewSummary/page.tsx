"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { FaTasks, FaCheckCircle, FaClock, FaStar } from "react-icons/fa";

export default function ViewSummary() {
  const router = useRouter();
  const totalAssessments = 10;
  const completedAssessments = 7;
  const pendingAssessments = totalAssessments - completedAssessments;
  const averageScore = 85;
  const completionRate = (completedAssessments / totalAssessments) * 100;

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Skill Summary</h1>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assessments</CardTitle>
            <FaTasks className="text-blue-600 text-xl" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAssessments}</div>
            <p className="text-sm text-gray-600">Assigned to you</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <FaCheckCircle className="text-green-600 text-xl" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedAssessments}</div>
            <p className="text-sm text-gray-600">Great job! Keep it up.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <FaClock className="text-yellow-600 text-xl" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingAssessments}</div>
            <p className="text-sm text-gray-600">Complete them to improve your skills.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Score</CardTitle>
            <FaStar className="text-purple-600 text-xl" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageScore}%</div>
            <p className="text-sm text-gray-600">Above company average (75%).</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Section */}
      <Card>
        <CardHeader>
          <CardTitle>Assessment Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={completionRate} className="h-3 bg-gray-200 [&>div]:bg-[#05387D]" />
            <p className="text-sm text-gray-600">
              You have completed <span className="font-semibold">{completionRate.toFixed(1)}%</span> of your assessments.{" "}
              {completionRate < 100 ? (
                <span>Complete the remaining to unlock new opportunities.</span>
              ) : (
                <span>Congratulations! You've completed all assessments.</span>
              )}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best & Weakest Skills */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Best Skill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">JavaScript (92%)</div>
            <p className="text-sm text-gray-600">
              You excel in JavaScript. Consider mentoring others or taking advanced courses.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Needs Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">SQL (67%)</div>
            <p className="text-sm text-gray-600">
              Focus on SQL to improve your data management skills. Check out recommended resources.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Back to Dashboard Button */}
      <div className="flex justify-end">
        <Button
          className="text-white"
          style={{ backgroundColor: "#05387D" }}
          onClick={() => router.push("/employee/dashboard")}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}