'use client'

import { ICONS } from '@/components/icons'
import * as Popover from '@radix-ui/react-popover'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { HexAlphaColorPicker } from 'react-colorful'

export default function Home() {
  const [value, setValue] = useState(0)

  const onInputChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(ev.target.value, 10)
    if (inputValue >= 0 && inputValue <= 64) {
      setValue(inputValue)
    }
  }, [])

  const [snapshot, setSnapshot] = useState(value)

  const [startVal, setStartVal] = useState(0)

  const onStart = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      setStartVal(event.clientX)
      setSnapshot(value)
    },
    [value],
  )

  useEffect(() => {
    const onUpdate = (evt: MouseEvent) => {
      if (startVal) {
        setValue(evt.clientX - snapshot)
      }
    }

    const onEnd = () => {
      setStartVal(0)
    }

    document.addEventListener('mousemove', onUpdate)
    document.addEventListener('mouseup', onEnd)
    return () => {
      document.removeEventListener('mousemove', onUpdate)
      document.removeEventListener('mouseup', onEnd)
    }
  }, [startVal, setValue, snapshot])

  return (
    <main className='grid text-[#373737] grid-cols-[18rem_1fr] w-screen relative background-dot h-screen p-4 bg-[#f7f7f7]'>
      {/* <aside className='absolute top-5 right-5 bg-white p-5'>
        <button>lg</button>
        <button>xl</button>
        <button>2xl</button>
      </aside> */}

      <aside className='flex flex-col w-full h-full p-4 rounded-[12px] shadow-sm col-span-1 bg-[#fff]'>
        <div className='flex items-center gap-x-1.5 text-sm'>
          <figure className='w-4 h-4'>{ICONS.star}</figure>
          <span>General</span>
        </div>

        <div className='flex flex-col '>
          <span className='text-xs text-[#000000B3] mt-3'>Background</span>
          <div className='flex gap-2 mt-2'>
            <button className='w-5 aspect-square rounded-full bg-white border border-[hsl(0_0%_92%)]'></button>
            <button className='w-5 aspect-square rounded-full bg-black border border-[hsl(0_0%_92%)]'></button>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <label className='text-xs text-[#000000B3] mt-3'>Border Radius</label>
          <div className='flex gap-2 mt-2'>
            <fieldset className='relative w-full'>
              <div onMouseDown={onStart} className='z-[2] cursor-ew-resize absolute top-0 bottom-0 flex items-center px-3 text-[12px]'>
                <svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9 1H5C2.79086 1 1 2.79086 1 5V9H0V5C0 2.23858 2.23858 0 5 0H9V1Z'
                    fill='currentColor'></path>
                </svg>
              </div>

              <input
                type='number'
                value={value}
                onChange={onInputChange}
                min={0}
                max={64}
                className='block leading-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none pl-8 pr-10 text-sm p-2 w-full border border-[#e6e6e6] rounded-lg'
              />

              <div onMouseDown={onStart} className='z-[2] cursor-ew-resize absolute top-0 bottom-0 flex right-0 items-center px-2 text-[12px]'>
                <kbd className='p-1.5 py-[1px] text-[11px] rounded bg-[#ebebeb]'>rem</kbd>
              </div>
            </fieldset>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <label className='text-xs text-[#000000B3] mt-3'>Border Radius</label>
          <div className='flex gap-2 mt-2'>
            <fieldset className='relative w-full'>
              <Popover.Root>
                <Popover.Trigger>
                  <button>
                    <div className='z-[2] absolute top-0 bottom-0 flex items-center px-3 text-[12px]'>
                      <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M2 4C2 2.89543 2.89543 2 4 2H10C11.1046 2 12 2.89543 12 4V10C12 11.1046 11.1046 12 10 12H4C2.89543 12 2 11.1046 2 10V4Z'
                          fill='#E6E6E6'></path>
                        <path
                          d='M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H8C8.82843 0.5 9.5 1.17157 9.5 2V8C9.5 8.82843 8.82843 9.5 8 9.5H2C1.17157 9.5 0.5 8.82843 0.5 8V2Z'
                          fill='white'
                          stroke='#BFBFBF'></path>
                      </svg>
                    </div>

                    <input
                      value={'16 16 16 16'}
                      readOnly
                      className='block cursor-pointer leading-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none pl-8  text-sm p-2 w-full border border-[#e6e6e6] rounded-lg'
                    />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className='PopoverContent'>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <p className='Text' style={{ marginBottom: 10 }}>
                        Dimensions
                      </p>
                      <fieldset className='Fieldset'>
                        <label className='Label' htmlFor='width'>
                          Width
                        </label>
                        <input className='Input' id='width' defaultValue='100%' />
                      </fieldset>
                      <fieldset className='Fieldset'>
                        <label className='Label' htmlFor='maxWidth'>
                          Max. width
                        </label>
                        <input className='Input' id='maxWidth' defaultValue='300px' />
                      </fieldset>
                      <fieldset className='Fieldset'>
                        <label className='Label' htmlFor='height'>
                          Height
                        </label>
                        <input className='Input' id='height' defaultValue='25px' />
                      </fieldset>
                      <fieldset className='Fieldset'>
                        <label className='Label' htmlFor='maxHeight'>
                          Max. height
                        </label>
                        <input className='Input' id='maxHeight' defaultValue='none' />
                      </fieldset>
                    </div>

                    <Popover.Arrow className='PopoverArrow' />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </fieldset>

            <fieldset className='relative w-full'>
              <Popover.Root>
                <Popover.Trigger asChild className=''>
                  <div className='z-[2] absolute top-0 bottom-0 flex items-center px-2 text-[12px]'>
                    <div className='w-5 h-5 aspect-square rounded bg-red-400'></div>
                  </div>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className='PopoverContent'>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <HexAlphaColorPicker />
                    </div>

                    <Popover.Arrow className='PopoverArrow' />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>

              <input
                value={'#ffffff'}
                className='block leading-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none pl-[34px] text-sm p-2 w-full border border-[#e6e6e6] rounded-lg'
              />
            </fieldset>
          </div>
        </div>
      </aside>

      <div className='col-span-1'>{/* <Blink stylePreset='x-dark' /> */}</div>
    </main>
  )
}
