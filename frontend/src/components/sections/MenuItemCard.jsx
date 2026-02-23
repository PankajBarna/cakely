import { Leaf, Plus, Minus } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../utils/cn";

export const MenuItemCard = ({
  item,
  actionVariant = "smart", // "none" | "smart"
  quantity = 0,
  onAdd,
  onInc,
  onDec,
}) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.tag && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
            {item.tag}
          </span>
        )}
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
            {item.name}
          </h3>

          <div className="flex gap-1">
            {item.isVeg && (
              <span
                className="w-5 h-5 flex items-center justify-center rounded border border-green-500"
                title="Vegetarian"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </span>
            )}
            {item.hasEggless && (
              <span className="text-green-600" title="Eggless option available">
                <Leaf className="w-4 h-4" />
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">From</span>
            <p className="font-heading text-lg font-bold text-primary">
              ₹{item.priceFrom.toLocaleString()}
            </p>
          </div>

          {/* ACTION AREA */}
          {actionVariant === "none" ? null : quantity > 0 ? (
            // ✅ Qty controls if already added
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onDec}
                className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="w-6 text-center font-medium">{quantity}</span>

              <button
                type="button"
                onClick={onInc}
                className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            // ✅ Add button if not added
            <Button
              size="sm"
              className={cn("rounded-full px-5 bg-primary hover:bg-accent text-white")}
              onClick={onAdd}
            >
              <Plus className="w-4 h-4 mr-1" />
              Add
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;