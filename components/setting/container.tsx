import Checkbox from "@/components/checkbox"
import { usePreview } from "@/hooks/use-preview"

export default function Container() {
  const { blinkStyleEnabled, setBlinkStyleEnabled } = usePreview()

  return (
    <div className="mt-3 flex items-center gap-1.5">
      <Checkbox
        id="blinks"
        label="Blinks"
        checked={blinkStyleEnabled.blinks}
        onChange={(value) => setBlinkStyleEnabled("blinks", value)}
      />
      <Checkbox
        id="miniblinks"
        label="Mini Blinks"
        checked={blinkStyleEnabled.miniblinks}
        onChange={(value) => setBlinkStyleEnabled("miniblinks", value)}
      />
    </div>
  )
}
