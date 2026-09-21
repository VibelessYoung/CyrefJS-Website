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
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-black/10
        bg-black/5
        text-black
        transition-all
        duration-300
        hover:scale-105
        hover:bg-black/10
        dark:border-white/10
        dark:bg-white/5
        dark:text-white
        dark:hover:bg-white/10
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
