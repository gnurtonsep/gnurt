import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * ========== Define type ==========
 */
type DropdownMenuProps = {
    className?: string;
    children: ReactNode;
};

const DropdownMenu = ({ children, className }: DropdownMenuProps) => {
    return (
        <ul data-slots="menu" className={twMerge("", className)} tabIndex={-1}>
            {children}
        </ul>
    );
};

export default DropdownMenu;
