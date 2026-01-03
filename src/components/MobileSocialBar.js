"use client";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function SocialSideBar() {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-3">
      
      <a
        href="https://wa.me/7354940168"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaFacebookF className="text-white text-xl" />
      </a>

      <a
        href="https://www.instagram.com/baglamukhi_astrology/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaInstagram className="text-white text-xl" />
      </a>

      <a
        href="https://www.youtube.com/channel/UCCYJJhxtmAvdhU-2F109bHA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="bg-red-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaYoutube className="text-white text-xl" />
      </a>

    </div>
  );
}
