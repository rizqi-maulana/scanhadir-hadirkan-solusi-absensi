import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

interface AppCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

export const AppCarousel = ({ images, title, className = "" }: AppCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={images[currentIndex]}
          alt={`${title} preview ${currentIndex + 1}`}
          className="w-full h-48 object-contain bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-transform duration-500"
        />
        
        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="sm"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};