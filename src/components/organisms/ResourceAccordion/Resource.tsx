import { useResource } from "@/hooks";

const Resource = <T,>({
  resource,
  resourceKey,
}: {
  resource: string;
  resourceKey: keyof T;
}) => {
  const { data } = useResource<T>(resource);
  return data?.[resourceKey];
};

export default Resource;
