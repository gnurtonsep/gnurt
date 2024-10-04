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
            data-slots="menu-item"
            className={twMerge(
                "flex gap-2 items-center px-2 py-1",
                "w-full h-full hover:bg-gray-200 dark:hover:bg-gray-800",
                "rounded-lg cursor-pointer",
                className
            )}
            onClick={onClick}
            tabIndex={-1}
        >
            {children}
        </li>
    );
};

export default DropdownItem;
