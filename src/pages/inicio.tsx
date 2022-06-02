import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import Header from "../components/Header";
import Search from "../components/Search";

export interface AnimesProps {
  mal_id: string;
  title: string;
  url: string;
  episodes: number,
  synopsis: string,
  airing: boolean,
  genres: {
    name: string,
  }

  images: {
    jpg: {
      image_url: string;
    };
  };
}

export function Inicio() {
  const [animes, setAnimes] = useState<AnimesProps[]>([]);
  const [search, setSearch] = useState("");

  const getAnimes = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/top/anime?bypopularity&page=1&limit=12`
    ).then((res) => res.json());
    setAnimes(temp.data);
  };

  const HandleSearch = (e: any) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (q: string) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${q}&order_by=${q}&sort=desc&limit=12`
    ).then((res) => res.json());

    setAnimes(temp.data);
  };

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="pt-5">
          <Search
            HandleSearch={HandleSearch}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div className="pt-10">
          <AnimeCard Animes={animes} />
        </div>
      </div>
    </>
  );
}
