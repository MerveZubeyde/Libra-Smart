"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchBooks } from "../../redux/bookSlice";
import { Book } from "./types";

export default function LibraryPage() {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const [loading, setLoading] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    dispatch(fetchBooks("") as any)
      .unwrap()
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    setFilteredBooks(
      books.filter((book: Book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [books, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Library</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for books..."
      />
      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button>Add to Favorites</button>
            </li>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
}
