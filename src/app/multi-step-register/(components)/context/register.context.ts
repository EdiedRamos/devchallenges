import { type ChangeEvent, createContext } from "react";

export interface FormState {
  name: string;
  email: string;
}

interface RegisterContext {
  formState: FormState;
  handleFormState: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterContext = createContext<RegisterContext | undefined>(
  undefined
);
