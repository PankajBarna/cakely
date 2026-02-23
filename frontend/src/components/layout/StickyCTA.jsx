import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { sectionsConfig } from "../../config/sections";
import { cn } from "../../utils/cn";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Decide visibility AFTER hooks (so hooks order is always the same)
  const isEnabled = !!sectionsConfig.stickyCTA;
  const hideOnMenu = location.pathname === "/menu";
  const shouldRender = isEnabled && !hideOnMenu;

  useEffect(() => {
    // If CTA should not render, don't attach listeners
    if (!shouldRender) return;

    const handleScroll = () => setIsVisible(window.scrollY > 400);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldRender]);

  // Safe early return AFTER hooks
  if (!shouldRender) return null;

  const handleClick = () => {
    const isOnePage = siteConfig.site.mode === "onePage";

    if (isOnePage) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // fourPage mode → go to /contact
    if (location.pathname !== "/contact") {
      navigate("/contact");
      return;
    }

    // Already on /contact → go to top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      data-testid="sticky-cta"
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 transform",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      )}
      aria-label="Order"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium text-sm hidden sm:inline">
        {siteConfig.site.mode === "onePage" ? "Order" : "Order Now"}
      </span>
    </button>
  );
};

export default StickyCTA;