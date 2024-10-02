import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * ========== Define type ==========
 */
type DropdownItemProps = {
    className?: string;
    children: ReactNode;
    onClick: () => void;
};

const DropdownItem = ({ children, onClick, className }: DropdownItemProps) => {
    return (
        <li
            className={twMerge(
                "flex gap-2 items-center px-2 py-1",
                "w-full h-full hover:bg-gray-400 dark:hover:bg-gray-700",
                className
            )}
            onClick={onClick}
        >
            {children}
        </li>
    );
};

export default DropdownItem;
