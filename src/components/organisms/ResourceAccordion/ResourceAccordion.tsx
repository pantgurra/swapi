import { List, ListItem, SkeletonLine, Typography } from "@/components/atoms";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@/components/molecules";
import useAccordionGroup from "@/components/molecules/Accordion/hooks";
import { useInfiniteScroll } from "@/hooks";
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
  const { expanded } = useAccordionGroup();
  const isOpen = expanded.includes(title);
  const { visibleCount, loadMoreRef } = useInfiniteScroll(data, {
    increment: 2,
    enabled: isOpen,
  });

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
            {data.slice(0, visibleCount).map((resource) => (
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
            {isOpen && <div ref={loadMoreRef} />}
          </List>
        </AccordionDetails>
      </Accordion>
    )
  );
};

export default ResourceAccordion;
