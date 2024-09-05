"use client";

import { useCallback, useState, type PropsWithChildren } from "react";
import { type SpeechContext, speechContext, type Speed } from "./SpeechContext";
import { SPEED } from "../(data)";

export const SpeechProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState<string>("");
  const [speed, setSpeed] = useState<Speed>(SPEED[0]);

  const handleText = useCallback((text: string) => {
    setText(text);
  }, []);

  const handleSpeed = useCallback((speed: Speed) => {
    setSpeed(speed);
  }, []);

  const values: SpeechContext = {
    text,
    speed,
    handleSpeed,
    handleText,
  };

  return (
    <speechContext.Provider value={values}>{children}</speechContext.Provider>
  );
};
