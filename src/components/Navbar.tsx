"use client";

import { JSX, useState } from "react";
import { useAuth } from "../app/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar(): JSX.Element {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) return <div>Loading...</div>;

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/signin");
    } catch {}
  };

  return (
    <nav className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] p-6 shadow-md text-white flex justify-between items-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] to-[#FFA500] hover:bg-gradient-to-l hover:from-[#FFA500] hover:to-[#4FD1C5] cursor-pointer transition-all duration-500">
        LibraSmart
      </h1>
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>
      <div
        className={`absolute top-16 left-0 w-full bg-[#1A202C] shadow-md sm:static sm:flex sm:bg-transparent sm:shadow-none sm:w-auto sm:space-x-6 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {user ? (
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
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
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
            <Link
              href="/signin"
              className="text-lg font-semibold text-gray-300 hover:text-[#4FD1C5] hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-lg font-semibold text-gray-300 hover:text-[#4FD1C5] hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
