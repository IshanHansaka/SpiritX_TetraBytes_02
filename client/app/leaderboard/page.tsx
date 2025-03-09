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
  const loggedInUser = "user11"; // Replace with dynamic user data
  const teamName = "Cricket Smashers"; // Replace with dynamic team data

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 3; // Set total pages to 3
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  const teamNames = [
    "Cricket Smashers",
    "Tech Titans",
    "Data Warriors",
    "Code Avengers",
    "AI Innovators",
    "Future Leaders",
    "UX Creators",
    "Design Mavericks",
    "Cyber Guardians",
  ];

  useEffect(() => {
    // Defining usernames inside useEffect to avoid unnecessary re-renders
    const usernames = [
      "user1",
      "user2",
      "user3",
      "user4",
      "user5",
      "user6",
      "user7",
      "user8",
      "user9",
    ];

    // Fetch leaderboard data based on currentPage (replace with actual API call)
    const fetchData = async () => {
      // Simulating API data fetching
      const data: LeaderboardEntry[] = Array(9)
        .fill(null)
        .map((_, index) => {
          // Randomly pick a team name and username
          const team = teamNames[Math.floor(Math.random() * teamNames.length)];
          const username =
            usernames[Math.floor(Math.random() * usernames.length)];

          return {
            rank: (currentPage - 1) * 9 + index + 1,
            team: team,
            username: username,
            points: `${(Math.random() * 10000).toFixed(0)}`, // Random points between 0 and 10000
          };
        });

      setLeaderboardData(data);
    };
    fetchData();
  }, [currentPage]); // Removed teamNames and usernames from dependencies

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
                    ? "bg-yellow-200"
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

      {/* View Team Button */}
      <button
        className="bg-blue-600 text-white px-6 py-2 mt-6 rounded-lg"
        onClick={() => router.push("/your-team")}
      >
        View Your Team
      </button>
    </div>
  );
};

export default Leaderboard;