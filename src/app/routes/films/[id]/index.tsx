import { Suspense } from "react";
import FilmTemplate from "./FilmTemplate";
import FilmDataProvider from "./FilmDataProvider";

const Film = () => (
  <Suspense fallback={<FilmTemplate isFallback={true} />}>
    <FilmDataProvider />
  </Suspense>
);

export default Film;
