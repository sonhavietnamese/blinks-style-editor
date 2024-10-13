import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"

interface ToggleProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export default function Toggle({ checked, onChange }: ToggleProps) {
  const toggleRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (checked) {
        gsap.fromTo(
          "#thumb",
          {
            left: 3,
          },
          {
            duration: 0.2,
            ease: "power2.out",
            left: 11,
          },
        )
      }

      if (!checked) {
        gsap.fromTo(
          "#thumb",
          {
            left: 11,
          },
          {
            duration: 0.2,
            ease: "power2.out",
            left: 3,
          },
        )
      }

      gsap.to(toggleRef.current, {
        duration: 0.2,
        ease: "power2.out",
        background: checked ? "#000" : "#e6e6e6",
      })
    },
    { scope: toggleRef, dependencies: [checked] },
  )

  return (
    <div
      ref={toggleRef}
      className="relative h-[0.875rem] w-6 cursor-pointer select-none justify-end rounded-full"
      onClick={() => onChange?.(!checked)}
    >
      <div
        id="thumb"
        className="absolute top-1/2 m-0 block h-[0.625rem] w-[0.625rem] -translate-y-1/2 rounded-full bg-[hsl(0,0%,100%)] p-0"
      ></div>
    </div>
  )
}
