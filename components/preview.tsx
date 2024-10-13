import { usePreview } from "@/hooks/use-preview"
import { cn } from "@/libs/utils"
import { useMemo } from "react"
import EditorBlinksButtons from "./preview-blinks-buttons"
import EditorBlinksForm from "./preview-blinks-form"
import EditorBlinksInputs from "./preview-blinks-inputs"
import EditorMiniblinkButtons from "./preview-miniblink-buttons"
import EditorMiniblinkForm from "./preview-miniblink-form"
import EditorMiniblinkInputs from "./preview-miniblink-inputs"

export default function Preview() {
  const { enabled, blinkStyleEnabled } = usePreview()
  const gridCols = useMemo(
    () =>
      Object.keys(enabled).filter(
        (key) =>
          enabled[key as keyof typeof enabled] === true && key !== "texts",
      ).length,
    [enabled],
  )

  return (
    <div
      className={cn(
        `grid w-fit grid-rows-[min-content_1fr] justify-start overflow-auto`,
        gridCols === 3
          ? "grid-cols-3"
          : gridCols === 2
            ? "grid-cols-2"
            : "grid-cols-1",
      )}
    >
      {blinkStyleEnabled.blinks && (
        <>
          {enabled.buttons && (
            <div className="col-span-1 row-span-1 w-[340px] scale-[.8]">
              <EditorBlinksButtons />
            </div>
          )}

          {enabled.inputs && (
            <div className="col-span-1 row-span-1 w-[340px] scale-[.8]">
              <EditorBlinksInputs />
            </div>
          )}

          {enabled.forms && (
            <div className="col-span-1 row-span-1 w-[340px] scale-[.8]">
              <EditorBlinksForm />
            </div>
          )}
        </>
      )}

      {blinkStyleEnabled.miniblinks && (
        <>
          {enabled.buttons && (
            <div className="col-span-1 row-span-1 row-start-2 w-[340px] scale-[.8]">
              <EditorMiniblinkButtons />
            </div>
          )}

          {enabled.inputs && (
            <div className="col-span-1 row-span-1 row-start-2 w-[340px] scale-[.8]">
              <EditorMiniblinkInputs />
            </div>
          )}

          {enabled.forms && (
            <div className="col-span-1 row-span-1 row-start-2 w-[340px] scale-[.8]">
              <EditorMiniblinkForm />
            </div>
          )}
        </>
      )}
    </div>
  )
}
