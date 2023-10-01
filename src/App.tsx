import { AnimeSearch } from "./components/AnimeSearch";
import { Home } from "./pages/Home";
import * as S from "./styled";

export default function App() {
  return (
    <S.Container>
      <S.Title>
        Anime <span className="text-purple-500">Data</span>base
      </S.Title>
      <AnimeSearch />
      <Home />
    </S.Container>
  );
}
