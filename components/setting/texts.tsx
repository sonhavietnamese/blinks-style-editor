import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { TextConfig, useTextConfig } from "@/hooks/use-text-config"
import { cn } from "@/libs/utils"
import { useEffect } from "react"

interface TextsProps {
  enabled: boolean
  setEnabled: (value: boolean) => void
}

export default function Texts({ enabled, setEnabled }: TextsProps) {
  const { selected, setSelected } = useTextConfig()

  useEffect(() => {
    if (!enabled) {
      setSelected(undefined)
    }
  }, [enabled])

  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Text</h4>

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
          id="error"
          label="Error Text"
          checked={selected === TextConfig.Error}
          onChange={() => setSelected(TextConfig.Error)}
        />

        <Checkbox
          id="success"
          label="Success Text"
          checked={selected === TextConfig.Success}
          onChange={() => setSelected(TextConfig.Success)}
        />
      </section>
    </>
  )
}
