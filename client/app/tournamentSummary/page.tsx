'use client';

import { useState, useEffect } from 'react';
import NavBar from '../components/navBar'; // Import NavBar component

interface PlayerStats {
  position: number;
  player: string;
  runs?: number;
  wickets?: number;
}

const TournamentSummary = () => {
  const [activeTab, setActiveTab] = useState<'batting' | 'bowling'>('batting');
  const [totalRuns, setTotalRuns] = useState<number | null>(null);
  const [totalWickets, setTotalWickets] = useState<number | null>(null);
  const [battingStats, setBattingStats] = useState<PlayerStats[]>([]);
  const [bowlingStats, setBowlingStats] = useState<PlayerStats[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/tournament-stats'); // Replace with actual API endpoint
        const data = await response.json();
        setTotalRuns(data.totalRuns);
        setTotalWickets(data.totalWickets);
        setBattingStats(data.topBatters);
        setBowlingStats(data.topBowlers);
      } catch (error) {
        console.error('Error fetching tournament stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <NavBar /> {/* NavBar is at the top of the page */}

      <div className="p-8 flex justify-center">
        <div className="bg-gray-300 p-6 w-full max-w-3xl rounded-md">
          <h2 className="text-gray-400 text-lg mb-4">Tournament Summary</h2>
          <div className="bg-gray-400 p-4 rounded-md">
            <p>Total runs in the tournament: <strong>{totalRuns !== null ? totalRuns : 'Loading...'}</strong></p>
            <p>Total wickets in the tournament: <strong>{totalWickets !== null ? totalWickets : 'Loading...'}</strong></p>
          </div>

          <div className="mt-4">
            <button
              className={`mr-4 ${activeTab === 'batting' ? 'font-bold underline' : ''}`}
              onClick={() => setActiveTab('batting')}
            >
              Batting
            </button>
            <button
              className={`${activeTab === 'bowling' ? 'font-bold underline' : ''}`}
              onClick={() => setActiveTab('bowling')}
            >
              Bowling
            </button>
          </div>

          {activeTab === 'batting' && (
            <div className="bg-gray-400 p-4 mt-4 rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-500 text-white">
                    <th className="py-2 px-4">Position</th>
                    <th className="py-2 px-4">Player</th>
                    <th className="py-2 px-4">Runs</th>
                  </tr>
                </thead>
                <tbody>
                  {battingStats.map((player, index) => (
                    <tr key={index} className="bg-gray-600 text-white">
                      <td className="py-2 px-4 text-center">{player.position}</td>
                      <td className="py-2 px-4 text-center">{player.player}</td>
                      <td className="py-2 px-4 text-center">{player.runs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'bowling' && (
            <div className="bg-gray-400 p-4 mt-4 rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-500 text-white">
                    <th className="py-2 px-4">Position</th>
                    <th className="py-2 px-4">Player</th>
                    <th className="py-2 px-4">Wickets</th>
                  </tr>
                </thead>
                <tbody>
                  {bowlingStats.map((player, index) => (
                    <tr key={index} className="bg-gray-600 text-white">
                      <td className="py-2 px-4 text-center">{player.position}</td>
                      <td className="py-2 px-4 text-center">{player.player}</td>
                      <td className="py-2 px-4 text-center">{player.wickets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentSummary;
