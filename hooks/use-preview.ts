import { BlinkStyle } from "@/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface PreviewState {
  enabled: {
    buttons: boolean
    texts: boolean
    inputs: boolean
    forms: boolean
  }
  setEnabled: (id: string, value: boolean) => void

  blinkStyleEnabled: {
    blinks: boolean
    miniblinks: boolean
  }
  setBlinkStyleEnabled: (value: BlinkStyle, enabled: boolean) => void
}

export const usePreview = create<PreviewState>()(
  persist(
    (set) => ({
      enabled: {
        buttons: true,
        texts: false,
        inputs: false,
        forms: false,
      },
      setEnabled: (id, value) => {
        set((state) => {
          const newEnabled = { ...state.enabled, [id]: value }

          if (id === "texts" && value) {
            return { enabled: { ...newEnabled, texts: true } }
          }

          const withoutTexts = Object.fromEntries(
            Object.entries(newEnabled).filter(([key]) => key !== "texts"),
          )

          if (!Object.values(withoutTexts).some(Boolean)) {
            // @ts-expect-error
            newEnabled[id] = true
          }
          return { enabled: newEnabled }
        })
      },
      blinkStyleEnabled: {
        blinks: true,
        miniblinks: false,
      },
      setBlinkStyleEnabled: (value, enabled) =>
        set((state) => {
          if (
            value === "blinks" &&
            !enabled &&
            !state.blinkStyleEnabled.miniblinks
          )
            return {
              blinkStyleEnabled: {
                ...state.blinkStyleEnabled,
                blinks: true,
              },
            }
          if (
            value === "miniblinks" &&
            !enabled &&
            !state.blinkStyleEnabled.blinks
          )
            return {
              blinkStyleEnabled: {
                ...state.blinkStyleEnabled,
                miniblinks: true,
              },
            }

          return {
            blinkStyleEnabled: {
              ...state.blinkStyleEnabled,
              [value]: enabled,
            },
          }
        }),
    }),

    {
      name: "blink-editor-preview",
    },
  ),
)
