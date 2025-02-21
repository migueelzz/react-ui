import { ComponentProps, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const textVariants = tv({
  base: [
    "rounded-md font-medium outline-none transition cursor-pointer",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
    "disabled:cursor-not-allowed",
  ],

  variants: {
    variant: {
      default: "text-zinc-600 dark:text-zinc-300",
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
