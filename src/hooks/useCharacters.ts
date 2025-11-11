import useSWR from "swr";

const useCharacters = () => {
  const { data, mutate } = useSWR<string[]>("viewed_characters");

  const addCharacter = (resources: string[]) => {
    mutate((current = []) => ([...current, ...resources.filter((resource) => !current.includes(resource))]))
  }
  return { data, addCharacter };
};

export default useCharacters;
