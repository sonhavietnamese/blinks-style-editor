import { BaseInputProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { BaseBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/BaseBlinkLayout"
import { GENERATOR } from "@/components/generators/form"
import { BASE_URL } from "@/constants"
import { FormConfig, useFormConfig } from "@/hooks/use-form-config"
import { TextConfig, useTextConfig } from "@/hooks/use-text-config"
import { useEffect, useState } from "react"

export default function EditorBlinksForm() {
  const actionApiUrl = BASE_URL

  const { enabled: formEnabled } = useFormConfig()
  const [formConfig, setFormConfig] = useState<BaseInputProps[]>([])

  const { selected: textSelected } = useTextConfig()

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
      title="Form Preview"
      description="All input types in a form"
      image={`${BASE_URL}/blinks-preview.png`}
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
      error={
        textSelected === TextConfig.Error ? "Sample error message" : undefined
      }
      success={
        textSelected === TextConfig.Success
          ? "Sample success message"
          : undefined
      }
      supportability={{
        isSupported: true,
      }}
      id={"editor-blinks-form"}
    />
  )
}
