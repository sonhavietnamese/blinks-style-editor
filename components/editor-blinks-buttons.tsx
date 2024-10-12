import { useId } from "react"
import { BaseBlinkLayout } from "./blinks-ui-0.13.1/layouts/BaseBlinkLayout"

export default function EditorBlinksButtons() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"
  const id = useId()

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
      buttons={[
        {
          text: "Long content",
          loading: false,
          variant: "default",
          disabled: false,
          ctaType: "button",
          onClick: () => {},
        },
        {
          text: "Disabled",
          loading: false,
          variant: "default",
          disabled: true,
          ctaType: "button",
          onClick: () => {},
        },
        {
          text: "Error",
          loading: false,
          variant: "error",
          disabled: false,
          ctaType: "button",
          onClick: () => {},
        },
        {
          text: "Success",
          loading: false,
          variant: "success",
          disabled: false,
          ctaType: "button",
          onClick: () => {},
        },
      ]}
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
