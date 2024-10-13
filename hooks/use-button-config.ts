import { persist } from "zustand/middleware"
import { create } from "zustand"

export enum ButtonConfig {
  Normal = "normal",
  Error = "error",
  Disabled = "disabled",
  Success = "success",
  Loading = "loading",
  Long = "long",
  Link = "link",
}

interface ButtonConfigState {
  enabled: Record<ButtonConfig, boolean>
  setEnabled: (id: ButtonConfig, value: boolean) => void
}

export const useButtonConfig = create<ButtonConfigState>()(
  persist(
    (set) => ({
      enabled: {
        normal: true,
        error: false,
        disabled: false,
        success: false,
        loading: false,
        long: false,
        link: false,
      },
      setEnabled: (id, value) =>
        set((state) => {
          const newEnabled = {
            ...state.enabled,
            [id]: value,
          }
          if (!Object.values(newEnabled).some(Boolean)) {
            newEnabled[id] = true
          }
          return { enabled: newEnabled }
        }),
    }),
    {
      name: "blink-editor-button",
    },
  ),
)
