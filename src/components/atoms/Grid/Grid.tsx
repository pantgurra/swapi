import styled from "styled-components";
import type { GridProps } from "./types";

const Grid = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme, $gap = 2 }) => theme.spacing($gap)};
`;

export default Grid;
