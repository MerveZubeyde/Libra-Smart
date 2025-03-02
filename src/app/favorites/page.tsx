"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../types";
import { removeFavorite } from "../../redux/favoritesSlice";

export default function FavoritesList() {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector(
    (state: RootState) => state.favorites.books
  );

  if (favoriteBooks.length === 0) {
    return <p>No favorite books yet.</p>;
  }

  const handleRemoveFavorite = (book: Book) => {
    dispatch(removeFavorite({ primary_isbn10: book.primary_isbn10 }));
  };

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Your Favorite Books</h2>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books added yet.</p>
      ) : (
        <ul className="space-y-4">
          {favoriteBooks.map((book) => (
            <li
              key={book.primary_isbn10}
              className="border-b border-gray-200 pb-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-sm">{book.author}</p>
                  <p className="text-sm">{book.year}</p>
                </div>
                <button
                  onClick={() => handleRemoveFavorite(book)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Remove from favorites
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
