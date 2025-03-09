'use client';

import { useState, useEffect } from 'react';
import UserNavBar from '@/components/userNavBar';

interface Player {
  id: number;
  name: string;
  university: string;
  category: string;
  price: number;
}

interface Budget {
  totalBudget: number;
  remainingBudget: number;
  totalSpent: number;
}

const Budget = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [budget, setBudget] = useState<Budget>({
    totalBudget: 0,
    remainingBudget: 0,
    totalSpent: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setPlayers(data.players);
        setBudget(data.budget);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="bg-gray-200 min-h-screen p-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <UserNavBar /> {/* NavBar is at the top of the page */}

      <div className="p-8 flex justify-center">
        <div className="bg-white p-6 w-full max-w-3xl rounded-md">
          <h2 className="text-gray-600 text-lg mb-4">Budget Overview</h2>
          <div className="bg-gray-200 p-4 rounded-md text-gray-600">
            <p className="mb-3">Total Budget: <strong>Rs. {budget.totalBudget.toLocaleString()}</strong></p>
            <p className="mb-3">Remaining Budget: <strong>Rs. {budget.remainingBudget.toLocaleString()}</strong></p>
            <p className="mb-3">Total Spent: <strong>Rs. {budget.totalSpent.toLocaleString()}</strong></p>
            <p className="mb-3">Players selected: <strong>{players.length}/11</strong></p>
          </div>

          <div className="mt-4">
            <h3 className="text-gray-600 text-lg mb-4">Selected Players</h3>
            <table className="w-full border-separate" style={{ borderSpacing: '0 4px' }}>
              <thead>
                <tr className="bg-gray-400 text-white">
                  <th className="py-2 px-4 text-left">Player Name</th>
                  <th className="py-2 px-4 text-left">University</th>
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.id} className="bg-gray-600 text-white">
                    <td className="py-2 px-4 text-left">{player.name}</td>
                    <td className="py-2 px-4 text-left">{player.university}</td>
                    <td className="py-2 px-4 text-left">{player.category}</td>
                    <td className="py-2 px-4 text-left">Rs. {player.price.toLocaleString()}</td>
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

export default Budget;