import { Link } from "react-router";
import styled, { css } from "styled-components";

const Header = styled.header<{ $isRoot?: boolean }>`
  position: ${({ $isRoot }) => ($isRoot ? "relative" : "fixed")};
  top: 0;
  left: 0;
  width: calc(100% - 1rem);
  z-index: 1000;
  display: flex;
  justify-content: ${({ $isRoot }) => ($isRoot ? "center" : "flex-start")};
  align-items: center;
  padding: ${({ $isRoot }) => ($isRoot ? "2rem 0" : "1rem 2rem")};
  backdrop-filter: ${({ $isRoot }) => ($isRoot ? "none" : "blur(8px)")};
  transition: all 0.4s ease;
  border-radius: 12px;
  ${({ $isRoot }) =>
    !$isRoot &&
    css`
      height: 80px;
    `}
`;

const Logo = styled(Link)<{ $isRoot?: boolean }>`
  font-size: ${({ $isRoot }) =>
    $isRoot ? "clamp(4rem, 4vw, 5rem)" : "1.4rem"};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
`;

const HeaderNav = ({ isRoot }: { isRoot?: boolean }) => (
  <Header $isRoot={isRoot}>
    <Logo to="/" $isRoot={isRoot}>
      SWAPI
    </Logo>
  </Header>
);

export default HeaderNav;
