import Header from "./_components/Header/Header";
import Hero from "./_components/Hero/Hero";
import WhoWeAre from "./_components/WhoWeAre/WhoWeAre";
import Values from "./_components/Values/Values";
import ImageSlider from "./_components/ImageSlider/ImageSlider";
import Contact from "./_components/Contact/Contact";
import Footer from "./_components/Footer/Footer";

import FAQSection from "./_components/FAQSection/FAQSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Values />
        <ImageSlider />
        <FAQSection  />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
