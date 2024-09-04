import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export function CheckItem({ children, className }: PropsWithChildren<Props>) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <img src="/advanced-homepage/check_circle.svg" alt="" />
      <p className="text-ah-gray">{children}</p>
    </div>
  );
}
