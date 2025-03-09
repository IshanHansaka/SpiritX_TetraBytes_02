"use client";
import React, { useState } from "react";

const PlayerProfile = () => {
  // Manage the state for each editable field
  const [battingAverage, setBattingAverage] = useState(42.23);
  const [strikeRate, setStrikeRate] = useState(102.45);
  const [runsPerInning, setRunsPerInning] = useState(34.24);
  const [ballsPerRun, setBallsPerRun] = useState(1.23);

  const [bowlingAverage, setBowlingAverage] = useState(46.23);
  const [economyRate, setEconomyRate] = useState(102.45);
  const [bowlingStrikeRate, setBowlingStrikeRate] = useState(34.24);
  const [wicketsPerMatch, setWicketsPerMatch] = useState(1.23);

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
          <input
            type="number"
            value={battingAverage}
            onChange={(e) => setBattingAverage(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="42.23"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Strike Rate (SR)</span>
          <input
            type="number"
            value={strikeRate}
            onChange={(e) => setStrikeRate(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="102.45"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Runs per Innings</span>
          <input
            type="number"
            value={runsPerInning}
            onChange={(e) => setRunsPerInning(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="34.24"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Balls per Run</span>
          <input
            type="number"
            value={ballsPerRun}
            onChange={(e) => setBallsPerRun(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="1.23"
          />
        </div>
      </div>

      {/* Info Table - Bowling Stats */}
      <div className="flex justify-between mb-3 mt-4">
        <span className="font-semibold text-xl">Bowling Stats</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Bowling Average</span>
          <input
            type="number"
            value={bowlingAverage}
            onChange={(e) => setBowlingAverage(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="46.23"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Economy Rate (ER)</span>
          <input
            type="number"
            value={economyRate}
            onChange={(e) => setEconomyRate(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="102.45"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Bowling Strike Rate (SR)</span>
          <input
            type="number"
            value={bowlingStrikeRate}
            onChange={(e) => setBowlingStrikeRate(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="34.24"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Wickets per Match</span>
          <input
            type="number"
            value={wicketsPerMatch}
            onChange={(e) => setWicketsPerMatch(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="1.23"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;