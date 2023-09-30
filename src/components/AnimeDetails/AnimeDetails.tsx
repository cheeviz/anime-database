import { useState, useEffect } from "react";
import * as S from "./styled";

type Props = {
  show: boolean;
  handleClose: () => void;
  itemId: number;
};

export function AnimeDetails({ show, handleClose, itemId }: Props) {
  const [animeData, setAnimeData] = useState<any>({
    images: { jpg: { image_url: "" } },
    aired: { string: "" },
    studios: [{ name: "" }],
    licensors: [{ name: "" }],
    genres: [{ name: "" }],
  });

  useEffect(() => {
    const fetchAnimeById = async (id: any) => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        if (!response.ok) {
          throw new Error("Não foi possível obter os dados do anime");
        }
        const data = await response.json();

        setAnimeData(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados do anime", error);
      }
    };

    if (show && itemId) {
      fetchAnimeById(itemId);
    }
  }, [show, itemId]);

  const licensors = animeData.licensors.map((item: any) => item.name).join(", ");
  const studios = animeData.studios.map((item: any) => item.name).join(", ");
  const genres = animeData.genres.map((item: any) => item.name).join(", ");

  return (
    <S.Container $isShow={show}>
      <S.FundoBlur />

      <S.Box>
        <S.Conteudo>
          <S.ConteudoBox>
            <S.Image src={animeData.images.jpg.image_url} alt={animeData.title} />
            <S.Informations>
              <S.Title className="bg-red-500 p-2 rounded-xl">
                {animeData.title} - {animeData.mal_id}
              </S.Title>

              <S.StatsBox>
                <S.StatsScore>
                  <S.ParagrafoScore>Score</S.ParagrafoScore>
                  <S.Title>{animeData.score}</S.Title>
                </S.StatsScore>
                <S.StatsGrid>
                  <S.Paragrafo>
                    Rank: <b>{animeData.rank}</b>
                  </S.Paragrafo>

                  <S.Paragrafo>
                    Popularity: <b>#{animeData.popularity}</b>
                  </S.Paragrafo>

                  <S.Paragrafo>
                    {animeData.season} {animeData.year}
                  </S.Paragrafo>

                  <S.Paragrafo>{animeData.type}</S.Paragrafo>
                </S.StatsGrid>
              </S.StatsBox>

              <S.Informations className="m-auto">
                <S.Title>STATUS</S.Title>
                <div className="grid grid-cols-3">
                  <S.Paragrafo>
                    Status: <b>{animeData.status}</b>
                  </S.Paragrafo>
                  <S.Paragrafo>
                    Episodes: <b>{animeData.episodes}</b>
                  </S.Paragrafo>

                  <S.Paragrafo>
                    Aired: <b className="text-sm">{animeData.aired.string}</b>
                  </S.Paragrafo>

                  <S.Paragrafo>
                    Licensors: <b>{licensors === "" ? "Not found" : licensors}</b>
                  </S.Paragrafo>

                  <S.Paragrafo>
                    Studios: <b>{studios}</b>
                  </S.Paragrafo>
                  <S.Paragrafo>
                    Genres: <b>{genres}</b>
                  </S.Paragrafo>
                </div>
              </S.Informations>
            </S.Informations>
          </S.ConteudoBox>
          <S.Button onClick={handleClose}>Fechar</S.Button>
        </S.Conteudo>
      </S.Box>
    </S.Container>
  );
}
