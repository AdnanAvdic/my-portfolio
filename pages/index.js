import Head from "next/head";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Developed by Adnan</title>
        <meta name="description" content="This is my portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <Services />
    </>
  );
}
