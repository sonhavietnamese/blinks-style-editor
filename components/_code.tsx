import { useTabs } from "@/hooks/use-tabs"
import { css } from "@codemirror/lang-css"
import { tags as t } from "@lezer/highlight"
import { createTheme } from "@uiw/codemirror-themes"
import CodeMirror from "@uiw/react-codemirror"
import { useEffect, useMemo, useState } from "react"
import { useCopyToClipboard } from "usehooks-ts"
import { ROOT_VARIABLES } from "@/constants"

export default function Code() {
  const [code, setCode] = useState(`.custom {
  --blink-bg-primary: #ffffff;
  --blink-bg-secondary: #f7f7f7;
  --blink-button: #499bea;
  --blink-button-disabled: #f0f3f4;
  --blink-button-hover: #428cd2;
  --blink-button-success: #00b1271a;
  --blink-icon-error: #f71a05;
  --blink-icon-error-hover: #ff402e;
  --blink-icon-primary: #949ca4;
  --blink-icon-primary-hover: #9da3ae;
  --blink-icon-warning: #ef6f08;
  --blink-icon-warning-hover: #ffbc6e;
  --blink-input-bg: #ffffff;
  --blink-input-bg-selected: #499bea;
  --blink-input-bg-disabled: #f0f3f4;
  --blink-input-stroke: #d1d9de;
  --blink-input-stroke-disabled: #f0f3f4;
  --blink-input-stroke-error: #ff402e;
  --blink-input-stroke-hover: #9da3ae;
  --blink-input-stroke-selected: #499bea;
  --blink-stroke-error: #ff9696;
  --blink-stroke-primary: #499bea;
  --blink-stroke-secondary: #d1d9de;
  --blink-stroke-warning: #ffbc6e;
  --blink-text-brand: #428cd2;
  --blink-text-button: #ffffff;
  --blink-text-button-disabled: #949ca4;
  --blink-text-button-success: #029923;
  --blink-text-error: #f71a05;
  --blink-text-error-hover: #ff402e;
  --blink-text-input: #101418;
  --blink-text-input-disabled: #9da3ae;
  --blink-text-input-placeholder: #949ca4;
  --blink-text-link: #949ca4;
  --blink-text-link-hover: #9da3ae;
  --blink-text-primary: #101418;
  --blink-text-secondary: #566470;
  --blink-text-success: #029923;
  --blink-text-warning: #d55f00;
  --blink-text-warning-hover: #ef6f08;
  --blink-transparent-error: #ff96961a;
  --blink-transparent-grey: #6e767d1a;
  --blink-transparent-warning: #ffbc6e1a;

  --blink-border-radius-rounded-lg: 0.25rem;
  --blink-border-radius-rounded-xl: 0.5rem;
  --blink-border-radius-rounded-2xl: 1.125rem;
  --blink-border-radius-rounded-button: 600rem;
  --blink-border-radius-rounded-input: 1.25rem;
  --blink-border-radius-rounded-input-standalone: 1.75rem;

  --blink-shadow-container: 0px 2px 8px 0px rgba(62, 177, 255, 0.22),
    0px 1px 48px 0px rgba(62, 177, 255, 0.24);
}`)

  const [copiedText, copy] = useCopyToClipboard()

  const handleCopy = () => () => {
    copy(code)
      .then(() => {
        console.log("Copied!", { code })
      })
      .catch((error) => {
        console.error("Failed to copy!", error)
      })
  }

  const { activeTab } = useTabs()

  const theme = useMemo(
    () =>
      createTheme({
        theme: "light",
        settings: {
          background: "#ffffff",
          backgroundImage: "",
          foreground: "#75baff",
          caret: "#5d00ff",
          selection: "#036dd626",
          selectionMatch: "#036dd626",
          lineHighlight: "#8a91991a",
          gutterBackground: "#fff",
          gutterForeground: "#8a919966",
        },
        styles: [
          { tag: t.comment, color: "#787b8099" },
          { tag: t.variableName, color: "#0080ff" },
          { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
          { tag: t.number, color: "#5c6166" },
          { tag: t.bool, color: "#5c6166" },
          { tag: t.null, color: "#5c6166" },
          { tag: t.keyword, color: "#5c6166" },
          { tag: t.operator, color: "#5c6166" },
          { tag: t.className, color: "#5c6166" },
          { tag: t.typeName, color: "#5c6166" },
          { tag: t.angleBracket, color: "#5c6166" },
          { tag: t.tagName, color: "#5c6166" },
          { tag: t.attributeName, color: "#5c6166" },
        ],
      }),
    [],
  )

  useEffect(() => {
    const values: Record<string, string> = {}
    ROOT_VARIABLES.forEach((variable) => {
      values[variable] = getComputedStyle(
        document.documentElement,
      ).getPropertyValue(variable)
    })

    setCode(createCode(ROOT_VARIABLES, values))
  }, [activeTab])

  const createCode = (variables: string[], values: Record<string, string>) => {
    return `.custom {\n${variables
      .map(
        (variable) =>
          `  ${variable.replace("--r-", "--")}: ${values[variable]};`,
      )
      .join("\n")}
}`
  }

  return (
    <>
      <div className="flex w-full items-center justify-between text-sm">
        <h2>Code</h2>

        <button
          onClick={handleCopy}
          className="flex items-center justify-center space-x-1 rounded-md bg-[#e6e6e6]/50 p-1 px-2 text-black/60 ease-in-out hover:bg-[#e6e6e6]/80"
        >
          <span className="text-xs">Copy</span>
        </button>
      </div>

      <section className="mt-2 flex flex-col gap-2">
        <div className="relative">
          <CodeMirror
            readOnly
            theme={theme}
            value={code}
            height="480px"
            className="rounded-lg text-[12px] active:outline-none"
            extensions={[css()]}
          />
        </div>
      </section>
    </>
  )
}
