import ColorPicker from "@/components/color-picker"

export default function Texts() {
  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Text</h4>
      </div>

      <div className="flex gap-x-1.5">
        <ColorPicker label=" Color Primary" />
        <ColorPicker label="— Secondary" />
      </div>

      <ColorPicker label="Brand Color" />

      <div className="flex gap-x-1.5">
        <ColorPicker label="Link Color" />
        <ColorPicker label="— on Hover" />
      </div>

      <ColorPicker label="Success Color" />

      <div className="flex gap-x-1.5">
        <ColorPicker label="Warning Color" />
        <ColorPicker label="— on Hover" />
      </div>

      <div className="flex gap-x-1.5">
        <ColorPicker label="Error Color" />
        <ColorPicker label="— on Hover" />
      </div>
    </>
  )
}
