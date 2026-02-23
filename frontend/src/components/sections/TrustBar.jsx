import { Star, Users, Cake, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { cn } from '../../utils/cn';

const iconMap = {
  Star,
  Users,
  Cake,
  Clock,
};

export const TrustBar = () => {
  if (!sectionsConfig.trustBar) return null;

  const { trustBar } = siteConfig;

  return (
    <section
      id="trust-bar"
      data-testid="trust-bar-section"
      className="py-8 md:py-12 bg-white border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustBar.items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Star;
            return (
              <div
                key={index}
                data-testid={`trust-item-${index}`}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <span className="font-heading text-lg md:text-xl font-bold text-foreground">
                  {item.label}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  {item.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
