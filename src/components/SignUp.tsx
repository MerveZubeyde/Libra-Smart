"use client";

import { useState } from "react";
import { signUp } from "../services/authService";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      alert("Sign-up successful!");
      router.push("/signin");
    } catch (err) {
      setError("Failed to sign up");
    }
  };

  return (
    <div className="flex flex-col border justify-start items-center space-y-6 w-[70%] mx-auto  bg-[#1A202C] py-28 rounded-lg shadow-2xl">
      <div className="w-[100%] flex flex-col items-center space-y-3 mb-4">
        <h1 className="text-2xl font-bold text-white">Sign Up</h1>
        <hr className="w-1/4 border-t border-[#FFA500]" />
        <p className="text-gray-400 text-sm mb-4">
          Create an account to get started
        </p>
      </div>

      <div className="w-[100%] flex justify-center">
        <form onSubmit={handleSignUp} className="w-[100%] max-w-md space-y-6">
          <input
            className="w-full p-4 rounded-lg border text-gray-300 border-gray-700 bg-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition duration-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            className="w-full p-4 text-gray-300 rounded-lg border border-gray-700 bg-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition duration-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button
            className="w-full p-4 rounded-lg text-lg font-semibold bg-[#2D3748] text-white border-2 border-transparent shadow-2xl bg-clip-padding focus:outline-none focus:ring-4 focus:ring-[#FFA500] transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#FFA500] hover:bg-transparent"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>

      {error && <p className="text-red-500 text-sm mt-6">{error}</p>}
    </div>
  );
}
