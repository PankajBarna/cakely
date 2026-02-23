import { useEffect } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { StickyCTA } from '../components/layout/StickyCTA';
import { OrderForm } from '../components/sections/OrderForm';
import { Location } from '../components/sections/Location';
import { FAQ } from '../components/sections/FAQ';

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <div data-testid="contact-page" className="min-h-screen pt-20">
      <Header />
      <main>
        <OrderForm />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default ContactPage;
