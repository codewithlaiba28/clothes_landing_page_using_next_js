"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-background flex items-center">
            <div className="container mx-auto px-4 md:px-6 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center z-10 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-primary">
                                ESSENTIAL <br />
                                ELEGANCE
                            </h1>
                            <p className="text-lg md:text-xl text-muted max-w-md mb-8 font-light leading-relaxed">
                                Timeless silhouettes crafted from premium sustainable materials.
                                Designed for the modern minimalist.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-primary text-gray-800 hover:bg-primary/90 rounded-none px-8">
                                    Shop Collection
                                </Button>
                                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 rounded-none px-8 group">
                                    Explore Lookbook <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[50vh] lg:h-full w-full order-1 lg:order-2 bg-secondary/50">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            {/* Placeholder for Hero Image */}
                            <Image src="/Hero-image.png" alt="Hero Image" fill className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
