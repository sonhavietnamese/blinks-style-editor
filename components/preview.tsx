import { usePreview } from "@/hooks/use-preview"
import EditorBlinksButtons from "./preview-blinks-buttons"
import EditorBlinksForm from "./preview-blinks-form"
import EditorBlinksInputs from "./preview-blinks-inputs"
import EditorMiniblinkInputs from "./preview-miniblink-inputs"
import EditorMiniblinkForm from "./preview-miniblink-form"
import EditorMiniblinkButtons from "./preview-miniblink-buttons"

export default function Preview() {
  const { enabled, blinkStyleEnabled } = usePreview()

  return (
    <div className="grid grid-cols-3 justify-start overflow-auto">
      {blinkStyleEnabled.blinks && (
        <>
          {enabled.buttons && (
            <div className="w-[340px] scale-[.8]">
              <EditorBlinksButtons />
            </div>
          )}

          {enabled.inputs && (
            <div className="w-[340px] scale-[.8]">
              <EditorBlinksInputs />
            </div>
          )}

          {enabled.forms && (
            <div className="w-[340px] scale-[.8]">
              <EditorBlinksForm />
            </div>
          )}
        </>
      )}

      {blinkStyleEnabled.miniblinks && (
        <>
          {enabled.buttons && (
            <div className="w-[340px] scale-[.8]">
              <EditorMiniblinkButtons />
            </div>
          )}

          {enabled.inputs && (
            <div className="w-[340px] scale-[.8]">
              <EditorMiniblinkInputs />
            </div>
          )}

          {enabled.forms && (
            <div className="w-[340px] scale-[.8]">
              <EditorMiniblinkForm />
            </div>
          )}
        </>
      )}
    </div>
  )
}
