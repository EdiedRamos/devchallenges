import type { PropsWithChildren } from "react";

/** This is a awesome button */

export function Button({
  children,
  padding = "",
}: PropsWithChildren & { padding?: string }) {
  return (
    <button
      className={`w-full bg-dsc-black rounded-lg font-medium text-dsc-white hover:opacity-95 active:scale-90 ${
        padding || "p-4"
      }`}
    >
      {children}
    </button>
  );
}
