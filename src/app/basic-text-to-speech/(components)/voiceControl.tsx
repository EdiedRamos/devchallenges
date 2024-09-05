"use client";

import { useSpeech } from "../(context)/useSpeech";

export function VoiceControl() {
  const { voices, currentVoices, handleCurrentLang, handleCurrentVoice } =
    useSpeech();

  return (
    <div className="flex flex-wrap gap-2 py-2 rounded-lg items-center bg-ts-blue-300 max-w-80 text-ts-white mt-2">
      <p className="text-ts-gray px-5">Voice</p>
      {voices ? (
        <select
          className="bg-inherit p-3 focus:bg-ts-blue-400 rounded-lg outline-none"
          onChange={(event) => handleCurrentLang(event.target.value)}
        >
          {Object.keys(voices).map((voice) => (
            <option key={voice}>{voice}</option>
          ))}
        </select>
      ) : (
        <p className="animate-pulse">Loading...</p>
      )}
      {currentVoices ? (
        <select
          className="bg-inherit p-3 focus:bg-ts-blue-400 rounded-lg outline-none"
          onChange={(event) => handleCurrentVoice(event.target.value)}
        >
          {currentVoices.map((voice) => (
            <option key={voice.name}>{voice.name}</option>
          ))}
        </select>
      ) : (
        <p className="animate-pulse">Loading...</p>
      )}
    </div>
  );
}
