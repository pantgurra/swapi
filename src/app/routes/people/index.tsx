import { Link, List, ListItem, Typography } from "@/components/atoms";
import { useCharacters, useInfiniteScroll, useResource } from "@/hooks";
import { getIdFromUrl } from "@/lib";
import type { People } from "@/types";
import { Suspense } from "react";

const Character = ({ resource }: { resource: string }) => {
  const { data } = useResource<People>(resource);
  return (
    <Link variant="button" to={`/people/${getIdFromUrl(data?.url || "")}`}>
      <Typography.button>{data?.name}</Typography.button>
    </Link>
  );
};

const Characters = () => {
  const { data } = useCharacters();
  const { visibleCount, loadMoreRef } = useInfiniteScroll(data);

  return (
    <>
      <Typography.H1>Characters</Typography.H1>
      <List>
        {data?.slice(0, visibleCount).map((resource) => (
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
        <ListItem>
          <div ref={loadMoreRef} />
        </ListItem>
      </List>
    </>
  );
};

export default Characters;
