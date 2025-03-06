"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import { Book } from "../app/types";

export default function BookCard({ book }: { book: Book }) {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector(
    (state: RootState) => state.favorites.books
  );
  const isFavorite = favoriteBooks.some((favBook) => favBook.key === book.key);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ key: book.key }));
    } else {
      dispatch(addFavorite(book));
    }
  };

  const coverUrl = book.cover_edition_key
    ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`
    : "https://openlibrary.org/images/icons/avatar_book-sm.png";

  const authorName =
    book.authors && book.authors.length > 0
      ? book.authors[0].name
      : "Unknown Author";

  return (
    <div className="relative group border-spacing-1 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-[280px] md:w-[320px] h-[450px] bg-gradient-to-bl from-gray-300 to-gray-600 mb-6">
      <div className="flex flex-col p-4 h-full justify-between space-y-4">
        <h2 className="text-l font-bold text-center mb-10 text-gray-900 line-clamp-2">
          {book.title}
        </h2>
        <div className="flex justify-center mb-3 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-40 h-48 flex justify-center items-center">
            <img
              src={coverUrl}
              alt={book.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-sm font-bold text-gray-700 text-center mb-2">
          {authorName}
        </p>
        <p className="text-sm font-serif text-gray-600 text-center mb-4">
          {book.first_publish_year || "N/A"}
        </p>
        <div className="flex justify-center mt-auto space-x-2">
          {!isFavorite ? (
            <button
              onClick={handleToggleFavorite}
              className="w-full px-6 py-3 rounded-lg font-semibold text-[#4FD1C5] border-4 border-[#4FD1C5] bg-transparent hover:bg-[#4FD1C5] hover:text-white hover:shadow-2xl focus:outline-none transition-all duration-300 transform hover:scale-105"
            >
              Add to favorites
            </button>
          ) : (
            <p className="w-full min-h-[48px] flex items-center justify-center text-[#FFA500] font-semibold text-lg">
              In Your List
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
