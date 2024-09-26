import { ComponentProps, MouseEvent, useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Color } from "@/utils";

/**
 * ========== Define type ==========
 */
type ButtonTextTransform =
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "first-uppercase";

type ButtonProps = ComponentProps<"button"> & {
    /* Display UI */
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

const Button = ({
    className,
    fullWidth,
    text,
    textTransform = "first-uppercase",
    isLoading,
    textIsLoading,
    onClick,
    ...props
}: ButtonProps) => {
    /**
     * State variable
     */
    const [isPressed, setIsPressed] = useState<boolean | undefined>();

    /* Define handle press */
    const handlePress = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            setIsPressed(true);

            if (onClick) {
                onClick(event);
            }

            setIsPressed(undefined);
        },
        [onClick]
    );

    return (
        <button
            {...props}
            className={twMerge(
                "inline-flex items-center justify-center gap-2 appearance-none outline-none transition-all",
                generateButtonTextTransform(textTransform),
                "focus-within:scale-90",
                fullWidth ? "w-full" : "",
                "group",
                className
            )}
            disabled={(isLoading ? isLoading : undefined) || props.disabled}
            data-disable={isLoading ? isLoading : undefined}
            data-loading={isLoading ? isLoading : undefined}
            data-pressed={isPressed}
            onClick={handlePress}
        >
            <span>{isLoading ? `${textIsLoading}...` : text}</span>
        </button>
    );
};

export default Button;
