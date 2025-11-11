import { Grid, GridItem, Paper, Stack, Typography } from "@/components/atoms";
import { AccordionGroup } from "@/components/molecules";
import { ResourceAccordion } from "@/components/organisms";
import type { Film, People, Planet, Species, Starship, Vehicle } from "@/types";

const infoFields: Array<{ label: string; key: keyof Film }> = [
  { label: "Director", key: "director" },
  { label: "Producer", key: "producer" },
  { label: "Release Date", key: "release_date" },
];

const FilmTemplate = ({
  data,
  isFallback,
}: {
  data?: Film;
  isFallback?: boolean;
}) => (
  <Grid $gap={4}>
    <GridItem $fraction={3} $minWidth="600px">
      <Stack $gap={2} $direction="column">
        <Typography.H1 charCount={10} loading={isFallback}>
          {data?.title}
        </Typography.H1>
        <Typography.body charCount={500} loading={isFallback}>
          {data?.opening_crawl}
        </Typography.body>
        <Stack $gap={1} $direction="column">
          {infoFields.map(({ label, key }) => (
            <Typography.caption
              key={key}
              charCount={label.length + 20}
              loading={isFallback}
            >
              {label}: {data?.[key]}
            </Typography.caption>
          ))}
        </Stack>
      </Stack>
    </GridItem>
    <GridItem $fraction={1}>
      <Paper>
        <Typography.H2>Details</Typography.H2>
        <AccordionGroup>
          <ResourceAccordion<People>
            title="Characters"
            data={data?.characters}
            resourceKey="name"
            loading={!!isFallback}
          />
          <ResourceAccordion<Planet>
            title="Planets"
            data={data?.planets}
            resourceKey="name"
            loading={!!isFallback}
          />
          <ResourceAccordion<Species>
            title="Species"
            data={data?.species}
            resourceKey="name"
            loading={!!isFallback}
          />
          <ResourceAccordion<Starship>
            title="Starships"
            data={data?.starships}
            resourceKey="name"
            loading={!!isFallback}
          />
          <ResourceAccordion<Vehicle>
            title="Vehicles"
            data={data?.vehicles}
            resourceKey="name"
            loading={!!isFallback}
          />
        </AccordionGroup>
      </Paper>
    </GridItem>
  </Grid>
);

export default FilmTemplate;
