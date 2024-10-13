import Checkbox from "@/components/checkbox"
import Toggle from "@/components/toggle"
import { useState } from "react"

export default function Inputs() {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className="mt-5 flex items-center justify-between leading-none">
        <h4 className="text-[12px] font-semibold text-[#000000]/70">Input</h4>

        <div className="">
          <Toggle checked={isActive} onChange={setIsActive} />
        </div>
      </div>
      <section className="mt-2 space-y-1.5 opacity-100">
        <Checkbox
          id="text"
          label="Text Input"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="number"
          label="Number Input"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="email"
          label="Email Input"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="date"
          label="Date Input"
          checked={true}
          onChange={() => {}}
        />
        <Checkbox
          id="radio"
          label="Radio Input"
          checked={true}
          onChange={() => {}}
        />
      </section>
    </>
  )
}
