import { BaseButtonProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { BaseBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/BaseBlinkLayout"
import { GENERATOR } from "@/components/generators/button"
import { BASE_URL } from "@/constants"
import { ButtonConfig, useButtonConfig } from "@/hooks/use-button-config"
import { TextConfig, useTextConfig } from "@/hooks/use-text-config"
import { useEffect, useState } from "react"

export default function EditorBlinksButtons() {
  const actionApiUrl = BASE_URL

  const [buttonsConfig, setButtonsConfig] = useState<BaseButtonProps[]>([])

  const { enabled: buttonEnabled } = useButtonConfig()
  const { selected: textSelected } = useTextConfig()

  useEffect(() => {
    setButtonsConfig(
      Object.entries(buttonEnabled)
        .map(([key, value]) => {
          if (value) return GENERATOR[key as ButtonConfig]
        })
        .filter(Boolean) as BaseButtonProps[],
    )
  }, [buttonEnabled])

  return (
    <BaseBlinkLayout
      stylePreset="custom"
      title="Buttons Preview"
      description="All button variants"
      image={`${BASE_URL}/blinks-preview.png`}
      websiteUrl={actionApiUrl}
      websiteText={new URL(actionApiUrl).hostname}
      securityState="trusted"
      disclaimer={null}
      buttons={buttonsConfig}
      inputs={undefined}
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
      id={"editor-blinks-buttons"}
    />
  )
}
