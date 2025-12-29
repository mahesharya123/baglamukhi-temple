"use client";

import { useState } from "react";
import Image from "next/image";
import BookHavanModal from "./BookHavanModal";

const havans = [
  { title: "सूक्ष्म हवन", img: "/Havan44.png" },
  { title: "संपूर्ण हवन", img: "/Havan44.png" },
  { title: "महायज्ञ हवन", img: "/Havan44.png" },
  { title: "अनुष्ठान हवन", img: "/Havan44.png" },
  { title: "मिर्ची हवन", img: "/Havan44.png" },
  { title: "चढ़ावा", img: "/chadhava.png" },
  { title: "ऑनलाइन दैनिक दर्शन", img: "/daily-darshan.png" },
  { title: "ऑनलाइन आरती दर्शन", img: "/daily-darshan.png" },
];

export default function Hawan() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 overflow-hidden">

      {/* Heading */}
      <div className="relative text-center mb-14">
        <span className="text-red-700 text-lg font-semibold">ॐ</span>
        <h2 className="text-4xl font-bold text-red-800 mt-2">
          हवन एवं पूजा
        </h2>
      </div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {havans.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl p-6 text-center
            bg-white shadow-md transition-all duration-500
            hover:shadow-2xl hover:bg-gradient-to-br hover:from-pink-300 hover:to-yellow-300"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={item.img}
                alt={item.title}
                width={100}
                height={100}
                className="transition duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-lg font-semibold mb-4 group-hover:text-white">
              {item.title}
            </h3>

            {/* ✅ Active Button */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2
              px-6 py-2 rounded-full font-medium
              bg-gradient-to-r from-red-600 to-yellow-500 text-white
              transition-all duration-300
              hover:bg-white hover:text-red-700"
            >
              Book Havan →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <BookHavanModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
