import { createContext } from "react";

interface AccordionGroupContextType {
  expanded: string[];
  toggle: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionGroupContext = createContext<AccordionGroupContextType | null>(
  null
);

export default AccordionGroupContext;
