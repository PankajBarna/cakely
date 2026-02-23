import { Truck, Store, Clock, Shield } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { SectionWrapper } from '../layout/SectionWrapper';

const iconMap = {
  Truck,
  Store,
  Clock,
  Shield,
};

export const DeliveryInfo = () => {
  if (!sectionsConfig.deliveryInfo) return null;

  const { delivery } = siteConfig;

  return (
    <SectionWrapper id="delivery" bgColor="white">
      <div data-testid="delivery-info-section" className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {delivery.title}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {delivery.subtitle}
        </p>
      </div>

      {/* Delivery Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {delivery.badges.map((badge, index) => {
          const IconComponent = iconMap[badge.icon] || Truck;
          return (
            <div
              key={index}
              data-testid={`delivery-badge-${index}`}
              className="bg-secondary rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <IconComponent className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {badge.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Delivery Details */}
      <div className="bg-secondary rounded-3xl p-6 md:p-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Delivery Area
            </span>
            <p className="font-heading font-semibold text-foreground mt-1">
              {delivery.details.area}
            </p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Coverage
            </span>
            <p className="font-heading font-semibold text-foreground mt-1">
              {delivery.details.radius}
            </p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Notice Period
            </span>
            <p className="font-heading font-semibold text-foreground mt-1">
              {delivery.details.minNotice}
            </p>
          </div>
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Express
            </span>
            <p className="font-heading font-semibold text-foreground mt-1">
              {delivery.details.sameDay}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DeliveryInfo;
