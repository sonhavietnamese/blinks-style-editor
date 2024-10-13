import { BaseButtonProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { IsolatedBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/IsolatedBlinkLayout"
import { GENERATOR } from "@/components/generators/button"
import { BASE_URL } from "@/constants"
import { ButtonConfig, useButtonConfig } from "@/hooks/use-button-config"
import { TextConfig, useTextConfig } from "@/hooks/use-text-config"
import { useEffect, useState } from "react"

export default function EditorMiniblinkButtons() {
  const actionApiUrl = BASE_URL
  const { enabled: buttonEnabled } = useButtonConfig()
  const { selected: textSelected } = useTextConfig()

  const [buttonsConfig, setButtonsConfig] = useState<BaseButtonProps[]>([])

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
    <div className="custom flex flex-col gap-5 rounded-2xl bg-[var(--blink-bg-primary)] p-5">
      {buttonsConfig.map((button) => (
        <IsolatedBlinkLayout
          stylePreset="custom"
          websiteUrl={actionApiUrl}
          websiteText={new URL(actionApiUrl).hostname}
          elementType="button"
          element={button}
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
          key={button.text}
          id={`preview-miniblink-button-${button.text}`}
        />
      ))}
    </div>
  )
}
