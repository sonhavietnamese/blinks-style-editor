"use client"

import Code from "@/components/_code"
import Color from "@/components/_color"
import General from "@/components/_general"
import Settings from "@/components/_settings"
import Preview from "@/components/preview"
import Tabs from "@/components/tabs"
import { useTabs } from "@/hooks/use-tabs"
import { ee } from "@/libs/listener"
import { ColorChangeEvent, NumberChangeEvent } from "@/types"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function Home() {
  const { stack } = useTabs()
  const container = useRef<HTMLDivElement>(null)
  const app = useRef<HTMLDivElement>(null)

  const currentTab = stack[stack.length - 1]
  const beforeTab = stack[stack.length - 2]
  const direction =
    currentTab && beforeTab ? Math.sign(currentTab.index - beforeTab.index) : 0

  useGSAP(
    () => {
      if (!beforeTab || !currentTab) return

      const animationProps = {
        duration: 0.3,
        ease: "power2.out",
      }

      if (currentTab.index > beforeTab.index) {
        gsap.fromTo(
          `#tab-${beforeTab.id}`,
          { left: 0, opacity: 1 },
          { ...animationProps, left: -500, opacity: 0 },
        )
        gsap.fromTo(
          `#tab-${currentTab.id}`,
          { left: 500, opacity: 0 },
          { ...animationProps, left: 0, opacity: 1 },
        )
      } else {
        gsap.fromTo(
          `#tab-${beforeTab.id}`,
          { left: 0, opacity: 1 },
          { ...animationProps, left: 500, opacity: 0 },
        )
        gsap.fromTo(
          `#tab-${currentTab.id}`,
          { left: -500, opacity: 0 },
          { ...animationProps, left: 0, opacity: 1 },
        )
      }

      if (currentTab.id === "code") {
        gsap.to(app.current, { width: "500px", ...animationProps })
      } else {
        gsap.to(app.current, { width: "18rem", ...animationProps })
      }
    },
    {
      scope: container,
      dependencies: [direction, stack, currentTab, beforeTab],
    },
  )

  useEffect(() => {
    ee.on("color-change", (data: ColorChangeEvent) => {
      document.documentElement.style.setProperty(
        data.variable.replace("--", "--r-"),
        data.color,
      )
    })
    ee.on("number-change", (data: NumberChangeEvent) => {
      document.documentElement.style.setProperty(
        data.variable.replace("--", "--r-"),
        `${data.value}${data.unit}`,
      )
    })
  }, [])

  return (
    <main className="bg-1/2 relative grid h-screen w-screen grid-cols-[min-content_1fr] overflow-hidden bg-[#f7f7f7] bg-dot bg-[length:20px_20px] p-4 text-[#373737]">
      <aside
        ref={app}
        className="relative col-span-1 flex h-full w-[18rem] flex-col rounded-[12px] bg-[#fff] p-4 shadow-sm"
      >
        <Tabs />
        <section
          ref={container}
          className="relative h-full w-full overflow-auto"
        >
          <div className="absolute inset-0 flex overflow-hidden">
            <div
              id="tab-general"
              className="absolute left-0 h-full w-[256px] overflow-y-auto"
            >
              <General />
            </div>
            <div
              id="tab-code"
              className="absolute left-[500px] h-full w-[468px] overflow-y-auto"
            >
              <Code />
            </div>
            <div
              id="tab-color"
              className="absolute left-[500px] h-full w-[256px] overflow-y-auto"
            >
              <Color />
            </div>
            <div
              id="tab-settings"
              className="absolute left-[500px] h-full w-[256px] overflow-y-auto"
            >
              <Settings />
            </div>
          </div>
        </section>
      </aside>

      <section className="flex h-full w-full justify-center gap-10 overflow-hidden">
        <Preview />
      </section>
    </main>
  )
}
