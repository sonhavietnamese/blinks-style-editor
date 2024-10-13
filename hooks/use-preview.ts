import { BlinkStyle } from "@/types"
import { create } from "zustand"

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

export const usePreview = create<PreviewState>()((set) => ({
  enabled: {
    buttons: true,
    texts: false,
    inputs: false,
    forms: false,
  },
  setEnabled: (id, value) => {
    set((state) => {
      const newEnabled = { ...state.enabled, [id]: value }
      // Ensure at least one feature is enabled
      const atLeastOneEnabled = Object.values(newEnabled).some(Boolean)
      return {
        enabled: atLeastOneEnabled
          ? newEnabled
          : { ...newEnabled, buttons: true },
      }
    })
  },
  blinkStyleEnabled: {
    blinks: true,
    miniblinks: false,
  },
  setBlinkStyleEnabled: (value, enabled) =>
    set((state) => {
      if (value === "blinks" && !enabled && !state.blinkStyleEnabled.miniblinks)
        return {
          blinkStyleEnabled: {
            ...state.blinkStyleEnabled,
            blinks: true,
          },
        }
      if (value === "miniblinks" && !enabled && !state.blinkStyleEnabled.blinks)
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
}))
