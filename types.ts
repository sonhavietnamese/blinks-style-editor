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
