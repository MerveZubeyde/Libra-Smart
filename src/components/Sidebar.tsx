"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX, HiHome, HiHeart } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const isActive = (path: string) =>
    pathname === path
      ? "bg-[#FFA500] text-white"
      : "bg-gray-800 text-gray-300 hover:bg-[#4FD1C5] hover:text-white";

  return (
    <div className="relative">
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-4 left-4 z-50 text-3xl text-gray-400 hover:text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <HiOutlineMenuAlt3 />
        </motion.button>
      )}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        />
      )}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 100, damping: 50 }}
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-[#1A202C] to-[#2D3748] text-white border-r-2 border-gray-700 p-6 flex flex-col space-y-6 z-50`}
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
            onClick={() => {
              router.push("/library");
              setIsOpen(false);
            }}
            className={`flex items-center space-x-4 p-4 rounded-lg text-lg font-semibold transition-all duration-300 ${isActive(
              "/library"
            )}`}
          >
            <HiHome size={20} />
            <span className="text-base">Library</span>
          </button>
          <button
            onClick={() => {
              router.push("/favorites");
              setIsOpen(false);
            }}
            className={`flex items-center space-x-4 p-4 rounded-lg text-lg font-semibold transition-all duration-300 ${isActive(
              "/favorites"
            )}`}
          >
            <HiHeart size={20} />
            <span className="text-base">Favorites</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
