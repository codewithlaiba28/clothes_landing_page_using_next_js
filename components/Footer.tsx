"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tight">BRAND.</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Essential elegance for the modern minimalist.
                            Sustainable, timeless, and crafted to last.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white hover:text-accent transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white hover:text-accent transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-bold mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Clothing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sustainability</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Our Stores</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
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
                            <Button className="w-full bg-white text-black hover:bg-gray-200 mt-2 rounded-none">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>

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
