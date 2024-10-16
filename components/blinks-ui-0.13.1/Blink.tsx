import {
  type BaseBlinkLayoutProps,
  BlinkContainer,
  type BlinkContainerProps,
} from "@dialectlabs/blinks-core"
import { type ComponentType, useCallback } from "react"
import { useLayoutPropNormalizer } from "./internal/hooks/useLayoutPropNormalizer"
import { BaseBlinkLayout } from "./layouts/BaseBlinkLayout"
import type { StylePreset } from "./types"

export interface BlinkProps
  extends Omit<BlinkContainerProps, "Layout" | "selector"> {
  _Layout?: ComponentType<BaseBlinkLayoutProps & { stylePreset?: StylePreset }>
  stylePreset?: StylePreset
}

export const Blink = ({
  _Layout: Layout = NormalizedBaseBlinkLayout,
  stylePreset,
  ...props
}: BlinkProps) => {
  const LayoutWithPreset = useCallback(
    (props: BaseBlinkLayoutProps) => (
      <Layout {...props} stylePreset={stylePreset} />
    ),
    [Layout, stylePreset],
  )

  return (
    <BlinkContainer
      {...props}
      selector={undefined} // explicitly disabled, use `Miniblink` instead
      Layout={LayoutWithPreset}
    />
  )
}

export const NormalizedBaseBlinkLayout = (
  props: BaseBlinkLayoutProps & { stylePreset?: StylePreset },
) => {
  const normalizedProps = useLayoutPropNormalizer(props)

  return <BaseBlinkLayout {...normalizedProps} />
}
