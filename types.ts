export enum Tab {
  General = "general",
  Code = "code",
  Color = "color",
}

export type TabItem = {
  id: Tab
  label: string
  index: number
  icon: JSX.Element
}
