import React, { type ChangeEvent, useState } from "react";
import { type FormState, RegisterContext } from "./register.context";

export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
  });

  const values = {
    formState,
    handleFormState: (event: ChangeEvent<HTMLInputElement>) =>
      setFormState((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      })),
  };

  return (
    <RegisterContext.Provider value={values}>
      {children}
    </RegisterContext.Provider>
  );
}
