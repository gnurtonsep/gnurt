import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * ========== Define type ==========
 */
type DropdownSectionProps = {
    title: string;
    children: ReactNode;
    className?: string;
};

const DropdownSection = ({
    children,
    title,
    className,
}: DropdownSectionProps) => {
    return (
        <div data-slots="section" className={twMerge("space-y-1", className)}>
            <span
                className={twMerge(
                    "block first-letter:uppercase font-medium text-xs",
                    "focus:outline-1 focus:outline-gray-500"
                )}
            >
                {title}
            </span>
            {children}
        </div>
    );
};

export default DropdownSection;
