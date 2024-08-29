"use client";

import { useEffect } from "react";

function setToDarkMode() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

function setToLightMode() {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
}

export function useTheme() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setToDarkMode();
    } else {
      setToLightMode();
    }
  }, []);

  const handleThemeToggle = () => {
    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      savedTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    if (savedTheme === "dark") {
      setToLightMode();
    } else {
      setToDarkMode();
    }
  };

  return {
    handleThemeToggle,
  };
}
