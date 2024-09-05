"use client";

import { useState, type PropsWithChildren } from "react";
import { type SpeechContext, speechContext, type Speed } from "./SpeechContext";
import { SPEED } from "../(data)";

export const SpeechProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState<string>("");
  const [speed, setSpeed] = useState<Speed>(SPEED[0]);

  const handleSpeed = (speed: Speed) => {
    setSpeed(speed);
  };

  const values: SpeechContext = {
    text,
    speed,
    handleSpeed,
  };

  return (
    <speechContext.Provider value={values}>{children}</speechContext.Provider>
  );
};
