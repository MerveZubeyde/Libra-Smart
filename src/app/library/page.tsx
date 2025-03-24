"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchBooks } from "../../redux/bookSlice";
import { Book } from "../types";
import BookCard from "../../components/BookCard";
import CategoryFilter from "../../components/CategoryFilter";

export default function LibraryPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { books, status } = useSelector(
    (state: RootState) => state.books as { books: Book[]; status: string }
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = ["fiction", "nonfiction", "science", "history", "mystery"];

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchBooks(selectedCategory));
    } else {
      dispatch(fetchBooks(""));
    }
  }, [dispatch, selectedCategory]);
  console.log(books);

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
  };

  const renderLoadingPlaceholders = () => (
    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 sm:p-8">
      {new Array(6).fill(null).map((_, index) => (
        <li key={index} className="flex justify-center">
          <div className="w-full sm:w-[260px] h-[420px] bg-gray-300 rounded-lg animate-pulse shadow-md"></div>
        </li>
      ))}
    </ul>
  );

  if (status === "loading") {
    return renderLoadingPlaceholders();
  }

  if (status === "failed") {
    return <p>Error fetching books.</p>;
  }

  return (
    <div className="p-6 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Library
      </h1>
      <CategoryFilter
        categories={categories}
        onFilterChange={handleFilterChange}
      />
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 sm:p-8">
        {books.length > 0 ? (
          books.map((book: Book) => (
            <li key={book.key} className="flex justify-center">
              <BookCard book={book} />
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600 mt-6">No books found.</p>
        )}
      </ul>
    </div>
  );
}
