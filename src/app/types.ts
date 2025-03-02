export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  cover: string;
  isbn: string;
  primary_isbn10: string;
}

export interface BookCardProps {
  book: Book;
}

export interface NavbarProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}
export interface BookCardProps {
  book: Book;
}

export interface BooksState {
  books: never[];
  status: string;
  error: string | null;
}

export interface FavoritesState {
  books: Book[];
}

export interface AuthState {
  user: string | null;
}
