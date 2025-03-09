const PlayerProfile = () => {
  return (
    <div>
      {/* Tabs */}
      <div className="my-4 border-b-2 border-gray-400 flex space-x-4">
            <span className="text-black font-semibold border-b-2 border-black pb-2">Overview</span>
            <span className="text-gray-500 cursor-pointer">Stats</span>
        </div>
      
      {/* Info Table */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-semibold">Category</span>
          <span>All - Rounder</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Batting Ranking</span>
          <span>5</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Bowling Ranking</span>
          <span>36</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Value</span>
          <span>Rs. 50,000/=</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Points</span>
          <span>50</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
