import React from "react";


///created the dashboard page after login becomes successful

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-lavender-200 flex flex-col items-center py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-purple-200 shadow-lg rounded-lg overflow-hidden">
          <h2 className="bg-purple-700 text-white py-6 px-8 text-center text-3xl font-semibold">
            Welcome to the Alumni Dashboard
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

