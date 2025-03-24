"use client";

import { useAuth } from "../context/AuthContext";
import Link from "next/link";

export default function HomePage() {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-300">
        Loading...
      </div>
    );

  const userInitial = user
    ? user.displayName?.charAt(0) ?? user.email?.charAt(0) ?? ""
    : "";

  return (
    <div className="min-h-screen flex items-start justify-center pt-20 px-4 sm:px-6">
      <div className="w-full max-w-2xl bg-gradient-to-r from-[#1A202C] to-[#2D3748] shadow-xl rounded-xl p-8 text-white flex flex-col items-center space-y-10 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-[#4FD1C5] to-[#FFA500] text-transparent bg-clip-text">
            LibraSmart
          </span>
        </h1>
        {user && (
          <h2 className="text-2xl text-gray-300">
            Welcome,{" "}
            <span className="text-white italic font-semibold">
              {user.displayName ?? user.email ?? "Guest"}
            </span>
            !
          </h2>
        )}
        <p className="text-base sm:text-lg text-gray-300 px-4">
          What kind of books would you like to explore today? <br />
          <span className="text-[#FFA500] font-semibold">
            Dive in and start your journey!
          </span>
        </p>
        <div className="mt-4">
          <Link
            href="/library"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold bg-[#4FD1C5] text-white hover:bg-[#38B2AC] focus:ring-4 focus:ring-[#4FD1C5] transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Explore Library
          </Link>
        </div>
      </div>
    </div>
  );
}
