import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatShadow(shadow: string) {
  return shadow.replace(/\s+/g, "")
}

export function rgbaToHexA(rgba: string, forceRemoveAlpha = false) {
  return (
    "#" +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, "")
      .split(",")
      .filter((string, index) => !forceRemoveAlpha || index !== 3)
      .map((string) => parseFloat(string))
      .map((number, index) => (index === 3 ? Math.round(number * 255) : number))
      .map((number) => number.toString(16))
      .map((string) => (string.length === 1 ? "0" + string : string))
      .join("")
  )
}
