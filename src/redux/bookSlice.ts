import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (query: string) => {
    const response = await fetch(`${API_URL}${query}&key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();
    return data.items || [];
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
