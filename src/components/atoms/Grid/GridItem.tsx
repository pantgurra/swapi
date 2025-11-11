import styled from "styled-components";
import type { GridProps } from "./types";

const GridItem = styled.div<GridProps>`
  flex: ${({ $minWidth = "300px", $fraction = 1 }) =>
    `${$fraction} 1 ${$minWidth}`};
`;

export default GridItem;
