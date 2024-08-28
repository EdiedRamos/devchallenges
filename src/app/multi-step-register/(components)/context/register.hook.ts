import { useContext } from "react";
import { RegisterContext } from "./register.context";

export function useRegister() {
  const data = useContext(RegisterContext);
  if (!data) throw new Error("useRegister must to be inside register context");
  return data;
}
