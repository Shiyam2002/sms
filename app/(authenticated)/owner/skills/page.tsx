"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const skillsData = {
  labels: ["JavaScript", "Python", "Java", "AWS", "SQL"],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: ["#4CAF50", "#FFC107", "#2196F3", "#FF5722", "#9C27B0"],
      hoverOffset: 10,
    },
  ],
};

const trainingParticipationData = {
  labels: ["Engineering", "Data Science", "Cloud", "Frontend"],
  datasets: [
    {
      label: "Participation %",
      data: [80, 90, 60, 75],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    },
  ],
};

const upcomingTraining = [
  { name: "Advanced Java", date: "March 5", status: "Open for Enrollment" },
  { name: "AWS Cloud", date: "March 10", status: "Fully Booked" },
  { name: "SQL Masterclass", date: "March 15", status: "5 Slots Left" },
];

export default function SkillsTraining() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  return (
    <div className="space-y-6 p-6 w-full max-w-[1400px] mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Skills & Training Overview</h1>

      {/* Skills Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Skills Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Overview of skills across different departments.</p>
          <div className="h-[400px]">
            <Pie data={skillsData} options={{ maintainAspectRatio: false }} />
          </div>
        </CardContent>
      </Card>

      {/* Training Participation */}
      <Card>
        <CardHeader>
          <CardTitle>Training Participation Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Employee participation in training programs.</p>
          <div className="h-[400px]">
            <Bar data={trainingParticipationData} options={{ maintainAspectRatio: false }} />
          </div>
        </CardContent>
      </Card>

      {/* ROI Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>ROI Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Evaluate the impact of training programs.</p>
          <div className="mt-2">
            <p>Training Completion Rate</p>
            <Progress value={70} max={100} className="mb-4" />
            <p>Skill Improvement Rate</p>
            <Progress value={50} max={100} className="mb-4" />
            <p>Certification Success Rate</p>
            <Progress value={60} max={100} />
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Training Programs */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Training Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Training</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTraining.map((training, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border px-4 py-2">{training.name}</td>
                  <td className="border px-4 py-2">{training.date}</td>
                  <td className="border px-4 py-2">{training.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
