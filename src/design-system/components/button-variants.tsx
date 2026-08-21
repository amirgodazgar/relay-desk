import { cva, VariantProps } from "class-variance-authority";

export type ButtonVariants = VariantProps<typeof variants>;

export const variants = cva(
  ["text-body-default rounded-sm align-baseline, hover:cursor-pointer"],
  {
    variants: {
      variant: {
        primary: ["bg-action-primary-default text-text-inverse"],
        context: ["bg-action-context-default"],
        neutral: ["bg-action-neutral-default"],
        outline: [""],
        danger: ["bg-action-danger-default"],
      },
      size: {
        xs: ["py-0 px-1 text-body-small"],
        sm: ["py-1 px-2"],
        base: ["py-2 px-3"],
        lg: ["py-4 px-5"],
        xl: ["py-5 px-6"],
      },
      state: {
        default: [""],
        hover: ["bg-action-primary-hover"],
        pressed: [""],
        focus: [""],
        disabled: [""],
        loading: [""],
      },
      leadingIcon: {
        false: null,
        true: [""],
      },
      trailingIcon: {
        false: null,
        true: [""],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
      state: "default",
      leadingIcon: false,
      trailingIcon: false,
    },
  },
);
