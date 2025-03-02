import { useSelector, useDispatch as useReduxDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchBooks } from "../../redux/bookSlice";
import { useState } from "react";
import CategoryFilter from "../../components/CategoryFilter";
import { RootState } from "../../redux/store";
import { Book } from "../types";

const categories = ["Fiction", "Non-Fiction", "Science", "History"];

const HomePage = () => {
  const dispatch: AppDispatch = useReduxDispatch();
  const [filteredCategory, setFilteredCategory] = useState("");

  const books = useSelector((state: RootState) => state.books.books) as Book[];
  const status = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);

  const handleFilterChange = (category: string) => {
    setFilteredCategory(category);
    dispatch(fetchBooks(category));
  };

  return (
    <div>
      <h1>Welcome to LibraSmart</h1>
      <CategoryFilter
        categories={categories}
        onFilterChange={handleFilterChange}
      />
      {status === "loading" && <p>Loading books...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {books.map((book, index) => (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
("use client");
