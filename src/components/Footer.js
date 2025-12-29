// components/Footer.js
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text */}
        <p className="text-center md:text-left text-sm md:text-base">
          &copy; {new Date().getFullYear()} Ma Baglamukhi Temple Nalkheda. All Rights Reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaWhatsapp size={22} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaFacebookF size={22} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram size={22} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
            <FaYoutube size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
