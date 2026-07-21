import { MovieCard } from "@/components/ui/organisms/Movie";
import type { TMovie, TMovieProps } from "./types";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MovieSlider = ({ movies }: TMovieProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [dragDistance, setDragDistance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const checkScrollPosition = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 10);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }

    const currentPosition = sliderRef.current;

    return () => {
      if (currentPosition) {
        currentPosition.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [movies]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    setDragDistance(0);

    document.body.style.userSelect = "none";
  };

  const handleNavigateToDetails = (id: number): void => {
    if (!isDragging && Math.abs(dragDistance) < 5) {
      navigate(`/MovieDetail/${id}`);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
    checkScrollPosition();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;

    setDragDistance(walk);

    sliderRef.current.scrollLeft = scrollLeft - walk;
    checkScrollPosition();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;

    setDragDistance(walk);

    sliderRef.current.scrollLeft = scrollLeft - walk;
    checkScrollPosition();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    checkScrollPosition();
  };

  const scrollLeftHandler = () => {
    if (sliderRef.current) {
      const cardWidth = 176;
      sliderRef.current.scrollBy({ left: -cardWidth * 2, behavior: "smooth" });
      setTimeout(() => checkScrollPosition(), 100);
    }
  };

  const scrollRightHandler = () => {
    if (sliderRef.current) {
      const cardWidth = 176;
      sliderRef.current.scrollBy({ left: cardWidth * 2, behavior: "smooth" });
      setTimeout(() => checkScrollPosition(), 100);
    }
  };

  if (isLoading) {
    return (
      <div className="!p-2">
        <div className="flex gap-3 my-5 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i + 1}
              className="w-53 h-75 bg-gray-300 rounded-lg animate-pulse flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="!p-2 relative">
      <div className="relative group">
        {showLeftArrow && (
          <button
            onClick={scrollLeftHandler}
            className="absolute left-0 cursor-pointer top-1/2 transform -translate-y-1/2 z-20 h-full w-10 flex items-center justify-center bg-linear-to-r from-[var(--theme-base-dark)] from-10% shadow-lg transition-all opacity-80 hover:opacity-100"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-[var(--theme-base-light)]" />
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={scrollRightHandler}
            className="absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 z-20 h-full w-10 flex items-center justify-center bg-linear-to-l from-[var(--theme-base-dark)] from-10% shadow-lg transition-all opacity-80 hover:opacity-100"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-[var(--theme-base-light)]" />
          </button>
        )}

        <div
          ref={sliderRef}
          className="flex gap-4 my-5 overflow-x-auto no-scrollbar cursor-pointer active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {movies.map((movie: TMovie) => (
            <div
              key={movie.id}
              className="flex-shrink-0"
              onClick={() => handleNavigateToDetails(movie.id)}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
