"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 rounded-xl bg-surface-container-low border border-outline flex items-center justify-center text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1V3M9 15V17M1 9H3M15 9H17M3.93 3.93L5.34 5.34M12.66 12.66L14.07 14.07M3.93 14.07L5.34 12.66M12.66 5.34L14.07 3.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 10.5C14.5 12.5 12.5 14 10 14C6.5 14 3.5 11 3.5 7.5C3.5 5 5 3 7 2C4 2.5 1.5 5.5 1.5 9C1.5 13 4.5 16 8.5 16C12 16 15 13.5 15.5 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}
