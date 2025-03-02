"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? "text-blue-400" : "text-slate-200";

  return (
    <nav className="w-full bg-gray-800 py-6 px-8 shadow-md flex justify-between items-center">
      <h1
        className="text-4xl font-bold cursor-pointer text-slate-200 hover:text-gray-400 transition"
        onClick={() => router.push("/")}
      >
        LibraSmart
      </h1>
      <div className="flex gap-8">
        <button
          onClick={() => router.push("/homepage")}
          className={`${isActive("/homepage")} hover:text-gray-400 transition`}
        >
          Home
        </button>
        <button
          onClick={() => router.push("/searchbar")}
          className={`${isActive("/searchbar")} hover:text-gray-400 transition`}
        >
          Search
        </button>
        <button
          onClick={() => router.push("/signout")}
          className="text-slate-200 hover:text-gray-400 transition"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
