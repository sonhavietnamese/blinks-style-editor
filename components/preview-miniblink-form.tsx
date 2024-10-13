import { BaseInputProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"
import { IsolatedBlinkLayout } from "@/components/blinks-ui-0.13.1/layouts/IsolatedBlinkLayout"
import { GENERATOR } from "@/components/generators/form"
import { BASE_URL } from "@/constants"
import { FormConfig, useFormConfig } from "@/hooks/use-form-config"
import { TextConfig, useTextConfig } from "@/hooks/use-text-config"
import { useEffect, useState } from "react"

export default function EditorMiniblinkForm() {
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
    <div className="custom rounded-2xl bg-[var(--blink-bg-primary)] p-5">
      <IsolatedBlinkLayout
        stylePreset="custom"
        websiteUrl={actionApiUrl}
        websiteText={new URL(actionApiUrl).hostname}
        elementType="form"
        element={{
          inputs: formConfig,
          button: {
            text: "Save",
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
        id={`preview-miniblink-form`}
      />
    </div>
  )
}
