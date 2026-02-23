import { MapPin, Phone, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { SectionWrapper } from '../layout/SectionWrapper';

export const Location = () => {
  if (!sectionsConfig.location) return null;

  const { contact } = siteConfig;

  return (
    <SectionWrapper id="location" bgColor="white">
      <div data-testid="location-section" className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Find Us
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Visit our kitchen or get in touch
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
          <iframe
            src={contact.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            data-testid="location-map"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Address
              </h3>
              <p className="text-muted-foreground">
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Phone / WhatsApp
              </h3>
              <a
                href={`tel:${contact.phone}`}
                data-testid="location-phone"
                className="text-primary hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                Business Hours
              </h3>
              <ul className="space-y-1 text-muted-foreground">
                {contact.businessHours.map((schedule, index) => (
                  <li key={index} className="flex justify-between gap-8">
                    <span>{schedule.day}</span>
                    <span className="text-foreground">{schedule.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Location;
