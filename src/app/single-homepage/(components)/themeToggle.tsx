"use client";

import { useTheme } from "../(hook)";

export function ThemeToggle() {
  const { handleThemeToggle } = useTheme();

  return (
    <div
      className="flex gap-1 bg-sh-dark p-1 rounded-2xl hover:cursor-pointer"
      onClick={handleThemeToggle}
    >
      <div className="bg-inherit dark:bg-white rounded-full">
        <img
          src="/single-homepage/Moon_fill_light.svg"
          alt=""
          className="block dark:hidden w-4"
        />
        <img
          src="/single-homepage/Moon_fill.svg"
          alt=""
          className="hidden dark:block w-4"
        />
      </div>
      <div className="bg-white dark:bg-inherit rounded-full">
        <img
          src="/single-homepage/Sun_fill_light.svg"
          alt=""
          className="hidden dark:block w-4"
        />
        <img
          src="/single-homepage/Sun_fill.svg"
          alt=""
          className="block dark:hidden w-4"
        />
      </div>
    </div>
  );
}
