import { IsolatedBlinkLayout } from "./blinks-ui-0.13.1/layouts/IsolatedBlinkLayout"

export default function EditorMiniblinkInputs() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"

  return (
    <div className="custom rounded-2xl bg-[var(--blink-bg-primary)] p-5">
      <IsolatedBlinkLayout
        stylePreset="custom"
        websiteUrl={actionApiUrl}
        websiteText={new URL(actionApiUrl).hostname}
        elementType="input"
        element={{
          type: "text",
          placeholder: "Text input",
          name: "name",
          disabled: false,
          required: false,
          min: undefined,
          max: undefined,
          pattern: undefined,
          description: undefined,
          button: {
            text: "Button",
            loading: false,
            variant: "error",
            disabled: false,
            ctaType: "button",
            onClick: () => {},
          },
          options: undefined,
        }}
        error={undefined}
        success={undefined}
      />
    </div>
  )
}
