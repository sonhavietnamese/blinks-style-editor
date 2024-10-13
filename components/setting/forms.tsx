import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { FormConfig, useFormConfig } from "@/hooks/use-form-config"
import { cn } from "@/libs/utils"
import { useState } from "react"

interface FormsProps {
  enabled: boolean
  setEnabled: (value: boolean) => void
}

export default function Forms({ enabled, setEnabled }: FormsProps) {
  const { enabled: formEnabled, setEnabled: setFormEnabled } = useFormConfig()

  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Form</h4>

        <div className="mr-1">
          <Toggle checked={enabled} onChange={setEnabled} />
        </div>
      </div>
      <section
        className={cn(
          "mt-2 space-y-1.5 opacity-100",
          !enabled && "pointer-events-none opacity-50",
        )}
      >
        <div className="mt-3 flex items-center gap-1.5">
          <Checkbox
            id="required"
            label="Required"
            checked={formEnabled.required}
            onChange={(value) => setFormEnabled(FormConfig.Required, value)}
          />
          <Checkbox
            id="button"
            label="Disabled"
            checked={formEnabled.disabled}
            onChange={(value) => setFormEnabled(FormConfig.Disabled, value)}
          />
        </div>
        <Checkbox
          id="text"
          label="Text Input"
          checked={formEnabled.text}
          onChange={(value) => setFormEnabled(FormConfig.Text, value)}
        />
        <Checkbox
          id="number"
          label="Number Input"
          checked={formEnabled.number}
          onChange={(value) => setFormEnabled(FormConfig.Number, value)}
        />
        <Checkbox
          id="date"
          label="Date Input"
          checked={formEnabled.date}
          onChange={(value) => setFormEnabled(FormConfig.Date, value)}
        />
        <Checkbox
          id="radio"
          label="Radio Input"
          checked={formEnabled.radio}
          onChange={(value) => setFormEnabled(FormConfig.Radio, value)}
        />
        <Checkbox
          id="select"
          label="Select Input"
          checked={formEnabled.select}
          onChange={(value) => setFormEnabled(FormConfig.Select, value)}
        />
        <Checkbox
          id="checkbox"
          label="Checkbox Input"
          checked={formEnabled.checkbox}
          onChange={(value) => setFormEnabled(FormConfig.Checkbox, value)}
        />
      </section>
    </>
  )
}
