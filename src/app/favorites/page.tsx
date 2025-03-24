"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Book } from "../types";
import { removeFavorite } from "../../redux/favoritesSlice";
import { HiOutlineX } from "react-icons/hi";

export default function FavoritesList() {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector(
    (state: RootState) => state.favorites.books
  );

  if (favoriteBooks.length === 0) {
    return (
      <div className="w-full p-6 flex justify-center items-center bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg">
        <p className="text-xl font-semibold text-gray-600">
          No favorite books yet.
        </p>
      </div>
    );
  }

  const handleRemoveFavorite = (book: Book) => {
    dispatch(removeFavorite({ key: book.key }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-100 via-gray-300 to-blue-300 rounded-lg sm:bg-transparent">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        Your Favorite Books
      </h2>
      <div className="space-y-4">
        {favoriteBooks.map((book) => (
          <div
            key={book.key}
            className="relative flex flex-col sm:flex-row justify-between items-start p-4 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 sm:bg-transparent sm:p-2 sm:space-x-4"
          >
            <div className="text-center sm:text-left w-full">
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600">{book.authorname}</p>
              <p className="text-sm text-gray-500">{book.first_publish_year}</p>
            </div>
            <button
              onClick={() => handleRemoveFavorite(book)}
              className="absolute top-3 right-3 sm:static p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200"
            >
              <HiOutlineX className="text-2xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
