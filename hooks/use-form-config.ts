import { create } from "zustand"
import { persist } from "zustand/middleware"

export enum FormConfig {
  Text = "text",
  Number = "number",
  Date = "date",
  Radio = "radio",
  Checkbox = "checkbox",
  Select = "select",
  Required = "required",
  Disabled = "disabled",
}

interface FormConfigState {
  enabled: Record<FormConfig, boolean>
  setEnabled: (id: FormConfig, value: boolean) => void
}

export const useFormConfig = create<FormConfigState>()(
  persist(
    (set) => ({
      enabled: {
        text: true,
        number: false,
        date: false,
        radio: false,
        checkbox: false,
        select: false,
        required: true,
        disabled: false,
      },
      setEnabled: (id, value) =>
        set((state) => {
          const newEnabled = {
            ...state.enabled,
            [id]: value,
          }
          if (id === FormConfig.Required || id === FormConfig.Disabled) {
            return { enabled: newEnabled }
          }

          const withoutButtonAndDisabled = Object.fromEntries(
            Object.entries(newEnabled).filter(
              ([key]) =>
                key !== FormConfig.Required && key !== FormConfig.Disabled,
            ),
          )

          if (!Object.values(withoutButtonAndDisabled).some(Boolean)) {
            newEnabled[id] = true
          }
          return { enabled: newEnabled }
        }),
    }),
    {
      name: "blink-editor-form",
    },
  ),
)
