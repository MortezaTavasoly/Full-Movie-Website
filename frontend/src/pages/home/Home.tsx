import { WrapperButton, WrapperText } from "@/components/ui/atoms";
import Carousel from "./carousel/Carousel";
import { MovieSlider } from "../../components/ui/organisms/MovieSlider";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "HITMAN",
      wideImageUrl: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 2,
      title: "DRACULA: Untold",
      wideImageUrl: "https://wallpapercave.com/wp/wp2581055.jpg",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 3,
      title: "Arcane",
      wideImageUrl:
        "https://images3.alphacoders.com/140/thumb-1920-1403101.jpg",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 4,
      title: "Everything Everywhere All At Once",
      wideImageUrl: "src/assets/wide-image4.jpg",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 5,
      title: "DRACULA: Untold",
      wideImageUrl: "src/assets/wide-image5.jpg",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 6,
      title: "Everything Everywhere All At Once",
      wideImageUrl: "src/assets/wide-image3.png",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 7,
      title: "Everything Everywhere All At Once",
      wideImageUrl: "src/assets/wide-image.png",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 8,
      title: "Everything Everywhere All At Once",
      wideImageUrl: "src/assets/wide-image2.png",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 9,
      title: "Everything Everywhere All At Once",
      wideImageUrl: "src/assets/wide-image3.png",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 10,
      title: "Everything Everywhere All At Once",
      wideImageUrl: "src/assets/wide-image.png",
      imageUrl: "src/assets/breakingBad.png",
      ratings: [
        { name: "Imdb", rating: 8.5 },
        { name: "Rotten tomatoes", rating: 8 },
      ],
      ageRating: "R",
      duration: 90,
      releaseDate: "2015",
      language: ["English"],
      director: ["some name"],
      genres: ["action", "drama", "sci-fi"],
    },
  ];

  return (
    <div className="!-mt-25">
      <Carousel movies={movies.slice(0, 8)} autoPlayInterval={3000} />

      <div>
        <div className="w-full flex justify-between items-center !p-5 !mt-5">
          <WrapperText text="New Movies" />
          <WrapperButton
            text="More"
            size="medium"
            shape="default"
            type="outlined"
            variant="primary"
            className="flex justify-center items-center gap-1"
          />
        </div>

        <MovieSlider movies={movies} />
      </div>

      <div>
        <div className="w-full flex justify-between items-center !p-5 !mt-5">
          <WrapperText text="New Movies" />
          <WrapperButton
            text="More"
            size="medium"
            shape="default"
            type="outlined"
            variant="primary"
            className="flex justify-center items-center gap-1"
          />
        </div>
        <MovieSlider movies={movies} />
      </div>
      <div>
        <div className="w-full flex justify-between items-center !p-5 !mt-5">
          <WrapperText text="New Movies" />
          <WrapperButton
            text="More"
            size="medium"
            shape="default"
            type="outlined"
            variant="primary"
            className="flex justify-center items-center gap-1"
          />
        </div>
        <MovieSlider movies={movies} />
      </div>
    </div>
  );
};

export default Home;
