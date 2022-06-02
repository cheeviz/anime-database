import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { AnimeDetail } from "./pages/AnimeDetail";
import { Inicio } from "./pages/inicio";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/anime/detail/:id" element={<AnimeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
