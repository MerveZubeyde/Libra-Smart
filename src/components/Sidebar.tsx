"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <h3>Knowledge is Power</h3>
      <ul>
        <li>
          <Link href="/library">Library</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
          <Link href="/rewiews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
