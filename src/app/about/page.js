
import Image from "next/image";

export const metadata = {
  title: "About | Ma Baglamukhi Temple Nalkheda",
  description:
    "Ma Baglamukhi Temple Nalkheda – मंदिर की महिमा, उद्देश्य, हवन एवं पूजा सेवाओं की संपूर्ण जानकारी।",
};

export default function AboutPage() {
  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-800">
            माँ बगलामुखी मंदिर, नलखेड़ा
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            माँ बगलामुखी देवी शक्ति की आठ महाविद्याओं में से एक हैं। यह मंदिर
            साधना, शक्ति उपासना एवं हवन–पूजन के लिए विशेष रूप से प्रसिद्ध है।
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Image
            src="/ma1.jpeg"
            alt="Ma Baglamukhi Temple"
            width={400}
            height={300}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/ma2.jpeg"
            alt="Baglamukhi Hawan"
            width={400}
            height={300}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/ma3.jpeg"
            alt="Baglamukhi Mata Darshan"
            width={400}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Hamara Udeshy */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            हमारा उद्देश्य
          </h2>
          <p className="text-gray-700 leading-relaxed">
            हमारा उद्देश्य श्रद्धालुओं को माँ बगलामुखी मंदिर की महिमा से अवगत
            कराना तथा पूजा-पाठ, हवन, अनुष्ठान एवं धार्मिक क्रियाओं में उनकी
            सहायता करना है।
            <br /><br />
            इस वेबसाइट के माध्यम से हम यह प्रयास करते हैं कि देश-विदेश में
            निवास कर रहे श्रद्धालु भी माँ की कृपा प्राप्त कर सकें और मंदिर में
            होने वाले हवन-पूजन की जानकारी एवं सुविधा सरलता से प्राप्त कर सकें।
          </p>
        </div>

        {/* Puja & Hawan Section */}
        <div className="bg-yellow-100 p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            हवन एवं पूजा सेवाएँ
          </h2>
          <p className="text-gray-700 leading-relaxed">
            इस साइट के माध्यम से आप माँ बगलामुखी मंदिर में निम्नलिखित सेवाओं के
            लिए संपर्क कर सकते हैं:
          </p>

          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
            <li>सूक्ष्म हवन</li>
            <li>संपूर्ण हवन</li>
            <li>महायज्ञ हवन</li>
            <li>अनुष्ठान एवं विशेष पूजा</li>
            <li>मिर्ची हवन</li>
            <li>ऑनलाइन दर्शन एवं आरती</li>
          </ul>
        </div>

        {/* YouTube Video */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-6">
            माँ बगलामुखी आरती एवं दर्शन
          </h2>

          <div className="flex justify-center">
            <div className="w-[260px] sm:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border">
              <iframe
                src="https://www.youtube.com/embed/8Vucpme9kFI"
                title="Ma Baglamukhi Aarti"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Faith Section */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            हमारी आस्था
          </h2>
          <p className="text-gray-700 leading-relaxed">
            हमें पूर्ण विश्वास है कि माँ बगलामुखी की सच्चे मन से की गई साधना,
            पूजा एवं हवन से जीवन की सभी बाधाएँ दूर होती हैं।
            <br /><br />
            यह वेबसाइट पूर्णतः सेवा भाव से बनाई गई है ताकि श्रद्धालुओं को
            सही जानकारी, मार्गदर्शन एवं आध्यात्मिक सहयोग प्राप्त हो सके।
          </p>
        </div>

      </div>
    </section>
  );
}
