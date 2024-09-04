import type { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export function Container({
  children,
  className = "",
}: PropsWithChildren<Props>) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
