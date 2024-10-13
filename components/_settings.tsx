import Buttons from "@/components/setting/buttons"
import Container from "@/components/setting/container"
import Forms from "@/components/setting/forms"
import Inputs from "@/components/setting/inputs"
import Texts from "@/components/setting/texts"

export default function Settings() {
  return (
    <>
      <div className="flex items-center gap-x-1.5 text-sm">
        <h2>Settings</h2>
      </div>

      <Container />
      <Buttons />
      <Texts />
      <Inputs />
      <Forms />
    </>
  )
}
