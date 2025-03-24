export interface Book {
  key: string;
  title: string;
  authorname: string[];
  first_publish_year: number;
  cover_edition_key?: string;
  authors?: { name: string }[];
}

export interface BookCardProps {
  book: Book;
}

export interface NavbarProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

export interface BooksState {
  books: Book[];
  status: string;
  error: string | null;
}

export interface FavoritesState {
  books: Book[];
}

export interface AuthState {
  user: string | null;
}

export interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

export interface SignOutSuccess {
  message: string;
}

export interface SignOutError {
  error: Error;
}

export interface User {
  User: string;
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
}

export interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface AuthContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  borderColor: string;
}

export interface ErrorMessageProps {
  message: string;
}
