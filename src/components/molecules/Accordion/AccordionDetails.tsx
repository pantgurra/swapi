import type { ReactNode } from "react";
import styled from "styled-components";

const DetailsWrapper = styled.div<AccordionDetailsProps & { $isOpen?: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "1px")};
  overflow-y: scroll;
  transition: max-height 0.25s;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(69, 177, 98, 0.2);
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary.main} transparent;
`;

interface AccordionDetailsProps {
  children: ReactNode;
  isOpen?: boolean;
}

const AccordionDetails = ({ children, isOpen }: AccordionDetailsProps) => (
  <DetailsWrapper $isOpen={isOpen}>
    {children}
  </DetailsWrapper>
);

export default AccordionDetails;
