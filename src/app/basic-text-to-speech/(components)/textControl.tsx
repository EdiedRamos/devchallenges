"use client";

import { useSpeech } from "../(context)/useSpeech";

export function TextControl() {
  const { text, handleText } = useSpeech();

  return (
    <textarea
      placeholder="Enter your text"
      className="h-52 bg-ts-blue-300 p-5 resize-none rounded-lg text-ts-white placeholder:text-ts-gray mt-10 outline-none focus:ring-2 focus:ring-ts-blue-200"
      value={text}
      onChange={(event) => handleText(event.target.value)}
    />
  );
}
