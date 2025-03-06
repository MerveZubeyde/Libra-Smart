"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext";
import Sidebar from "../components/Sidebar";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/signin");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
