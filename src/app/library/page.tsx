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

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error fetching books.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="flex text-4xl justify-center font-bold p-6">Library</h1>
      <CategoryFilter
        categories={categories}
        onFilterChange={handleFilterChange}
      />
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-10 m-5">
        {books.length > 0 ? (
          books.map((book: Book) => (
            <li key={book.key} className="flex justify-center">
              <BookCard book={book} />
            </li>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
}
