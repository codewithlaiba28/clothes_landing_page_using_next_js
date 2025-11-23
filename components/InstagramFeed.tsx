"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";

const instagramImages = [
    { id: 1, src: "/images/insta-1.webp", alt: "Lifestyle Shot 1" },
    { id: 2, src: "/images/insta-5.jpg", alt: "Product Detail 1" },
    { id: 3, src: "/images/insta-3.webp", alt: "Model Pose 1" },
    { id: 4, src: "/images/insta-4.jpg", alt: "Lifestyle Shot 2" },
    { id: 5, src: "/images/insta-2.webp", alt: "Product Detail 2" },
    { id: 6, src: "/images/insta-6.jpg", alt: "Model Pose 2" },
];

export function InstagramFeed() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-2">Follow Us</h2>
                    <p className="text-gray-500">@antigravity_style</p>
                </div>
                <Button
                    variant="outline"
                    leftIcon={<Instagram className="w-4 h-4" />}
                    className="rounded-full"
                >
                    Follow on Instagram
                </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {instagramImages.map((image, index) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square group overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 z-0">
                            <span className="text-xs">Insta {index + 1}</span>
                        </div>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gray-400/0 opacity-0 transition-all duration-500 group-hover:bg-gray-400/20"></div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
