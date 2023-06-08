"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/(ui)/button"
import { Icon } from "@/components/icons"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
    className="px-2 overflow-clip"
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon.Sun className="origin-[50%_100px] rotate-0 transform transition-transform duration-500 dark:-rotate-90" />
      <Icon.Moon className="absolute origin-[50%_100px] rotate-90 transform transition-transform duration-500 dark:rotate-0" />
      <span className="sr-only">Hell-/Dunkel-Modus umschalten</span>
    </Button>
  )
}