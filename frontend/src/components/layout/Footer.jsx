import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isOnePage = siteConfig.site.mode === 'onePage';

  const handleLinkClick = (e, href) => {
    if (isOnePage && href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer data-testid="footer" className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              {siteConfig.site.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {siteConfig.footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {siteConfig.footer.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  data-testid={`footer-social-${social.platform.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.platform}
                >
                  {social.platform === 'Instagram' && <Instagram className="w-5 h-5" />}
                  {social.platform === 'WhatsApp' && <MessageCircle className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={isOnePage ? link.href : link.href.replace('#', '/')}
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  data-testid="footer-phone"
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  data-testid="footer-email"
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Business Hours
            </h4>
            <ul className="space-y-2">
              {siteConfig.contact.businessHours.map((schedule) => (
                <li
                  key={schedule.day}
                  className="flex justify-between text-sm text-white/70"
                >
                  <span>{schedule.day}</span>
                  <span>{schedule.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/50">
            © {currentYear} {siteConfig.site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
