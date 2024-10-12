import Buttons from "./configurable/buttons"
import Container from "./configurable/container"
import Inputs from "./configurable/inputs"
import Texts from "./configurable/texts"

export default function General() {
  return (
    <>
      <div className="flex items-center gap-x-1.5 text-sm">
        <h2>General</h2>
      </div>

      <Container />

      <Buttons />
      <Inputs />
      <Texts />
    </>
  )
}
