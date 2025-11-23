"use client";

import { useState, useEffect } from "react";

export function useScrollPosition(): number {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
}
