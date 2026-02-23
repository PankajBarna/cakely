import { MessageCircle, PenTool, Truck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { SectionWrapper } from '../layout/SectionWrapper';

const iconMap = {
  MessageCircle,
  PenTool,
  Truck,
};

export const HowItWorks = () => {
  if (!sectionsConfig.howItWorks) return null;

  const { howItWorks } = siteConfig;

  return (
    <SectionWrapper id="how-it-works" bgColor="white">
      <div data-testid="how-it-works-section" className="text-center mb-12 md:mb-16">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {howItWorks.title}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {howItWorks.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {howItWorks.steps.map((step, index) => {
          const IconComponent = iconMap[step.icon] || MessageCircle;
          return (
            <div
              key={index}
              data-testid={`how-it-works-step-${index}`}
              className="relative text-center group"
            >
              {/* Connector line */}
              {index < howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              {/* Step number */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary mb-6 group-hover:bg-primary/10 transition-colors">
                <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
