import { useContext } from "react";
import { filterContext } from "./filterContext";

export function useFilter() {
  const context = useContext(filterContext);
  if (!context) throw new Error("useFilter must to be inside a filter context");
  return context;
}
