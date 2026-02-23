import { useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { StickyCTA } from "../components/layout/StickyCTA";
import { Menu } from "../components/sections/Menu";
import { siteConfig } from "../config/siteConfig";

export const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="menu-page" className="min-h-screen pt-20 bg-secondary">
      <Header />

      <main className="bg-secondary pb-10">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {siteConfig.menu.title}
          </h1>
          <p className="text-muted-foreground mt-2">{siteConfig.menu.subtitle}</p>
        </div>

        {/* Full menu */}
        <Menu showAll hideHeader />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default MenuPage;
