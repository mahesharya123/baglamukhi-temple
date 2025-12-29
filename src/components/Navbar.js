"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import BookHavanModal from "./BookHavanModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-red-700">जय</span>
            <span className="font-bold text-xl text-red-700">
              माँ बगलामुखी
            </span>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+91XXXXXXXXXX" className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-gray-800">
                +91-XXXXXXXXXX
              </span>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Book Havan
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <XMarkIcon className="h-8 w-8 text-red-700" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-red-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-yellow-100 px-4 pb-4 space-y-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center space-x-2 font-semibold text-gray-800"
            >
              <PhoneIcon className="h-5 w-5 text-green-600" />
              <span>+91-XXXXXXXXXX</span>
            </a>

            <button
              onClick={() => {
                setModalOpen(true);
                setMenuOpen(false);
              }}
              className="w-full bg-red-600 text-white text-center py-2 rounded hover:bg-red-700 transition"
            >
              Book Havan
            </button>
          </div>
        )}
      </nav>

      {/* Book Havan Popup */}
      <BookHavanModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
