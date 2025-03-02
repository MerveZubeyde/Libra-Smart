"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchBooks } from "../../redux/bookSlice";
import { Book } from "../types";
import BookCard from "../../components/BookCard";

export default function LibraryPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { books, status } = useSelector(
    (state: RootState) => state.books as { books: Book[]; status: string }
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(fetchBooks(""));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (books.length > 0) {
      console.log("Books:", books);
      books.forEach((book) => console.log(book.id));
    } else {
      console.log("No books found or books array is empty.");
    }
  }, [books]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error fetching books.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold p-6">Library</h1>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-10 m-5">
        {books.length > 0 ? (
          books.map((book: Book) => {
            const key = book.id ?? book.title;
            return (
              <li key={key} className="flex justify-center">
                <BookCard book={book} />
              </li>
            );
          })
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
}
