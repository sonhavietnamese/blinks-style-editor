import { BaseButtonProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { BaseBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/BaseBlinkLayout"
import { GENERATOR } from "@/components/generators/button"
import { ButtonConfig, useButtonConfig } from "@/hooks/use-button-config"
import { useEffect, useState } from "react"

export default function EditorBlinksButtons() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"

  const [buttonsConfig, setButtonsConfig] = useState<BaseButtonProps[]>([])

  const { enabled: buttonEnabled } = useButtonConfig()

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
      title="Blinkman Buttons"
      description="Blinkman Buttons"
      image={
        "https://proxy.dial.to/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fblink-man%2Firfan_50_61.20_48_f45ed0faa7674f9e8c145848ee37da3f.png"
      }
      websiteUrl={actionApiUrl}
      websiteText={new URL(actionApiUrl).hostname}
      securityState="trusted"
      disclaimer={undefined}
      buttons={buttonsConfig}
      inputs={undefined}
      form={undefined}
      error={undefined}
      success={undefined}
      supportability={{
        isSupported: true,
      }}
      id={"editor-blinks-buttons"}
    />
  )
}
