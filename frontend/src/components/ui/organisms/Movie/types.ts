export interface TMovie {
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

export interface TSingleMovieProps {
  movie: TMovie;
}
