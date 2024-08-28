import { type ChangeEvent, createContext } from "react";

export interface FormState {
  name: string;
  email: string;
}

export type Interest = {
  id: string;
  title: string;
  selected: boolean;
};

interface RegisterContext {
  formState: FormState;
  interestState: Interest[];
  handleFormState: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInterest: (topidId: string) => void;
}

export const RegisterContext = createContext<RegisterContext | undefined>(
  undefined
);
