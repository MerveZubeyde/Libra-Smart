"use client";

import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

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
    <div className="flex items-center space-x-4">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="px-4 py-2 border rounded"
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
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Apply Filter
      </button>
    </div>
  );
}
