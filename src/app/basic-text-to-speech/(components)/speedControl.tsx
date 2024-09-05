"use client";

import { useSpeech } from "../(context)/useSpeech";
import { SPEED } from "../(data)";

export function SpeedControl() {
  const { speed, handleSpeed } = useSpeech();

  return (
    <div className="flex flex-wrap gap-2 bg-ts-blue-300 py-2 rounded-lg items-center mt-[18px] max-w-[350px] text-ts-white text-[13px]">
      <p className="text-ts-gray px-5 font-medium">Speed</p>
      {SPEED.map((data) => (
        <button
          onClick={() => handleSpeed(data)}
          className={`p-2 rounded-lg ${
            data.id === speed.id ? "bg-ts-blue-400" : ""
          }`}
          key={data.id}
        >
          {data.factor}x
        </button>
      ))}
    </div>
  );
}
