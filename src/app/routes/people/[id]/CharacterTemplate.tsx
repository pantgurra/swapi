import { Grid, GridItem, Paper, Stack, Typography } from "@/components/atoms";
import { AccordionGroup } from "@/components/molecules";
import { ResourceAccordion } from "@/components/organisms";
import type { Film, People, Species, Starship } from "@/types";

const infoFields: Array<{ label: string; key: keyof People }> = [
  { label: "Height", key: "height" },
  { label: "Mass", key: "mass" },
  { label: "Hair Color", key: "hair_color" },
  { label: "Skin Color", key: "skin_color" },
  { label: "Eye Color", key: "eye_color" },
  { label: "Birth Year", key: "birth_year" },
  { label: "Gender", key: "gender" },
];

const CharacterTemplate = ({
  data,
  isFallback,
}: {
  data?: People;
  isFallback?: boolean;
}) => (
  <Grid $gap={4}>
    <GridItem $fraction={3} $minWidth="600px">
      <Stack $gap={2} $direction="column">
        <Typography.H1 charCount={10} loading={isFallback}>
          {data?.name}
        </Typography.H1>
        <Stack $gap={1} $direction="column">
          {infoFields.map(({ label, key }) => (
            <Typography.body2
              key={key}
              charCount={label.length + 20}
              loading={isFallback}
            >
              {label}: {data?.[key]}
            </Typography.body2>
          ))}
        </Stack>
      </Stack>
    </GridItem>
    <GridItem $fraction={1}>
      <Paper>
        <Typography.H2>Details</Typography.H2>
        <AccordionGroup>
          <ResourceAccordion<Film>
            title="Films"
            data={data?.films}
            resourceKey="title"
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
        </AccordionGroup>
      </Paper>
    </GridItem>
  </Grid>
);

export default CharacterTemplate;
