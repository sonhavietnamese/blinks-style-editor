import { useId } from "react"
import { BaseBlinkLayout } from "./blinks-ui-0.13.1/layouts/BaseBlinkLayout"

export default function EditorBlinksButtons() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"
  const id = useId()

  return (
    <BaseBlinkLayout
      stylePreset="custom"
      title="Blinkman Inputs"
      description="Blinkman Inputs"
      image={
        "https://proxy.dial.to/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fblink-man%2Firfan_50_61.20_48_f45ed0faa7674f9e8c145848ee37da3f.png"
      }
      websiteUrl={actionApiUrl}
      websiteText={new URL(actionApiUrl).hostname}
      securityState="trusted"
      disclaimer={undefined}
      buttons={undefined}
      inputs={[
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
          button: undefined,
          options: undefined,
        },
        {
          type: "url",
          placeholder: "URL input",
          name: "name",
          disabled: true,
          required: false,
          min: undefined,
          max: undefined,
          pattern: undefined,
          description: undefined,
          button: undefined,
          options: undefined,
        },
        {
          type: "select",
          placeholder: "Select input",
          name: "name",
          disabled: false,
          required: false,
          min: undefined,
          max: undefined,
          pattern: undefined,
          description: undefined,
          button: {
            text: "Save",
            loading: false,
            ctaType: "button",
            onClick: () => {},
          },
          options: [
            {
              label: "Option 1",
              value: "option1",
            },
            {
              label: "Option 2",
              value: "option2",
            },
            {
              label: "Option 3",
              value: "option3",
            },
          ],
        },
        {
          type: "radio",
          placeholder: "Radio input",
          name: "name",
          disabled: false,
          required: false,
          min: undefined,
          max: undefined,
          pattern: undefined,
          description: undefined,
          button: undefined,
          options: [
            {
              label: "Option 1",
              value: "option1",
            },
            {
              label: "Option 2",
              value: "option2",
            },
            {
              label: "Option 3",
              value: "option3",
            },
          ],
        },
        {
          type: "date",
          placeholder: "Date input",
          name: "name",
          disabled: false,
          required: false,
          min: undefined,
          max: undefined,
          pattern: undefined,
          description: undefined,
          button: {
            text: "Save",
            loading: false,
            ctaType: "button",
            onClick: () => {},
          },
          options: undefined,
        },

        {
          type: "number",
          placeholder: "Number input",
          name: "name",
          disabled: false,
          required: false,
          min: undefined,
          max: undefined,
          pattern: undefined,
          description: undefined,
          button: {
            text: "Save",
            loading: false,
            ctaType: "button",
            onClick: () => {},
          },
          options: undefined,
        },
      ]}
      form={undefined}
      error={undefined}
      success={undefined}
      supportability={{
        isSupported: true,
      }}
      id={id}
    />
  )
}
