export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  releaseDate: number;
  genres: string[];
}

export interface CarouselProps {
  movies: Movie[];
  autoPlayInterval?: number;
}
