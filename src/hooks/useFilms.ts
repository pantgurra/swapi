import useSWR from "swr/immutable";
import fetcher from "@/services/fetcher";
import type { Films } from "@/types";
import { useSWRConfig } from "swr";

const useFilms = () => {
  const { mutate } = useSWRConfig();
  const { data, isLoading } = useSWR(`films/`, fetcher<Films>, {
    suspense: true,
    onSuccess: (data) => {
      data.results.forEach((film) => {
        mutate(film.url, film);
      });
    },
  });

  return {
    data,
    isLoading,
  };
};

export default useFilms;
