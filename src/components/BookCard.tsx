
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import { BookCardProps } from "../app/types";

export default function BookCard({ book }: BookCardProps) {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector(
    (state: RootState) => state.favorites.books
  );
  const isFavorite = favoriteBooks.some(
    (favBook) => favBook.primary_isbn10 === book.primary_isbn10
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ primary_isbn10: book.primary_isbn10 }));
    } else {
      dispatch(addFavorite(book));
    }
  };

  return (
    <div className="relative h-80 w-60 group border border-gray-200 rounded-lg p-4">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p className="text-sm">{book.author}</p>
          <p className="text-sm">{book.year}</p>
        </div>
        {!isFavorite ? (
          <button
            onClick={handleToggleFavorite}
            className="w-full px-4 py-2 mt-auto rounded font-semibold transition bg-blue-500 text-white hover:bg-blue-600"
          >
            Add to favorites
          </button>
        ) : (
          <p className="w-full mt-auto text-center text-green-600 font-semibold">
            In Your List
          </p>
        )}
      </div>
    </div>
  );
}
