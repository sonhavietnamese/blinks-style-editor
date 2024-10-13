import { BaseInputProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { IsolatedBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/IsolatedBlinkLayout"
import { GENERATOR } from "@/components/generators/input"
import { BASE_URL } from "@/constants"
import { InputConfig, useInputConfig } from "@/hooks/use-input-config"
import { TextConfig, useTextConfig } from "@/hooks/use-text-config"
import { useEffect, useState } from "react"

export default function EditorMiniblinkInputs() {
  const actionApiUrl = BASE_URL

  const { enabled: inputEnabled } = useInputConfig()
  const { selected: textSelected } = useTextConfig()

  const [inputsConfig, setInputsConfig] = useState<BaseInputProps[]>([])

  useEffect(() => {
    const newInputsConfig = Object.entries(inputEnabled)
      .map(([key, value]) => {
        const input = GENERATOR[key as InputConfig]
        if (input) {
          input.button = inputEnabled.button
            ? {
                text: "Button",
                loading: false,
                variant: "error",
                disabled: false,
                ctaType: "button",
                onClick: () => {},
              }
            : undefined

          input.disabled = inputEnabled.disabled
        }
        if (value) return input
      })
      .filter(Boolean) as BaseInputProps[]

    setInputsConfig(newInputsConfig)
  }, [inputEnabled])

  return (
    <div className="custom flex flex-col gap-5 rounded-2xl bg-[var(--blink-bg-primary)] p-5">
      {inputsConfig.map((input) => (
        <IsolatedBlinkLayout
          stylePreset="custom"
          websiteUrl={actionApiUrl}
          websiteText={new URL(actionApiUrl).hostname}
          elementType="input"
          element={input}
          error={
            textSelected === TextConfig.Error
              ? "Sample error message"
              : undefined
          }
          success={
            textSelected === TextConfig.Success
              ? "Sample success message"
              : undefined
          }
          key={input.name}
          id={`preview-miniblink-input-${input.name}`}
        />
      ))}
    </div>
  )
}
