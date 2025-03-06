import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, FavoritesState } from "../app/types";

const initialState: FavoritesState = {
  books: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Book>) => {
      if (!state.books.some((book) => book.key === action.payload.key)) {
        state.books.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<{ key: string }>) => {
      state.books = state.books.filter(
        (book) => book.key !== action.payload.key
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
