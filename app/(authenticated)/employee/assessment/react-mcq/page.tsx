"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const questions = [
  {
    question: "What is the primary purpose of React?",
    options: ["Building user interfaces", "Managing databases", "Creating APIs", "Handling authentication"],
    answer: "Building user interfaces",
  },
  {
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useReducer", "useState", "useMemo"],
    answer: "useState",
  },
  {
    question: "Which lifecycle method is replaced by useEffect?",
    options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is JSX?",
    options: ["A syntax extension for JavaScript", "A state management tool", "A new programming language", "A type of database"],
    answer: "A syntax extension for JavaScript",
  },
  {
    question: "Which prop should always be unique in a list?",
    options: ["id", "name", "className", "key"],
    answer: "key",
  },
  {
    question: "How do you pass data from a parent to a child component?",
    options: ["Using state", "Using props", "Using Redux", "Using context"],
    answer: "Using props",
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useReducer", "useEffect", "useContext"],
    answer: "useEffect",
  },
  {
    question: "Which of the following is NOT a built-in React hook?",
    options: ["useFetch", "useState", "useEffect", "useContext"],
    answer: "useFetch",
  },
  {
    question: "What does React use to improve performance?",
    options: ["Real DOM", "Virtual DOM", "SQL queries", "Redux"],
    answer: "Virtual DOM",
  },
  {
    question: "Which of these statements about React fragments is true?",
    options: ["They require a key prop", "They can contain multiple elements", "They affect the DOM structure", "They are slower than divs"],
    answer: "They can contain multiple elements",
  },
];

export default function ReactMcqAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <Card className="w-full max-w-2xl shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            {showResult ? "Assessment Result" : `Question ${currentQuestion + 1} / ${questions.length}`}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {!showResult ? (
            <>
              <p className="text-lg mb-6 font-semibold text-gray-700">{questions[currentQuestion].question}</p>
              <ul className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <li key={index} className="w-full">
                    <Button
                      className={`w-full py-3 text-lg transition-all border border-gray-300 rounded-lg ${
                        selectedOption === option
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
                      }`}
                      onClick={() => setSelectedOption(option)}
                    >
                      {option}
                    </Button>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 w-full py-3 bg-green-500 text-white text-lg hover:bg-green-600"
                onClick={handleNext}
                disabled={!selectedOption}
              >
                {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
              </Button>
            </>
          ) : (
            <div className="text-center">
              <p className="text-xl font-semibold">You scored {score} out of {questions.length}!</p>
              <Button
                className="mt-6 w-full py-3 bg-blue-500 text-white text-lg hover:bg-blue-600"
                onClick={() => router.push("/employee/assessment")}
              >
                Go Back to Dashboard
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
