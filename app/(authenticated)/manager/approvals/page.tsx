import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ApprovalRequests() {
  // Dummy data for approvals (Replace with actual data)
  const trainingRequests = [
    { id: 1, name: "John Doe", requestedFor: "Leadership Training", status: "Pending" },
    { id: 2, name: "Jane Smith", requestedFor: "Technical Skills Training", status: "Pending" },
  ];

  const assessmentRequests = [
    { id: 1, name: "Emily Johnson", requestedFor: "Performance Assessment", status: "Pending" },
    { id: 2, name: "Michael Brown", requestedFor: "Certification Exam", status: "Pending" },
  ];

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Approval Requests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Training Approval */}
        <Card className="shadow-md rounded-lg border border-blue-100 w-full max-w-2xl mx-auto">
          <CardHeader className="bg-blue-400 rounded-t-lg">
            <CardTitle className="text-lg font-semibold text-gray-700">Training Requests</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-5">
              {trainingRequests.map((request) => (
                <li
                  key={request.id}
                  className="flex flex-col md:flex-row justify-between items-center bg-white p-5 rounded-lg shadow-sm border space-y-4 md:space-y-0"
                >
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-gray-800">{request.name}</p>
                    <p className="text-sm text-gray-500">Requested For: {request.requestedFor}</p>
                  </div>
                  <div className="flex justify-between w-full md:w-auto md:space-x-4">
                    <Button variant="secondary" size="sm" className="flex-1 md:flex-none">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 md:flex-none hover:bg-green-700 hover:text-white">
                      Approve
                    </Button>
                    <Button variant="destructive" size="sm" className="flex-1 md:flex-none">
                      Reject
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Assessment Approval */}
        <Card className="shadow-md rounded-lg border border-blue-100 w-full max-w-2xl mx-auto">
          <CardHeader className="bg-blue-400 rounded-t-lg">
            <CardTitle className="text-lg font-semibold text-gray-700">Assessment Approvals</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-5">
              {assessmentRequests.map((request) => (
                <li
                  key={request.id}
                  className="flex flex-col md:flex-row justify-between items-center bg-white p-5 rounded-lg shadow-sm border space-y-4 md:space-y-0"
                >
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg font-medium text-gray-800">{request.name}</p>
                    <p className="text-sm text-gray-500">Requested For: {request.requestedFor}</p>
                  </div>
                  <div className="flex justify-between w-full md:w-auto md:space-x-4">
                    <Button variant="secondary" size="sm" className="flex-1 md:flex-none">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 md:flex-none hover:bg-green-700 hover:text-white">
                      Approve
                    </Button>
                    <Button variant="destructive" size="sm" className="flex-1 md:flex-none">
                      Reject
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
