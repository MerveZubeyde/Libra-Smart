"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>LibraSmart</h1>
      <Link href="/homepage">Home</Link>
      <Link href="/searchbar">Search</Link>
      <Link href="/signout">Sign Out</Link>
    </nav>
  );
}
