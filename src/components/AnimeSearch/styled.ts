import tw from "tailwind-styled-components";

export const Container = tw.div`mt-5 flex flex-col items-center`;
export const Input = tw.input`relative bg-white h-10 w-80 px-2 text-black rounded-lg text-xl focus:outline-none transitions-colors focus:outline-1 focus:outline-purple-500`;

export const AnimeWanted = tw.div`absolute mt-14 z-40`;
export const AnimeWantedBox = tw.div`h-[750px] grid grid-cols-2 gap-5 rounded-3xl bg-[#141414] overflow-y-auto shadow-2xl`;
