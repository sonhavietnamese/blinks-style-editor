import { ROOT_VARIABLES, VARIABLES } from "@/constants"

export enum Tab {
  General = "general",
  Code = "code",
  Color = "color",
  Settings = "settings",
}

export type TabItem = {
  id: Tab
  label: string
  index: number
  icon: JSX.Element
}

export type Shadow = {
  x: number
  y: number
  blur: number
  spread: number
  color: string
}

export type RootVariable = (typeof ROOT_VARIABLES)[number]
export type Variable = (typeof VARIABLES)[number]
