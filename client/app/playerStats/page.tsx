"use client";

import { useState, useEffect } from "react";
import PlayerTable from "../../components/statTable";
import NavBar from "@/components/navBar";

// Define the Player interface
interface Player {
  name: string;
  university: string;
  category: string;
}

const PlayerStats = () => {
  // Use the Player type to declare the players state
  const [players, setPlayers] = useState<Player[]>([]);
  const [search, setSearch] = useState("");
  const [universityFilter, setUniversityFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Fetch data from API
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/players"); // Enter the API endpoint URL
        const data = await response.json();
        setPlayers(data); // Ensure the API returns an array of players with the correct structure
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();
  }, []);

  // Filter logic
  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(search.toLowerCase()) &&
      (universityFilter === "" || player.university === universityFilter) &&
      (categoryFilter === "" || player.category === categoryFilter)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar/>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">🏆 Player Statistics</h1>
        <p className="mt-3 text-lg">
          Explore and analyze the top performances across various universities!
        </p>
      </section>

      {/* Main Content */}
      <div className="p-12">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-28 mb-6">
          <select
            className="p-2 pr-4 border rounded-md w-full md:w-1/4"
            value={universityFilter}
            onChange={(e) => setUniversityFilter(e.target.value)}
          >
            <option value="">All Universities</option>
            <option value="UoC">UoC</option>
            <option value="UoM">UoM</option>
            <option value="UoK">UoK</option>
            <option value="UoVPA">UoVPA</option>
            <option value="EUSL">EUSL</option>
            <option value="UoR">UoR</option>
            <option value="UoJ">UoJ</option>
            <option value="SEUSL">SEUSL</option>
            <option value="UoP">UoP</option>
            <option value="USJP">USJP</option>
          </select>
          <select
            className="p-2 border rounded-md w-full md:w-1/4"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="All-Rounder">All-Rounder</option>
          </select>
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 border rounded-md w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Player Table Component */}
        <PlayerTable players={filteredPlayers} />
      </div>
    </div>
  );
};

export default PlayerStats;