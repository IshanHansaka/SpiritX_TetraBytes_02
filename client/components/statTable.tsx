<<<<<<< HEAD:client/app/components/statTable.tsx
import React from "react";

// Define the Player type
=======
>>>>>>> 4d8f5e9b7dd9940f61fda227e84564f0a816af29:client/components/statTable.tsx
interface Player {
  id: number;
  name: string;
  university: string;
  category: string;
<<<<<<< HEAD:client/app/components/statTable.tsx
  totRuns: number;
  balls: number;
  innings: number;
  wickets: number;
  overs: number;
  concRuns: number;
}

// Define props for the PlayerTable component
=======
  matches: number;
  runs: number;
  wickets: number;
  average: number;
  strikeRate: number;
}

>>>>>>> 4d8f5e9b7dd9940f61fda227e84564f0a816af29:client/components/statTable.tsx
interface PlayerTableProps {
  players: Player[];
}

const PlayerTable: React.FC<PlayerTableProps> = ({ players }) => {
<<<<<<< HEAD:client/app/components/statTable.tsx
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Table Head */}
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left">Pos</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">University</th>
            <th className="p-3 text-left">Tot Runs</th>
            <th className="p-3 text-left">Balls Faced</th>
            <th className="p-3 text-left">Innings</th>
            <th className="p-3 text-left">Wickets</th>
            <th className="p-3 text-left">Overs Bowled</th>
            <th className="p-3 text-left">Runs Concended</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {players.map((player: Player, index: number) => (
            <tr
              key={player.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{player.name}</td>
              <td className="p-3">{player.university}</td>
              <td className="p-3">{player.category}</td>
              <td className="p-3">{player.totRuns}</td>
              <td className="p-3">{player.balls}</td>
              <td className="p-3">{player.innings}</td>
              <td className="p-3">{player.wickets}</td>
              <td className="p-3">{player.overs}</td>
              <td className="p-3">{player.concRuns}</td>
=======
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Pos</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">University</th>
              <th className="p-3 text-left">Tot Runs</th>
              <th className="p-3 text-left">Balls Faced</th>
              <th className="p-3 text-left">Innings</th>
              <th className="p-3 text-left">Wickets</th>
              <th className="p-3 text-left">Overs Bowled</th>
              <th className="p-3 text-left">Runs Concended</th>
>>>>>>> 4d8f5e9b7dd9940f61fda227e84564f0a816af29:client/components/statTable.tsx
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;