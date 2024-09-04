import type { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export function Container({
  children,
  className = "",
}: PropsWithChildren<Props>) {
  return (
    <div className={`px-5 md:px-0 w-full max-w-[1100px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
