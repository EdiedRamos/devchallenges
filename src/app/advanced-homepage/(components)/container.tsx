import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="w-full max-w-[1200px] mx-auto">{children}</div>;
}
