"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Collection {
    id: number;
    title: string;
    price: string;
    image: string;
}

const collections: Collection[] = [
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
];

function CollectionCard({ collection, index }: { collection: Collection; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
        >
            <div className="relative aspect-3/4 overflow-hidden mb-4">

                <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-medium text-primary">{collection.title}</h3>
                    <p className="text-muted text-sm mt-1">{collection.price}</p>
                </div>
            </div>
        </motion.div>
    );
}

export function FeaturedCollections() {
    return (
        <section id="collections" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-primary"
                    >
                        Latest Arrivals
                    </motion.h2>

                    <Link href="/shop" className="hidden md:flex items-center text-sm font-medium text-primary hover:text-muted transition-colors">
                        View All <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {collections.map((collection, index) => (
                        <CollectionCard key={collection.id} collection={collection} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/shop" className="inline-flex items-center text-sm font-medium text-primary hover:text-muted transition-colors">
                        View All <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
