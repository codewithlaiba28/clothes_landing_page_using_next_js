"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Gem } from "lucide-react";

const values = [
    {
        icon: Gem,
        title: "Premium Quality",
        description: "Hand-selected fabrics from the world's finest mills, ensuring lasting durability and comfort.",
    },
    {
        icon: Leaf,
        title: "Sustainable",
        description: "Ethically sourced materials and responsible production methods that respect our planet.",
    },
    {
        icon: ShieldCheck,
        title: "Timeless Design",
        description: "Classic silhouettes reimagined for the modern wardrobe, designed to transcend trends.",
    },
];

export function ValueProposition() {
    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="p-4 bg-white/15 rounded-full mb-2 shadow-sm">
                                <value.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                            <p className="text-muted leading-relaxed max-w-xs">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
