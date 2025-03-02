import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../app/types";

interface FavoritesState {
  books: Book[];
}

const initialState: FavoritesState = {
  books: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Book>) => {
      if (
        !state.books.some(
          (book) => book.primary_isbn10 === action.payload.primary_isbn10
        )
      ) {
        state.books.push(action.payload);
      }
    },
    removeFavorite: (
      state,
      action: PayloadAction<{ primary_isbn10: string }>
    ) => {
      state.books = state.books.filter(
        (book) => book.primary_isbn10 !== action.payload.primary_isbn10
      );
      console.log("Removing book with ISBN:", action.payload.primary_isbn10);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
