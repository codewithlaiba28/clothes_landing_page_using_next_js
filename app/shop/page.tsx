"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const allProducts = [
    {
        id: 1,
        title: "Linen Blend Blazer",
        price: "$245",
        image: "/images/collection-5.jpg",
    },
    {
        id: 2,
        title: "Pleated Wide Trousers",
        price: "$180",
        image: "/images/collection-2.jpg",
    },
    {
        id: 3,
        title: "Cashmere Crewneck",
        price: "$320",
        image: "/images/collection-3.jpg",
    },
    {
        id: 4,
        title: "Structured Wool Coat",
        price: "$450",
        image: "/images/collection-4.webp",
    },
    {
        id: 5,
        title: "Silk Slip Dress",
        price: "$290",
        image: "/images/insta-5.jpg",
    },
    {
        id: 6,
        title: "Oversized Cotton Shirt",
        price: "$145",
        image: "/images/insta-3.webp",
    },
    {
        id: 7,
        title: "Tailored Vest",
        price: "$165",
        image: "/images/insta-1.webp",
    },
    {
        id: 8,
        title: "High-Waist Trousers",
        price: "$195",
        image: "/images/insta-2.webp",
    }
];

export default function Shop() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            
            <section className="pt-32 pb-24 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="mb-12">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-4"
                        >
                            Shop Collection
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-muted text-lg max-w-2xl"
                        >
                            Discover our complete collection of thoughtfully designed, sustainably crafted pieces for the modern wardrobe.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {allProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-3/4 overflow-hidden mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-primary">{product.title}</h3>
                                    <p className="text-muted text-sm mt-1">{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
