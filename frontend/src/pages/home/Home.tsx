import { WrapperText } from "@/components/ui/atoms/wrapperText";
import Carousel from "./carousel/Carousel";
import { WrapperChip } from "@/components/ui/atoms/wrapperChip";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "HITMAN",
      imageUrl: "src/assets/wide-image.png",
      rating: 8.5,
      releaseDate: 2015,
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 2,
      title: "DRACULA: Untold",
      imageUrl: "src/assets/wide-image2.png",
      rating: 8.5,
      releaseDate: 2015,
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 3,
      title: "Arcane",
      imageUrl: "src/assets/wide-image3.png",
      rating: 8.5,
      releaseDate: 2015,
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 4,
      title: "Everything Everywhere All At Once",
      imageUrl: "src/assets/wide-image.png",
      rating: 8.5,
      releaseDate: 2015,
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 5,
      title: "DRACULA: Untold",
      imageUrl: "src/assets/wide-image2.png",
      rating: 8.5,
      releaseDate: 2015,
      genres: ["action", "drama", "sci-fi"],
    },
    {
      id: 6,
      title: "Everything Everywhere All At Once",
      imageUrl: "src/assets/wide-image3.png",
      rating: 8.5,
      releaseDate: 2015,
      genres: ["action", "drama", "sci-fi"],
    },
  ];

  return (
    <div>
      <Carousel movies={movies} autoPlayInterval={3000} />
      <WrapperChip
        text="testing"
        type="outlined"
        varient="black"
        size="small"
      />
      <br />
      <WrapperText
        text="
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      />
    </div>
  );
};

export default Home;
