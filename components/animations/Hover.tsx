"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverProps {
    children: ReactNode;
    className?: string;
    scale?: number;
    y?: number;
}

export function Hover({
                          children,
                          className,
                          scale = 1.02,
                          y = -2,
                      }: HoverProps) {
    return (
        <motion.div
            whileHover={{
                scale,
                y,
            }}
            transition={{
                type: "spring",
                stiffness: 320,
                damping: 24,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}