import { ComponentProps, ReactNode } from '../../node_modules/.pnpm/react@19.0.0/node_modules/react';
import { VariantProps } from 'tailwind-variants';
declare const textInputVariants: import('tailwind-variants').TVReturnType<{
    variant: {
        primary: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, undefined, string[], import('tailwind-variants/dist/config.js').TVConfig<{
    variant: {
        primary: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, {
    variant: {
        primary: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}>, {
    variant: {
        primary: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, undefined, import('tailwind-variants').TVReturnType<{
    variant: {
        primary: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, undefined, string[], import('tailwind-variants/dist/config.js').TVConfig<{
    variant: {
        primary: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}, {
    variant: {
        primary: string;
    };
    size: {
        lg: string;
        md: string;
        sm: string;
    };
}>, unknown, unknown, undefined>>;
type TextInputProps = ComponentProps<"input"> & VariantProps<typeof textInputVariants> & {
    sufix?: ReactNode;
    type?: string;
};
export declare function TextInput({ sufix, type, variant, size, className, ...props }: TextInputProps): import("react/jsx-runtime").JSX.Element;
export {};
