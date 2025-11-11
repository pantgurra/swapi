import { useCharacters, useResource } from "@/hooks";
import type { Film } from "@/types";
import { useEffect } from "react";
import { useParams } from "react-router";
import FilmTemplate from "./FilmTemplate";

const FilmDataProvider = () => {
  const { id } = useParams();
  const { addCharacter } = useCharacters();

  const { data, isLoading } = useResource<Film>(
    `${import.meta.env.VITE_BASE_URL}films/${id}/`
  );

  useEffect(() => {
    if (data) {
      addCharacter(data.characters);
    }
  }, [data, addCharacter]);

  return <FilmTemplate data={data} isFallback={isLoading} />;
};

export default FilmDataProvider;
