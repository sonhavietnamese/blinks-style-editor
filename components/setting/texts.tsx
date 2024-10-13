import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { cn } from "@/libs/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"

interface TextsProps {
  enabled: boolean
  setEnabled: (value: boolean) => void
}

export default function Texts({ enabled, setEnabled }: TextsProps) {
  const toggleRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useGSAP(
    () => {
      gsap.to("#thumb", {
        duration: 0.2,
        ease: "power2.out",
        left: isActive ? 15 : 3,
      })
      gsap.to(toggleRef.current, {
        duration: 0.2,
        ease: "power2.out",
        background: isActive ? "#000" : "#e6e6e6",
      })
    },
    { scope: toggleRef, dependencies: [isActive] },
  )

  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Text</h4>

        <div className="mr-1">
          <Toggle checked={enabled} onChange={setEnabled} />
        </div>
      </div>

      <section
        className={cn("mt-2 space-y-1.5 opacity-100", !enabled && "opacity-50")}
      >
        <Checkbox
          id="error"
          label="Error Text"
          checked={true}
          onChange={() => {}}
        />

        <Checkbox
          id="success"
          label="Success Text"
          checked={true}
          onChange={() => {}}
        />

        <Checkbox
          id="warning"
          label="Warning Text"
          checked={true}
          onChange={() => {}}
        />
      </section>
    </>
  )
}
