import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

/**
 * ========== Define type ==========
 */
type InputProps = ComponentProps<"input"> & {};

const Input = ({ ...props }: InputProps) => {
    return (
        <div data-slot="base" className={twMerge("group")}>
            <div data-slot="input-wrapper" className={twMerge("")}></div>
            <div data-slot="helper-wrapper" className={twMerge("")}></div>
        </div>
    );
};

export default Input;
