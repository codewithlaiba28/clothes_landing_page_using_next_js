"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                        hidden: { opacity: 0 }
                    }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
                >
                    {/* Brand */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tight">BRAND.</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Essential elegance for the modern minimalist.
                            Sustainable, timeless, and crafted to last.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white hover:text-accent hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-accent hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-accent hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Shop */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h4 className="font-bold mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white hover:pl-2 transition-all duration-300">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Best Sellers</Link></li>
                            <li><Link href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Clothing</Link></li>
                            <li><Link href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Accessories</Link></li>
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white hover:pl-2 transition-all duration-300">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Sustainability</Link></li>
                            <li><Link href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Our Stores</Link></li>
                            <li><Link href="#" className="hover:text-white hover:pl-2 transition-all duration-300">Careers</Link></li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h4 className="font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-b border-gray-600 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-gray-600"
                            />
                            <Button className="w-full bg-white text-black hover:bg-gray-200 mt-2 rounded-none hover:scale-105 transition-transform duration-300">
                                Subscribe
                            </Button>
                        </form>
                    </motion.div>
                </motion.div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>&copy; 2024 Brand Name. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
