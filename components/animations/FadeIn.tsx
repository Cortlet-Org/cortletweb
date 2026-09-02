"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    className?: string;
    once?: boolean;
}

export function FadeIn({
                           children,
                           delay = 0,
                           duration = 0.6,
                           y = 16,
                           className,
                           once = true,
                       }: FadeInProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once,
                amount: 0.2,
            }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}