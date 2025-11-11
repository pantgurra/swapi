import { Stack } from "@/components/atoms";
import { ExpandUp } from "@/icons";
import type { ReactNode } from "react";
import styled from "styled-components";

const SummaryWrapper = styled.button`
  all: unset;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

interface AccordionSummaryProps {
  children: ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
}

const AccordionSummary = ({
  children,
  toggle,
  isOpen,
}: AccordionSummaryProps) => (
  <SummaryWrapper
    onClick={toggle}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if ((e.key === "Enter" || e.key === " ") && toggle) toggle();
    }}
    aria-expanded={isOpen}
  >
    <Stack $justify="space-between" $align="center" style={{ width: "100%" }}>
      {children}
      <ExpandUp
        size={24}
        color={"#a6cde4"}
        style={{
          transition: "transform 0.2s ease-in-out",
          transform: !isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </Stack>
  </SummaryWrapper>
);

export default AccordionSummary;
