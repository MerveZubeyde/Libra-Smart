"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiHome,
  HiHeart,
} from "react-icons/hi";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const isActive = (path: string) =>
    pathname === path ? "bg-[#FFA500] text-white" : "bg-gray-800 text-gray-300";

  return (
    <div className="relative">
      <motion.div
        animate={{ x: isOpen ? 0 : 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`absolute top-4 left-4 z-50 h-screen text-3xl text-gray-400 hover:text-white focus:outline-none ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <HiOutlineMenuAlt3 onClick={toggleSidebar} />
      </motion.div>

      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 100, damping: 50 }}
        className={`${
          isOpen ? "w-64" : "w-64"
        } h-full bg-gradient-to-r from-[#1A202C] to-[#2D3748] text-white border-r-2 border-gray-700 p-6 flex flex-col space-y-6 z-40`}
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-serif italic text-[#eeb947] leading-relaxed mb-8 text-center">
            <em>
              “Some books are so familiar that reading them is like being home
              again.”
            </em>{" "}
            ― Louisa May Alcott
          </p>
          <button
            onClick={toggleSidebar}
            className="text-3xl text-gray-400 hover:text-white focus:outline-none"
          >
            <HiOutlineX />
          </button>
        </div>

        <div className="mt-8 flex flex-col space-y-6">
          <button
            onClick={() => router.push("/library")}
            className={`flex items-center space-x-4 p-4 rounded-lg ${isActive(
              "/library"
            )} text-lg font-semibold hover:bg-[#4FD1C5]  hover:scale-105 transition-all duration-300`}
          >
            <HiHome size={20} />
            <span className="text-base">Library</span>
          </button>
          <button
            onClick={() => router.push("/favorites")}
            className={`flex items-center space-x-4 p-4 rounded-lg ${isActive(
              "/favorites"
            )} text-lg font-semibold hover:bg-[#4FD1C5] hover:scale-105 transition-all duration-300`}
          >
            <HiHeart size={20} />
            <span className="text-base">Favorites</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
