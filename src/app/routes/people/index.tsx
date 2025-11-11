import { Link, List, ListItem, Typography } from "@/components/atoms";
import { useCharacters, useResource } from "@/hooks";
import { getIdFromUrl } from "@/lib";
import type { People } from "@/types";
import { Suspense } from "react";

const Character = ({ resource }: { resource: string }) => {
  const { data, isLoading } = useResource<People>(resource);
  return (
    <Link variant="button" to={`/people/${getIdFromUrl(data?.url || "")}`}>
      <Typography.button loading={isLoading}>{data?.name}</Typography.button>
    </Link>
  );
};

const Characters = () => {
  const { data } = useCharacters();

  return (
    <>
      <Typography.H1>Characters</Typography.H1>
      <List>
        {data?.map((resource) => (
          <Suspense
            key={resource}
            fallback={
              <ListItem $disableMargin>
                <Typography.button loading={true} />
              </ListItem>
            }
          >
            <ListItem $disableMargin>
              <Character resource={resource} />
            </ListItem>
          </Suspense>
        ))}
      </List>
    </>
  );
};

export default Characters;
