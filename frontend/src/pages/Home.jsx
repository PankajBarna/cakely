import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { StickyCTA } from "../components/layout/StickyCTA";

import { Hero } from "../components/sections/Hero";
import { TrustBar } from "../components/sections/TrustBar";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Menu } from "../components/sections/Menu";
import { Gallery } from "../components/sections/Gallery";
import { Reviews } from "../components/sections/Reviews";
import { DeliveryInfo } from "../components/sections/DeliveryInfo";
import { OrderForm } from "../components/sections/OrderForm";
import { FAQ } from "../components/sections/FAQ";
import { Location } from "../components/sections/Location";
import { MiniGallery} from "../components/sections/MiniGallery";

import { siteConfig } from "../config/siteConfig";
import FeaturedMenu from "@/components/sections/FeaturedMenu";

export const Home = () => {
  const isFourPage = siteConfig.site.mode === "fourPage";

  return (
    <div data-testid="home-page" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />

        {isFourPage ? (
          <>
            <FeaturedMenu />
            <Reviews />
            <MiniGallery />
            <DeliveryInfo />
            <FAQ />
            <Location />
          </>
        ) : (
          <>
            <Menu />
            <Gallery />
            <Reviews />
            <DeliveryInfo />
            <OrderForm />
            <FAQ />
            <Location />
          </>
        )}
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Home;