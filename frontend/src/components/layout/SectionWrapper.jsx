import { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

export const SectionWrapper = ({
  id,
  children,
  className,
  bgColor = 'white',
  containerWidth = 'max-w-7xl',
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const bgClasses = {
    white: 'bg-white',
    secondary: 'bg-secondary',
    primary: 'bg-primary',
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'py-16 md:py-24 transition-all duration-700',
        bgClasses[bgColor] || bgClasses.white,
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', containerWidth)}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
