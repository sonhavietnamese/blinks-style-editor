import { persist } from "zustand/middleware"
import { create } from "zustand"

export enum TextConfig {
  Error = "error",
  Success = "success",
}

interface TextConfigState {
  selected: TextConfig
  setSelected: (id: TextConfig | undefined) => void
}

export const useTextConfig = create<TextConfigState>()(
  persist(
    (set) => ({
      selected: TextConfig.Success,
      setSelected: (id) => set(() => ({ selected: id })),
    }),
    {
      name: "blink-editor-text",
    },
  ),
)
