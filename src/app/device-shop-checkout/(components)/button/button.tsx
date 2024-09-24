import type { PropsWithChildren } from "react";

/** This is a awesome button */

export function Button({ children }: PropsWithChildren) {
  return (
    <button className="bg-dsc-black rounded-lg p-4 font-medium text-dsc-white hover:opacity-95 active:scale-90">
      {children}
    </button>
  );
}
