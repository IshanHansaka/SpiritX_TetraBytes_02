'use client';

import { useState, useEffect } from 'react';
import UserNavBar from '@/components/userNavBar';

interface PlayerStats {
  position: number;
  player: string;
  runs?: number;
  wickets?: number;
  university: string;
  prize: string;
}

const SelectTeam = () => {
  const [activeTab, setActiveTab] = useState<'batting' | 'bowling' | 'allrounders'>('batting');
  const [battingStats, setBattingStats] = useState<PlayerStats[]>([]);
  const [bowlingStats, setBowlingStats] = useState<PlayerStats[]>([]);
  const [allRoundersStats, setAllRoundersStats] = useState<PlayerStats[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Dummy data for demonstration. Replace with real API data when needed.
    const dummyBattingStats = [
      { position: 1, player: 'John Doe', runs: 500, university: 'University A', prize: '$1000' },
      { position: 2, player: 'Jane Smith', runs: 450, university: 'University B', prize: '$800' },
      { position: 3, player: 'Tom Johnson', runs: 400, university: 'University C', prize: '$600' },
    ];

    const dummyBowlingStats = [
      { position: 1, player: 'Alice Brown', wickets: 30, university: 'University D', prize: '$1000' },
      { position: 2, player: 'Bob White', wickets: 28, university: 'University E', prize: '$800' },
      { position: 3, player: 'Charlie Green', wickets: 25, university: 'University F', prize: '$600' },
    ];

    const dummyAllRoundersStats = [
      { position: 1, player: 'David Lee', runs: 350, wickets: 20, university: 'University G', prize: '$1000' },
      { position: 2, player: 'Emily Harris', runs: 320, wickets: 18, university: 'University H', prize: '$800' },
      { position: 3, player: 'Frank King', runs: 300, wickets: 15, university: 'University I', prize: '$600' },
    ];

    setBattingStats(dummyBattingStats);
    setBowlingStats(dummyBowlingStats);
    setAllRoundersStats(dummyAllRoundersStats);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filterData = (data: PlayerStats[]) => {
    return data.filter((player) =>
      player.player.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.university.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleButtonClick = (playerName: string) => {
    alert(`Selected player: ${playerName}`);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <UserNavBar />
      <div className="p-8 flex justify-center">
        <div className="bg-white p-6 w-full max-w-3xl rounded-md shadow-lg">
          <h2 className="text-gray-600 text-lg mb-4">Select Team</h2>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="p-2 w-1/4 border border-gray-300 rounded-md"
            />
          </div>

          {/* Tabs (No Style Changes) */}
          <div className="mt-4 flex space-x-4">
            <button
              className={activeTab === 'batting' ? 'font-bold' : ''}
              onClick={() => setActiveTab('batting')}
            >
              Batters
            </button>
            <button
              className={activeTab === 'bowling' ? 'font-bold' : ''}
              onClick={() => setActiveTab('bowling')}
            >
              Bowlers
            </button>
            <button
              className={activeTab === 'allrounders' ? 'font-bold' : ''}
              onClick={() => setActiveTab('allrounders')}
            >
              All Rounders
            </button>
          </div>

          {/* Table Wrapper with Scroll */}
          <div className="overflow-y-auto mt-4 max-h-72 border rounded-md">
            <table className="w-full border-collapse">
              {/* Fixed Header */}
              <thead className="bg-gray-400 text-white sticky top-0">
                <tr>
                  <th className="py-2 px-4 text-left w-40">Name</th>
                  <th className="py-2 px-4 text-left w-56">University</th>
                  <th className="py-2 px-4 text-left w-28">Prize</th>
                  <th className="py-2 px-4 text-left w-24"></th>
                </tr>
              </thead>
              {/* Dynamic Table Body */}
              <tbody className="bg-gray-200">
                {filterData(
                  activeTab === 'batting'
                    ? battingStats
                    : activeTab === 'bowling'
                    ? bowlingStats
                    : allRoundersStats
                ).map((player, index) => (
                  <tr key={index} className="bg-gray-600 text-white border-b-2 border-white">
                    <td className="py-2 px-4 text-left w-40">{player.player}</td>
                    <td className="py-2 px-4 text-left w-56">{player.university}</td>
                    <td className="py-2 px-4 text-left w-28">{player.prize}</td>
                    <td className="py-2 px-4 text-left w-24">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleButtonClick(player.player)}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SelectTeam;