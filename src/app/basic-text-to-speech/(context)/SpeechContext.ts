import { createContext } from "react";

export type Speed = {
  id: string;
  factor: number;
};

export interface SpeechContext {
  text: string;
  handleText: (text: string) => void;
  speed: Speed;
  handleSpeed: (speed: Speed) => void;
  startSpeech: () => void;
}

export const speechContext = createContext<SpeechContext | undefined>(
  undefined
);
