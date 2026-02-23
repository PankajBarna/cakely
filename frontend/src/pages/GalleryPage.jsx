import { useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { StickyCTA } from "../components/layout/StickyCTA";
import { Gallery } from "../components/sections/Gallery";

export const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="gallery-page" className="min-h-screen pt-20 bg-white">
      <Header />

      <main className="pb-10">
        <Gallery showAll hideHeader />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default GalleryPage;