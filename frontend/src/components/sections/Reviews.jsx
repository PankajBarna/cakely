import { Star, Quote } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { SectionWrapper } from '../layout/SectionWrapper';

export const Reviews = () => {
  if (!sectionsConfig.reviews) return null;

  const { reviews } = siteConfig;

  return (
    <SectionWrapper id="reviews" bgColor="secondary">
      <div data-testid="reviews-section" className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {reviews.title}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {reviews.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {reviews.items.map((review) => (
          <div
            key={review.id}
            data-testid={`review-${review.id}`}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            {/* Quote Icon */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Quote className="w-5 h-5 text-primary" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                {review.avatar}
              </div>
              <div>
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Reviews;
