"use client";

import { useState } from "react";
import { Filter, User } from "lucide-react";
import UserNavBar from "@/components/userNavBar";

export default function UserHome() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [players, setPlayers] = useState([
    { name: "Chamika Chandimal", category: "Batsman", uni: "University of the Visual & Performing Arts" },
    { name: "Dimuth Dhananjaya", category: "All-Rounder", uni: "University of the Visual & Performing Arts" },
    { name: "Avishka Mendis", category: "All-Rounder", uni: "Eastern University" },
    { name: "Danushka Kumara", category: "Batsman", uni: "University of the Visual & Performing Arts" },
    { name: "Praveen Vandersay", category: "Batsman", uni: "Eastern University" },
    { name: "Niroshan Mathews", category: "Batsman", uni: "University of the Visual & Performing Arts" },
    { name: "Chaturanga Gunathilaka", category: "Bowler", uni: "University of Moratuwa" },
    { name: "Lahiru Rathnayake", category: "Batsman", uni: "University of Ruhuna" },
    { name: "Jeewan Thirimanne", category: "Batsman", uni: "University of Jaffna" },
    { name: "Kalana Samarawickrama", category: "Batsman", uni: "Eastern University" },
    { name: "Lakshan Vandersay", category: "All-Rounder", uni: "University of the Visual & Performing Arts" },
    { name: "Roshen Samarawickrama", category: "Bowler", uni: "University of Kelaniya" },
    { name: "Sammu Sandakan", category: "Bowler", uni: "University of Ruhuna" },
    { name: "Kalana Jayawardene", category: "Bowler", uni: "University of Jaffna" },
    { name: "Binura Samarawickrama", category: "Bowler", uni: "University of the Visual & Performing Arts" },
    { name: "Dasun Thirimanne", category: "Bowler", uni: "Eastern University" },
    { name: "Angelo Samarawickrama", category: "Batsman", uni: "University of Kelaniya" },
    { name: "Nuwan Jayawickrama", category: "Batsman", uni: "University of Ruhuna" },
    { name: "Kusal Dhananjaya", category: "Batsman", uni: "South Eastern University" },
    { name: "Chamika Bandara", category: "Batsman", uni: "Eastern University" },
    { name: "Dilruwan Shanaka", category: "Batsman", uni: "University of Peradeniya" },
    { name: "Danushka Jayawickrama", category: "All-Rounder", uni: "University of Peradeniya" },
    { name: "Charith Shanaka", category: "Batsman", uni: "University of Colombo" },
    { name: "Asela Nissanka", category: "Batsman", uni: "University of Sri Jayewardenepura" },
    { name: "Wanindu Hasaranga", category: "Bowler", uni: "University of Colombo" },
    { name: "Asela Vandersay", category: "Bowler", uni: "University of the Visual & Performing Arts" },
    { name: "Pathum Fernando", category: "Batsman", uni: "University of Peradeniya" },
    { name: "Angelo Kumara", category: "Batsman", uni: "Eastern University" },
    { name: "Danushka Rajapaksa", category: "Batsman", uni: "University of Peradeniya" },
    { name: "Suranga Shanaka", category: "Bowler", uni: "South Eastern University" },
    { name: "Pathum Dhananjaya", category: "Batsman", uni: "Eastern University" },
    { name: "Asela Asalanka", category: "Batsman", uni: "South Eastern University" },
    { name: "Minod Rathnayake", category: "Bowler", uni: "University of Kelaniya" },
    { name: "Binura Lakmal", category: "Batsman", uni: "University of Kelaniya" },
    { name: "Praveen Asalanka", category: "Batsman", uni: "Eastern University" },
    { name: "Angelo Jayawardene", category: "Batsman", uni: "University of Jaffna" },
    { name: "Kamindu Asalanka", category: "Bowler", uni: "University of Moratuwa" },
    { name: "Sadeera Rajapaksa", category: "All-Rounder", uni: "University of Jaffna" },
    { name: "Sandakan Hasaranga", category: "Batsman", uni: "University of Kelaniya" },
    { name: "Bhanuka Rajapaksa", category: "All-Rounder", uni: "University of Moratuwa" },
    { name: "Chamika Rajapaksa", category: "Batsman", uni: "University of Ruhuna" },
    { name: "Kamindu Lakmal", category: "Batsman", uni: "University of the Visual & Performing Arts" },
    { name: "Lakshan Gunathilaka", category: "Bowler", uni: "University of Peradeniya" },
    { name: "Tharindu Thirimanne", category: "Batsman", uni: "South Eastern University" },
    { name: "Dinesh Samarawickrama", category: "Batsman", uni: "University of Jaffna" },
    { name: "Suranga Sandakan", category: "Batsman", uni: "University of Moratuwa" },
    { name: "Sandakan Dickwella", category: "Batsman", uni: "University of Jaffna" },
    { name: "Sammu Rajapaksa", category: "Batsman", uni: "University of Ruhuna" },
    { name: "Suranga Bandara", category: "Bowler", uni: "University of Moratuwa" },
    { name: "Tharindu Embuldeniya", category: "All-Rounder", uni: "University of the Visual & Performing Arts" },
  ]);
  const [newPlayer, setNewPlayer] = useState({ name: "", category: "", uni: "" });

  const handleAddPlayer = () => {
    if (newPlayer.name && newPlayer.category && newPlayer.uni) {
      setPlayers([...players, newPlayer]);
      setNewPlayer({ name: "", category: "", uni: "" });
    }
  };

  const filteredPlayers = players.filter((player) =>
    (selectedCategory ? player.category === selectedCategory : true) &&
    (selectedUniversity ? player.uni.includes(selectedUniversity) : true)
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 relative">
      <UserNavBar />

      <header className="bg-gray-200 text-center py-15 shadow-md">
        <h1 className="text-5xl font-bold italic">SPIRIT11</h1>
        <p className="text-base text-gray-600">Inter-University Cricket Tournament</p>
      </header>

      <div className="p-6 relative">
        <div className="flex justify-between items-center mb-4 relative">
          <button onClick={() => setFilterOpen(!filterOpen)} className="bg-gray-300 px-3 py-1 rounded flex items-center cursor-pointer">
            <Filter className="w-4 h-4 mr-1" /> Filter
          </button>
          {filterOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md border z-50 w-60">
              <p className="px-4 py-2 font-semibold">Category</p>
              {['Bowler', 'Batsman', 'All-Rounder'].map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className="block px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                  {cat}
                </button>
              ))}
              <p className="px-4 py-2 font-semibold">University</p>
              {['University of Moratuwa', 'University of Ruhuna', 'University of Kelaniya', 'University of the Visual & Performing Arts', 'Eastern University', 'University of Jaffna', 'University of Peradeniya', 'South Eastern University'].map((uni) => (
                <button key={uni} onClick={() => setSelectedUniversity(uni)} className="block px-4 py-2 hover:bg-gray-100 w-full cursor-pointer">
                  {uni}
                </button>
              ))}
              <button onClick={() => { setSelectedCategory(""); setSelectedUniversity(""); }} className="block px-4 py-2 bg-red-500 text-white w-full cursor-pointer rounded-b">
                Clear Filters
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white p-4 shadow-md rounded-md relative z-10">
          {filteredPlayers.map((player, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md flex items-center justify-between relative">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold">{player.name}</p>
                  <p className="text-xs text-gray-500">{player.category}</p>
                  <p className="text-xs text-gray-500">{player.uni}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
