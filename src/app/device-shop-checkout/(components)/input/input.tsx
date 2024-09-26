import { InputHTMLAttributes } from "react";

type Theme = "primary" | "secondary";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  theme?: Theme;
}

function getTheme(theme: Theme): string {
  switch (theme) {
    case "primary":
      return "bg-dsc-white border-dsc-gray-100 p-3";
    case "secondary":
      return "bg-dsc-light p-4";
    default:
      return "";
  }
}

export function Input({ theme = "primary", ...props }: Props) {
  return (
    <div>
      <input
        className={`w-full border rounded-lg outline-none focus:border-dsc-gray-200 text-dsc-black placeholder:text-dsc-gray-200 font-medium ${getTheme(
          theme
        )}`}
        {...props}
      />
    </div>
  );
}
