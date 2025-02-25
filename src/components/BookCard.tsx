"use client";

import { Book } from "../app/library/types";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <button>Add to favorites</button>
    </div>
  );
}
