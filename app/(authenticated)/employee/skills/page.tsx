"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function SkillsPage() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const employeeSkills = ["JavaScript", "React.js", "Node.js", "SQL", "Azure DevOps"];
  const pendingSkills = [
    { name: "AWS Certified", status: "Pending" },
    { name: "Docker Essentials", status: "Approved" },
    { name: "Kubernetes Basics", status: "Pending" },
    { name: "Golang for Backend", status: "Approved" },
    { name: "Cloud Security", status: "Pending" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* First Row - Skills & Approval Status */}
      <div className="flex gap-6">
        {/* Your Skills (70%) */}
        <Card className="w-[70%] flex flex-col">
          <CardHeader>
            <CardTitle>Your Skills</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex flex-wrap gap-2">
              {employeeSkills.map((skill, index) => (
                <Badge key={index} className="px-4 py-2 bg-blue-500 text-white">
                  {skill}
                </Badge>
              ))}
              <button
                className="text-blue-600 hover:underline ml-2"
                onClick={() => setShowModal(true)}
              >
                + Add More
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Skills Approval Status (30%) */}
        <Card className="w-[30%] flex flex-col">
          <CardHeader>
            <CardTitle>Skills Approval Status</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              {pendingSkills.map((skill, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-sm">{skill.name}</span>
                  <Badge
                    className={`px-3 py-1 ${
                      skill.status === "Pending"
                        ? "bg-yellow-400 text-black"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {skill.status}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Second Row - Equal Width & Height Cards */}
      <div className="flex gap-6">
        {/* Skill Analytics & Reports */}
        <Card className="w-1/2 flex flex-col">
          <CardHeader>
            <CardTitle>Skill Analytics & Reports</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-gray-600">
              Analyze skill gaps, track skill growth, and get insights into team-wide skill development.
            </p>
            <Button className="mt-4 bg-blue-600 text-white">View Analytics</Button>
          </CardContent>
        </Card>

        {/* Skill Assessments & Testing */}
        <Card className="w-1/2 flex flex-col">
          <CardHeader>
            <CardTitle>Skill Assessments & Testing</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-gray-600">
              Employees can take skill assessments or request approval for tests. Managers can assign assessments.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Button className="bg-blue-600 text-white">Take Assessment</Button>
              <Button className="bg-green-600 text-white">Request Approval</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      

      {/* Skill Request Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request a New Skill</DialogTitle>
          </DialogHeader>
          <Input
            placeholder="Search for a skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-2"
          />
          <Button className="w-full mt-4 bg-blue-600 text-white" onClick={() => setShowModal(false)}>
            Request Approval
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
