"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "bg-white/50 backdrop-blur-md py-4  text-gray-700" : "bg-transparent py-6 text-gray-500"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tight text-primary z-50">
                        BRAND.
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Shop", "Collections", "About", "Journal"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    isScrolled ? "text-primary hover:text-black" : "text-primary hover:text-primary/70"
                                )}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4 z-50">
                        <button className="p-2 hover:bg-accent/30 rounded-full transition-colors group">
                            <Search className="w-5 h-5 text-primary group-hover:text-primary" />
                        </button>
                        <button className="p-2 hover:bg-accent/30 rounded-full transition-colors relative group">
                            <ShoppingBag className="w-5 h-5 text-primary group-hover:text-primary" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                        </button>
                        <button
                            className="md:hidden p-2 hover:bg-accent/30 rounded-full transition-colors group"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5 text-primary group-hover:text-primary" /> : <Menu className="w-5 h-5 text-primary group-hover:text-primary" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {["Shop", "Collections", "About", "Journal", "Account"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-2xl font-medium text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
