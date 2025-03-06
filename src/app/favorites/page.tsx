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
    <div className="w-full p-6 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Your Favorite Books
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {favoriteBooks.map((book) => (
          <div
            key={book.key}
            className="flex justify-between items-center p-6 bg-gradient-to-br from-gray-50 to-gray-250 rounded-lg  hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col space-y-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600 mb-0">{book.authorname}</p>
              <p className="text-sm text-gray-500 mt-0">{book.first_publish_year}</p>
            </div>
            <button
                  onClick={() => handleRemoveFavorite(book)}
                  className="flex items-center justify-center p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200"
                >
                  <HiOutlineX className="text-2xl" />
                </button>
          </div>
        ))}
      </div>
    </div>
  );
}
