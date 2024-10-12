"use client"

import Code from "@/components/_code"
import Color from "@/components/_color"
import General from "@/components/_general"
import Settings from "@/components/_settings"
import EditorBlinksButtons from "@/components/editor-blinks-buttons"
import EditorBlinksForm from "@/components/editor-blinks-form"
import EditorBlinksInputs from "@/components/editor-blinks-inputs"
import EditorMiniblinkButtons from "@/components/editor-miniblink-buttons"
import EditorMiniblinkForm from "@/components/editor-miniblink-form"
import EditorMiniblinkInputs from "@/components/editor-miniblink-inputs"
import Tabs from "@/components/tabs"
import { useTabs } from "@/hooks/use-tabs"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Home() {
  const { stack } = useTabs()
  const container = useRef<HTMLDivElement>(null)

  const currentTab = stack[stack.length - 1]
  const beforeTab = stack[stack.length - 2]
  const direction =
    currentTab && beforeTab ? Math.sign(currentTab.index - beforeTab.index) : 0

  useGSAP(
    () => {
      if (!beforeTab || !currentTab) return

      const animationProps = {
        duration: 0.2,
        ease: "power2.out",
      }

      if (currentTab.index > beforeTab.index) {
        gsap.fromTo(
          `#tab-${beforeTab.id}`,
          { left: 0, opacity: 1 },
          { ...animationProps, left: -256, opacity: 0 },
        )
        gsap.fromTo(
          `#tab-${currentTab.id}`,
          { left: 256, opacity: 0 },
          { ...animationProps, left: 0, opacity: 1 },
        )
      } else {
        gsap.fromTo(
          `#tab-${beforeTab.id}`,
          { left: 0, opacity: 1 },
          { ...animationProps, left: 256, opacity: 0 },
        )
        gsap.fromTo(
          `#tab-${currentTab.id}`,
          { left: -256, opacity: 0 },
          { ...animationProps, left: 0, opacity: 1 },
        )
      }
    },
    {
      scope: container,
      dependencies: [direction, stack, currentTab, beforeTab],
    },
  )

  return (
    <main className="bg-1/2 relative grid h-screen w-screen grid-cols-[18rem_1fr] overflow-hidden bg-[#f7f7f7] bg-dot bg-[length:20px_20px] p-4 text-[#373737]">
      <aside className="relative col-span-1 flex h-full w-full flex-col rounded-[12px] bg-[#fff] p-4 shadow-sm">
        <Tabs />
        <section
          ref={container}
          className="relative h-full w-full overflow-auto"
        >
          <div className="absolute inset-0 flex overflow-hidden">
            <div id="tab-general" className="absolute left-0 h-full w-[256px]">
              <General />
            </div>
            <div
              id="tab-code"
              className="absolute left-[256px] h-full w-[256px]"
            >
              <Code />
            </div>
            <div
              id="tab-color"
              className="absolute left-[256px] h-full w-[256px]"
            >
              <Color />
            </div>
            <div
              id="tab-settings"
              className="absolute left-[512px] h-full w-[256px]"
            >
              <Settings />
            </div>
          </div>
        </section>
      </aside>

      <section className="flex h-full w-full items-center justify-center gap-10 overflow-hidden">
        <div className="flex justify-start gap-10">
          <div className="w-[750px] max-w-[350px]">
            <EditorBlinksButtons />
          </div>
          <div className="w-[750px] max-w-[350px]">
            <EditorBlinksInputs />
          </div>
          <div className="w-[750px] max-w-[350px]">
            <EditorBlinksForm />
          </div>

          <div className="w-[750px] max-w-[350px]">
            <EditorMiniblinkInputs />
            <EditorMiniblinkForm />
            <EditorMiniblinkButtons />
          </div>
        </div>
      </section>
    </main>
  )
}
