import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonLine = styled.div<{
  $widthPercent?: number;
  $height: number;
  $lineMargin?: string;
  $padding?: string;
}>`
  height: ${({ $height, $lineMargin = "0rem", $padding = "0rem" }) =>
    `calc(${$height}px - ${$lineMargin} + ${$padding})`};
  margin-bottom: ${({ $lineMargin = "0rem" }) => $lineMargin};
  border-radius: 4px;
  width: ${({ $widthPercent }) =>
    $widthPercent ? `${$widthPercent}%` : "100%"};
  background: linear-gradient(90deg, #1b2735 25%, #090a0f 50%, #1b2735 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export default SkeletonLine;
