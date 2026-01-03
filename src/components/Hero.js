"use client";

import { useEffect, useState } from "react";

const images = [
  "/temple1.jpg",
  "/temple2.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 🔽 Auto scroll after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight, // scroll one screen down
        behavior: "smooth",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden mt-10 m-1">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Scroll indicator (optional but nice) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}
