import Checkbox from "@/components/checkbox"
import { useState } from "react"

export default function Container() {
  const [isBlinksActive, setIsBlinksActive] = useState(true)
  const [isMiniBlinksActive, setIsMiniBlinksActive] = useState(true)

  const handleBlinksChange = (value: boolean) => {
    if (!value && !isMiniBlinksActive) return
    setIsBlinksActive(value)
  }

  const handleMiniBlinksChange = (value: boolean) => {
    if (!value && !isBlinksActive) return
    setIsMiniBlinksActive(value)
  }

  return (
    <div className="mt-3 flex items-center gap-1.5">
      <Checkbox
        id="blinks"
        label="Blinks"
        checked={isBlinksActive}
        onChange={handleBlinksChange}
      />
      <Checkbox
        id="miniblinks"
        label="Mini Blinks"
        checked={isMiniBlinksActive}
        onChange={handleMiniBlinksChange}
      />
    </div>
  )
}
