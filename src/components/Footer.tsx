"use client";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          &copy; {new Date().getFullYear()} LibraSmart. All rights reserved.
        </p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
