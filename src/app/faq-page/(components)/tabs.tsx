"use client";

import { useState } from "react";

const TABS = [
  {
    id: "bede7952-4eec-47af-b51a-5be3a0db3b53",
    title: "Overview",
  },
  {
    id: "2aa71a1c-0894-4187-9cd1-5907d231403b",
    title: "Design System",
  },
  {
    id: "5ce5dceb-3d25-4fb5-91e9-b01dfd0c4f95",
    title: "Brand Design",
  },
  {
    id: "25bea027-81da-4426-a64d-490dd22cc6e5",
    title: "Develop Website",
  },
];

export function Tabs() {
  const [selected, setSelected] = useState<string>(
    "bede7952-4eec-47af-b51a-5be3a0db3b53"
  );

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {TABS.map((tab) => (
        <button
          onClick={() => setSelected(tab.id)}
          className={`py-2 px-5 rounded-full text-cs-14 text-white ${
            tab.id === selected ? "bg-fq-gray-300" : ""
          }`}
          key={tab.id}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}
