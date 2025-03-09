const PlayerTable = ({ players }) => {
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
            {players.map((player, index) => (
              <tr
                key={player.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{player.name}</td>
                <td className="p-3">{player.university}</td>
                <td className="p-3">{player.category}</td>
                <td className="p-3">{player.matches}</td>
                <td className="p-3">{player.runs}</td>
                <td className="p-3">{player.wickets}</td>
                <td className="p-3">{player.average}</td>
                <td className="p-3">{player.strikeRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PlayerTable;
  