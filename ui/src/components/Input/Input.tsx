import {
    ComponentProps,
    forwardRef,
    memo,
    ReactNode,
    useCallback,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { twMerge } from "tailwind-merge";

import { FontSize, Rounded } from "@/utils";

/**
 * ========== Define type ==========
 */
type InputProps = Omit<ComponentProps<"input">, "size"> & {
    /* Display UI */
    size?: FontSize;
    radius?: Rounded;
    startContent?: ReactNode;
    endContent?: ReactNode;

    classNames: {
        base?: string;
        inputWrapper?: string;
        label?: string;
        input?: string;
        helperWrapper?: string;
    };

    /* Display content */
    label?: string;

    /* Display helper */
    description?: string;
    errorMessage?: string;
};

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            size = "sm",
            radius = "xl",
            startContent,
            endContent,
            label,
            classNames,
            description,
            errorMessage,
            ...props
        }: InputProps,
        ref
    ) => {
        // State values
        const [hasValue, setHasValue] = useState<boolean>(
            props.value ? true : false
        );

        // Create an internal ref to interact with the input element
        const internalRef = useRef<HTMLInputElement>(null);

        // Use useImperativeHandle to customize how the ref behaves
        useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

        // Handle label click by focusing the input element
        const handleClick = useCallback(() => {
            internalRef.current?.focus();
        }, []);

        return (
            <div
                data-slot="base"
                data-has-label={label ? true : undefined}
                data-has-value={hasValue ? true : undefined}
                className={twMerge("group", classNames?.base)}
                onClick={handleClick}
            >
                <div
                    className={twMerge(
                        "relative w-full",
                        "flex gap-1 items-center text-gray-400",
                        classNames?.inputWrapper
                    )}
                    data-slot="input-wrapper"
                >
                    {startContent && (
                        <div className="flex-shrink-0">{startContent}</div>
                    )}
                    <input
                        {...props}
                        className={twMerge(
                            "flex-1 px-3 pt-5 pb-2 bg-transparent",
                            "outline-none border-[1.75px] border-gray-400 focus:border-gray-600 focus:text-gray-600",
                            "peer",
                            classNames?.input
                        )}
                        data-has-value={hasValue ? true : undefined}
                        data-slot="input"
                        data-text={size}
                        data-radius={radius}
                        onChange={(e) => {
                            setHasValue(!!e.target.value);
                            props.onChange?.(e);
                        }}
                        ref={internalRef}
                    />
                    {label && (
                        <label
                            htmlFor={props.name}
                            className={twMerge(
                                "absolute transition-all",
                                "first-letter:uppercase cursor-text font-medium",
                                "peer-focus:text-gray-600",
                                props.placeholder
                                    ? "top-0 left-3 translate-y-[2px] !text-xs"
                                    : "top-1/2 left-3 -translate-y-1/2",
                                props.placeholder
                                    ? ""
                                    : "peer-focus:top-0 peer-focus:translate-y-[2px] peer-focus:!text-xs peer-data-[has-value=true]:top-0 peer-data-[has-value=true]:translate-y-[2px] peer-data-[has-value=true]:!text-xs",
                                classNames?.label
                            )}
                            data-slot="label"
                            data-text={size}
                        >
                            {props.required ? `${label} (*)` : label}
                        </label>
                    )}
                    {endContent && (
                        <div className="flex-shrink-0">{endContent}</div>
                    )}
                </div>
                {(description || errorMessage) && (
                    <div
                        data-slot="helper-wrapper"
                        className={twMerge("", classNames?.helperWrapper)}
                    >
                        {description && !errorMessage && (
                            <div className={twMerge("text-xs p-1")}>
                                {description}
                            </div>
                        )}
                        {errorMessage && (
                            <div
                                className={twMerge("text-xs text-red-600 p-1")}
                            >
                                {errorMessage}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
);

const Input = memo(InputComponent);

export default Input;
