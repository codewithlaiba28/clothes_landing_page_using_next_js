"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading = false,
            leftIcon,
            rightIcon,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const variants = {
            primary: "bg-primary text-secondary hover:bg-primary/90 shadow-sm",
            secondary: "bg-secondary text-primary hover:bg-secondary/90 shadow-sm",
            outline: "border border-primary text-primary hover:bg-primary hover:text-secondary",
            ghost: "hover:bg-primary/5 text-primary",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading || disabled}
                {...(props as HTMLMotionProps<"button">)}
            >
                <span className="flex items-center gap-2">
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    {!isLoading && leftIcon}
                    {children}
                    {!isLoading && rightIcon}
                </span>
            </motion.button>
        );
    }
);

Button.displayName = "Button";
