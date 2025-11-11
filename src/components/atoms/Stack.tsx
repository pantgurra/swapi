import styled from "styled-components";

interface StackProps {
  $gap?: number;
  $direction? : "row" | "column";
  $align?: "flex-start" | "center" | "flex-end" | "stretch";
  $justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

const Stack = styled.div<StackProps>`
  display: flex;
  gap: ${({ $gap, theme }) => $gap ? theme.spacing($gap) : 0};
  flex-direction: ${({ $direction }) => $direction || "row"};
  align-items: ${({ $align }) => $align || "stretch"};
  justify-content: ${({ $justify }) => $justify || "flex-start"};
  flex-wrap: ${({ $wrap }) => $wrap || "nowrap"};
`;

export default Stack;
