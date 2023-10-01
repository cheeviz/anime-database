import { useState, useEffect } from "react";
import * as S from "./styled";
import { AnimeCard } from "../AnimeCard";
import { AnimeDetails } from "../AnimeDetails";

export function AnimeSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(Number);

  const handleItemClick = (id: any) => {
    setClickedItemId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const searchAnime = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
        if (!response.ok) {
          throw new Error("Não foi possivel obter os dados do anime");
        }
        const data = await response.json();
        setSearchResults(data.data);
      } catch (err) {}
    };
    searchAnime();
  }, [query]);

  return (
    <S.Container>
      <S.Input type="text" placeholder="Procurar..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <AnimeDetails show={showModal} handleClose={handleCloseModal} itemId={clickedItemId} />

      <S.AnimeWanted>
        {query.length > 0 ? (
          <S.AnimeWantedBox>
            {searchResults.map((item: any) => (
              <AnimeCard
                key={item.mal_id}
                id={item.mal_id}
                title={item.title}
                img={item.images.webp.image_url}
                handleClick={() => handleItemClick(item.mal_id)}
              />
            ))}
          </S.AnimeWantedBox>
        ) : null}
      </S.AnimeWanted>
    </S.Container>
  );
}
