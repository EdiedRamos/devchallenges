"use client";

import { useSpeech } from "../(context)/useSpeech";

export function TextControl() {
  const { text, handleText } = useSpeech();

  return (
    <textarea
      placeholder="Enter your text"
      className="h-44 bg-ts-blue-300 p-5 resize-none rounded-lg text-ts-white placeholder:text-ts-gray mt-6 border-2 border-ts-blue-200 outline-none text-cs-14"
      value={text}
      onChange={(event) => handleText(event.target.value)}
    />
  );
}
