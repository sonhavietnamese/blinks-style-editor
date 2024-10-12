import ColorPicker from "@/components/color-picker"
import NumberInput from "@/components/number-input"

export default function Buttons() {
  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Buttons</h4>
      </div>

      <ColorPicker label="Background" variable="--blink-button" />
      <ColorPicker label="Text Color" variable="--blink-text-button" />

      <ColorPicker
        label="Background on Disabled"
        variable="--blink-button-disabled"
      />
      <ColorPicker
        label="Text Color on Disabled"
        variable="--blink-text-button-disabled"
      />

      <ColorPicker
        label="Background on Success"
        variable="--blink-button-success"
      />
      <ColorPicker
        label="Text Color on Success"
        variable="--blink-text-button-success"
      />

      <ColorPicker
        label="Background on Hover"
        variable="--blink-button-hover"
      />

      <NumberInput
        label="Border Radius"
        variable="--blink-border-radius-rounded-button"
        unit="rem"
      />
    </>
  )
}
