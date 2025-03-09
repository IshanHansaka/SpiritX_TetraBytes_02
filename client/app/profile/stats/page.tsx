import React from "react";

const PlayerProfile = () => {
  // Batting Stats
  const battingAverage = 42.23;
  const strikeRate = 102.45;
  const runsPerInning = 34.24;
  const ballsPerRun = 1.23;

  // Bowling Stats
  const bowlingAverage = 46.23;
  const economyRate = 102.45;
  const bowlingStrikeRate = 34.24;
  const wicketsPerMatch = 1.23;

  return (
    <div>
      {/* Tabs */}
      <div className="my-4 border-b-2 border-gray-400 flex space-x-4">
        <span className="text-gray-500 cursor-pointer">Overview</span>
        <span className="text-black font-semibold border-b-2 border-black pb-2">Stats</span>
      </div>

      {/* Info Table - Batting Stats */}
      <div className="flex justify-between mb-3">
        <span className="font-semibold text-xl">Batting Stats</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Batting Average</span>
          <span className="text-gray-600">{battingAverage}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Strike Rate (SR)</span>
          <span className="text-gray-600">{strikeRate}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Runs per Innings</span>
          <span className="text-gray-600">{runsPerInning}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Balls per Run</span>
          <span className="text-gray-600">{ballsPerRun}</span>
        </div>
      </div>

      {/* Info Table - Bowling Stats */}
      <div className="flex justify-between mb-3 mt-4">
        <span className="font-semibold text-xl">Bowling Stats</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Bowling Average</span>
          <span className="text-gray-600">{bowlingAverage}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Economy Rate (ER)</span>
          <span className="text-gray-600">{economyRate}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Bowling Strike Rate (SR)</span>
          <span className="text-gray-600">{bowlingStrikeRate}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Wickets per Match</span>
          <span className="text-gray-600">{wicketsPerMatch}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
