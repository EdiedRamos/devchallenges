import { createContext } from "react";

export type Speed = {
  id: string;
  factor: number;
};

export type Voices = {
  [key: string]: SpeechSynthesisVoice[];
};

export interface SpeechContext {
  voices: Voices | undefined;
  currentVoices: SpeechSynthesisVoice[] | undefined;
  currentLang: string | undefined;
  currentVoice: SpeechSynthesisVoice | undefined;
  text: string;
  speed: Speed;
  handleText: (text: string) => void;
  handleSpeed: (speed: Speed) => void;
  startSpeech: () => void;
  handleCurrentLang: (lang: string) => void;
  handleCurrentVoice: (voiceName: string) => void;
}

export const speechContext = createContext<SpeechContext | undefined>(
  undefined
);
