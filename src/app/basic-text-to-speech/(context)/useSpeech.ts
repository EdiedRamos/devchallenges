import { useContext } from "react";
import { speechContext } from "./SpeechContext";

export function useSpeech() {
  const context = useContext(speechContext);
  if (!context) throw new Error("useSpeech must to be inside speech context");
  return context;
}
