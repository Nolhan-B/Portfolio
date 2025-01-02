"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Empêche le rendu avant que le composant soit monté côté client
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Attends que le composant soit monté
  }

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "light" ? "dark" : "light"
    setTheme(nextTheme)
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Changer le thème"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}