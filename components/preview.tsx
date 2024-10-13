import { usePreview } from "@/hooks/use-preview"
import EditorBlinksButtons from "./preview-blinks-buttons"
import EditorBlinksForm from "./preview-blinks-form"
import EditorBlinksInputs from "./preview-blinks-inputs"

export default function Preview() {
  const { enabled, setEnabled } = usePreview()

  return (
    <div className="flex justify-start">
      {enabled.buttons && (
        <div className="w-[350px] scale-90">
          <EditorBlinksButtons />
        </div>
      )}

      {enabled.inputs && (
        <div className="w-[350px] scale-90">
          <EditorBlinksInputs />
        </div>
      )}

      {enabled.forms && (
        <div className="w-[350px] scale-90">
          <EditorBlinksForm />
        </div>
      )}

      {/* <div className="w-[750px] max-w-[350px]">
    <EditorMiniblinkInputs />
    <EditorMiniblinkForm />
    <EditorMiniblinkButtons />
  </div> */}
    </div>
  )
}
