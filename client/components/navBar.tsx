'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-blue-600">
          Spirit11
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-black hover:text-blue-600">Players</Link>
          <Link href="/playerStats" className="text-black hover:text-blue-600">Player Stats</Link>
          <Link href="/tournamentSummary" className="text-black hover:text-blue-600">Tournament Summary</Link>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md border border-red-600 transition-all duration-300 hover:bg-transparent hover:text-red-600">
            Log Out
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Only visible when toggled */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/" className="text-black hover:text-blue-600">All Players</Link>
          <Link href="/playerStats" className="text-black hover:text-blue-600">Player Stats</Link>
          <Link href="/tournamentSummary" className="text-black hover:text-blue-600">Tournament Summary</Link>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md border border-red-600 transition-all duration-300 hover:bg-transparent hover:text-red-600">
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
