import { Fragment, ReactNode } from "react";

/**
 * ========== Define type ==========
 */
type DropdownTriggerProps = {
    children: ReactNode;
};

const DropdownTrigger = ({ children }: DropdownTriggerProps) => {
    return <Fragment>{children}</Fragment>;
};

export default DropdownTrigger;
