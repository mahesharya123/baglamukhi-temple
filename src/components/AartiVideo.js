export default function AartiVideo() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            माँ बगलामुखी आरती
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            माँ बगलामुखी की आरती करने से नकारात्मक ऊर्जा का नाश होता है और
            भक्तों के जीवन में शांति, सुरक्षा एवं विजय का संचार होता है।
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            प्रतिदिन आरती के समय माँ का यह दिव्य स्वरूप देखने मात्र से
            मन को अद्भुत शांति एवं आध्यात्मिक ऊर्जा की अनुभूति होती है।
          </p>

          <p className="text-gray-700 leading-relaxed">
            आरती के दौरान माँ से की गई प्रार्थना शीघ्र फलदायी मानी जाती है।
          </p>
        </div>

        {/* Right Video (Mobile Reel Style) */}
      <div className="flex justify-center">
  <div className="w-[260px] sm:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border">
    <iframe
      src="https://www.youtube.com/embed/8Vucpme9kFI"
      title="Baglamukhi Aarti"
      className="w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


      </div>
    </section>
  );
}
