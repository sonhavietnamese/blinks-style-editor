import { create } from "zustand"
import { Tab, TabItem } from "@/types"
import { Code, Palette, Sparkle, Settings } from "lucide-react"

export const TABS: TabItem[] = [
  { id: Tab.General, index: 0, label: "General", icon: <Sparkle size={14} /> },
  { id: Tab.Code, index: 1, label: "Code", icon: <Code size={14} /> },
  { id: Tab.Color, index: 2, label: "Schema", icon: <Palette size={14} /> },
  {
    id: Tab.Settings,
    index: 3,
    label: "Settings",
    icon: <Settings size={14} />,
  },
]

interface TabsState {
  activeTab: TabItem
  stack: TabItem[]
  pushTab: (tab: TabItem) => void
  popTab: (count?: number) => void
  setActiveTab: (tab: TabItem) => void
}

export const useTabs = create<TabsState>()((set) => ({
  activeTab: TABS[0],
  stack: [TABS[0]],
  pushTab: (tab) =>
    set((state) => {
      const newStack = [...state.stack, tab]
      return { stack: newStack.length > 3 ? newStack.slice(1) : newStack }
    }),
  popTab: (count = 1) =>
    set((state) => ({ stack: state.stack.slice(0, -count) })),
  setActiveTab: (tab) => set(() => ({ activeTab: tab })),
}))
