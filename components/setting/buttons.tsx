import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { ButtonConfig, useButtonConfig } from "@/hooks/use-button-config"
import { cn } from "@/libs/utils"

interface ButtonsProps {
  enabled: boolean
  setEnabled: (value: boolean) => void
}

export default function Buttons({ enabled, setEnabled }: ButtonsProps) {
  const { enabled: buttonEnabled, setEnabled: setButtonEnabled } =
    useButtonConfig()

  return (
    <>
      <div className="mt-5 flex select-none items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Buttons</h4>

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
        <Checkbox
          id="normal"
          label="Normal Button"
          checked={buttonEnabled.normal}
          onChange={(value) => setButtonEnabled(ButtonConfig.Normal, value)}
        />
        <Checkbox
          id="error"
          label="Error Button"
          checked={buttonEnabled.error}
          onChange={(value) => setButtonEnabled(ButtonConfig.Error, value)}
        />
        <Checkbox
          id="disabled"
          label="Disabled Button"
          checked={buttonEnabled.disabled}
          onChange={(value) => setButtonEnabled(ButtonConfig.Disabled, value)}
        />
        <Checkbox
          id="success"
          label="Success Button"
          checked={buttonEnabled.success}
          onChange={(value) => setButtonEnabled(ButtonConfig.Success, value)}
        />
        <Checkbox
          id="loading"
          label="Loading Button"
          checked={buttonEnabled.loading}
          onChange={(value) => setButtonEnabled(ButtonConfig.Loading, value)}
        />
        <Checkbox
          id="long"
          label="Long Content Button"
          checked={buttonEnabled.long}
          onChange={(value) => setButtonEnabled(ButtonConfig.Long, value)}
        />
        <Checkbox
          id="link"
          label="Link Button"
          checked={buttonEnabled.link}
          onChange={(value) => setButtonEnabled(ButtonConfig.Link, value)}
        />
      </section>
    </>
  )
}
