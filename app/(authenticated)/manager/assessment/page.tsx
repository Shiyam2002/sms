import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Settings, BarChart, Users } from "lucide-react";

export default function TechnicalAssessmentTraining() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800">💻 Technical Skill Assessment & Training</h1>

      {/* Grid Layout for Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Assessment Overview */}
        <Card className="shadow-lg border border-gray-200 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle className="text-green-500" /> Assessment Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-3 flex-grow">
            <p className="text-sm font-semibold">Summary of Active Technical Assessments</p>
            <ul className="text-sm space-y-1">
              <li>✅ <strong>Active:</strong> 4</li>
              <li>🎯 <strong>Completed:</strong> 15</li>
              <li>⚠️ <strong>Overdue:</strong> 1</li>
            </ul>
            <div className="border-t pt-3">
              <p className="text-sm font-semibold">Recently Completed:</p>
              <ul className="text-sm space-y-1">
                <li>📌 <strong>Spring Boot Fundamentals</strong> - Completed by **Alice Johnson**</li>
                <li>📌 <strong>React Advanced Concepts</strong> - Completed by **Bob Williams**</li>
              </ul>
            </div>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full">View All</Button>
          </div>
        </Card>

        {/* Upcoming Technical Assessments */}
        <Card className="shadow-lg border border-gray-200 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="text-blue-500" /> Upcoming Assessments
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-3 flex-grow">
            <p className="text-sm font-semibold">Scheduled Technical Assessments:</p>
            <ul className="text-sm space-y-1">
              <li>📅 <strong>Microservices Architecture - March 12</strong> (Employee: **David Smith**)</li>
              <li>📅 <strong>React Performance Optimization - March 18</strong> (Employee: **Sophia Martinez**)</li>
            </ul>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full">View All</Button>
          </div>
        </Card>

        {/* Review Test Results */}
        <Card className="shadow-lg border border-gray-200 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="text-purple-500" /> Review Assessments
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 flex-grow">
            <p className="text-sm">Analyze technical test results and provide feedback to employees.</p>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full">View Results</Button>
          </div>
        </Card>

        {/* Employee Performance Tracking */}
        <Card className="shadow-lg border border-gray-200 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart className="text-indigo-500" /> Employee Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-3 flex-grow">
            <p className="text-sm font-semibold">Monitor technical skills progress:</p>
            <ul className="text-sm space-y-1">
              <li>📊 <strong>Completion Rate:</strong> 90%</li>
              <li>📈 <strong>Average Score:</strong> 85%</li>
              <li>🏆 <strong>Top Performers:</strong> Alice Johnson, Bob Williams</li>
            </ul>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full">Track Performance</Button>
          </div>
        </Card>

        {/* Manage Assessment Settings */}
        <Card className="shadow-lg border border-gray-200 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Settings className="text-red-500" /> Manage Assessment Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-3 flex-grow">
            <p className="text-sm font-semibold">Current Technical Assessment Settings:</p>
            <ul className="text-sm space-y-1">
              <li>🔢 <strong>Number of Questions:</strong> 30</li>
              <li>⏳ <strong>Duration:</strong> 60 minutes</li>
              <li>✅ <strong>Pass Percentage:</strong> 75%</li>
              <li>📜 <strong>Question Format:</strong> Multiple Choice & Code Challenges</li>
            </ul>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full">Edit Settings</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
