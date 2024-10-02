import { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * ========== Define type ==========
 */
type DropdownMenuProps = {
    className?: string;
    children: ReactNode;
};

const DropdownMenu = ({ children }: DropdownMenuProps) => {
    return (
        <motion.div
            data-slot="base"
            initial={{
                opacity: 0,
                scaleY: 0,
            }}
            animate={{
                opacity: 1,
                scaleY: 1,
            }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
            }}
        >
            {children}
        </motion.div>
    );
};

export default DropdownMenu;
