"use client";

import {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import {
  type SpeechContext,
  speechContext,
  type Speed,
  Voices,
} from "./SpeechContext";
import { SPEED } from "../(data)";

export const SpeechProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState<string>("");
  const [speed, setSpeed] = useState<Speed>(SPEED[0]);

  const [voices, setVoices] = useState<Voices>();
  const [currentVoices, setCurrentVoices] = useState<SpeechSynthesisVoice[]>();
  const [currentLang, setCurrentLang] = useState<string>();
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice>();

  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance>();

  const handleText = useCallback((text: string) => {
    setText(text);
  }, []);

  const handleSpeed = useCallback((speed: Speed) => {
    setSpeed(speed);
  }, []);

  const handleCurrentLang = useCallback((lang: string) => {
    setCurrentLang(lang);
  }, []);

  const handleCurrentVoice = useCallback(
    (voiceName: string) => {
      if (!currentLang || !voices) return;

      const possibleVoices = voices[currentLang];
      const targetVoice = possibleVoices.find(
        (voice) => voice.name === voiceName
      );

      if (!targetVoice) return;
      setCurrentVoice(targetVoice);
    },
    [currentLang, voices]
  );

  const startSpeech = () => {
    if (!utterance) return;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const synthesis = speechSynthesis;
    const loadVoices = () => {
      const voices = synthesis.getVoices();

      const group: {
        [key: string]: SpeechSynthesisVoice[];
      } = {};

      voices.forEach((voice) => {
        if (!group[voice.lang]) group[voice.lang] = [];
        group[voice.lang].push(voice);
      });

      setVoices(group);

      const firstLang = Object.keys(group)[0];
      setCurrentLang(firstLang);
      setCurrentVoices(group[firstLang]);
    };
    synthesis.onvoiceschanged = loadVoices;
  }, []);

  useEffect(() => {
    if (!voices || !currentLang) return;
    setCurrentVoices(voices[currentLang]);
    setCurrentVoice(voices[currentLang][0]);
  }, [voices, currentLang]);

  useEffect(() => {
    setUtterance(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed.factor;
      if (currentVoice) utterance.voice = currentVoice;
      return utterance;
    });
  }, [text, speed, currentVoice]);

  const values: SpeechContext = {
    text,
    speed,
    voices,
    currentVoices,
    currentLang,
    currentVoice,
    handleSpeed,
    handleText,
    startSpeech,
    handleCurrentLang,
    handleCurrentVoice,
  };

  return (
    <speechContext.Provider value={values}>{children}</speechContext.Provider>
  );
};
