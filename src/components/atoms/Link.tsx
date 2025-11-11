import { Link as RouterLink } from "react-router";
import styled, { css } from "styled-components";

const Link = styled(RouterLink)<{ variant?: "button" }>`
  text-decoration: none;
  color: inherit;
  ${({ variant }) =>
    variant === "button" &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      box-shadow: 0 0 6px ${({ theme }) => theme.colors.secondary.dark};
      width: 100%;
      display: block;
      padding: 1rem;
      border-radius: 0.5rem;
      transition: background 0.3s, transform 0.2s;
      &:active {
        transform: scale(0.98);
      }
    `}
`;

export default Link;
