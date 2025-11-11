import { NavLink } from "react-router";
import styled from "styled-components";

const FabButton = styled(NavLink)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary.main};
  backdrop-filter: blur(8px);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.secondary.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default FabButton;
