"use client"

import * as React from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, theme } = useTheme()

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-full bg-zinc-200/50 p-1 h-9 w-26">
        <div className="w-7 h-7 rounded-full" />
        <div className="w-7 h-7 rounded-full" />
        <div className="w-7 h-7 rounded-full" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-full bg-zinc-200/60 dark:bg-zinc-800/80 p-1 backdrop-blur-sm">
      <button
        onClick={() => setTheme("light")}
        className={`rounded-full p-1.5 transition-all duration-300 ${
          theme === "light"
            ? "bg-white dark:bg-zinc-700 shadow-sm text-emerald-600"
            : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
        }`}
        title="Light mode"
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-full p-1.5 transition-all duration-300 ${
          theme === "dark"
            ? "bg-white dark:bg-zinc-700 shadow-sm text-emerald-600"
            : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
        }`}
        title="Dark mode"
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`rounded-full p-1.5 transition-all duration-300 ${
          theme === "system"
            ? "bg-white dark:bg-zinc-700 shadow-sm text-emerald-600"
            : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
        }`}
        title="System theme"
        aria-label="System theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  )
}
