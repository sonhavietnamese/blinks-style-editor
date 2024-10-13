import Buttons from "@/components/setting/buttons"
import Container from "@/components/setting/container"
import Forms from "@/components/setting/forms"
import Inputs from "@/components/setting/inputs"
import Texts from "@/components/setting/texts"
import { usePreview } from "@/hooks/use-preview"

export default function Settings() {
  const { enabled, setEnabled } = usePreview()

  return (
    <>
      <div className="flex items-center gap-x-1.5 text-sm">
        <h2>Settings</h2>
      </div>

      <Container />
      <Buttons
        enabled={enabled.buttons}
        setEnabled={(value) => setEnabled("buttons", value)}
      />
      <Texts
        enabled={enabled.texts}
        setEnabled={(value) => setEnabled("texts", value)}
      />
      <Inputs
        enabled={enabled.inputs}
        setEnabled={(value) => setEnabled("inputs", value)}
      />
      <Forms
        enabled={enabled.forms}
        setEnabled={(value) => setEnabled("forms", value)}
      />
    </>
  )
}
