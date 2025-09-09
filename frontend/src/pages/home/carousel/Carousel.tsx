import { WrapperText } from "@/components/ui/atoms/wrapperText";
import React, { useState, useEffect, useCallback } from "react";

interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

interface CarouselProps {
  movies: Movie[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  movies,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  }, [movies.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setTimeout(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [currentIndex, isAutoPlay, autoPlayInterval, goToNext]);

  const handleUserInteraction = () => {
    setIsAutoPlay(false);

    setTimeout(() => {
      setIsAutoPlay(true);
    }, 3000);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-xl max-h-fit">
      <div className="relative h-80 md:h-96 lg:h-[500px]">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-full relative">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-40 left-30 w-50 shadow-[0px_30px_100px_100px_var(--theme-base-black)]/65" />

              <div className="absolute bottom-30 left-20 !p-5">
                <WrapperText
                  classes="z-10 font-bold text-left "
                  text={movie.title}
                  type={{ name: "title", level: 1 }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute left-2 top-1/2 -translate-y-1/2  bg-[var(--theme-secondary-900)]/20 hover:bg-[var(--theme-secondary-900)]/30 text-[var(--theme-base-light)] cursor-pointer rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
          onClick={() => {
            goToPrev();
            handleUserInteraction();
          }}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--theme-secondary-900)]/20 hover:bg-[var(--theme-secondary-900)]/30 text-[var(--theme-base-light)] cursor-pointer rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
          onClick={() => {
            goToNext();
            handleUserInteraction();
          }}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-3">
          {movies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full shadow-[inset_0px_0px_1px_1px_var(--theme-primary-700)] opacity-45 transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-[var(--theme-primary-500)] scale-125"
                  : "bg-[var(--theme-primary-100)] hover:bg-[var(--theme-primary-400)]"
              }`}
              onClick={() => {
                goToSlide(index);
                handleUserInteraction();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
