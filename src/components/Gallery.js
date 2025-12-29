import Image from "next/image";

export default function Gallery() {
  const images = [
    "ma1.jpeg",
    "ma2.jpeg",
    "ma3.jpeg",
    "ma4.jpeg",
  
    "ma6.jpeg",
  ];

  return (
    <section className="py-16 bg-yellow-50">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-10">
        माँ बगलामुखी गैलरी
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={`/${img}`}
              alt={`Maa Baglamukhi Temple Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
