import { ComponentProps } from "react";

import { ButtonVariants, variants } from "./button-variants";

type ButtonProps = ComponentProps<"button"> & ButtonVariants;

export const Button = ({
  variant,
  size,
  state,
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={variants({
        variant,
        state,
        size,
        leadingIcon,
        trailingIcon,
        className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
