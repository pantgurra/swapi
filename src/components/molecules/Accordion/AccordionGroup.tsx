import { useState, type ReactNode } from "react";
import AccordionGroupContext from "./context";

interface AccordionGroupProps {
  children: ReactNode;
  allowMultiple?: boolean;
}

const AccordionGroup = ({
  children,
  allowMultiple = false,
}: AccordionGroupProps) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const toggle = (id: string) => {
    setExpanded((prev) =>
      allowMultiple
        ? prev.includes(id)
          ? prev.filter((x) => x !== id)
          : [...prev, id]
        : prev.includes(id)
        ? []
        : [id]
    );
  };

  return (
    <AccordionGroupContext.Provider value={{ expanded, toggle, allowMultiple }}>
      {children}
    </AccordionGroupContext.Provider>
  );
};

export default AccordionGroup;
