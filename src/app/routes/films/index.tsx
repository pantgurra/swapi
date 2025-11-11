import { Suspense } from "react";
import FilmsTemplate from "./FilmsTemplate";
import FilmsDataProvider from "./FilmsDataProvider";

const Films = () => (
  <Suspense
    fallback={
      <FilmsTemplate
        isFallback={true}
        data={{
          results: Array.from({ length: 6 }, (_, index) => ({
            episode_id: index + 1,
            url: "",
            title: "Loading",
          })),
        }}
      />
    }
  >
    <FilmsDataProvider />
  </Suspense>
);

export default Films;
