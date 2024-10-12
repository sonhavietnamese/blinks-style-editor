import * as Popover from "@radix-ui/react-popover"
import ColorPicker from "@/components/color-picker"

export default function Container() {
  return (
    <>
      <div className="flex gap-x-1.5">
        <ColorPicker label="Background Primary" />
        <ColorPicker label="— Secondary" />
      </div>

      <div className="flex gap-x-1.5">
        <ColorPicker label="Stroke Color Primary" />
        <ColorPicker label="— Secondary" />
      </div>

      <Popover.Root>
        <Popover.Trigger asChild className="">
          <div className="w-full">
            <div className="flex flex-col gap-2">
              <label className="mt-3 block select-none text-[0.6875rem] text-[#000000]/70">
                Shadow
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 z-[2] flex cursor-pointer items-center px-3 text-[#000000]/30">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C2 2.89543 2.89543 2 4 2H10C11.1046 2 12 2.89543 12 4V10C12 11.1046 11.1046 12 10 12H4C2.89543 12 2 11.1046 2 10V4Z"
                      fill="#E6E6E6"
                    ></path>
                    <path
                      d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H8C8.82843 0.5 9.5 1.17157 9.5 2V8C9.5 8.82843 8.82843 9.5 8 9.5H2C1.17157 9.5 0.5 8.82843 0.5 8V2Z"
                      fill="white"
                      stroke="#BFBFBF"
                    ></path>
                  </svg>
                </div>
                <input
                  className="relative block w-full rounded-md border border-[#e6e6e6] bg-white p-2 text-xs transition-shadow ease-linear"
                  readOnly
                  value="12 0 0 16"
                  style={{ cursor: "pointer", paddingLeft: "1.75rem" }}
                ></input>
              </div>
            </div>
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="relative top-2 z-[99999999] m-[0.25rem_0.75rem] animate-content-enter rounded-[0.5rem] bg-[#fff] p-[0.35rem] shadow-[0_0_0_1px_#e6e6e6,_0_1px_4px_rgba(0,0,0,0.04)]">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.5rem",
                width: "204px",
              }}
            >
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <div className="absolute bottom-0 left-0 top-0 z-20 flex items-center px-3 text-xs text-black text-opacity-30">
                    X
                  </div>
                  <input
                    type="number"
                    min="-16"
                    max="16"
                    className="relative block w-full rounded-md border border-[#e6e6e6] bg-[#fefefe] p-[0.5rem_0.75rem] text-xs text-[#000] transition-shadow ease-linear [appearance:textfield] placeholder:[color:#c1c1c1] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    aria-invalid="false"
                    data-error="false"
                    value="0"
                    style={{ paddingLeft: "2rem", textAlign: "right" }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div style={{ position: "relative" }}>
                  <div className="absolute bottom-0 left-0 top-0 z-20 flex items-center px-3 text-xs text-black text-opacity-30">
                    Blur
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="16"
                    className="relative block w-full rounded-md border border-[#e6e6e6] bg-[#fefefe] p-[0.5rem_0.75rem] text-xs text-[#000] transition-shadow ease-linear [appearance:textfield] placeholder:[color:#c1c1c1] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    aria-invalid="false"
                    data-error="false"
                    value="0"
                    style={{ paddingLeft: "2rem", textAlign: "right" }}
                  />
                </div>
              </div>
            </div>

            <span className="absolute left-[95.5px] top-0 origin-[center_0px] rotate-180">
              <div className='relative rotate-180 before:absolute before:bottom-[-1px] before:left-0 before:right-0 before:z-[3] before:h-[1px] before:bg-[#fff] before:content-[""]'>
                <svg
                  className="relative top-[1px] z-[1] block fill-white stroke-[#e6e6e6] stroke-[1.5px]"
                  width="20"
                  height="9"
                  viewBox="0 0 20 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.3148 6.73585L11.4591 1.55643C10.6689 0.71361 9.33109 0.713611 8.54094 1.55643L3.68524 6.73585C3.1594 7.29675 2.48842 7.6889 1.75666 7.87577C1.22159 8.0124 0.76709 8.44776 0.76709 9H19.2329C19.2329 8.44776 18.7784 8.0124 18.2434 7.87577C17.5116 7.6889 16.8406 7.29675 16.3148 6.73585Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </span>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <ColorPicker label="Stroke Color on Error" />
      <ColorPicker label="Stroke Color on Warning" />

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
              className="relative block w-full rounded-md border border-[#e6e6e6] bg-white p-2 text-xs transition-shadow ease-linear"
              readOnly
              value="12"
              style={{ cursor: "pointer", paddingLeft: "1.75rem" }}
            ></input>
            <div className="absolute bottom-0 right-0 top-0 z-[2] flex cursor-ew-resize select-none items-center px-2 text-[12px]">
              <kbd className="rounded bg-[#ebebeb] p-1.5 py-1 text-[11px] leading-none">
                rem
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
