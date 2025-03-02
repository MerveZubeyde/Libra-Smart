import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import { Book } from "../app/types";
import favoritesReducer from "./favoritesSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
});

export type RootState = {
  books: {
    books: never[];
    status: string;
    error: string | null;
  };
  favorites: {
    books: Book[];
  };
  auth: {
    user: string | null;
  };
};

export type AppDispatch = typeof store.dispatch;
