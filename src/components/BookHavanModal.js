"use client";

import { useState } from "react";

export default function BookHavanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl relative p-6 animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center text-red-700 mb-2">
          हवन बुकिंग हेतु संपर्क करें
        </h2>

        <p className="text-center text-gray-600 text-sm mb-6">
          कृपया अपनी जानकारी भरें, हम शीघ्र संपर्क करेंगे
        </p>

        {/* Form */}
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="पूरा नाम"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <input
            type="tel"
            placeholder="मोबाइल नंबर"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <input
            type="email"
            placeholder="ईमेल पता"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <textarea
            rows="3"
            placeholder="अपना संदेश लिखें"
            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            भेजें
          </button>
        </form>
      </div>
    </div>
  );
}
