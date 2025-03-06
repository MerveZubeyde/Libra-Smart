import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooksFromAPI } from "../services/bookService";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (query: string) => {
    return await fetchBooksFromAPI(query);
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default bookSlice.reducer;
