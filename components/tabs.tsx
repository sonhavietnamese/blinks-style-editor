import { TABS, useTabs } from "@/hooks/use-tabs"
import { cn } from "@/libs/utils"
import { TabItem } from "@/types"
import { useGSAP } from "@gsap/react"
import * as Tooltip from "@radix-ui/react-tooltip"
import gsap from "gsap"
import { useRef } from "react"

export default function Tabs() {
  const container = useRef<HTMLDivElement>(null)
  const { activeTab, setActiveTab, pushTab } = useTabs()

  useGSAP(
    () => {
      gsap.to(container.current, {
        duration: 0.2,
        ease: "power2.out",
        top: 4 + activeTab.index * 30,
      })
    },
    { scope: container, dependencies: [activeTab] },
  )

  const switchTab = (tab: TabItem) => {
    setActiveTab(tab)
    if (tab.id !== activeTab.id) {
      pushTab(tab)
    }
  }

  return (
    <nav className="absolute right-[-46px] top-0 flex w-[38px] flex-col rounded-[12px] bg-[#fff] p-1 shadow-sm">
      <div
        ref={container}
        className={cn("absolute h-[30px] w-[30px] rounded-lg bg-[#e6e6e6]/50")}
      ></div>

      {TABS.map((tab) => (
        <Tooltip.Provider key={tab.id}>
          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger
              className={cn(
                "relative flex w-fit items-center justify-center rounded-lg p-2",
              )}
              onClick={() => switchTab(tab)}
            >
              {tab.icon}
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="right"
                className="relative left-2 z-[99999999] m-[0.25rem_0.75rem] max-w-[220px] origin-left animate-content-enter rounded-[0.5rem] bg-[#fff] p-[0.35rem] text-xs text-[#2b2f43] shadow-[0_0_0_1px_#e6e6e6,_0_1px_4px_rgba(0,0,0,0.04)]"
              >
                <div className="ml-0.5 w-fit gap-0.5 pr-0.5">
                  <span className="text-black">{tab.label}</span>
                </div>

                <span className="absolute left-[1px] top-[-1px] origin-[0px_0px] translate-y-1/2 rotate-90 transform">
                  <div
                    className="relative rotate-180 before:absolute before:bottom-[-1px] before:left-0 before:right-0 before:z-30 before:h-px before:bg-white before:content-['']"
                    style={{ display: "block" }}
                  >
                    <svg
                      className="paint-order-stroke relative top-[1px] z-10 block fill-white stroke-[rgba(10,16,24,.05)] stroke-[2px]"
                      width="20"
                      height="9"
                      viewBox="0 0 20 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3148 6.73585L11.4591 1.55643C10.6689 0.71361 9.33109 0.713611 8.54094 1.55643L3.68524 6.73585C3.1594 7.29675 2.48842 7.6889 1.75666 7.87577C1.22159 8.0124 0.76709 8.44776 0.76709 9H19.2329C19.2329 8.44776 18.7784 8.0124 18.2434 7.87577C17.5116 7.6889 16.8406 7.29675 16.3148 6.73585Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </span>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </nav>
  )
}
