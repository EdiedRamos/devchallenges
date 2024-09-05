"use client";

import { useSpeech } from "../(context)/useSpeech";

export function SpeechControl() {
  const { startSpeech } = useSpeech();
  return (
    <button
      onClick={startSpeech}
      className="text-ts-white text-cs-16 bg-gradient-to-r from-ts-purple to-ts-blue-100 p-4 rounded-lg mt-[62px]"
    >
      Text to Speech
    </button>
  );
}