import { WrapperText } from "@/components/ui/atoms/WrapperText";
import React, { useState, useEffect, useCallback } from "react";
import type { CarouselProps, Movie, TRating } from "./types";
import { WrapperChip } from "@/components/ui/atoms/WrapperChip";
import { FaImdb } from "react-icons/fa";
import { SiRottentomatoes } from "react-icons/si";
import { CiCalendar } from "react-icons/ci";
import { WrapperButton, WrapperImage } from "@/components/ui/atoms";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoPlay } from "react-icons/io5";

const Carousel: React.FC<CarouselProps> = ({
  movies,
  autoPlayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const handleRatings = (movie: Movie, value: string): number | string => {
    const ratingResult = movie?.ratings?.find((rate: TRating) => {
      return rate.name.toLowerCase() === value.toLowerCase();
    });
    if (ratingResult) {
      return ratingResult.rating;
    } else {
      return "---";
    }
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1,
    );
  }, [movies.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1,
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

  const handleUserInteraction = (): void => {
    setIsAutoPlay(false);

    setTimeout(() => {
      setIsAutoPlay(true);
    }, 3000);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden  max-h-fit">
      <div className="relative h-80 md:h-96 lg:h-[500px]">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="flex-shrink-0 w-full relative">
                <WrapperImage
                  address={movie.wideImageUrl}
                  name={movie.title}
                  className="w-full h-full object-cover pointer-events-none select-none"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-50% via-[var(--theme-base-dark)]/40 via-60% to-[var(--theme-base-dark)] to-100% "></div>
                <div className="relative flex flex-col gap-3 bottom-60 left-20 w-fit !p-5">
                  <WrapperText
                    className=" flex flex-col text-left text-[var(--theme-primary-100)]"
                    text={movie.title}
                    type={{ name: "title", level: 1 }}
                  />
                  <div className="flex gap-5">
                    <WrapperText
                      className=" flex flex-row-reverse justify-center items-center gap-1 text-[var(--theme-gray-400)] w-fit"
                      text={handleRatings(movie, "Imdb")}
                      type={{ name: "caption", level: 1 }}
                    >
                      <FaImdb size={25} color="#ffdf20" />
                    </WrapperText>
                    <WrapperText
                      className=" flex flex-row-reverse justify-center items-center gap-1 text-[var(--theme-gray-400)] w-fit"
                      text={handleRatings(movie, "Rotten Tomatoes")}
                      type={{ name: "caption", level: 1 }}
                    >
                      <SiRottentomatoes
                        size={20}
                        color="var(--theme-error-400)"
                      />
                    </WrapperText>
                    <WrapperText
                      className=" flex flex-row-reverse justify-center items-center gap-1 text-[var(--theme-gray-400)] w-fit"
                      text={movie.releaseDate}
                      type={{ name: "caption", level: 1 }}
                    >
                      <CiCalendar size={20} />
                    </WrapperText>
                  </div>
                  <div>
                    {movie?.genres?.length > 0 &&
                      movie?.genres?.map((genre, index) => {
                        return (
                          <WrapperChip
                            key={index + 1}
                            text={genre}
                            size="small"
                            className=" top-2 !mr-1"
                            varient="black"
                            type="outlined"
                          />
                        );
                      })}
                  </div>
                  <Link
                    to={`/MovieDetail/${movie.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary "
                  >
                    <WrapperButton
                      size="xLarge"
                      variant="error"
                      shape="default"
                      className="!p-3 gap-2"
                      text="Watch"
                      onClick={() => console.log("here")}
                    >
                      <IoPlay className="w-5 h-5" />
                    </WrapperButton>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <WrapperButton
          shape="rounded"
          className="w-10 h-10 absolute left-2 top-1/2 -translate-y-1/2 text-[var(--theme-base-light)] cursor-pointer flex items-center justify-center bg-[var(--theme-base-dark)]/10 shadow-lg transition-all opacity-80 hover:opacity-100"
          onClick={() => {
            goToPrev();
            handleUserInteraction();
          }}
          aria-label="Previous slide"
        >
          <BiChevronLeft />
        </WrapperButton>

        <WrapperButton
          shape="rounded"
          className="w-10 h-10 absolute right-2 top-1/2 -translate-y-1/2 text-[var(--theme-base-light)] cursor-pointer flex items-center justify-center bg-[var(--theme-base-dark)]/10 shadow-lg transition-all opacity-80 hover:opacity-100"
          onClick={() => {
            goToNext();
            handleUserInteraction();
          }}
          aria-label="Next slide"
        >
          <BiChevronRight />
        </WrapperButton>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-3">
          {movies.map((item, index) => (
            <WrapperButton
              type="text"
              key={item.id}
              className={`w-2.5 h-2.5 rounded-full transition-all !p-0 duration-300 ${
                index === currentIndex
                  ? "bg-[var(--theme-error-400)]/80 w-8"
                  : "bg-[var(--theme-primary-500)]/40 hover:bg-[var(--theme-primary-500)]/60"
              }`}
              onClick={() => {
                goToSlide(index);
                handleUserInteraction();
              }}
              size="small"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
