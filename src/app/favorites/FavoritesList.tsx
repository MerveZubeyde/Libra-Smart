"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../library/types";

export default function FavoritesList() {
  const favoriteBooks = useSelector(
    (state: RootState) => state.favorites.books
  );

  if (favoriteBooks.length === 0) {
    return <p>No favorite books yet.</p>;
  }

  return (
    <ul>
      {favoriteBooks.map((book: Book) => (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.year}</p>
        </li>
      ))}
    </ul>
  );
}
