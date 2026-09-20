"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        document.documentElement.setAttribute("data-theme", stored);
      }
    } catch {
      // ignore
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={toggle}
      className="text-xs px-2.5 py-1 rounded border border-line text-muted hover:text-foreground hover:border-foreground transition-colors"
    >
      {theme === "dark" ? "dark" : "light"}
    </button>
  );
}
