"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type LeaderboardEntry = {
  rank: number;
  team: string;
  username: string;
  points: string;
};

const Leaderboard: React.FC = () => {
  const router = useRouter();
  const loggedInUser = "user5"; // Replace with dynamic user data
  const teamName = "AI Innovators"; // Replace with dynamic team data

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 3; // Set total pages to 3
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  // Predefined teams and users (in a real-world scenario, this data would come from an API)
  const teamsAndUsers = [
    { team: "Cricket Smashers", username: "user1", points: 5000 },
    { team: "Tech Titans", username: "user2", points: 4800 },
    { team: "Data Warriors", username: "user3", points: 4700 },
    { team: "Code Avengers", username: "user4", points: 4600 },
    { team: "AI Innovators", username: "user5", points: 4550 },
    { team: "Future Leaders", username: "user6", points: 4500 },
    { team: "UX Creators", username: "user7", points: 4450 },
    { team: "Design Mavericks", username: "user8", points: 4400 },
    { team: "Cyber Guardians", username: "user9", points: 4300 },
  ];

  // Function to fetch leaderboard data from the server (simulated)
  const fetchLeaderboardData = () => {
    // Sort the data by points in descending order
    const sortedData = [...teamsAndUsers]
      .sort((a, b) => b.points - a.points) // Sort by points (most points first)
      .slice((currentPage - 1) * 9, currentPage * 9); // Paginate data based on current page

    // Assign ranks to the sorted leaderboard data
    const dataWithRank = sortedData.map((entry, index) => ({
      rank: (currentPage - 1) * 9 + index + 1,
      team: entry.team,
      username: entry.username,
      points: `${entry.points}`, // Format points
    }));

    setLeaderboardData(dataWithRank);
  };

  useEffect(() => {
    // Fetch data initially and then set interval for updates
    fetchLeaderboardData();
    const interval = setInterval(fetchLeaderboardData, 5000); // Poll every 5 seconds

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [currentPage]); // Only re-run when currentPage changes

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="w-full bg-blue-600 text-white text-center py-10 mb-6">
        <h1 className="text-4xl font-bold">Welcome to the Leaderboard</h1>
        <p className="text-lg">
          Track your team performance and rise to the top!
        </p>
      </div>

      {/* Leaderboard */}
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-2xl font-semibold py-4 px-6">Leaderboard 🏆</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-400 text-left">
              <th className="p-3">Rank</th>
              <th className="p-3">Team Name</th>
              <th className="p-3">Username</th>
              <th className="p-3">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr
                key={index}
                className={`${
                  entry.username === loggedInUser && entry.team === teamName
                    ? "bg-yellow-200" // Highlight logged-in user's row
                    : index % 2 === 0
                    ? "bg-gray-200"
                    : "bg-gray-300"
                }`}
              >
                <td className="p-3">{entry.rank}</td>
                <td className="p-3">{entry.team}</td>
                <td className="p-3">{entry.username}</td>
                <td className="p-3">{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 ${
              currentPage === page ? "bg-black text-white rounded" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;