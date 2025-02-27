"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Dummy assessment results (replace this with API fetching in real-world)
const assessmentResults = [
  {
    id: 0, // Explicit ID for clarity
    name: "JavaScript Basics Test",
    date: "Feb 10, 2025",
    result: "Passed",
    score: "85%",
    feedback: "Great job! Keep practicing advanced topics.",
    details: "You performed well in ES6 concepts but need more practice on async/await.",
  },
  {
    id: 1,
    name: "SQL Query Assessment",
    date: "Jan 28, 2025",
    result: "Failed",
    score: "60%",
    feedback: "Needs improvement in complex queries and indexing.",
    details: "You struggled with joins and subqueries. Revise indexing for performance improvements.",
  },
];

export default function AssessmentResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<any | null>(null);

  useEffect(() => {
    const id = searchParams.get("id"); // Get ID from URL query string
    if (id !== null) {
      const index = parseInt(id, 10);
      const foundResult = assessmentResults.find((res) => res.id === index);
      setResult(foundResult || null);
    }
  }, [searchParams]);

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Result Not Found</h1>
        <Button className="mt-4 bg-blue-500 text-white" onClick={() => router.push("/employee/assessment")}>
          Back to Assessments
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 w-full max-w-2xl mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Assessment Result Details</CardTitle>
        </CardHeader>
        <CardContent className="text-lg space-y-2">
          <p><strong>Exam Name:</strong> {result.name}</p>
          <p><strong>Date Taken:</strong> {result.date}</p>
          <p><strong>Result:</strong> {result.result} ({result.score})</p>
          <p><strong>Feedback:</strong> {result.feedback}</p>
          <p><strong>Details:</strong> {result.details}</p>
        </CardContent>
      </Card>
      <Button className="mt-4 bg-red-500 text-white" onClick={() => router.push("/employee/assessment")}>
        Back to Assessments
      </Button>
    </div>
  );
}
