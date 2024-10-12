"use client"

import * as Popover from "@radix-ui/react-popover"
import NumberInput from "@/components/number-input"
import ColorPicker from "@/components/color-picker"
import ColorPickerUncontrolled from "@/components/color-picker-uncontrolled"
import { useEffect, useState } from "react"
import { rgbaToHexA } from "@/libs/utils"
import { Minus } from "lucide-react"

type Shadow = {
  x: number
  y: number
  blur: number
  spread: number
  color: string
}

export default function Container() {
  const [shadows, setShadows] = useState<Shadow[]>([])

  useEffect(() => {
    const defaultShadow = getComputedStyle(
      document.documentElement,
    ).getPropertyValue("--r-blink-shadow-container")

    const shadows = defaultShadow
      .replace(/\s+/g, "")
      .split("),")
      .map((shadow) => {
        const [x, y, blur, spread, color] = shadow.split("px")

        return {
          x: Number(x),
          y: Number(y),
          blur: Number(blur),
          spread: Number(spread),
          color: rgbaToHexA(color),
        }
      })

    setShadows(shadows)
  }, [])

  const addShadow = () => {
    setShadows([
      ...shadows,
      { x: 0, y: 0, blur: 0, spread: 0, color: "#000000" },
    ])
  }

  const onShadowChange = (
    index: number,
    value: number | string,
    key: keyof Shadow,
  ) => {
    const newShadows = [...shadows]
    newShadows[index] = { ...newShadows[index], [key]: value }
    setShadows(newShadows)

    document.documentElement.style.setProperty(
      "--r-blink-shadow-container",
      newShadows
        .map(
          (sd) => `${sd.x}px ${sd.y}px ${sd.blur}px ${sd.spread}px ${sd.color}`,
        )
        .join(","),
    )
  }

  const removeShadow = (index: number) => {
    const newShadows = shadows.filter((_, i) => i !== index)
    setShadows(newShadows)
  }

  return (
    <>
      <div className="flex gap-x-1.5">
        <ColorPicker label="Background Primary" variable="--blink-bg-primary" />
        <ColorPicker label="— Secondary" variable="--blink-bg-secondary" />
      </div>

      <div className="flex gap-x-1.5">
        <ColorPicker
          label="Stroke Color Primary"
          variable="--blink-stroke-primary"
        />
        <ColorPicker label="— Secondary" variable="--blink-stroke-secondary" />
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-2">
          <label className="mt-3 block select-none text-[0.6875rem] text-[#000000]/70">
            Shadow
          </label>

          {shadows.map((sd, index) => (
            <div key={index} className="flex w-full items-center space-x-1.5">
              <Popover.Root>
                <Popover.Trigger asChild className="">
                  <div className="w-full">
                    <div className="flex flex-col gap-2">
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
                          className="relative block w-full cursor-pointer rounded-md border border-[#e6e6e6] bg-white p-[0.4rem_0.75rem_0.4rem_1.9rem] text-xs transition-shadow ease-linear"
                          readOnly
                          value={`${sd.x} ${sd.y} ${sd.blur} ${sd.spread}`}
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
                            className="relative block w-full rounded-md border border-[#e6e6e6] bg-[#fefefe] p-[0.5rem_0.75rem_0.5rem_1.9rem] text-right text-xs text-[#000] transition-shadow ease-linear [appearance:textfield] placeholder:[color:#c1c1c1] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            aria-invalid="false"
                            data-error="false"
                            value={sd.x}
                            onChange={(e) =>
                              onShadowChange(index, Number(e.target.value), "x")
                            }
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
                            min="-16"
                            max="16"
                            className="relative block w-full rounded-md border border-[#e6e6e6] bg-[#fefefe] p-[0.5rem_0.75rem_0.5rem_1.9rem] text-right text-xs text-[#000] transition-shadow ease-linear [appearance:textfield] placeholder:[color:#c1c1c1] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            aria-invalid="false"
                            data-error="false"
                            value={sd.blur}
                            onChange={(e) =>
                              onShadowChange(
                                index,
                                Number(e.target.value),
                                "blur",
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-1 grid w-[204px] grid-cols-[repeat(2,1fr)] gap-[0.5rem]">
                      <div className="flex flex-col gap-2">
                        <div className="relative">
                          <div className="absolute bottom-0 left-0 top-0 z-20 flex items-center px-3 text-xs text-black text-opacity-30">
                            Y
                          </div>
                          <input
                            type="number"
                            min="-16"
                            max="16"
                            className="relative block w-full rounded-md border border-[#e6e6e6] bg-[#fefefe] p-[0.5rem_0.75rem_0.5rem_1.9rem] text-right text-xs text-[#000] transition-shadow ease-linear [appearance:textfield] placeholder:[color:#c1c1c1] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            aria-invalid="false"
                            data-error="false"
                            value={sd.y}
                            onChange={(e) =>
                              onShadowChange(index, Number(e.target.value), "y")
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div style={{ position: "relative" }}>
                          <div className="absolute bottom-0 left-0 top-0 z-20 flex items-center px-3 text-xs text-black text-opacity-30">
                            Spread
                          </div>
                          <input
                            type="number"
                            min="-16"
                            max="16"
                            className="relative block w-full rounded-md border border-[#e6e6e6] bg-[#fefefe] p-[0.5rem_0.75rem_0.5rem_1.9rem] text-right text-xs text-[#000] transition-shadow ease-linear [appearance:textfield] placeholder:[color:#c1c1c1] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            aria-invalid="false"
                            data-error="false"
                            value={sd.spread}
                            onChange={(e) =>
                              onShadowChange(
                                index,
                                Number(e.target.value),
                                "spread",
                              )
                            }
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

              <ColorPickerUncontrolled
                value={sd.color}
                setValue={(value) => onShadowChange(index, value, "color")}
              />

              <button
                onClick={() => removeShadow(index)}
                className="aspect-square h-fit w-fit rounded-md p-0.5 transition-colors ease-linear hover:bg-[#000000]/5"
              >
                <Minus size={12} />
              </button>
            </div>
          ))}

          <button
            onClick={addShadow}
            className="rounded-md border-[1px] border-dashed border-[#d2d2d2] p-1.5 leading-none"
          >
            <span className="text-xs text-[#000000]/70">Add</span>
          </button>
        </div>
      </div>

      <ColorPicker
        label="Stroke Color on Error"
        variable="--blink-stroke-error"
      />
      <ColorPicker
        label="Stroke Color on Warning"
        variable="--blink-stroke-warning"
      />

      <NumberInput
        label="Border Radius"
        variable="--blink-border-radius-rounded-2xl"
        unit="rem"
      />
    </>
  )
}
