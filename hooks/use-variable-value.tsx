"use client"

import { useEffect, useState } from "react"

export function useVariableValue(variable: string) {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const value = getComputedStyle(document.documentElement).getPropertyValue(
      variable.replace("--", "--r-"),
    )
    setValue(value)
  }, [variable])

  return value
}
