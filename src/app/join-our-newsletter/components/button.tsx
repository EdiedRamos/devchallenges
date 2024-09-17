import { HtmlHTMLAttributes, PropsWithChildren } from "react";

type Props = HtmlHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

export function Button({ children, className, ...rest }: Props) {
  return (
    <button
      className={`bg-jo-blue py-5 text-jo-white text-cs-16 font-medium w-full rounded-xl hover:animate-pulse transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
