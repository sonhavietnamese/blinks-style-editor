import { cn } from "@/libs/utils"
import * as Popover from "@radix-ui/react-popover"
import { useState } from "react"
import { HexColorPicker } from "react-colorful"

interface ColorPickerProps {
  label: string
}

export default function ColorPicker({ label }: ColorPickerProps) {
  const [color, setColor] = useState("#373737")

  const handleChange = (color: string) => {
    const hex = color.startsWith("#") ? color : `#${color}`
    setColor(hex)
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild className="">
        <div className="w-full">
          <div className="flex flex-col gap-1">
            <label className="mt-3 block select-none text-[0.6875rem] text-[#000000]/70">
              {label}
            </label>
            <div className="relative">
              <div>
                <div className="absolute left-[6px] top-[6px] h-[19px] w-[19px] cursor-pointer overflow-hidden rounded-[3px]">
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black to-transparent to-25% opacity-[0.3]"></div>
                  <div
                    className={cn("absolute inset-0 z-[2]")}
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              </div>
              <input
                type="text"
                className="relative block w-full rounded-md border border-[#e6e6e6] bg-[#fefefe] p-[0.4rem_0.75rem_0.4rem_2.25rem] text-xs transition-shadow ease-linear"
                value={color}
                onChange={(e) => handleChange(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="relative top-2 z-[99999999] m-[0.25rem_0.75rem] animate-content-enter rounded-[0.5rem] bg-[#fff] p-[0.35rem] shadow-[0_0_0_1px_#e6e6e6,_0_1px_4px_rgba(0,0,0,0.04)]">
          <HexColorPicker onChange={setColor} color={color} />

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
  )
}
