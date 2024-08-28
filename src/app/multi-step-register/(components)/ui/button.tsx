import { HtmlHTMLAttributes } from "react";

export function Button({
  children,
  ...rest
}: HtmlHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button className="bg-msr-purple-200 px-8 py-3 rounded-3xl" {...rest}>
      {children}
    </button>
  );
}
