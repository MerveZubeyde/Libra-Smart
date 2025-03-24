import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StoreProvider from "../redux/storeProvider";
import { AuthProvider } from "../app/context/AuthContext";
import ClientComponent from "../components/ClientComponent";

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
          <AuthProvider>
            <Navbar />
            <ClientComponent>
              <main className="container flex-1">{children}</main>
            </ClientComponent>
            <Footer />
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
