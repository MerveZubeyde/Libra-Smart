"use client";

import { JSX } from "react";
import { useAuth } from "../app/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar(): JSX.Element {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/signin");
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] p-6 shadow-md text-white flex justify-between items-center">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] to-[#FFA500] hover:bg-gradient-to-l hover:from-[#FFA500] hover:to-[#4FD1C5] cursor-pointer transition-all duration-500">
        LibraSmart
      </h1>
      <div className="space-x-6 flex items-center">
        {user ? (
          <>
            <Link
              href="/home"
              className="text-lg font-semibold text-gray-300 hover:text-[#4FD1C5] hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/profile"
              className="text-lg font-semibold text-gray-300 hover:text-[#4FD1C5] hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
            >
              Profile
            </Link>
            <button
              onClick={handleSignOut}
              className="text-lg font-semibold hover:bg-[#FFA500] hover:text-white text-white px-4 py-2 rounded-md transition duration-300"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              href="/signin"
              className="text-lg font-semibold text-gray-300 hover:text-[#4FD1C5] hover:bg-gray-700 px-2 py-1 rounded-md transition duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-lg font-semibold text-gray-300 hover:text-[#4FD1C5] hover:bg-gray-700 px-2 py-1 rounded-md transition duration-300"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
