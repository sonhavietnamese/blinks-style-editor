import ColorPicker from "@/components/color-picker"
import NumberInput from "@/components/number-input"

export default function Inputs() {
  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Inputs</h4>
      </div>

      <ColorPicker label="Background" variable="--blink-input-bg" />
      <ColorPicker label="Stroke Color" variable="--blink-input-stroke" />
      <ColorPicker label="Text Color" variable="--blink-text-input" />

      <ColorPicker
        label="Placeholder Color"
        variable="--blink-text-input-placeholder"
      />

      <ColorPicker
        label="Background on Disabled"
        variable="--blink-input-bg-disabled"
      />
      <ColorPicker
        label="Stroke Color on Disabled"
        variable="--blink-input-stroke-disabled"
      />
      <ColorPicker
        label="Text Color on Disabled"
        variable="--blink-text-input-disabled"
      />

      <ColorPicker
        label="Background on Selected"
        variable="--blink-input-bg-selected"
      />
      <ColorPicker
        label="Stroke Color on Selected"
        variable="--blink-input-stroke-selected"
      />

      <ColorPicker
        label="Stroke Color on Hover"
        variable="--blink-input-stroke-hover"
      />
      <ColorPicker
        label="Stroke Color on Error"
        variable="--blink-input-stroke-error"
      />

      <div className="flex items-center gap-x-1.5">
        <NumberInput
          label="Border Radius"
          variable="--blink-border-radius-rounded-input"
          unit="rem"
        />

        <NumberInput
          label="— Standalone"
          variable="--blink-border-radius-rounded-input-standalone"
          unit="rem"
        />
      </div>
    </>
  )
}
