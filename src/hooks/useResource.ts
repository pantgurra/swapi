import useBatchSWR from "./useBatchSWR";

const useResource = <T>(resource: string | null) => {
  const { data, isLoading } = useBatchSWR<T>(resource);
  return { data, isLoading };
};

export default useResource;
