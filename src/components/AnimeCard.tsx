import { Link } from "react-router-dom";
import { AnimesProps } from "../pages/inicio";

interface Props {
  Animes: AnimesProps[];
}

export default function AnimeCard({ Animes }: Props) {
  return (
    <div className="w-full grid gap-3 grid-cols-3">
      {Animes.map((item) => {
        return (
            <Link to={`/anime/detail/${item.mal_id}`}
              className="max-w-full max-h-full flex flex-col justify-center items-center p-2 cursor-pointer transition-all hover:scale-110"
              key={item.mal_id}
            >
              <img
                className="w-[200px] h-[300px] rounded-lg"
                src={item.images.jpg.image_url}
                alt={item.title}
              />
              <h1 className="w-[300px] font-bold text-base uppercase text-center">
                {item.title}
              </h1>
            </Link>
        );
      })}
    </div>
  );
}
