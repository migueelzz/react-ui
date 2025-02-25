import { ComponentProps, forwardRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'rounded-lg font-medium outline-none transition cursor-pointer leading-6',
    'text-base',
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus:scale-[0.98] will-change-transform',
    'disabled:cursor-not-allowed',
  ],

  variants: {
    variant: {
      primary:
        'bg-primary text-white [&:not(:disabled)]:hover:bg-primary-dark dark:[&:not(:disabled)]:hover:bg-primary-dark disabled:opacity-70',
      secondary:
        'dark:bg-blue-base bg-blue-light text-white dark:[&:not(:disabled)]:hover:bg-blue-dark [&:not(:disabled)]:hover:bg-blue-base disabled:bg-blue-light/70',
      ghost:
        '[&:not(:disabled)]:hover:bg-zinc-200 dark:[&:not(:disabled)]:hover:bg-white/20 shadow-none text-zinc-700 dark:text-zinc-300 disabled:text-zinc-400 disabled:dark:text-zinc-600',
      outline:
        'border border-zinc-300 text-zinc-700 [&:not(:disabled)]:hover:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-300 dark:[&:not(:disabled)]:hover:bg-white/10',
      link: '[&:not(:disabled)]:hover:text-zinc-600 shadow-none text-zinc-500 dark:[&:not(:disabled)]:hover:text-zinc-400',
      destructive:
        'bg-rose-500 dark:bg-rose-600 text-white [&:not(:disabled)]:hover:bg-rose-600 dark:[&:not(:disabled)]:hover:hover:bg-rose-700 disabled:opacity-70',
    },

    size: {
      lg: 'p-4',
      md: 'px-3 py-2',
      sm: 'p-2',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<'button'> & 
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
