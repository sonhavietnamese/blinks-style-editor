import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { InputConfig, useInputConfig } from "@/hooks/use-input-config"
import { cn } from "@/libs/utils"
import { useEffect } from "react"

interface InputsProps {
  enabled: boolean
  setEnabled: (value: boolean) => void
}

export default function Inputs({ enabled, setEnabled }: InputsProps) {
  const { enabled: inputEnabled, setEnabled: setInputEnabled } =
    useInputConfig()

  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Input</h4>

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
            id="button"
            label="Add Button"
            checked={inputEnabled.button}
            onChange={(value) => setInputEnabled(InputConfig.Button, value)}
          />
          <Checkbox
            id="disabled"
            label="Disabled"
            checked={inputEnabled.disabled}
            onChange={(value) => setInputEnabled(InputConfig.Disabled, value)}
          />
        </div>
        <Checkbox
          id="text"
          label="Text Input"
          checked={inputEnabled.text}
          onChange={(value) => setInputEnabled(InputConfig.Text, value)}
        />
        <Checkbox
          id="number"
          label="Number Input"
          checked={inputEnabled.number}
          onChange={(value) => setInputEnabled(InputConfig.Number, value)}
        />
        <Checkbox
          id="date"
          label="Date Input"
          checked={inputEnabled.date}
          onChange={(value) => setInputEnabled(InputConfig.Date, value)}
        />
        <Checkbox
          id="radio"
          label="Radio Input"
          checked={inputEnabled.radio}
          onChange={(value) => setInputEnabled(InputConfig.Radio, value)}
        />
        <Checkbox
          id="select"
          label="Select Input"
          checked={inputEnabled.select}
          onChange={(value) => setInputEnabled(InputConfig.Select, value)}
        />
        <Checkbox
          id="checkbox"
          label="Checkbox Input"
          checked={inputEnabled.checkbox}
          onChange={(value) => setInputEnabled(InputConfig.Checkbox, value)}
        />
      </section>
    </>
  )
}
