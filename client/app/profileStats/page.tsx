export default function ProfileLayout() {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          {/* Header */}
          <h2 className="text-gray-400 text-xl font-semibold mb-2">Player Profile</h2>
  
          {/* Profile Card */}
          <div className="bg-gray-300 p-6 rounded-lg shadow-md">
            {/* Top Section */}
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 bg-gray-400 rounded-md"></div>
              <div>
                <h1 className="text-2xl font-bold">Joe Root</h1>
                <p className="text-gray-600">University of Moratuwa</p>
              </div>
            </div>
  
            {/* Tabs */}
            <div className="mt-4 border-b-2 border-gray-400 flex space-x-4">
            <span className="text-gray-500 cursor-pointer">Overview</span>
              <span className="text-black font-semibold border-b-2 border-black pb-2">Stats</span>
            </div>
  
            {/* Info Table */}
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Player Name</span>
                  <span>Joe Root</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">University</span>
                  <span>University of Moratuwa</span>
                </div>
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
          </div>
        </div>
      </div>
    );
  }
  