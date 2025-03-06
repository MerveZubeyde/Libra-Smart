export const fetchBooksFromAPI = async (query: string) => {
  const url = query
    ? `https://openlibrary.org/subjects/${query}.json?limit=10`
    : `https://openlibrary.org/subjects/fiction.json?limit=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.works || data.docs || [];
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};
