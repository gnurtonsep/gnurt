import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Color, FontSize } from "@/utils";

import {
    BUTTON_CONTAINED_COLOR,
    BUTTON_LIGHT_COLOR,
    BUTTON_OUTLINED_COLOR,
} from "./styles";

/**
 * ========== Define type ==========
 */
type ButtonVariant = "contained" | "light" | "outlined";

type ButtonTextTransform =
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "first-uppercase";

type ButtonProps = ComponentProps<"button"> & {
    /* Display UI */
    variant?: ButtonVariant;
    color?: Color;
    size?: FontSize;
    fullWidth?: boolean;

    /* Display content */
    text: string;
    textTransform?: ButtonTextTransform;

    /* Loading state */
    isLoading?: boolean;
    textIsLoading?: string;
};

const generateButtonTextTransform = (
    transform: ButtonTextTransform
): string => {
    switch (transform) {
        case "uppercase":
            return "uppercase";
        case "lowercase":
            return "lowercase";
        case "capitalize":
            return "capitalize";
        case "first-uppercase":
            return "first-letter:uppercase";
        default:
            return "first-letter:uppercase";
    }
};

const generateButtonColor = (variant: ButtonVariant, color: Color) => {
    switch (variant) {
        case "contained":
            return BUTTON_CONTAINED_COLOR[color];
        case "light":
            return BUTTON_LIGHT_COLOR[color];
        case "outlined":
            return BUTTON_OUTLINED_COLOR[color];
        default:
            return BUTTON_CONTAINED_COLOR[color];
    }
};

const Button = ({
    className,
    variant = "contained",
    size = "base",
    color = "gray",
    fullWidth,
    text,
    textTransform = "first-uppercase",
    isLoading,
    textIsLoading = "Loading",
    ...props
}: ButtonProps) => {
    /**
     * State variable
     */
    const [isPressed, setIsPressed] = useState<boolean | undefined>();

    return (
        <button
            {...props}
            className={twMerge(
                "inline-flex items-center justify-center gap-2 appearance-none outline-none transition-all",
                generateButtonTextTransform(textTransform),
                generateButtonColor(variant, color),
                "px-4 py-2 font-medium leading-none",
                "data-[pressed=true]:scale-90 rounded-lg",
                fullWidth ? "w-full" : "",
                "group",
                className
            )}
            disabled={(isLoading ? isLoading : undefined) || props.disabled}
            data-disable={isLoading ? isLoading : undefined}
            data-loading={isLoading ? isLoading : undefined}
            data-text={size}
            data-pressed={isPressed}
            onMouseDown={(e) => {
                setIsPressed(true);
                props.onMouseDown?.(e);
            }}
            onMouseUp={(e) => {
                setIsPressed(false);
                props.onMouseUp?.(e);
            }}
            onMouseLeave={(e) => {
                setIsPressed(false);
                props.onMouseLeave?.(e);
            }}
        >
            <span>{isLoading ? `${textIsLoading}...` : text}</span>
        </button>
    );
};

export default Button;
