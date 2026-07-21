import { WrapperDropdown } from "@/pages/movieDetails/linkSection";
import { DetailSection } from "./detailSection";
import { WrapperButton } from "@/components/ui/atoms/WrapperButton";
import type { MovieCardProps } from "./types";
import { MovieSlider } from "@/components/ui/organisms";
import type { Movie } from "@/pages/movieDetails/types";
import { WrapperText } from "@/components/ui/atoms";
import CommentSection from "./commentSection/CommentSection";

const MovieDetail = () => {
  const movie: Movie = {
    id: 1,
    name: "Inception",
    year: 2010,
    language: "English",
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Action", "Thriller"],
    collection: [
      {
        id: 5,
        title: "Inception",
        imageUrl:
          "https://gamefa.com/wp-content/uploads/2025/01/MV5BOWNmYTRlOGYtZjE4Yy00YjAxLWEwZDgtNzU4MGViN2Q2ODMzXkEyXkFqcGc_V1_Ratio08043_AL_.jpg",
        director: ["director 1", "director 2"],
        language: ["english", "lang 2"],
        duration: 150,
        ratings: [
          { name: "Imdb", rating: 8.5 },
          { name: "Rotten tomatoes", rating: 8 },
        ],
        ageRating: "PG-13",
        releaseDate: "2016",
        genres: ["Action", "Sci-Fi"],
      },
      {
        id: 6,
        title: "Inception 2",
        imageUrl:
          "https://gamefa.com/wp-content/uploads/2025/01/MV5BOWNmYTRlOGYtZjE4Yy00YjAxLWEwZDgtNzU4MGViN2Q2ODMzXkEyXkFqcGc_V1_Ratio08043_AL_.jpg",
        director: ["director 1", "director 2"],
        language: ["lang 1", "lang 2"],
        duration: 150,
        ratings: [
          { name: "Imdb", rating: 8.5 },
          { name: "Rotten tomatoes", rating: 8 },
          { name: "Users", rating: 7 },
        ],
        ageRating: "PG-13",
        releaseDate: "2017",
        genres: ["Action", "Sci-Fi"],
      },
    ],
    actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
    ],
    summary:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    duration: 148,
    productionCompany: "Warner Bros. Pictures",
    ageRating: "PG-13",
    ratings: [
      { name: "Imdb", rating: 8.5 },
      { name: "Rotten tomatoes", rating: 8 },
      { name: "Users", rating: 7 },
    ],
    imageUrl: "src/assets/wide-image.png",
    wideImageUrl: "src/assets/wide-image3.png",
  };

  const mockObject = {
    title: "main title",
    caption: "caption",
    items: [
      {
        id: 1,
        itemTitle: "item title",
        buttonText: "download",
        itemCaption: "this is the caption",
      },
      {
        id: 2,
        itemTitle: "item title",
        buttonText: "download",
        itemCaption: "this is the caption",
      },
      {
        id: 3,
        itemTitle: "item title",
        itemCaption: "this is the caption",
        subItems: [
          {
            id: 1,
            itemTitle: "sub title 1",
            buttonText: "sub button",
            itemCaption: "sub caption",
          },
          {
            id: 2,
            itemTitle: "sub title 2",
            buttonText: "sub button",
            itemCaption: "sub caption",
          },
          {
            id: 3,
            itemTitle: "sub title 3",
            buttonText: "sub button",
            itemCaption: "sub caption",
          },
        ],
      },
    ],
  };
  const mockCommentData = [
    {
      id: 1,
      createdDate: "1401/06/05",
      createdTime: "09:20",
      commentText: "this is a comment text",
      userName: "morteza",
      userId: 12,
      aproved: true,
      reactions: {
        like: 4,
        dislike: 2,
      },
      replies: [
        {
          id: 2,
          createdDate: "1401/06/05",
          createdTime: "09:22",
          commentText: "this is a comment text",
          userId: 12,
          aproved: true,
          userName: "akbar",
          reactions: {
            like: 4,
            dislike: 2,
          },
          replies: [
            {
              id: 4,
              createdDate: "1401/06/05",
              createdTime: "09:22",
              commentText: "this is a comment text",
              userId: 12,
              aproved: true,
              userName: "asghar",
              reactions: {
                like: 4,
                dislike: 2,
              },
              replies: [
                {
                  id: 5,
                  createdDate: "1401/06/05",
                  createdTime: "09:22",
                  commentText: "this is a comment text",
                  userId: 12,
                  aproved: true,
                  userName: "jafar",
                  reactions: {
                    like: 4,
                    dislike: 2,
                  },
                },
              ],
            },
          ],
        },
        {
          id: 3,
          createdDate: "1401/06/05",
          createdTime: "09:20",
          commentText: "this is a comment text",
          userId: 12,
          aproved: true,
          userName: "ali",
          reactions: {
            like: 4,
            dislike: 2,
          },
        },
      ],
    },
    {
      id: 6,
      createdDate: "1401/06/05",
      createdTime: "09:20",
      commentText: "this is a comment text",
      userId: 12,
      aproved: true,
      userName: "hamed",
      reactions: {
        like: 4,
        dislike: 2,
      },
      replies: [
        {
          id: 7,
          createdDate: "1401/06/05",
          createdTime: "09:20",
          commentText: "this is a comment text",
          userId: 12,
          aproved: true,
          userName: "ahmad",
          reactions: {
            like: 4,
            dislike: 2,
          },
        },
        {
          id: 8,
          createdDate: "1401/06/05",
          createdTime: "09:20",
          commentText: "this is a comment text",
          userId: 12,
          aproved: true,
          userName: "kazem",
          reactions: {
            like: 4,
            dislike: 2,
          },
        },
      ],
    },
    {
      id: 10,
      createdDate: "1401/06/05",
      createdTime: "09:20",
      commentText: "this is a comment text",
      userId: 12,
      aproved: true,
      userName: "mohsen",
      reactions: {
        like: 4,
        dislike: 2,
      },
    },
  ];
  return (
    <div className="!mx-auto overflow-hidden">
      <DetailSection movie={movie} />
      <div className="relative !py-8 bg-[var(--theme-base-dark)]">
        <div className="!mx-5">
          <WrapperDropdown
            value={mockObject}
            varient={"primary"}
            className={"someClass"}
            itemClass={""}
          />
        </div>
      </div>
      {!!movie.collection && (
        <div className="relative bg-[var(--theme-base-dark)]">
          <div className=" !mx-5">
            <div className="!mb-5 !pt-5 flex justify-between items-center">
              <WrapperText
                text="Related Movies"
                type={{ name: "title", level: 2 }}
              />
              <WrapperButton text="More" />
            </div>
            <MovieSlider movies={movie.collection} />
          </div>
        </div>
      )}
      {/* todo: this should be suggestion Simulare section . change condition*/}
      {!!movie.collection && (
        <div className="relative bg-[var(--theme-base-dark)]">
          <div className="!mx-5">
            <div className="!mb-5 !pt-5 flex justify-between items-center">
              <WrapperText
                text="Simulare Movies"
                type={{ name: "title", level: 2 }}
              />
              <WrapperButton text="More" />
            </div>
            <MovieSlider movies={movie.collection} />
          </div>
        </div>
      )}
      <div className="relative bg-[var(--theme-base-dark)]">
        <div className="!mx-5 !p-2 rounded-xl bg-[var(--theme-base-dark)]/50">
          <WrapperText text="Comments" type={{ name: "title", level: 2 }} />
          <div className="!m-3">
            <CommentSection comments={mockCommentData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
