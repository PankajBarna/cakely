import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { openWhatsAppSimple } from '../../utils/whatsapp';
import { Button } from '../ui/button';
import { cn } from '../../utils/cn';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!sectionsConfig.hero) return null;

  const { hero } = siteConfig;

  const handlePrimaryCTA = () => {
    if (hero.primaryCTA.action === 'whatsapp') {
      openWhatsAppSimple();
    }
  };

  const handleSecondaryCTA = () => {
  if (hero.secondaryCTA.action !== "menu") return;

  if (siteConfig.site.mode === "fourPage") {
    navigate("/menu");
    return;
  }

  document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
};

//   const handleSecondaryCTA = () => {
//   if (hero.secondaryCTA.action === 'menu') {
//     if (siteConfig.site.mode === "fourPage") {
//       window.location.href = "/menu";
//       return;
//     }
//     const element = document.getElementById('menu');
//     element?.scrollIntoView({ behavior: 'smooth' });
//   }
// };
  // const handleSecondaryCTA = () => {
  //   if (hero.secondaryCTA.action === 'menu') {
  //     const element = document.getElementById('menu');
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary"
    >
      {/* Decorative blob */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={cn(
              'order-2 lg:order-1 text-center lg:text-left transition-all duration-700 delay-100',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
  {hero.badgeText}
</span>
            {/* <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Home Baked with Love
            </span> */}
            
            <h1
              data-testid="hero-headline"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              {hero.headline}
            </h1>
            
            <p
              data-testid="hero-subheadline"
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                data-testid="hero-primary-cta"
                onClick={handlePrimaryCTA}
                size="lg"
                className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {hero.primaryCTA.text}
              </Button>
              
              <Button
                data-testid="hero-secondary-cta"
                onClick={handleSecondaryCTA}
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium border-2 hover:bg-foreground hover:text-white transition-all"
              >
                {hero.secondaryCTA.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={cn(
              'order-1 lg:order-2 relative transition-all duration-700 delay-300',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="relative">
              {/* Image frame */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  data-testid="hero-image"
                  className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
