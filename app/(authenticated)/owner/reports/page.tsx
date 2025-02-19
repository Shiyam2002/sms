  "use client";

  import { useState } from "react";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
  import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";

  const reports = [
    "Skill Distribution",
    "Skills by Department",
    "Proficiency Levels",
    "Skill Trend Analysis",
    "Custom Reports",
  ];

  const skillDistributionData = [
    { name: "JavaScript", value: 25 },
    { name: "Python", value: 20 },
    { name: "Java", value: 18 },
    { name: "AWS", value: 15 },
    { name: "SQL", value: 12 },
    { name: "React", value: 10 },
  ];

  const skillsByDepartmentData = [
    { department: "Engineering", JavaScript: 85, Java: 75, Python: 60, AWS: 50 },
    { department: "Data Science", Python: 90, SQL: 80, JavaScript: 40, AWS: 30 },
    { department: "Cloud", AWS: 95, Python: 50, Java: 35, JavaScript: 25 },
    { department: "Frontend", React: 95, JavaScript: 90, Java: 30, SQL: 20 },
  ];

  const proficiencyLevelsData = [
    { name: "Beginner", JavaScript: 20, Python: 25, Java: 18, AWS: 12, SQL: 15 },
    { name: "Intermediate", JavaScript: 50, Python: 45, Java: 48, AWS: 40, SQL: 50 },
    { name: "Expert", JavaScript: 30, Python: 30, Java: 34, AWS: 48, SQL: 35 },
  ];

  const trendAnalysisData = [
    { month: "Jan", JavaScript: 35, Python: 30, Java: 25, AWS: 20, SQL: 15 },
    { month: "Feb", JavaScript: 40, Python: 35, Java: 28, AWS: 22, SQL: 18 },
    { month: "Mar", JavaScript: 45, Python: 38, Java: 30, AWS: 25, SQL: 20 },
    { month: "Apr", JavaScript: 50, Python: 40, Java: 32, AWS: 28, SQL: 22 },
  ];

  export default function ReportsAnalytics() {
    const [selectedReport, setSelectedReport] = useState(reports[0]);

    return (
      <div className="space-y-6 p-6 ">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        
        {/* Fixed Select Component */}
        <Select value={selectedReport} onValueChange={setSelectedReport}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a report" />
          </SelectTrigger>
          <SelectContent>
            {reports.map((report) => (
              <SelectItem key={report} value={report}>
                {report}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedReport === "Skill Distribution" && (
          <Card className="">
            <CardHeader>
              <CardTitle>Overall Skill Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie dataKey="value" data={skillDistributionData} cx="50%" cy="50%" outerRadius={120} fill="#8884d8" label />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {selectedReport === "Skills by Department" && (
          <Card>
            <CardHeader>
              <CardTitle>Top Skills by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={skillsByDepartmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="JavaScript" fill="#8884d8" />
                  <Bar dataKey="Python" fill="#82ca9d" />
                  <Bar dataKey="Java" fill="#ffc658" />
                  <Bar dataKey="AWS" fill="#ff7300" />
                  <Bar dataKey="SQL" fill="#4caf50" />
                  <Bar dataKey="React" fill="#d32f2f" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {selectedReport === "Proficiency Levels" && (
          <Card>
            <CardHeader>
              <CardTitle>Employee Proficiency Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={proficiencyLevelsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="JavaScript" fill="#8884d8" />
                  <Bar dataKey="Python" fill="#82ca9d" />
                  <Bar dataKey="Java" fill="#ffc658" />
                  <Bar dataKey="AWS" fill="#ff7300" />
                  <Bar dataKey="SQL" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {selectedReport === "Skill Trend Analysis" && (
          <Card >
            <CardHeader>
              <CardTitle>Skill Trend Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={trendAnalysisData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="JavaScript" stroke="#8884d8" />
                  <Line type="monotone" dataKey="Python" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="Java" stroke="#ffc658" />
                  <Line type="monotone" dataKey="AWS" stroke="#ff7300" />
                  <Line type="monotone" dataKey="SQL" stroke="#4caf50" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {selectedReport === "Custom Reports" && (
          <Card>
            <CardHeader>
              <CardTitle>Custom Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Generate detailed reports based on department, skill type, and proficiency level.</p>
              <Button className="w-full mt-4">Generate Report</Button>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }
