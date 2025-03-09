"use client";

import React, { useState } from "react";
import Link from 'next/link';

const PlayerProfile = () => {
  // Manage the state for each editable field
  const [category, setCategory] = useState("All - Rounder");
  const [battingRanking, setBattingRanking] = useState(5);
  const [bowlingRanking, setBowlingRanking] = useState(36);
  const [value, setValue] = useState(50000);
  const [points, setPoints] = useState(50);

  return (
    <div>
      {/* Tabs */}
      <div className="my-4 border-b-2 border-gray-400 flex space-x-4">
        <Link href="/profile/infoEdit"> <span className="text-black font-semibold border-b-2 border-black pb-2">Overview</span></Link>
        <Link href="/profile/statsEdit"> <span className="text-gray-500 cursor-pointer">Stats</span></Link>
      </div>
      
      {/* Info Table */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-semibold">Category</span>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-gray-600 p-2 border rounded"
            placeholder="All - Rounder"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Batting Ranking</span>
          <input
            type="number"
            value={battingRanking}
            onChange={(e) => setBattingRanking(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="5"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Bowling Ranking</span>
          <input
            type="number"
            value={bowlingRanking}
            onChange={(e) => setBowlingRanking(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="36"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Value (Rs.)</span>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="50000"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Points</span>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            className="text-gray-600 p-2 border rounded"
            placeholder="50"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;