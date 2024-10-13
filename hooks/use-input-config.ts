import { create } from "zustand"

export enum InputConfig {
  Button = "button",
  Disabled = "disabled",
  Text = "text",
  Number = "number",
  Date = "date",
  Radio = "radio",
  Checkbox = "checkbox",
  Select = "select",
}

interface InputConfigState {
  enabled: Record<InputConfig, boolean>
  setEnabled: (id: InputConfig, value: boolean) => void
}

export const useInputConfig = create<InputConfigState>()((set) => ({
  enabled: {
    button: true,
    disabled: false,
    text: true,
    number: false,
    date: false,
    radio: false,
    checkbox: false,
    select: false,
  },
  setEnabled: (id, value) =>
    set((state) => {
      const newEnabled = {
        ...state.enabled,
        [id]: value,
      }
      if (id === InputConfig.Button || id === InputConfig.Disabled) {
        return { enabled: newEnabled }
      }

      const withoutButtonAndDisabled = Object.fromEntries(
        Object.entries(newEnabled).filter(
          ([key]) => key !== InputConfig.Button && key !== InputConfig.Disabled,
        ),
      )

      if (!Object.values(withoutButtonAndDisabled).some(Boolean)) {
        newEnabled[id] = true
      }
      return { enabled: newEnabled }
    }),
}))
