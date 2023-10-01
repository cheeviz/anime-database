import * as S from "./styled";

export function AnimeCard({ title, img, handleClick }: any) {
  return (
    <S.Container onClick={handleClick}>
      <S.Image src={img} alt={title} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
