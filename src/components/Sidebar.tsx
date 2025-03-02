"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const isActive = (path: string) =>
    pathname === path ? "bg-blue-400" : "bg-gray-700";

  return (
    <div className="w-64 bg-background text-neutral border-3 border-zinc-300 h-screen p-4 flex flex-col space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Knowledge is Power</h3>
        <button onClick={toggleSidebar} className="text-2xl">
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
      <div className={`flex flex-col space-y-4 ${isOpen ? "block" : "hidden"}`}>
        <button
          onClick={() => router.push("/library")}
          className={`${isActive("/library")} text-slate-200 p-6 rounded`}
        >
          Library
        </button>
        <button
          onClick={() => router.push("/favorites")}
          className={`${isActive(
            "/favorites"
          )} text-slate-200 p-6 rounded-br-full hover:rounded-tr-full hover:bg-highlights`}
        >
          Favorites
        </button>
        <button
          onClick={() => router.push("/reviews")}
          className="text-slate-200 p-6 rounded-2xl"
        >
          Reviews
        </button>
      </div>
    </div>
  );
}
