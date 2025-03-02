import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import StoreProvider from "../redux/storeProvider";

export const metadata: Metadata = {
  title: "LibraSmart - Smart Library",
  description: "Your personal smart library to track your favorite books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground flex flex-col min-h-screen">
        <StoreProvider>
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
