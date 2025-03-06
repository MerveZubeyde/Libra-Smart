"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "../services/authService";
import { useAuth } from "../app/context/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      router.push("/home");
    } catch (err) {
      setError("Failed to sign in");
    }
  };

  return (
    <div className="flex flex-col justify-start items-center space-y-6 w-full max-w-4xl mx-auto bg-[#1A202C] py-28 rounded-lg shadow-2xl">
      <div className="w-full flex flex-col items-center space-y-3 mb-4">
        <h1 className="text-2xl font-bold text-white">Sign In</h1>
        <hr className="w-1/4 border-t border-[#4FD1C5]" />
        <p className="text-gray-400 text-sm mb-4">
          Please enter your credentials to log in
        </p>
      </div>
      <div className="w-full flex justify-center">
        <form onSubmit={handleSignIn} className="w-full max-w-md space-y-6">
          <input
            className="w-full p-4 rounded-lg border text-gray-300 border-gray-700 bg-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] transition duration-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="w-full p-4 text-gray-300 rounded-lg border border-gray-700 bg-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] transition duration-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button
            className="w-full p-4 rounded-lg text-lg font-semibold bg-[#2D3748] text-white border-2 border-transparent shadow-2xl bg-clip-padding focus:outline-none focus:ring-4 focus:ring-[#4FD1C5] transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#4FD1C5] hover:bg-transparent"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
      {error && <p className="text-red-500 text-sm mt-6">{error}</p>}
    </div>
  );
}
