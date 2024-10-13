import { BaseInputProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { BaseBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/BaseBlinkLayout"
import { GENERATOR } from "@/components/generators/input"
import { InputConfig, useInputConfig } from "@/hooks/use-input-config"
import { useEffect, useState } from "react"

export default function EditorBlinksInputs() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"

  const { enabled: inputEnabled } = useInputConfig()

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
      title="Blinkman Inputs"
      description="Blinkman Inputs"
      image={
        "https://proxy.dial.to/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fblink-man%2Firfan_50_61.20_48_f45ed0faa7674f9e8c145848ee37da3f.png"
      }
      websiteUrl={actionApiUrl}
      websiteText={new URL(actionApiUrl).hostname}
      securityState="trusted"
      disclaimer={undefined}
      buttons={undefined}
      inputs={inputsConfig}
      form={undefined}
      error={undefined}
      success={undefined}
      supportability={{
        isSupported: true,
      }}
      id={"editor-blinks-inputs"}
    />
  )
}
