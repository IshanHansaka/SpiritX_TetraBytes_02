"use client"; // ✅ Required for client-side interactivity

import { useState } from "react";
import { FaEdit } from "react-icons/fa"; // Importing edit icon from react-icons

const TeamPage = () => {
  // Hardcoded username (Replace with actual user data)
  const username = "praveesha";

  // State for team name and editing mode
  const [teamName, setTeamName] = useState("SpiritX TetraBytes");
  const [isEditing, setIsEditing] = useState(false); // To toggle between view and edit mode

  // Hardcoded team players list (Replace with API data)
  const teamPlayers = [
    { id: 1, name: "Joe Root", role: "All-Rounder", university: "University of Moratuwa" },
    { id: 2, name: "Virat Kohli", role: "Batsman", university: "University of Delhi" },
    { id: 3, name: "Jasprit Bumrah", role: "Bowler", university: "Maharashtra University" },
  ];

  // Handler to toggle editing mode for the team name
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Handler to save the updated team name
  const handleSave = () => {
    console.log("Team updated:", teamName);
    setIsEditing(false); // Exit editing mode
    alert(`Team name "${teamName}" has been updated!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center relative">
        <h1 className="text-4xl font-bold">
          Team:{" "}
          {isEditing ? (
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="bg-transparent border-b-2 border-white focus:outline-none text-center"
            />
          ) : (
            teamName
          )}
        </h1>
        <p className="mt-3 text-lg">Managed by: {username}</p>

        {/* Edit Icon */}
        <button
          onClick={handleEditClick}
          className="absolute right-6 bottom-6 bg-white text-blue-600 rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-200"
        >
          <FaEdit size={24} />
        </button>
      </section>

      {/* Team Players List */}
      <div className="p-8 max-w-2xl mx-auto bg-white shadow-md rounded-md mt-8">
        <h2 className="text-2xl font-bold mb-4">Team Players</h2>
        <ul>
          {teamPlayers.map((player) => (
            <li
              key={player.id}
              className="flex justify-between p-3 border-b last:border-none"
            >
              <div className="flex flex-col">
                <span className="font-semibold">{player.name}</span>
                <span className="text-sm text-gray-500">{player.university}</span>
              </div>
              <span className="text-gray-500">{player.role}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Save Team Button (Only shown when editing) */}
      {isEditing && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Save Team Name
          </button>
        </div>
      )}

      {/* Edit Team Button at the bottom */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => alert("Navigating to edit team settings...")}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Edit Team
        </button>
      </div>
    </div>
  );
};

export default TeamPage;