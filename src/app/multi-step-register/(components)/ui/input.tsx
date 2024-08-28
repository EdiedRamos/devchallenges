import { InputHTMLAttributes, type HtmlHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="bg-inherit border-2 border-msr-gray-300 p-4 rounded-xl outline-none focus:border-msr-gray-200"
      {...props}
    />
  );
}
