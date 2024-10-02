import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * ========== Define type ==========
 */
type DropdownSectionProps = {
    title: string;
    children: ReactNode;
};

const DropdownSection = ({ children, title }: DropdownSectionProps) => {
    return (
        <div className={twMerge("space-y-1")}>
            <span
                className={twMerge(
                    "block first-letter:uppercase font-medium text-xs"
                )}
            >
                {title}
            </span>
            <ul>{children}</ul>
        </div>
    );
};

export default DropdownSection;
