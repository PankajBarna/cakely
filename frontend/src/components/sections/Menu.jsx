import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { sectionsConfig } from "../../config/sections";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Button } from "../ui/button";
import { useCart } from "../../context/CartContext";
import { cn } from "../../utils/cn";
import MenuItemCard from "./MenuItemCard";

export const Menu = ({ showAll = false, hideHeader = false }) => {
  // Hooks first
  const [activeCategory, setActiveCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);

  const { cartItems, addItem, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  // Early return AFTER hooks
  if (!sectionsConfig.menu) return null;

  const { menu } = siteConfig;

  // Filter items
  const filteredItems =
    activeCategory === "all"
      ? menu.items
      : menu.items.filter((item) => item.category === activeCategory);

  // showAll (MenuPage) OR showMore (button)
  const displayItems = showAll || showMore ? filteredItems : filteredItems.slice(0, 6);

  // Category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setShowMore(false);
  };

  // qty lookup (string-safe)
  const getQty = (itemId) =>
    cartItems.find((x) => String(x.id) === String(itemId))?.quantity ?? 0;

  return (
    <SectionWrapper id="menu" bgColor="secondary">
      {/* Header */}
      {!hideHeader && (
        <>
          <div data-testid="menu-section" className="text-center mb-10 md:mb-14">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {menu.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {menu.subtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
            {menu.categories.map((category) => (
              <button
                key={category.id}
                data-testid={`menu-category-${category.id}`}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-foreground hover:bg-primary/10"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {displayItems.map((item) => {
          const qty = getQty(item.id);

          const onAdd = () => addItem(item);

          const onInc = () => updateQuantity(item.id, qty + 1);

          const onDec = () => {
            if (qty <= 1) removeItem(item.id);
            else updateQuantity(item.id, qty - 1);
          };

          return (
            <MenuItemCard
              key={item.id}
              item={item}
              actionVariant="smart"
              quantity={qty}
              onAdd={onAdd}
              onInc={onInc}
              onDec={onDec}
            />
          );
        })}
      </div>

      {/* Bottom Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-border px-4 py-3 flex items-center justify-between">
            <div className="text-sm">
              <span className="font-semibold">
                {cartItems.reduce((s, i) => s + (i.quantity ?? 0), 0)} items
              </span>
              <span className="text-muted-foreground"> • </span>
              <span className="text-primary font-semibold">
                From ₹
                {cartItems
                  .reduce((sum, i) => sum + (i.priceFrom ?? 0) * (i.quantity ?? 0), 0)
                  .toLocaleString()}
              </span>
            </div>

            <Button
              className="rounded-full bg-primary hover:bg-accent text-white"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Review Order
            </Button>
          </div>
        </div>
      )}

      {/* View All */}
      {!showAll && !showMore && filteredItems.length > 6 && (
        <div className="text-center mt-10">
          <Button
            data-testid="menu-view-all"
            variant="outline"
            className="rounded-full px-8"
            onClick={() => setShowMore(true)}
          >
            View All Items
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Menu;