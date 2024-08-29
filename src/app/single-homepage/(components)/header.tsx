"use client";
import { useTheme } from "../(hook)";

export function Header() {
  const { handleThemeToggle } = useTheme();

  return (
    <header className="flex justify-between">
      <div>
        <img
          src="/single-homepage/alarado-icon-homepage-dark.svg"
          alt="dark icon version"
          className="hidden dark:block"
        />
        <img
          src="/single-homepage/alarado-icon-homepage.svg"
          alt="light icon version"
          className="block dark:hidden"
        />
      </div>
      <nav>
        <ul className="flex gap-10 text-sh-gray font-medium">
          <li className="text-sh-black dark:text-sh-white">About us</li>
          <li>Product</li>
          <li>Resource</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div
        className="flex gap-1 bg-sh-dark p-1 rounded-2xl hover:cursor-pointer"
        onClick={handleThemeToggle}
      >
        <div className="bg-inherit dark:bg-white rounded-full">
          <img
            src="/single-homepage/Moon_fill_light.svg"
            alt=""
            className="block dark:hidden"
          />
          <img
            src="/single-homepage/Moon_fill.svg"
            alt=""
            className="hidden dark:block"
          />
        </div>
        <div className="bg-white dark:bg-inherit rounded-full">
          <img
            src="/single-homepage/Sun_fill_light.svg"
            alt=""
            className="hidden dark:block"
          />
          <img
            src="/single-homepage/Sun_fill.svg"
            alt=""
            className="block dark:hidden"
          />
        </div>
      </div>
    </header>
  );
}
