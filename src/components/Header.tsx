import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to={'/'} className="w-full flex items-center justify-center pt-10">
      <h1 className="text-black font-bold uppercase text-3xl">
        Anime <span className="text-purple-500">Data</span>base
      </h1>
    </Link>
  );
}
