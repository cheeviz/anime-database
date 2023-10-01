import { AnimeCard } from "../AnimeCard";
import * as S from "./styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimeDetails } from "../AnimeDetails";
import { useState } from "react";

export function AnimeList({ Animes }: any) {
  const [showModal, setShowModal] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(Number);

  const handleItemClick = (id: any) => {
    setClickedItemId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <S.Container>
      <AnimeDetails show={showModal} handleClose={handleCloseModal} itemId={clickedItemId} />
      <Slider {...settings}>
        {Animes.map((item: any, index: any) => (
          <S.Container key={index}>
            <AnimeCard
              id={item.mal_id}
              title={item.title}
              img={item.images.webp.image_url}
              handleClick={() => handleItemClick(item.mal_id)}
            />
          </S.Container>
        ))}
      </Slider>
    </S.Container>
  );
}
