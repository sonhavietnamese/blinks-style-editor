import { IsolatedBlinkLayout } from "./blinks-ui-0.13.1/layouts/IsolatedBlinkLayout"

export default function EditorMiniblinkButtons() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"

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
        error={undefined}
        success={undefined}
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
        error={undefined}
        success={undefined}
      />
    </div>
  )
}
