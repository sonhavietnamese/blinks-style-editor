import { ButtonConfig } from "@/hooks/use-button-config"
import { BaseButtonProps } from "@/components/blinks-ui-0.13.1/internal/inputs/types"

export const GENERATOR: Record<ButtonConfig, BaseButtonProps> = {
  [ButtonConfig.Normal]: {
    text: "Normal",
    loading: false,
    variant: "default",
    disabled: false,
    ctaType: "button",
    onClick: () => {},
  },
  [ButtonConfig.Error]: {
    text: "Error",
    loading: false,
    variant: "error",
    disabled: false,
    ctaType: "button",
    onClick: () => {},
  },
  [ButtonConfig.Disabled]: {
    text: "Disabled",
    loading: false,
    variant: "default",
    disabled: true,
    ctaType: "button",
    onClick: () => {},
  },
  [ButtonConfig.Success]: {
    text: "Success",
    loading: false,
    variant: "success",
    disabled: false,
    ctaType: "button",
    onClick: () => {},
  },
  [ButtonConfig.Loading]: {
    text: "Loading",
    loading: true,
    variant: "default",
    disabled: false,
    ctaType: "button",
    onClick: () => {},
  },
  [ButtonConfig.Long]: {
    text: "This is a long content",
    loading: false,
    variant: "default",
    disabled: false,
    ctaType: "button",
    onClick: () => {},
  },
  [ButtonConfig.Link]: {
    text: "Link",
    loading: false,
    variant: "default",
    disabled: false,
    ctaType: "link",
    onClick: () => {},
  },
}
