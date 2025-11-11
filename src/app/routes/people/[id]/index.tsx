import { Suspense } from "react";
import CharacterTemplate from "./CharacterTemplate";
import CharacterDataProvider from "./CharacterDataProvider";

const Character = () => (
  <Suspense fallback={<CharacterTemplate isFallback={true} />}>
    <CharacterDataProvider />
  </Suspense>
);

export default Character;
