"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Assessment {
  name: string;
  skillLevel: string;
  duration: string;
  passingCriteria: string;
}

const upcomingAssessments: Assessment[] = [
  {
    name: "React.js Intermediate Test",
    skillLevel: "Intermediate",
    duration: "30 mins",
    passingCriteria: "70%",
  },
  {
    name: "Node.js Backend Test",
    skillLevel: "Advanced",
    duration: "45 mins",
    passingCriteria: "75%",
  },
];

const assessmentResults = [
  {
    name: "JavaScript Basics Test",
    result: "Passed",
    score: "85%",
    feedback: "Great job! Keep practicing advanced topics.",
  },
  {
    name: "SQL Query Assessment",
    result: "Failed",
    score: "60%",
    feedback: "Needs improvement in complex queries and indexing.",
  },
];

export default function AssessmentPage() {
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment | null>(null);

  return (
    <div className="p-6 space-y-8 w-full">
      
      {/* Row: Upcoming Assessments & Details */}
      <div className="flex gap-6 w-full">
        
        {/* Left Side - Upcoming Assessments */}
        <Card className={`transition-all duration-300 ${selectedAssessment ? "w-2/3" : "w-full"}`}>
          <CardHeader>
            <CardTitle>Upcoming Assessments</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {upcomingAssessments.map((assessment, index) => (
                <li key={index} className="p-4 border rounded-lg flex justify-between items-center w-full">
                  <span className="font-medium">{assessment.name}</span>
                  <div className="flex gap-3">
                    <Button 
                      className="bg-black text-white"
                      onClick={() => setSelectedAssessment(assessment)}
                    >
                      View Details
                    </Button>
                    <Button className="bg-black text-white">
                      Take Mock Test
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Right Side - Assessment Details (Animated) */}
        {selectedAssessment && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-1/3"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Assessment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg">
                  <p><strong>Assessment Name:</strong> {selectedAssessment.name}</p>
                  <p><strong>Skill Level:</strong> {selectedAssessment.skillLevel}</p>
                  <p><strong>Duration:</strong> {selectedAssessment.duration}</p>
                  <p><strong>Passing Criteria:</strong> {selectedAssessment.passingCriteria}</p>
                </div>
                <Button 
                  className="mt-4 bg-red-500 text-white"
                  onClick={() => setSelectedAssessment(null)}
                >
                  Close Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Row: Assessment Results & Feedback */}
      <div className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Assessment Results & Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {assessmentResults.map((result, index) => (
                <li key={index} className="p-4 border rounded-lg w-full">
                  <p className="text-lg font-semibold">{result.name}</p>
                  <p><strong>Result:</strong> {result.result} ({result.score})</p>
                  <p><strong>Feedback:</strong> {result.feedback}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
