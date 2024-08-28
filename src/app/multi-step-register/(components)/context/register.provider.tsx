import React, { type ChangeEvent, useState } from "react";
import { type FormState, RegisterContext, Interest } from "./register.context";

const INTEREST_STATE = [
  {
    id: "262d2fcc-a2fa-4401-b05d-f3fbc951f1d8",
    title: "Software Development",
    selected: false,
  },
  {
    id: "aafb708b-c3e7-40b5-bd3f-7e697f92e233",
    title: "User Experience",
    selected: false,
  },
  {
    id: "1666e99b-ccf5-40a8-8a66-13634bb1b4d1",
    title: "Graphic Design",
    selected: false,
  },
];

export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
  });

  const [interestState, setInterestState] =
    useState<Interest[]>(INTEREST_STATE);

  const values = {
    formState,
    handleFormState: (event: ChangeEvent<HTMLInputElement>) =>
      setFormState((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      })),
    interestState,
    handleInterest: (topidId: string) =>
      setInterestState((prev) =>
        prev.map((topic) =>
          topic.id === topidId ? { ...topic, selected: !topic.selected } : topic
        )
      ),
  };

  return (
    <RegisterContext.Provider value={values}>
      {children}
    </RegisterContext.Provider>
  );
}
