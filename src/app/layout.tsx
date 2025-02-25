import { Provider } from "react-redux";
import { store } from "../redux/store";
import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

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
      <body>
        <Provider store={store}>
          <Navbar />;
          <div className="container">
            <Sidebar />
            <main>{children}</main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
