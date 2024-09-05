import { createContext } from "react";

export type Speed = {
  id: string;
  factor: number;
};

export interface SpeechContext {
  text: string;
  speed: Speed;
  handleSpeed: (speed: Speed) => void;
}

export const speechContext = createContext<SpeechContext | undefined>(
  undefined
);
