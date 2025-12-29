

import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TempleInfo from "../components/TempleInfo";
import Hawan from "../components/Hawan";
import AartiVideo from "../components/AartiVideo";
import Gallery from "../components/Gallery";
import Comments from "../components/Comments";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>Ma Baglamukhi Temple Nalkheda</title>
        <meta
          name="description"
          content="Visit Ma Baglamukhi Temple in Nalkheda. Book Hawan, view Aarti, explore gallery, and experience divine blessings."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Ma Baglamukhi Temple Nalkheda" />
        <meta
          property="og:description"
          content="Visit Ma Baglamukhi Temple in Nalkheda. Book Hawan, view Aarti, explore gallery, and experience divine blessings."
        />
        <meta property="og:image" content="/temple-hero.jpg" />
        <meta property="og:type" content="website" />
      </Head>

     
      <Hero />
      <TempleInfo />
      <Hawan />
      <AartiVideo />
      <Gallery />
      <Comments />
      <Map />
      
    </>
  );
}
