import { useId } from "react"
import { BaseBlinkLayout } from "./blinks-ui-0.13.1/layouts/BaseBlinkLayout"

export default function EditorBlinksForm() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"
  const id = useId()

  return (
    <BaseBlinkLayout
      stylePreset="custom"
      title="Blinkman"
      description="Blinkman"
      image={
        "https://proxy.dial.to/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fblink-man%2Firfan_50_61.20_48_f45ed0faa7674f9e8c145848ee37da3f.png"
      }
      websiteUrl={actionApiUrl}
      websiteText={new URL(actionApiUrl).hostname}
      securityState="trusted"
      disclaimer={undefined}
      buttons={undefined}
      inputs={undefined}
      form={{
        inputs: [
          {
            type: "text",
            placeholder: "Placeholder",
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
          loading: false,
          ctaType: "button",
          onClick: () => {},
        },
      }}
      error={undefined}
      success={undefined}
      supportability={{
        isSupported: true,
      }}
      id={"editor-blinks-form"}
    />
  )
}
