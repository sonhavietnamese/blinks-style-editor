import { BaseInputProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { BaseBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/BaseBlinkLayout"
import { GENERATOR } from "@/components/generators/form"
import { FormConfig, useFormConfig } from "@/hooks/use-form-config"
import { useEffect, useState } from "react"

export default function EditorBlinksForm() {
  const actionApiUrl = "https://blinkman.sendarcade.fun/api/actions/blinkman"

  const { enabled: formEnabled } = useFormConfig()
  const [formConfig, setFormConfig] = useState<BaseInputProps[]>([])

  useEffect(() => {
    const newFormConfig = Object.entries(formEnabled)
      .map(([key, value]) => {
        const form = GENERATOR[key as FormConfig]
        if (form) {
          form.required = formEnabled.required
          form.disabled = formEnabled.disabled
        }
        if (value) return form
      })
      .filter(Boolean) as BaseInputProps[]

    setFormConfig(newFormConfig)
  }, [formEnabled])

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
        inputs: formConfig,
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
