import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { sectionsConfig } from '../../config/sections';
import { SectionWrapper } from '../layout/SectionWrapper';
import { Dialog, DialogContent } from '../ui/dialog';
import { cn } from '../../utils/cn';

export const Gallery = ({ showAll = false, hideHeader = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!sectionsConfig.gallery) return null;

  const { gallery } = siteConfig;
  const displayImages = showAll ? gallery.images : gallery.images.slice(0, 6);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(displayImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? displayImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === displayImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(displayImages[newIndex]);
  };

  return (
    <SectionWrapper id="gallery" bgColor="white">
      {!hideHeader && (
        <div data-testid="gallery-section" className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {gallery.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {gallery.subtitle}
          </p>
        </div>
      )}
      {/* <div data-testid="gallery-section" className="text-center mb-10 md:mb-14">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {gallery.title}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {gallery.subtitle}
        </p>
      </div> */}

      {/* Gallery Grid - Bento Style */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {displayImages.map((image, index) => (
          <div
            key={index}
            data-testid={`gallery-item-${index}`}
            onClick={() => openLightbox(index)}
            className={cn(
              'relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group',
              index === 0 ? 'col-span-2 row-span-2 h-[300px] md:h-[400px]' : 'h-[150px] md:h-[195px]'
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
              <div className="w-full p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <span className="text-white text-xs md:text-sm font-medium bg-primary/90 px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <div className="relative">
            {/* Close Button */}
            <button
              data-testid="lightbox-close"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              data-testid="lightbox-prev"
              onClick={goToPrevious}
              className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
              data-testid="lightbox-next"
              onClick={goToNext}
              className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Image */}
            {selectedImage && (
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  data-testid="lightbox-image"
                  className="w-full max-h-[80vh] object-contain bg-black"
                />
              </div>
            )}

            {/* Caption */}
            {selectedImage && (
              <div className="text-center mt-4">
                <span className="text-white text-sm bg-primary/90 px-4 py-2 rounded-full">
                  {selectedImage.category} - {currentIndex + 1} of {displayImages.length}
                </span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};

export default Gallery;
