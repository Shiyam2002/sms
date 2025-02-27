import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  CheckCircle, 
  Settings, 
  BarChart, 
  Users, 
  ClipboardList, 
  FileCheck, 
  Clock, 
  FileBarChart, 
  Edit 
} from "lucide-react";

export default function TechnicalAssessmentTraining() {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
         Technical Skill Assessment & Training
      </h1>

      {/* Grid Layout for Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Assessment Overview */}
        <Card className="shadow-lg border border-gray-200 flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileCheck className="text-green-500" /> Assessment Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-3 flex-grow">
            <p className="text-sm font-semibold">Summary of Active Technical Assessments</p>
            <ul className="text-sm space-y-2">
              <li><CheckCircle className="text-green-600 inline-block" /> <strong>Active:</strong> 4</li>
              <li><FileBarChart className="text-blue-600 inline-block" /> <strong>Completed:</strong> 15</li>
              <li><Clock className="text-red-500 inline-block" /> <strong>Overdue:</strong> 1</li>
            </ul>
            <div className="border-t pt-3">
              <p className="text-sm font-semibold">Recently Completed:</p>
              <ul className="text-sm space-y-2">
                <li><FileCheck className="text-gray-600 inline-block" /> <strong>Spring Boot Fundamentals</strong> - Alice Johnson</li>
                <li><FileCheck className="text-gray-600 inline-block" /> <strong>React Advanced Concepts</strong> - Bob Williams</li>
              </ul>
            </div>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }}>
              View All
            </Button>
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
            <ul className="text-sm space-y-2">
              <li><Calendar className="text-gray-600 inline-block" /> <strong>Microservices Architecture - March 12</strong> (David Smith)</li>
              <li><Calendar className="text-gray-600 inline-block" /> <strong>React Performance Optimization - March 18</strong> (Sophia Martinez)</li>
            </ul>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }}>
              View All
            </Button>
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
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }}>
              View Results
            </Button>
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
            <ul className="text-sm space-y-2">
              <li><FileBarChart className="text-gray-600 inline-block" /> <strong>Completion Rate:</strong> 90%</li>
              <li><FileBarChart className="text-gray-600 inline-block" /> <strong>Average Score:</strong> 85%</li>
              <li><CheckCircle className="text-green-600 inline-block" /> <strong>Top Performers:</strong> Alice Johnson, Bob Williams</li>
            </ul>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }}>
              Track Performance
            </Button>
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
            <ul className="text-sm space-y-2">
              <li><FileCheck className="text-gray-600 inline-block" /> <strong>Number of Questions:</strong> 30</li>
              <li><Clock className="text-gray-600 inline-block" /> <strong>Duration:</strong> 60 minutes</li>
              <li><CheckCircle className="text-green-600 inline-block" /> <strong>Pass Percentage:</strong> 75%</li>
              <li><FileCheck className="text-gray-600 inline-block" /> <strong>Question Format:</strong> Multiple Choice & Code Challenges</li>
            </ul>
          </CardContent>
          <div className="p-4 border-t">
            <Button className="w-full" style={{ backgroundColor: "#05387D", color: "white" }}>
              Edit Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
