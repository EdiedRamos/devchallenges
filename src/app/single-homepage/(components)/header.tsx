"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./themeToggle";

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setShowMobileMenu(false);
    };
    if (showMobileMenu) {
      document.addEventListener("mousedown", handleOutside);
    } else {
      document.removeEventListener("mousedown", handleOutside);
    }
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [showMobileMenu]);

  return (
    <header className="flex flex-wrap justify-between items-center">
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
      <nav className="hidden md:flex">
        <ul className="flex gap-10 text-sh-gray font-medium">
          <li className="text-sh-black dark:text-sh-white">About us</li>
          <li>Product</li>
          <li>Resource</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="hidden md:flex">
        <ThemeToggle />
      </div>
      <button
        className=" dark:text-white flex md:hidden bg-sh-green rounded-full text-sh-white font-bold text-xl w-8 h-8 justify-center items-center"
        onClick={() => setShowMobileMenu(true)}
      >
        =
      </button>
      {showMobileMenu && (
        <div
          ref={menuRef}
          className="fixed w-full max-w-56 top-0 right-0 flex justify-center pt-14 md:hidden bg-sh-white dark:bg-sh-black min-h-screen max-h-screen overflow-auto"
        >
          <div className="flex flex-col items-center gap-5">
            <button
              className="absolute flex justify-center items-center top-5 right-5 bg-sh-green p-2 w-8 h-8 font-bold rounded-full text-sh-white"
              onClick={() => setShowMobileMenu(false)}
            >
              X
            </button>
            <nav>
              <ul className="flex flex-col gap-5 text-sh-gray font-medium text-2xl">
                <li className="text-sh-black dark:text-sh-white">About us</li>
                <li>Product</li>
                <li>Resource</li>
                <li>Contact</li>
              </ul>
            </nav>
            <div className="w-12">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
