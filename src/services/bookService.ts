export const fetchBooksFromAPI = async (query: string) => {
  const url = query
    ? `https://api.nytimes.com/svc/books/v3/reviews.json?title=${query}&api-key=${API_KEY}`
    : `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data.results ? data.results.books || data.results : [];
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};
