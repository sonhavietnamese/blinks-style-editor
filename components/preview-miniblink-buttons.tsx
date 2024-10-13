import { TextConfig, useTextConfig } from "@/hooks/use-text-config"
import { IsolatedBlinkLayout } from "./blinks-ui-0.13.1/layouts/IsolatedBlinkLayout"
import { BASE_URL } from "@/constants"

export default function EditorMiniblinkButtons() {
  const actionApiUrl = BASE_URL
  const { selected: textSelected } = useTextConfig()

  return (
    <div className="custom flex flex-col gap-5 rounded-2xl bg-[var(--blink-bg-primary)] p-5">
      <IsolatedBlinkLayout
        stylePreset="custom"
        websiteUrl={actionApiUrl}
        websiteText={new URL(actionApiUrl).hostname}
        elementType="button"
        element={{
          text: "Button",
          variant: "error",
          ctaType: "button",
          onClick: () => {},
        }}
        error={
          textSelected === TextConfig.Error ? "Sample error message" : undefined
        }
        success={
          textSelected === TextConfig.Success
            ? "Sample success message"
            : undefined
        }
      />

      <IsolatedBlinkLayout
        stylePreset="custom"
        websiteUrl={actionApiUrl}
        websiteText={new URL(actionApiUrl).hostname}
        elementType="button"
        element={{
          text: "Button",
          variant: "success",
          ctaType: "button",
          onClick: () => {},
        }}
        error={
          textSelected === TextConfig.Error ? "Sample error message" : undefined
        }
        success={
          textSelected === TextConfig.Success
            ? "Sample success message"
            : undefined
        }
      />
    </div>
  )
}
