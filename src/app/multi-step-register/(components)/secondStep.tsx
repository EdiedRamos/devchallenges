"use client";

import { Button } from "./ui/button";

const TOPICS = [
  {
    id: "262d2fcc-a2fa-4401-b05d-f3fbc951f1d8",
    title: "Software Development",
  },
  {
    id: "aafb708b-c3e7-40b5-bd3f-7e697f92e233",
    title: "User Experience",
  },
  {
    id: "1666e99b-ccf5-40a8-8a66-13634bb1b4d1",
    title: "Graphic Design",
  },
];

// TODO: This mock is temporal
const SELECTED = ["aafb708b-c3e7-40b5-bd3f-7e697f92e233"];

export function SecondStep() {
  return (
    <div className="bg-msr-dark p-10 max-w-[440px] rounded-2xl">
      <h2>Which topics you are interested in?</h2>
      <div className="flex flex-col items-start mt-6 gap-4">
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            className={`p-4 w-full rounded-xl border-2  ${
              SELECTED.includes(topic.id)
                ? "bg-msr-purple-200 border-msr-purple-200"
                : "bg-msr-gray-300 border-msr-gray-200"
            }`}
          >
            <p className="text-start">{topic.title}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-9">
        <Button>Continue</Button>
      </div>
    </div>
  );
}
