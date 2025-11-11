import { useContext } from "react";
import AccordionGroupContext from "./context";

const useAccordionGroup = () => {
  const ctx = useContext(AccordionGroupContext);
  if (!ctx) throw new Error("Accordion must be used within AccordionGroup");
  return ctx;
};

export default useAccordionGroup;
