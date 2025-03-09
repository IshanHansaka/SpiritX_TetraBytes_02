'use client';

import { useEffect, useState } from 'react';
import Login from "./auth/Login";
import AdminHome from "./pages/AdminHome";
import UserHome from './pages/UserHome';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token) {
      setIsAuthenticated(true);
      if (role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <main>
      {isAdmin ? <AdminHome /> : <UserHome />}
    </main>
  );
}
