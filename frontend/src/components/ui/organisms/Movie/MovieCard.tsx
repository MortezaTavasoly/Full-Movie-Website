import { useState } from "react";
import { WrapperChip } from "../../atoms/WrapperChip";
import { WrapperImage } from "../../atoms/WrapperImage";
import { WrapperText } from "../../atoms/WrapperText";
import type { TRating, TSingleMovieProps } from "./types";
import { CiCalendar } from "react-icons/ci";
import { SiRottentomatoes } from "react-icons/si";
import { LiaImdb } from "react-icons/lia";
import { MdLanguage, MdAccessTime } from "react-icons/md";
import { PiUsers } from "react-icons/pi";

const MovieCard = ({ movie }: TSingleMovieProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleRatings = (value: string): number | string => {
    const ratingResult = movie?.ratings?.find((rate: TRating) => {
      return rate.name.toLowerCase() === value.toLowerCase();
    });
    if (ratingResult) {
      return ratingResult.rating;
    } else {
      return "---";
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden !max-w-[200px]"
      onDragStart={handleDragStart}
      draggable="false"
    >
      <div
        onDragStart={handleDragStart}
        draggable="false"
        className="overflow-hidden rounded-xl"
      >
        {isHovered && (
          <div
            className={`z-1 relative shadow-[0px_40px_70px_100px_var(--theme-base-black)]/90 w-full top-25 transition-all duration-100 ease-in ${
              isHovered ? "opacity-100 " : "opacity-0 "
            }`}
            onDragStart={handleDragStart}
            draggable="false"
          />
        )}
        <WrapperImage
          address={movie.imageUrl}
          name={movie.title}
          size={{ width: 200, height: 200 }}
          className={`!min-w-[200px] !min-h-[250px] ease-in duration-[0.2s] ${
            isHovered ? "blur-xs" : ""
          }`}
        />
      </div>
      <div
        className={`transition-all duration-100 ease-in ${
          isHovered ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {isHovered && (
          <>
            <div
              className="z-2 absolute w-full pointer-events-none flex flex-nowrap items-center justify-center top-15 gap-3"
              onDragStart={handleDragStart}
              draggable="false"
            >
              <WrapperText
                text={handleRatings("Imdb")}
                className="flex items-center gap-1 flex-row-reverse text-[var(--theme-gray-400)]"
              >
                <LiaImdb
                  size={25}
                  color="var(--theme-primary-500)"
                  type="filled"
                />
              </WrapperText>
              <WrapperText
                text={handleRatings("Rotten tomatoes")}
                className="flex items-center gap-1 flex-row-reverse text-[var(--theme-gray-400)]"
              >
                <SiRottentomatoes size={20} color="var(--theme-error-400)" />
              </WrapperText>
              <WrapperText
                text={movie.releaseDate}
                className="flex items-center gap-1 flex-row-reverse text-[var(--theme-gray-400)]"
              >
                <CiCalendar size={20} />
              </WrapperText>
            </div>
            {movie.genres && (
              <div
                className="z-2 absolute w-full !p-3 top-23 ease-in duration-[0.2s] flex gap-1 flex-wrap justify-center pointer-events-none"
                onDragStart={handleDragStart}
                draggable="false"
              >
                {movie?.genres?.map((genre: string, index: number) => {
                  return (
                    <WrapperChip
                      key={index + 1}
                      text={genre}
                      size="small"
                      type="outlined"
                      varient="black"
                    />
                  );
                })}
              </div>
            )}
            {!!movie.language && (
              <WrapperText
                text={`Language : ${movie.language[0]}
                ${
                  movie.language.length > 1
                    ? `, +${movie.language.length - 1}`
                    : ""
                }`}
                className="z-2 absolute w-full flex flex-row-reverse gap-1 text-over flex-wrap justify-center items-center !p-3 top-35 ease-in duration-[0.2s] pointer-events-none text-[var(--theme-gray-400)]"
              >
                <MdLanguage size={20} />
              </WrapperText>
            )}

            {!!movie.duration && (
              <WrapperText
                text={`Duration : ${movie.duration} min`}
                className="z-2 absolute w-full flex flex-row-reverse gap-1 flex-wrap justify-center items-center !p-3 top-43 ease-in duration-[0.2s] pointer-events-none text-[var(--theme-gray-400)]"
              >
                <MdAccessTime size={20} />
              </WrapperText>
            )}
            {!!movie.ageRating && (
              <WrapperText
                text={`Age Rating : ${movie.ageRating}`}
                className="z-2 absolute w-full flex flex-row-reverse gap-1 flex-wrap justify-center items-center !p-3 top-50 ease-in duration-[0.2s] pointer-events-none text-[var(--theme-gray-400)]"
              >
                <PiUsers size={20} />
              </WrapperText>
            )}
          </>
        )}
      </div>
      <div className="overflow-hidden flex items-center justify-center !mt-2 !p-2">
        <WrapperText
          text={movie.title}
          className={`transition-all duration-200 ease-in text-center break-keep text-[var(--theme-base-light)] ${
            isHovered ? "text-[var(--theme-primary-300)]" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default MovieCard;
