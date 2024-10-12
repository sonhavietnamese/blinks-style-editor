import {
  AbstractActionComponent,
  Action,
  type BaseBlinkLayoutProps,
  BlinkContainer,
  type BlinkContainerProps,
} from "@dialectlabs/blinks-core"
import { type ComponentType, useCallback } from "react"
import { useIsolatedLayoutPropNormalizer } from "./internal/hooks/useIsolatedLayoutPropNormalizer"
import { IsolatedBlinkLayout } from "./layouts/IsolatedBlinkLayout"
import type { StylePreset } from "./types"

export interface MiniblinkProps
  extends Omit<BlinkContainerProps, "Layout" | "selector" | "securityLevel"> {
  _Layout?: ComponentType<
    BaseBlinkLayoutProps & {
      stylePreset?: StylePreset
    }
  >
  stylePreset?: StylePreset
  selector: (currentAction: Action) => AbstractActionComponent | null
}

export const Miniblink = ({
  _Layout: Layout = NormalizedIsolatedBlinkLayout,
  stylePreset,
  ...props
}: MiniblinkProps) => {
  const LayoutWithPreset = useCallback(
    (props: BaseBlinkLayoutProps) => (
      <Layout {...props} stylePreset={stylePreset} />
    ),
    [Layout, stylePreset],
  )

  return (
    <BlinkContainer {...props} securityLevel="all" Layout={LayoutWithPreset} />
  )
}

export const NormalizedIsolatedBlinkLayout = (
  props: BaseBlinkLayoutProps & {
    stylePreset?: StylePreset
  },
) => {
  const normalizedProps = useIsolatedLayoutPropNormalizer(props)

  if (!normalizedProps) {
    console.warn(
      "[@dialectlabs/blinks] No `selector` prop provided for Miniblink",
    )
    return null
  }

  return <IsolatedBlinkLayout {...normalizedProps} />
}
