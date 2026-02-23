import { useNavigate } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { useCart } from "../../context/CartContext";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Button } from "../ui/button";
import MenuItemCard from "./MenuItemCard";

export const FeaturedMenu = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const items = siteConfig.menu.items.slice(0, 3);

  return (
    <SectionWrapper id="featured-menu" bgColor="secondary">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Popular Picks
          </h2>
          <p className="text-muted-foreground mt-2">
            Quick picks people love — add now, review later.
          </p>
        </div>

        <Button
          variant="outline"
          className="rounded-full hidden sm:flex"
          onClick={() => navigate("/menu")}
        >
          View Full Menu <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {items.map((item) => (
    <MenuItemCard
      key={item.id}
      item={item}
      actionVariant="none"
    //   added={false}
    //   onAdd={() => addItem(item)}
    />
  ))}
</div>

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading font-semibold text-foreground">
                  {item.name}
                </h3>
                <span className="text-primary font-bold">
                  ₹{item.priceFrom.toLocaleString()}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-4 flex gap-3">
                <Button
                  className="rounded-full bg-primary hover:bg-accent text-white flex-1"
                  onClick={() => addItem(item)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* mobile CTA */}
      <div className="mt-8 sm:hidden">
        <Button
          variant="outline"
          className="w-full rounded-full"
          onClick={() => navigate("/menu")}
        >
          View Full Menu <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedMenu;