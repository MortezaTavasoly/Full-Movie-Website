import { CiGlobe } from "react-icons/ci";
import { FaUsers, FaTheaterMasks } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { WrapperText } from "@/components/ui/atoms/WrapperText";
import { WrapperChip } from "@/components/ui/atoms/WrapperChip";
import { WrapperImage } from "@/components/ui/atoms/WrapperImage";
import { IoLocationOutline } from "react-icons/io5";
import { LiaImdb, LiaUserEditSolid } from "react-icons/lia";
import type { Movie, TRating } from "../types";

import { SiRottentomatoes } from "react-icons/si";
import { FaFilm, FaRegClock } from "react-icons/fa6";
import { LuCalendar, LuCrown } from "react-icons/lu";

interface MovieCardProps {
  movie: Movie;
}

const DetailSection = ({ movie }: MovieCardProps) => {
  const ratingChipBackground = (type: string) => {
    if (type.toLowerCase() === "imdb") {
      return "!bg-amber-400/90 text-slate-800";
    } else if (type.toLowerCase() === "rotten tomatoes") {
      return "!bg-red-500/80 text-slate-50 ring-[--ring]";
    } else {
      return "!bg-lime-400/80 text-slate-800";
    }
  };
  return (
    <>
      <div className="absolute left-0 w-full h-dvh blur-xl !z-0">
        <WrapperImage
          address={movie.wideImageUrl}
          name={movie.name}
          className="w-full h-dvh"
        />
      </div>
      <div className="relative w-full rounded-t-lg !z-0 flex !mx-auto !px-5 bg-[linear-gradient(to_bottom,transparent_0%,color-mix(in_srgb,var(--theme-base-dark)_40%,transparent)_10%,color-mix(in_srgb,var(--theme-base-dark)_60%,transparent)_30%,var(--theme-base-dark)_100%)]">
        <div className="relative overflow-hidden !mt-6">
          <WrapperImage
            address="http://s5.picofile.com/file/8134788534/Inception_Poster_1_www_movie_poster_rozblog_com_.jpg"
            name={movie.name}
            className="w-[300px] rounded-lg"
          />
        </div>
        <div className="!p-6">
          <div className="flex justify-between items-start !mb-5">
            <WrapperText
              text={movie.name}
              type={{ name: "heading", level: 3, weight: "bold" }}
              className="text-white transition-colors"
              as="h3"
            />
          </div>
          <div className="flex justify-start items-start !mb-5 gap-2 ">
            {!!movie?.ratings?.length &&
              movie?.ratings.map((rate: TRating) => {
                return (
                  <WrapperChip
                    key={rate.name}
                    text={`${rate.name}: ${rate.rating}`}
                    size="medium"
                    className={`top-2 flex justify-between gap-1 items-center rounded-xl !mr-1 !px-2 ${ratingChipBackground(rate.name)}`}
                  >
                    {rate.name.toLowerCase() === "imdb" && (
                      <LiaImdb size={20} />
                    )}
                    {rate.name.toLowerCase() === "rotten tomatoes" && (
                      <SiRottentomatoes size={20} />
                    )}
                    {rate.name.toLowerCase() === "users" && (
                      <LuCrown size={20} />
                    )}
                  </WrapperChip>
                );
              })}
          </div>

          <div className="grid grid-cols-3 gap-5 !px-3">
            <div className="flex items-center gap-1">
              <FaRegClock
                size={15}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Runtime:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text={`${Math.floor(movie.duration / 60)}h ${
                  movie.duration % 60
                }m`}
                type={{ name: "body", level: 1, weight: "light" }}
                className=" text-white !font-bold"
              />
            </div>

            <div className=" flex gap-1">
              <IoLocationOutline
                size={16}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Country:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text={movie.productionCompany}
                type={{ name: "body", level: 2, weight: "light" }}
                className="text-white !font-bold"
              />
            </div>
            <div className="flex items-center gap-1">
              <LuCalendar
                size={15}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Year:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text={movie.year}
                type={{ name: "body", level: 1, weight: "light" }}
                className=" text-white !font-bold"
              />
            </div>

            <div className="flex items-center gap-1">
              <MdFamilyRestroom
                size={15}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Age Rating:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text={movie.ageRating}
                type={{ name: "body", level: 1, weight: "light" }}
                className=" text-white !font-bold"
              />
            </div>

            <div className="flex items-center gap-1">
              <CiGlobe
                size={15}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Language:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text={movie.language}
                type={{ name: "body", level: 1, weight: "light" }}
                className=" text-white !font-bold"
              />
            </div>
            <div className=" flex gap-1">
              <FaFilm
                size={15}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Type:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text={movie.productionCompany}
                type={{ name: "body", level: 2, weight: "light" }}
                className="text-white !font-bold"
              />
            </div>

            <div className="flex items-center gap-1 !mb-1 col-span-3">
              <FaTheaterMasks
                size={15}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Genres:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <div>
                {movie.genres.map((genre, index) => (
                  <WrapperChip
                    key={index + 1}
                    text={genre}
                    varient="secondary"
                    type="filled"
                    size="small"
                    shape="rounded"
                    className="!mx-1"
                  />
                ))}
              </div>
            </div>
            <div className="col-span-3 flex gap-1">
              <LiaUserEditSolid
                size={15}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Director:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text={movie.director}
                type={{ name: "body", level: 1, weight: "light" }}
                className="text-white !font-bold"
              />
            </div>

            <div className="col-span-3 flex gap-1">
              <FaUsers
                size={15}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text="Cast:"
                type={{ name: "body", level: 3, weight: "light" }}
                className="text-[var(--theme-primary-300)]/80"
              />
              <WrapperText
                text={movie.actors.join(", ")}
                className="text-sm leading-relaxed text-white !font-bold"
              />
            </div>

            <div className="!mb-4 col-span-3">
              <WrapperText
                text={movie.summary}
                type={{ name: "body", level: 2, weight: "light" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailSection;
