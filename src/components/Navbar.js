"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import BookHavanModal from "./BookHavanModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-red-700">ॐ</span>
            <span className="font-bold text-xl text-red-700">
              Ma Baglamukhi
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="font-semibold text-gray-800 hover:text-red-700 transition"
            >
              About
            </Link>

            <a href="tel:+91XXXXXXXXXX" className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-gray-800">
                +91-7354940168
              </span>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Book Hawan
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {open ? (
              <XMarkIcon className="h-8 w-8 text-red-700" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-red-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-yellow-100 px-4 pb-4 space-y-4">

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block font-semibold text-gray-800 hover:text-red-700"
            >
              About
            </Link>

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
                setOpen(false);
              }}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Book Hawan
            </button>
          </div>
        )}
      </nav>

      {/* Book Hawan Popup */}
      <BookHavanModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
