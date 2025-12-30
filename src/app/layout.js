// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "Maa Baglamukhi Temple Nalkheda | सिद्धपीठ धाम",
    template: "%s | Maa Baglamukhi Temple Nalkheda",
  },

  description:
    "माँ बगलामुखी सिद्धपीठ धाम नलखेड़ा (मध्य प्रदेश)। हवन, अनुष्ठान, मिर्ची हवन, आरती, ऑनलाइन दर्शन एवं चढ़ावा बुकिंग।",

  keywords: [
    "Maa Baglamukhi Temple",
    "Baglamukhi Mandir Nalkheda",
    "Baglamukhi Siddhpeeth",
    "Baglamukhi Hawan",
    "Mirchi Hawan",
    "Baglamukhi Puja",
    "Baglamukhi Aarti",
    "Nalkheda Mandir",
    "Baglamukhi Temple MP",
  ],

  verification: {
    google: "cLa3YtlgbTa-_HWrKzj86osUIddV8k7GdgfUHOO_0R8",
  },

  openGraph: {
    title: "Maa Baglamukhi Temple Nalkheda",
    description:
      "Visit Maa Baglamukhi Siddhpeeth Nalkheda. Book Hawan, Aarti & Online Darshan.",
    url: "https://baglamukhi-temple.vercel.app",
    siteName: "Maa Baglamukhi Temple",
    images: [
      {
        url: "/temple-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Maa Baglamukhi Temple Nalkheda",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maa Baglamukhi Temple Nalkheda",
    description:
      "माँ बगलामुखी सिद्धपीठ नलखेड़ा – हवन, पूजा, आरती एवं दर्शन",
    images: ["/temple-hero.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="bg-yellow-50 text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
