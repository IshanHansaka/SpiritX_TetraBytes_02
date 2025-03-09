"use client";

import React, { ReactNode } from "react";


interface ProfileLayoutProps {
  children: ReactNode; // Define children prop explicitly
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-blue-300 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        {/* Header */}
        <h2 className="text-gray-800 text-xl font-semibold mb-2">Player Profile</h2>

        {/* Profile Card */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          {/* Top Section */}
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-gray-400 rounded-md"></div>
            <div>
              <h1 className="text-2xl font-bold">Joe Root</h1>
              <p className="text-gray-600">University of Moratuwa</p>
            </div>
          </div>

          {/* Children (Info Table) */}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;