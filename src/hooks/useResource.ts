import fetcher from "@/services/fetcher";
import useSWR from "swr/immutable";

const useResource = <T>(resource: string | null) => {
  const { data } = useSWR(resource, fetcher<T>, { suspense: true });
  return { data };
};

export default useResource;
