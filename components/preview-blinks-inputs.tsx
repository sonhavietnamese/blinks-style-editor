import { BaseInputProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { BaseBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/BaseBlinkLayout"
import { GENERATOR } from "@/components/generators/input"
import { BASE_URL } from "@/constants"
import { InputConfig, useInputConfig } from "@/hooks/use-input-config"
import { TextConfig, useTextConfig } from "@/hooks/use-text-config"
import { useEffect, useState } from "react"

export default function EditorBlinksInputs() {
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
    <BaseBlinkLayout
      stylePreset="custom"
      title="Inputs Preview"
      description="All input types"
      image={`${BASE_URL}/blinks-preview.png`}
      websiteUrl={actionApiUrl}
      websiteText={new URL(actionApiUrl).hostname}
      securityState="trusted"
      disclaimer={undefined}
      buttons={undefined}
      inputs={inputsConfig}
      form={undefined}
      error={
        textSelected === TextConfig.Error ? "Sample error message" : undefined
      }
      success={
        textSelected === TextConfig.Success
          ? "Sample success message"
          : undefined
      }
      supportability={{
        isSupported: true,
      }}
      id={"editor-blinks-inputs"}
    />
  )
}
