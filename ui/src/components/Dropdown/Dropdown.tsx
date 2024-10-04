import {
    Fragment,
    LegacyRef,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { Button } from "../Button";

import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import DropdownSection from "./DropdownSection";
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
    customTrigger?: (
        onClick: () => void,
        ref: LegacyRef<HTMLButtonElement> | undefined
    ) => ReactNode;
} & (DropdownPropsWithoutSection | DropdownWithSectionProps);

const Dropdown = ({
    lists,
    textTrigger,
    customTrigger,
    isDisabled,
    withSection,
}: DropdownProps) => {
    /**
     * State value in component
     */
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [position, setPosition] = useState({
        top: 0,
        left: 0,
    });

    /**
     * Define ref
     */
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    /**
     * Render the dropdown menu list
     */
    const renderMenu = useCallback(() => {
        if (withSection) {
            return (
                <Fragment>
                    {lists.map((list, index) => (
                        <DropdownSection key={index} title={list.title}>
                            <DropdownMenu>
                                {list.items.map((item, idx) => (
                                    <DropdownItem
                                        key={idx}
                                        onClick={() => {
                                            setIsOpen(false);
                                            item.onClick?.();
                                        }}
                                    >
                                        {item.value}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </DropdownSection>
                    ))}
                </Fragment>
            );
        }

        return (
            <Fragment>
                <DropdownMenu>
                    {lists.map((item, idx) => (
                        <DropdownItem
                            key={idx}
                            onClick={() => {
                                setIsOpen(false);
                                item.onClick?.();
                            }}
                        >
                            {item.value}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Fragment>
        );
    }, []);

    /**
     * Handle events
     */
    const handleTriggerPress = useCallback(() => {
        if (isDisabled) return;

        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + 8,
                left: rect.left,
            });
        }

        setIsOpen((prev) => !prev);
    }, [triggerRef.current]);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    const preventScroll = (e: Event) => {
        e.preventDefault();
    };

    /**
     * Listen event when window resize
     */
    useEffect(() => {
        const handleResize = () => {
            closeMenu();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [closeMenu]);

    /**
     * Listen event when scroll
     */
    useEffect(() => {
        if (isOpen) {
            // Chặn cuộn trên sự kiện wheel và touchmove
            window.addEventListener("wheel", preventScroll, {
                passive: false,
            });
            window.addEventListener("touchmove", preventScroll, {
                passive: false,
            });

            // Ngăn cuộn khi sử dụng bàn phím (các phím như Arrow hoặc Page Up/Down)
            window.addEventListener("keydown", (e) => {
                if (
                    [
                        "ArrowUp",
                        "ArrowDown",
                        "PageUp",
                        "PageDown",
                        "Space",
                    ].includes(e.code)
                ) {
                    preventScroll(e);
                }
            });
        } else {
            // Nếu menu đóng, cho phép cuộn lại
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventScroll);
        }

        // Cleanup khi component unmount hoặc khi menu đóng
        return () => {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventScroll);
        };
    }, [isOpen]);

    return (
        <Fragment>
            <DropdownTrigger>
                {customTrigger ? (
                    customTrigger(handleTriggerPress, triggerRef)
                ) : (
                    <Button
                        text={textTrigger}
                        onClick={handleTriggerPress}
                        disabled={isDisabled}
                        ref={triggerRef}
                    />
                )}
            </DropdownTrigger>
            {isOpen && (
                <motion.div
                    data-slot="base"
                    className={twMerge(
                        "absolute p-2 border border-gray-200 rounded-xl",
                        "min-w-52 max-w-2xl"
                    )}
                    style={{
                        top: position.top,
                        left: position.left,
                        zIndex: 1000,
                    }}
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0,
                    }}
                    transition={{
                        type: "spring",
                        duration: 0.2,
                    }}
                    tabIndex={-1}
                >
                    {renderMenu()}
                </motion.div>
            )}
        </Fragment>
    );
};

export default Dropdown;
