export interface TMovie {
  id: number;
  title: string;
  imageUrl: string;
  director: string;
  language: string;
  duration: number;
  rating: number;
  ageRating: string;
  releaseDate: string;
  genres: string[];
}
export interface TSingleMovieProps {
  movie: TMovie;
}
export interface TDropDownProps {
  value: TDropDownItems;
  varient?: string;
  className?: string;
  itemClass?: string;
  children?: React.ReactNode;
}
export interface TDropDownItems {
  title: string;
  caption?: string;
  items: TItemValue[];
}
export interface TItemValue {
  id: number;
  itemTitle: string;
  buttonText?: string;
  itemCaption: string;
}
export interface TSubItemValue extends TItemValue {
  subItems?: TItemValue[];
}
