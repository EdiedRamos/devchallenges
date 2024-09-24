import { InputHTMLAttributes } from "react";

type Theme = "primary" | "secondary";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  theme?: Theme;
}

function getTheme(theme: Theme): string {
  switch (theme) {
    case "primary":
      return "bg-dsc-white";
    case "secondary":
      return "bg-dsc-light";
    default:
      return "";
  }
}

export function Input({ theme = "primary", ...props }: Props) {
  return (
    <input
      className={`border p-4 rounded-xl outline-none focus:border-dsc-gray-200 text-dsc-black placeholder:text-dsc-gray-200 font-medium ${getTheme(
        theme
      )}`}
      {...props}
    />
  );
}
