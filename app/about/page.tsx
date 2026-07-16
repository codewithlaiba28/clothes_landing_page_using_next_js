"use client";

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="pt-32 pb-24 px-4 md:px-6">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    className="container mx-auto max-w-5xl"
                >
                    <motion.h1 
                        variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-8 text-center"
                    >
                        Our Story
                    </motion.h1>
                    <motion.div 
                        variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
                        className="relative w-full aspect-[21/9] mb-12 overflow-hidden rounded-md"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }} className="w-full h-full relative cursor-pointer">
                            <Image
                                src="/images/brand-story.webp"
                                alt="Brand Story"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                            <h2 className="text-3xl font-semibold mb-6 text-primary">Crafting Elegance Since 2010</h2>
                            <p className="text-muted leading-relaxed text-lg mb-6">
                                We believe in the power of minimalism and sustainable fashion. Every piece we design is an expression of our core philosophy: that true elegance doesn't need to shout to be noticed.
                            </p>
                            <p className="text-muted leading-relaxed text-lg">
                                Our journey began in a small studio with a simple goal: to create clothes that feel as good as they look. Today, we work with artisans around the world to bring our vision to life.
                            </p>
                        </motion.div>
                        <motion.div 
                            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                            className="bg-secondary/50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold mb-4">Our Values</h3>
                            <ul className="space-y-4">
                                {[
                                    { title: "Sustainability", desc: "We source eco-friendly materials to minimize our environmental footprint." },
                                    { title: "Quality", desc: "Master craftsmanship ensures our pieces last a lifetime." },
                                    { title: "Transparency", desc: "From farm to closet, we trace every step of our supply chain." }
                                ].map((val, i) => (
                                    <motion.li 
                                        key={i}
                                        whileHover={{ x: 10, color: "var(--primary)" }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="cursor-default"
                                    >
                                        <strong className="block text-primary">{val.title}</strong>
                                        <span className="text-muted"> {val.desc}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
            <Footer />
        </main>
    )
}