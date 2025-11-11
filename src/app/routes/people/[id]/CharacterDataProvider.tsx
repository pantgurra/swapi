import { useResource } from "@/hooks";
import type { People } from "@/types";
import { useParams } from "react-router";
import CharacterTemplate from "./CharacterTemplate";

const CharacterDataProvider = () => {
  const { id } = useParams();

  const { data, isLoading } = useResource<People>(
    `${import.meta.env.VITE_BASE_URL}people/${id}/`
  );

  return <CharacterTemplate data={data} isFallback={isLoading} />;
};

export default CharacterDataProvider;
