import { useNavigate } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { Button } from "../ui/button";
import { cn } from "../../utils/cn";

export const MiniGallery = () => {
  const navigate = useNavigate();
  const images = siteConfig.gallery?.images || [];
  const strip = images.slice(0, 4);

  if (strip.length < 4) return null;

  const handleSeeMore = () => {
    if (siteConfig.site.mode === "fourPage") {
      navigate("/gallery");
      return;
    }
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              {siteConfig.gallery.title}
            </h2>
            <p className="text-muted-foreground mt-2">
              A quick peek at our latest creations
            </p>
          </div>

          <div className="hidden sm:block">
            <Button
              variant="outline"
              className="rounded-full px-6"
              onClick={handleSeeMore}
            >
              See More Photos
            </Button>
          </div>
        </div>

        {/* Bento Grid (4 images) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {strip.map((img, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl md:rounded-3xl overflow-hidden group bg-secondary",
                // Bento layout:
                // Image 0 is big (2x2) on md+ (looks premium)
                index === 0
                  ? "col-span-2 row-span-2 h-[260px] md:h-[420px]"
                  : "h-[125px] md:h-[200px]"
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />

              {/* Category chip */}
              <div className="absolute left-3 bottom-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <span className="text-xs md:text-sm font-medium bg-white/90 text-foreground px-3 py-1 rounded-full">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-6 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full px-8"
            onClick={handleSeeMore}
          >
            See More Photos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MiniGallery;