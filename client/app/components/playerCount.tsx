import React from 'react';

interface PlayersSelectedProps {
  selected: number;
  total: number;
}

const PlayersSelected: React.FC<PlayersSelectedProps> = ({ selected, total }) => {
  return (
    <div className="fixed top-20 right-20 m-4 players-selected bg-green-500 p-2 rounded-md text-white w-[150px] text-center text-sm">
      <p>Players selected: {selected}/{total}</p>
    </div>
  );
};

export default PlayersSelected;