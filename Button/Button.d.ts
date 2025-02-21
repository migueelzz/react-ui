import { ComponentProps } from '../../node_modules/.pnpm/react@19.0.0/node_modules/react';
import { VariantProps } from 'tailwind-variants';
declare const buttonVariants: import('tailwind-variants').TVReturnType<{
    variant: {
        primary: string;
        secondary: string;
        ghost: string;
        outline: string;
        link: string;
        destructive: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, undefined, string[], import('tailwind-variants/dist/config.js').TVConfig<{
    variant: {
        primary: string;
        secondary: string;
        ghost: string;
        outline: string;
        link: string;
        destructive: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, {
    variant: {
        primary: string;
        secondary: string;
        ghost: string;
        outline: string;
        link: string;
        destructive: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}>, {
    variant: {
        primary: string;
        secondary: string;
        ghost: string;
        outline: string;
        link: string;
        destructive: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, undefined, import('tailwind-variants').TVReturnType<{
    variant: {
        primary: string;
        secondary: string;
        ghost: string;
        outline: string;
        link: string;
        destructive: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, undefined, string[], import('tailwind-variants/dist/config.js').TVConfig<{
    variant: {
        primary: string;
        secondary: string;
        ghost: string;
        outline: string;
        link: string;
        destructive: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, {
    variant: {
        primary: string;
        secondary: string;
        ghost: string;
        outline: string;
        link: string;
        destructive: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}>, unknown, unknown, undefined>>;
export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;
export declare const Button: import('../../node_modules/.pnpm/react@19.0.0/node_modules/react').ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import('../../node_modules/.pnpm/react@19.0.0/node_modules/react').RefAttributes<HTMLButtonElement>>;
export {};
