"use client";

import { useState } from "react";
import { logOut } from "../services/authService";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext";

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
    <div>
      <h2>Sign Out</h2>
      <button onClick={handleSignOut}>Sign Out</button>
      {error && <p>{error}</p>}
    </div>
  );
}
