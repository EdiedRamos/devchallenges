import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";

export function Button({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className="text-white bg-msr-purple-200 px-8 py-3 rounded-3xl"
      {...rest}
    >
      {children}
    </button>
  );
}
