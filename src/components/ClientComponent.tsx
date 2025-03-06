"use client";

import { useAuth } from "../app/context/AuthContext";
import Sidebar from "../components/Sidebar";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-1">
      {user && <Sidebar />} 
      <main className="flex-1 p-6">{children}</main>
      
    </div>
  );
}
