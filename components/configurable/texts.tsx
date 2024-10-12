import ColorPicker from "@/components/color-picker"

export default function Texts() {
  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Text</h4>
      </div>

      <div className="flex gap-x-1.5">
        <ColorPicker label="Color Primary" variable="--blink-text-primary" />
        <ColorPicker label="— Secondary" variable="--blink-text-secondary" />
      </div>

      <ColorPicker label="Brand Color" variable="--blink-text-brand" />

      <div className="flex gap-x-1.5">
        <ColorPicker label="Link Color" variable="--blink-text-link" />
        <ColorPicker label="— on Hover" variable="--blink-text-link-hover" />
      </div>

      <ColorPicker label="Success Color" variable="--blink-text-success" />

      <div className="flex gap-x-1.5">
        <ColorPicker label="Warning Color" variable="--blink-text-warning" />
        <ColorPicker label="— on Hover" variable="--blink-text-warning-hover" />
      </div>

      <div className="flex gap-x-1.5">
        <ColorPicker label="Error Color" variable="--blink-text-error" />
        <ColorPicker label="— on Hover" variable="--blink-text-error-hover" />
      </div>
    </>
  )
}
