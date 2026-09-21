"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      className="
      cursor-pointer
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        text-black/60
        transition-colors
        duration-300
        hover:bg-black/5
        hover:text-black
        dark:text-white/60
        dark:hover:bg-white/10
        dark:hover:text-white
      "
    >
      {theme === "light" ? (
        <Moon size={18} strokeWidth={1.8} />
      ) : (
        <Sun size={18} strokeWidth={1.8} />
      )}
    </button>
  );
}
