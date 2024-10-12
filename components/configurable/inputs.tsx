import ColorPicker from "@/components/color-picker"

export default function Inputs() {
  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Inputs</h4>
      </div>

      <ColorPicker label="Background" />
      <ColorPicker label="Stroke Color" />
      <ColorPicker label="Text Color" />

      <ColorPicker label="Placeholder Color" />

      <ColorPicker label="Background on Disabled" />
      <ColorPicker label="Stroke Color on Disabled" />
      <ColorPicker label="Text Color on Disabled" />

      <ColorPicker label="Background on Selected" />
      <ColorPicker label="Text Color on Selected" />

      <ColorPicker label="Stroke Color on Hover" />
      <ColorPicker label="Stroke Color on Error" />

      <div className="flex items-center gap-x-1.5">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label className="mt-3 block select-none text-[0.6875rem] text-[#000000]/70">
              Border Radius
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 z-[2] flex cursor-pointer items-center px-3 text-[#000000]/30">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 1H5C2.79086 1 1 2.79086 1 5V9H0V5C0 2.23858 2.23858 0 5 0H9V1Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <input
                className="relative block w-full cursor-pointer rounded-md border border-[#e6e6e6] bg-white p-2 pl-[1.75rem] text-xs transition-shadow ease-linear"
                readOnly
                value="12"
              ></input>
              <div className="absolute bottom-0 right-0 top-0 z-[2] flex cursor-ew-resize select-none items-center px-2 text-[12px]">
                <kbd className="rounded bg-[#ebebeb] p-1.5 py-1 text-[11px] leading-none">
                  rem
                </kbd>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-2">
            <label className="mt-3 block select-none text-[0.6875rem] text-[#000000]/70">
              — Standalone
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 z-[2] flex cursor-pointer items-center px-3 text-[#000000]/30">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 1H5C2.79086 1 1 2.79086 1 5V9H0V5C0 2.23858 2.23858 0 5 0H9V1Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <input
                className="relative block w-full cursor-pointer rounded-md border border-[#e6e6e6] bg-white p-2 pl-[1.75rem] text-xs transition-shadow ease-linear"
                readOnly
                value="12"
              ></input>
              <div className="absolute bottom-0 right-0 top-0 z-[2] flex cursor-ew-resize select-none items-center px-2 text-[12px]">
                <kbd className="rounded bg-[#ebebeb] p-1.5 py-1 text-[11px] leading-none">
                  rem
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
