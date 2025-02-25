import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const textInputVariants = tv({
  base: [
    "peer ps-9 rounded-lg",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring outline-none",
    "disabled:cursor-not-allowed",
  ],

  variants: {
    variant: {
      primary: "bg-input border",
    },

    size: {
      lg: "h-12",
      md: "h-10",
      sm: "h-8",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type TextInputProps = ComponentProps<"input"> &
  VariantProps<typeof textInputVariants> & {
    sufix?: ReactNode;
    type?: string;
  };

export function TextInput({ sufix, type, variant, size, className, ...props }: TextInputProps) {
  return (
    <div className="relative">
      {sufix && (
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm font-medium text-zinc-500 peer-disabled:opacity-50 dark:text-zinc-300">
          {sufix}
        </div>
      )}
      <input
        type={type}
        className={textInputVariants({ variant, size, className })}
        {...props}
      />
    </div>
  );
}
