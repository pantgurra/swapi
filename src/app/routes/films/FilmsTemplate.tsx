import { Link, List, ListItem, Typography } from "@/components/atoms";
import { getIdFromUrl } from "@/lib";
import type { Films } from "@/types";

type FallbackProps = {
  results: {
    episode_id: number;
    url: string;
    title: string;
  }[];
};

const FilmsTemplate = ({
  data,
  isFallback,
}: {
  data?: Films | FallbackProps;
  isFallback?: boolean;
}) => (
  <List>
    {data?.results.map((film) =>
      isFallback ? (
        <ListItem $disableMargin key={film.episode_id}>
          <Typography.button loading={true} key={film.episode_id} />
        </ListItem>
      ) : (
        <ListItem $disableMargin key={film.episode_id}>
          <Link variant="button" to={`/${getIdFromUrl(film.url)}`}>
            <Typography.button>
              {film.title}
            </Typography.button>
          </Link>
        </ListItem>
      )
    )}
  </List>
);

export default FilmsTemplate;
