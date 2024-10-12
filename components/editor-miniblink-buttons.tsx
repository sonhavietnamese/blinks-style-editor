import { IsolatedBlinkLayout } from "./blinks-ui-0.13.1/layouts/IsolatedBlinkLayout"

export default function EditorMiniblinkButtons() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"

  return (
    <div className="custom rounded-2xl bg-[var(--blink-bg-primary)] p-5">
      <IsolatedBlinkLayout
        stylePreset="custom"
        websiteUrl={actionApiUrl}
        websiteText={new URL(actionApiUrl).hostname}
        elementType="button"
        element={{
          text: "Button",
          ctaType: "button",
          onClick: () => {},
        }}
        error={"Error"}
        success={"Success"}
      />
    </div>
  )
}
