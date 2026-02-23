import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { SectionWrapper } from '../layout/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export const FAQ = () => {
  if (!sectionsConfig.faq) return null;

  const { faq } = siteConfig;

  return (
    <SectionWrapper id="faq" bgColor="secondary">
      <div data-testid="faq-section" className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {faq.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {faq.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              data-testid={`faq-item-${index}`}
              className="bg-white rounded-xl px-6 border-none shadow-sm"
            >
              <AccordionTrigger
                data-testid={`faq-trigger-${index}`}
                className="text-left font-heading font-medium text-foreground hover:text-primary py-5 hover:no-underline"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                data-testid={`faq-content-${index}`}
                className="text-muted-foreground pb-5"
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
