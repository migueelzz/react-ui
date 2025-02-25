import { ComponentProps, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const textVariants = tv({
  base: [
    ""
  ],

  variants: {
    variant: {
      default: "",
    },

    size: {
      lg: "text-lg",
      md: "text-md",
      base: "text-base",
      sm: "text-sm",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "base",
  },
});

export type TextProps = ComponentProps<"span"> &
  VariantProps<typeof textVariants>;

export const Text = forwardRef<HTMLSpanElement, TextProps> (({
  className,
  variant,
  size,
  ...props
}: TextProps) => {
  return (
    <span 
      className={textVariants({ variant, size, className })}
      {...props}
      />
  );
});

Text.displayName = 'Text'
