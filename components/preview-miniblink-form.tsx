import { IsolatedBlinkLayout } from "./blinks-ui-0.13.1/layouts/IsolatedBlinkLayout"

export default function EditorMiniblinkForm() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"

  return (
    <div className="custom rounded-2xl bg-[var(--blink-bg-primary)] p-5">
      <IsolatedBlinkLayout
        stylePreset="custom"
        websiteUrl={actionApiUrl}
        websiteText={new URL(actionApiUrl).hostname}
        elementType="form"
        element={{
          inputs: [
            {
              type: "text",
              placeholder: "Text input",
              name: "name",
              disabled: true,
              required: false,
              min: undefined,
              max: undefined,
              pattern: undefined,
              description: undefined,
            },
          ],
          button: {
            text: "Save",
            ctaType: "button",
            onClick: () => {},
          },
        }}
        error={undefined}
        success={undefined}
      />
    </div>
  )
}
