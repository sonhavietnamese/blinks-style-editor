import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { cn } from "@/libs/utils"
import { useState } from "react"

interface FormsProps {
  enabled: boolean
  setEnabled: (value: boolean) => void
}

export default function Forms({ enabled, setEnabled }: FormsProps) {
  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Form</h4>

        <div className="mr-1">
          <Toggle checked={enabled} onChange={setEnabled} />
        </div>
      </div>
      <section
        className={cn("mt-2 space-y-1.5 opacity-100", !enabled && "opacity-50")}
      >
        <Checkbox
          id="text"
          label="Text Input"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="number"
          label="Number Input"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="email"
          label="Email Input"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="date"
          label="Date Input"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="radio"
          label="Radio Input"
          checked={true}
          onChange={() => {}}
        />
      </section>
    </>
  )
}
