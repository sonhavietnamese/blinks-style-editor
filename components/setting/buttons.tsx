import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"

export default function Buttons() {
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
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Buttons</h4>

        <div className="">
          <Toggle checked={isActive} onChange={setIsActive} />
        </div>
      </div>

      <section className="mt-2 space-y-1.5 opacity-100">
        <Checkbox
          id="error"
          label="Error Button"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="disabled"
          label="Disabled Button"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="success"
          label="Success Button"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="loading"
          label="Loading Button"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="long"
          label="Long Content Button"
          checked={true}
          onChange={() => {}}
        />
      </section>
    </>
  )
}
