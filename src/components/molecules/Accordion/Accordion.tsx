import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import styled from "styled-components";
import useAccordionGroup from "./hooks";

const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.secondary.dark};
  border-radius: 0.5rem;
  transition: background 0.3s, transform 0.2s;
  margin-top: ${({ theme }) => theme.spacing(2)};
  @media (hover: hover) and (pointer: fine) {
    &:active {
      transform: scale(0.98);
    }
  }
`;

interface AccordionProps {
  id: string;
  children: ReactNode;
}

const Accordion = ({ id, children }: AccordionProps) => {
  const { expanded, toggle } = useAccordionGroup();
  const isOpen = expanded.includes(id);

  const clonedChildren = Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(
          child as ReactElement<{ isOpen?: boolean; toggle?: () => void }>,
          { isOpen, toggle: () => toggle(id) }
        )
      : child
  );

  return <Wrapper>{clonedChildren}</Wrapper>;
};

export default Accordion;
