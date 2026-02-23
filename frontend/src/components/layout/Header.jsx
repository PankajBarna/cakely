import { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { openWhatsAppSimple } from '../../utils/whatsapp';
import { cn } from '../../utils/cn';
import { Button } from '../ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isOnePage = siteConfig.site.mode === 'onePage';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    if (isOnePage) {
      e.preventDefault();
      const element = document.getElementById(link.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
  if (isOnePage) {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    return;
  }

  // fourPage mode: go to contact page
  // if you removed navigate earlier, keep it and use it here
  navigate('/contact');
  setIsMobileMenuOpen(false);
  // openWhatsAppSimple();
};

  // const handleWhatsAppClick = () => {
  //   openWhatsAppSimple();
  // };

  return (
    <header
      data-testid="header"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            data-testid="header-logo"
            className="flex items-center gap-2 font-heading text-xl md:text-2xl font-bold text-foreground"
            onClick={(e) => handleNavClick(e, { scrollTo: 'hero', href: '/' })}
          >
            <span className="text-primary">{siteConfig.site.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
  {siteConfig.navigation.links.map((link) => {
    if (isOnePage) {
      return (
        <button
          key={link.label}
          type="button"
          data-testid={`nav-${link.label.toLowerCase()}`}
          onClick={(e) => handleNavClick(e, link)}
          className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
        >
          {link.label}
        </button>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.href}
        data-testid={`nav-${link.label.toLowerCase()}`}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          location.pathname === link.href ? "text-primary" : "text-foreground/80"
        )}
      >
        {link.label}
      </Link>
    );
  })}
</nav>


          {/* <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.links.map((link) => (
              <Link
                key={link.label}
                to={isOnePage ? `#${link.scrollTo}` : link.href}
                data-testid={`nav-${link.label.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav> */}

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              data-testid="header-whatsapp-btn"
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-accent text-white rounded-full px-6"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            data-testid="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t"
          >
            <nav className="flex flex-col py-4">
  {siteConfig.navigation.links.map((link) => {
    if (isOnePage) {
      return (
        <button
          key={link.label}
          type="button"
          data-testid={`mobile-nav-${link.label.toLowerCase()}`}
          onClick={(e) => handleNavClick(e, link)}
          className="text-left px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors"
        >
          {link.label}
        </button>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.href}
        data-testid={`mobile-nav-${link.label.toLowerCase()}`}
        onClick={() => setIsMobileMenuOpen(false)}
        className="px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors"
      >
        {link.label}
      </Link>
    );
  })}

  <div className="px-6 py-4 border-t mt-2">
    <Button
      data-testid="mobile-whatsapp-btn"
      onClick={handleWhatsAppClick}
      className="w-full bg-primary hover:bg-accent text-white rounded-full"
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      Order on WhatsApp
    </Button>
  </div>
</nav>
            {/* <nav className="flex flex-col py-4">
              {siteConfig.navigation.links.map((link) => (
                <Link
                  key={link.label}
                  to={isOnePage ? `#${link.scrollTo}` : link.href}
                  data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="px-6 py-3 text-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 py-4 border-t mt-2">
                <Button
                  data-testid="mobile-whatsapp-btn"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-primary hover:bg-accent text-white rounded-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order on WhatsApp
                </Button>
              </div>
            </nav> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
