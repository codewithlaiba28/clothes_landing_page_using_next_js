"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function BrandStory() {
    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] bg-gray-200 w-full"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-muted">
                            <span className="text-xl tracking-widest uppercase">Brand Story Image</span>
                        </div>
                        <Image
                            src="/images/brand-story.webp"
                            alt="Our Atelier"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                            The Art of <br />
                            Subtle Luxury
                        </h2>
                        <div className="space-y-6 text-muted text-lg leading-relaxed font-light">
                            <p>
                                Founded on the belief that true luxury lies in simplicity, our brand
                                is a dedication to the essential. We strip away the unnecessary to
                                reveal the beauty of form, function, and fabric.
                            </p>
                            <p>
                                Every piece is thoughtfully designed in our atelier and crafted
                                by master artisans who share our commitment to quality and
                                sustainability. We create clothes that are meant to be lived in,
                                loved, and lasted.
                            </p>
                        </div>
                        <div className="mt-10">
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8">
                                Read Our Story
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
