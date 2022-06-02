import React, { useEffect, useState } from "react";
import { BsFillCameraReelsFill, BsCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { AnimesProps } from "./inicio";

export function AnimeDetail() {
  const [anime, setAnime] = useState<AnimesProps>();

  const { id } = useParams();

  const getAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime/${id}`).then(
      (res) => res.json()
    );
    console.log(temp.data);

    setAnime(temp.data);
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div
      className="h-[100vh] p-10 flex justify-center items-center"
      key={anime?.mal_id}
    >
      <div className="mr-10">
        <img
          className="rounded-3xl"
          src={anime?.images.jpg.image_url}
          alt={anime?.title}
        />
      </div>

      <div className="flex flex-col">
        <h1 className="w-[235px] p-1 font-bold text-base uppercase bg-purple-800 text-center rounded-3xl">
          {anime?.title}
        </h1>
        <div className="pt-5">
          <p className="max-w-[500px] h-[100px] font-bold text-sm uppercase text-clip overflow-hidden">
            {anime?.synopsis}
          </p>
        </div>

        <div className="pt-5 flex items-center">
          <div className="flex flex-col items-center">
            {anime?.genres.map((item: any) => {
              return (
                <p className="bg-white text-black text-base font-bold rounded-3xl px-5 mt-[12px]">
                  {item.name}
                </p>
              );
            })}
          </div>

          <div className="m-10">
            <h1 className="text-base font-bold flex items-center">
              <BsFillCameraReelsFill
                size={22}
                className="mr-2 text-purple-800"
              />{" "}
              {anime?.episodes} Episodios
            </h1>
          </div>

          <div>
            <h1>
              {anime?.airing == true ? (
                <h1 className="flex items-center text-center font-bold text-base">
                  <BsCircleFill size={22} className="mr-2 text-green-600" />
                  Em Andamento
                </h1>
              ) : (
                <h1 className="flex items-center text-center font-bold text-base">
                  <BsCircleFill size={22} className="mr-2 text-red-600" />
                  Finalizado
                </h1>
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
