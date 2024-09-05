"use client";

import {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { type SpeechContext, speechContext, type Speed } from "./SpeechContext";
import { SPEED } from "../(data)";

export const SpeechProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState<string>("");
  const [speed, setSpeed] = useState<Speed>(SPEED[2]);

  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance>();

  const handleText = useCallback((text: string) => {
    setText(text);
  }, []);

  const handleSpeed = useCallback((speed: Speed) => {
    setSpeed(speed);
  }, []);

  const startSpeech = () => {
    if (!utterance) return;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    setUtterance(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed.factor;
      return utterance;
    });
  }, [text, speed]);

  const values: SpeechContext = {
    text,
    speed,
    handleSpeed,
    handleText,
    startSpeech,
  };

  return (
    <speechContext.Provider value={values}>{children}</speechContext.Provider>
  );
};
