import { useEffect, useState } from "react";
import * as S from "./styled";
import { AnimeList } from "../../components/AnimeList/AnimeList";

export interface AnimesProps {
  mal_id: string;
  title: string;
  url: string;
  episodes: number;
  synopsis: string;
  airing: boolean;
  genres: [
    {
      name: string;
    }
  ];

  images: {
    jpg: {
      image_url: string;
    };
  };
}

export function Home() {
  const [animes, setAnimes] = useState<AnimesProps[]>([]);
  const [animesTop, setAnimesTop] = useState<AnimesProps[]>([]);
  const [animesTop2, setAnimesTop2] = useState<AnimesProps[]>([]);
  const [search, setSearch] = useState("");

  /* const HandleSearch = (e: any) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (q: string) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${q}&order_by=${q}&sort=desc&limit=12`
    ).then((res) => res.json());

    setAnimes(temp.data);
  }; */

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/top/anime?bypopularity&page=1&limit=12"
        );
        if (!response.ok) {
          throw new Error("Não foi possível obter os dados da API");
        }
        const data = await response.json();
        setAnimes(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }
    };

    const fetchTopAnimes = async () => {
      try {
        const response = await fetch(
          "https://api.jikan.moe/v4/top/anime?bypopularity&page=2&limit=12"
        );
        if (!response.ok) {
          throw new Error("Não foi possível obter os dados da API");
        }
        const data = await response.json();
        setAnimesTop(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }
    };
    fetchTopAnimes();
    fetchAnimeData();
  }, []);

  return (
    <S.Container>
      <S.Box>
        <S.Title>Populares</S.Title>
        <AnimeList Animes={animes} />
      </S.Box>

      <S.Box>
        <S.Title>Top</S.Title>
        <AnimeList Animes={animesTop} />
      </S.Box>
    </S.Container>
  );
}
