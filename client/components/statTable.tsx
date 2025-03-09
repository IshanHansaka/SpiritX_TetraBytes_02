import React from "react";

// Define the Player type
interface Player {
  id: number;
  name: string;
  university: string;
  category: string;
  totRuns?: number;
  balls?: number;
  innings?: number;
  wickets?: number;
  overs?: number;
  concRuns?: number;
  matches?: number;
  runs?: number;
  average?: number;
  strikeRate?: number;
}

// Define props for the PlayerTable component
interface PlayerTableProps {
  players: Player[];
}

const PlayerTable: React.FC<PlayerTableProps> = ({ players }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Table Head */}
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left">Pos</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">University</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Tot Runs</th>
            <th className="p-3 text-left">Balls Faced</th>
            <th className="p-3 text-left">Innings</th>
            <th className="p-3 text-left">Wickets</th>
            <th className="p-3 text-left">Overs Bowled</th>
            <th className="p-3 text-left">Runs Conceded</th>
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
              <td className="p-3">{player.totRuns ?? "-"}</td>
              <td className="p-3">{player.balls ?? "-"}</td>
              <td className="p-3">{player.innings ?? "-"}</td>
              <td className="p-3">{player.wickets ?? "-"}</td>
              <td className="p-3">{player.overs ?? "-"}</td>
              <td className="p-3">{player.concRuns ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
