import { Fragment, ReactNode, useCallback } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "../Button";

import DropdownTrigger from "./DropdownTrigger";

/**
 * ========== Define type ==========
 */
type Item = {
    value: string;
    onClick?: () => void;
};

type SectionDropdownItem = {
    title: string;
    items: Item[];
};

type DropdownWithSectionProps = {
    withSection: true;
    lists: SectionDropdownItem[];
};

type DropdownPropsWithoutSection = {
    withSection?: false;
    lists: Item[];
};

type DropdownProps = {
    isDisabled?: boolean;
    textTrigger: string;
    customTrigger?: (onClick: () => void) => ReactNode;
} & (DropdownPropsWithoutSection | DropdownWithSectionProps);

const Dropdown = ({
    lists,
    textTrigger,
    customTrigger,
    isDisabled,
    withSection,
}: DropdownProps) => {
    /**
     * Handle events
     */
    const handleTriggerPress = useCallback(() => {
        if (isDisabled) return;
    }, []);

    return (
        <Fragment>
            <DropdownTrigger>
                {customTrigger ? (
                    customTrigger(handleTriggerPress)
                ) : (
                    <Button
                        text={textTrigger}
                        onClick={handleTriggerPress}
                        disabled={isDisabled}
                    />
                )}
            </DropdownTrigger>
        </Fragment>
    );
};

export default Dropdown;
