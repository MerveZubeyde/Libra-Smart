"use client";

import { useState } from "react";
import { logOut } from "../services/authService";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext";
import ErrorMessage from "../components/ErrorMessage";

export default function SignOut() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push("/signin");
    return null;
  }

  const handleSignOut = async () => {
    setError("");
    try {
      await logOut();
      router.push("/signin");
    } catch (err) {
      setError("Failed to sign out");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Out</h2>
      <button
        onClick={handleSignOut}
        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300"
      >
        Sign Out
      </button>
      <ErrorMessage message={error} />
    </div>
  );
}
