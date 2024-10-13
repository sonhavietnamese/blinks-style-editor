import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { cn } from "@/libs/utils"
import { useState } from "react"

interface ButtonsProps {
  enabled: boolean
  setEnabled: (value: boolean) => void
}

export default function Buttons({ enabled, setEnabled }: ButtonsProps) {
  const [activeStates, setActiveStates] = useState({
    normal: true,
    error: false,
    disabled: false,
    success: false,
    loading: false,
    long: false,
    link: false,
  })

  const handleChange = (id: string, value: boolean) => {
    if (!enabled) return

    const newActiveStates = { ...activeStates, [id]: value }
    if (!Object.values(newActiveStates).some(Boolean)) {
      newActiveStates[id as keyof typeof activeStates] = true
    }
    setActiveStates(newActiveStates)
  }

  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Buttons</h4>

        <div className="mr-1">
          <Toggle checked={enabled} onChange={setEnabled} />
        </div>
      </div>

      <section
        className={cn("mt-2 space-y-1.5 opacity-100", !enabled && "opacity-50")}
      >
        <Checkbox
          id="normal"
          label="Normal Button"
          checked={activeStates.normal}
          onChange={(value) => handleChange("normal", value)}
        />
        <Checkbox
          id="error"
          label="Error Button"
          checked={activeStates.error}
          onChange={(value) => handleChange("error", value)}
        />
        <Checkbox
          id="disabled"
          label="Disabled Button"
          checked={activeStates.disabled}
          onChange={(value) => handleChange("disabled", value)}
        />
        <Checkbox
          id="success"
          label="Success Button"
          checked={activeStates.success}
          onChange={(value) => handleChange("success", value)}
        />
        <Checkbox
          id="loading"
          label="Loading Button"
          checked={activeStates.loading}
          onChange={(value) => handleChange("loading", value)}
        />
        <Checkbox
          id="long"
          label="Long Content Button"
          checked={activeStates.long}
          onChange={(value) => handleChange("long", value)}
        />
        <Checkbox
          id="link"
          label="Link Button"
          checked={activeStates.link}
          onChange={(value) => handleChange("link", value)}
        />
      </section>
    </>
  )
}
