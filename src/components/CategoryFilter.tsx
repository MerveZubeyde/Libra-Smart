"use client";

import { useState } from "react";
import { CategoryFilterProps } from "../app/types";

export default function CategoryFilter({
  categories,
  onFilterChange,
}: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleApplyFilter = () => {
    onFilterChange(selectedCategory);
  };

  return (
    <div className="flex justify-center space-x-6 text-black">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] transition duration-200"
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={handleApplyFilter}
        className="px-6 py-3 bg-[#4FD1C5] text-white rounded-lg shadow-md hover:bg-[#38b2ac] focus:outline-none focus:ring-2 focus:ring-[#38b2ac] transition-all duration-300"
      >
        Apply Filter
      </button>
    </div>
  );
}
