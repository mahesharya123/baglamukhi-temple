"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const places = [
  {
    name: "Ma Baglamukhi Resort",
    type: "Hotel • 500m away",
    img: "/Baglamukhi-resort.jpg",
  },
  {
    name: "Jain Bhojnalay",
    type: "Restaurant • 300m away",
    img: "/JainBhojnalay.jpg",
  },
  {
    name: "Omkar Hotel",
    type: "Hotel • 500m away",
    img: "/Omkar-hotel.jpg",
  },
  {
    name: "Hotel Sukoon",
    type: "Restaurant • 2 km away",
    img: "/sukoon.jpg",
  },
];

export default function Comments() {
  return (
    <section className="py-20 bg-pink-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-800">
          Nearby Hotels & Restaurants
        </h2>
        <p className="text-gray-800 mt-2">
          Stay & dining facilities near the temple
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          autoplay={{ delay: 3000 }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">

                {/* Image */}
                <div className="relative h-56 w-full">
                  <Image
                    src={place.img}
                    alt={place.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-red-700">
                    {place.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {place.type}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
