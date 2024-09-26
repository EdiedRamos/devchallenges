import type { PropsWithChildren } from "react";

export function CustomLabel({ children }: PropsWithChildren) {
  return <label className="flex flex-col gap-3">{children}</label>;
}
