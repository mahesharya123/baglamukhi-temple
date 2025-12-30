// components/Map.js
export default function Map() {
  return (
    <section className="p-8 md:p-16 bg-yellow-50 text-center">
      <h2 className="text-3xl font-bold text-red-700 mb-8">Temple</h2>
      <iframe
        src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.348589515012!2d76.23275067479474!3d23.841752385264144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964b901c8a0cdbd%3A0x274100159f28e55e!2sMaa%20Baglamukhi%20Mandir%20Nalkheda!5e0!3m2!1sen!2sin!4v1766998801905!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}
