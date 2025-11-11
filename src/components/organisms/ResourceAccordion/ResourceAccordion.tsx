import { List, ListItem, SkeletonLine, Typography } from "@/components/atoms";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@/components/molecules";
import { Suspense } from "react";
import Resource from "./Resource";

const ResourceAccordion = <T,>({
  title,
  data,
  resourceKey,
  loading,
}: {
  title: string;
  data?: string[];
  resourceKey: keyof T;
  loading: boolean;
}) => {

  if (loading) {
    return (
      <ListItem $disableMargin style={{ marginBottom: 0 }}>
        <Typography.button loading={true} />
      </ListItem>
    );
  }

  return (
    !!data?.length && (
      <Accordion id={title}>
        <AccordionSummary>
          <Typography.button>{title}</Typography.button>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {data.map((resource) => (
              <Suspense
                fallback={
                  <ListItem>
                    <SkeletonLine $widthPercent={100} $height={24} />
                  </ListItem>
                }
                key={resource}
              >
                <ListItem key={resource}>
                  <Typography.body>
                    <Resource<T>
                      resource={resource}
                      resourceKey={resourceKey}
                    />
                  </Typography.body>
                </ListItem>
              </Suspense>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    )
  );
};

export default ResourceAccordion;
