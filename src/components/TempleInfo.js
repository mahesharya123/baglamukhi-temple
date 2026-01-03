// components/TempleInfo.js

export default function TempleInfo() {
  return (
    <section className="p-8 md:p-16 bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-12">
        Ma Baglamukhi Temple
      </h2>

      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <p className="text-gray-700 text-2xl leading-relaxed">
          माँ बगलामुखी मंदिर एक सिद्धपीठ है। इसकी स्थापना भगवान श्रीकृष्ण के आदेश पर पांडवों द्वारा की गई थी। कहा जाता है कि पांडवों ने यहाँ अपनी विजय प्राप्ति तथा मनोकामनाओं की पूर्ति हेतु हवन, अनुष्ठान और तपस्या कर माँ को प्रसन्न किया। माँ बगलामुखी आदिशक्ति के दस महाविद्याओं में से अष्टम महाविद्या हैं, जो अपने भक्तों की नकारात्मक शक्तियों को शांत करती हैं, शत्रुओं का नाश करती हैं और जीवन के प्रत्येक क्षेत्र में विजय, सफलता तथा संरक्षण प्रदान करती हैं। माँ का यह दिव्य स्वरूप करुणामयी होने के साथ-साथ अत्यंत शक्तिशाली है, जो सच्चे श्रद्धालुओं की सभी बाधाओं को दूर कर उन्हें अभय प्रदान करता है।
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/temple1.jpg"
            alt="Ma Baglamukhi Temple"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="flex justify-center md:order-1 order-2">
          <img
            src="/temple2.jpg"
            alt="Temple Courtyard"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>

        <div className="md:order-2 order-1">
          <p className="text-gray-700 text-2xl leading-relaxed">
            यह मंदिर मध्य प्रदेश के आगर ज़िले के नलखेड़ा नगर में स्थित है, जो लखुंदर नदी के तट पर विराजमान है। यह पवित्र स्थल उज्जैन से लगभग 100 किलोमीटर की दूरी पर स्थित है। यहाँ पहुँचते ही भक्तों को एक अद्भुत, अलौकिक एवं दिव्य शांति का अनुभव होता है। यह मंदिर तंत्र विद्या, मिर्ची हवन, शत्रु बाधा शांति हवन तथा विशेष साधनाओं के लिए अत्यंत प्रसिद्ध है। देश-विदेश से श्रद्धालु अपनी समस्याओं के समाधान, विजय और संरक्षण की कामना लेकर यहाँ आते हैं और माँ बगलामुखी की कृपा प्राप्त करते हैं।
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <p className="text-gray-700 text-2xl leading-relaxed">
            यह स्थल एक प्रसिद्ध सिद्धपीठ धाम है, जहाँ श्रद्धालुओं द्वारा माँगी गई मनोकामनाएँ पूर्ण होती हैं। इसी विश्वास के कारण देश-विदेश से भक्त यहाँ आकर हवन, पूजा एवं विशेष अनुष्ठान करवाते हैं। माँ बगलामुखी की कृपा से भक्तों को जीवन की बाधाओं से मुक्ति एवं सकारात्मक ऊर्जा की प्राप्ति होती है।

इस पावन धाम में समय-समय पर अनेक प्रसिद्ध हस्तियाँ, राजनेता एवं सेलिब्रिटी भी माँ के दर्शन हेतु आते हैं। नवरात्रि के पावन अवसर पर माँ के दरबार में नौ दिनों तक भंडारे एवं भोजन प्रसादी का आयोजन किया जाता है, जिसका लाभ आसपास के गाँवों के निवासियों तथा दूर-दूर से आए श्रद्धालु बड़ी श्रद्धा के साथ ग्रहण करते हैं।
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/temple3.jpg"
            alt="Temple Evening Aarti"
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>
      </div>

      {/* Section 4 */}
    
    </section>
  );
}
