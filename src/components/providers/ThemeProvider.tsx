"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { DEFAULT_THEME, THEME_STORAGE_KEY, type Theme } from "@/types/theme";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return DEFAULT_THEME;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);

    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  const toggleTheme = () => {
    setThemeState((currentTheme) => {
      const nextTheme: Theme = currentTheme === "light" ? "dark" : "light";

      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
}
