"use client";

import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { User } from "../types";

export default function HomePage() {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-300">
        Loading...
      </div>
    );

  const userInitial = user
    ? user.displayName?.charAt(0) ?? user.email?.charAt(0) ?? ""
    : "";

  return (
    <div className="min-h-screen flex items-start  pt-20 mx-auto sm:max-w-3xl">
      <div className="w-full sm:max-w-2xl bg-gradient-to-r from-[#1A202C] to-[#2D3748] shadow-xl rounded-xl p-8 text-white flex flex-col items-center space-y-10">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#4FD1C5] to-[#FFA500] text-transparent bg-clip-text">
            LibraSmart
          </span>
        </h1>
        {user && (
          <div className="flex flex-col items-center mt-4 space-y-6">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-4 border-[#4FD1C5] shadow-xl"
              />
            ) : (
              <div className="w-24 h-24 bg-gradient-to-r from-[#1A202C] to-[#2D3748] rounded-full flex items-center justify-center text-3xl font-semibold text-white">
                {user.displayName?.charAt(0) ?? user.email?.charAt(0) ?? ""}
              </div>
            )}
            <h2 className="text-2xl text-gray-300 mt-4 text-center">
              Welcome,{" "}
              <span className="text-white italic font-semibold">
                {user.displayName ?? user.email ?? "Guest"}
              </span>
              !
            </h2>
          </div>
        )}
        <p className="text-lg text-gray-300 text-center mt-4">
          What kind of books would you like to explore today? <br></br>
          <span className="text-[#FFA500] font-semibold">
            Dive in and start your journey!
          </span>
        </p>
        <div className="mt-6">
          <Link
            href="/library"
            className="inline-block px-8 py-4 rounded-lg text-lg font-semibold bg-[#4FD1C5] text-white hover:bg-[#38B2AC] focus:ring-4 focus:ring-[#4FD1C5] transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Explore Library
          </Link>
        </div>
      </div>
    </div>
  );
}
