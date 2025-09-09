export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
}

export interface CarouselProps {
  movies: Movie[];
  autoPlayInterval?: number; // میلی‌ثانیه
}
