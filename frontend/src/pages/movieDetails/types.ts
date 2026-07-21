export interface Movie {
  id: number;
  name: string;
  year: number;
  language: string;
  director: string;
  genres: string[];
  collection?: TMovie[];
  actors: string[];
  summary: string;
  duration: number;
  productionCompany: string;
  ageRating: string;
  ratings: TRating[];
  imageUrl: string;
  wideImageUrl: string;
}
interface TMovie {
  id: number;
  title: string;
  imageUrl: string;
  director: string[];
  language: string[];
  duration: number;
  ratings: TRating[];
  ageRating: string;
  releaseDate: string;
  genres: string[];
}
export interface TRating {
  name: string;
  rating: number;
}
export interface MovieCardProps {
  movie: Movie;
}
