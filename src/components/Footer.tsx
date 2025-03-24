"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (currentYear === null) {
    return null;
  }
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 text-center">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-2">
        <p className="text-sm">
          &copy; {currentYear}
          <span className="text-white font-semibold">LibraSmart</span>. All
          rights reserved.
        </p>
        <div className="flex space-x-4 text-sm">
          <a
            href="/privacy-policy"
            className="hover:text-white transition duration-300"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="/terms-of-service"
            className="hover:text-white transition duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
