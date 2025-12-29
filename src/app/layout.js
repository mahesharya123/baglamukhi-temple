// app/layout.js
import "./globals.css"; // import Tailwind
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ma Baglamukhi Temple Nalkheda",
  description: "Visit Ma Baglamukhi Temple in Nalkheda. Book Hawan, view Aarti, explore gallery, and experience divine blessings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-yellow-50 text-gray-800">
        {/* Navbar will appear on all pages */}
        <Navbar />

        <main>{children}</main>

        {/* Footer will appear on all pages */}
        <Footer />
      </body>
    </html>
  );
}
