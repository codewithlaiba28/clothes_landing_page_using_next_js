"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setStatus("success");
        setEmail("");
    };

    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Get 10% off your first order + exclusive updates on new collections and drops.
                    </p>

                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 flex flex-col items-center gap-4"
                            >
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Welcome Aboard!</h3>
                                <p className="text-gray-300">Check your inbox for your discount code.</p>
                                <Button
                                    variant="outline"
                                    className="mt-4 border-white/20 text-white hover:bg-white/10"
                                    onClick={() => setStatus("idle")}
                                >
                                    Send another
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:border-accent focus:outline-none transition-colors text-white placeholder:text-gray-500"
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-accent text-white hover:bg-accent/90 rounded-full px-8"
                                    isLoading={status === "loading"}
                                    rightIcon={!status && <Send className="w-4 h-4" />}
                                >
                                    Subscribe
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    <p className="mt-6 text-sm text-gray-500">
                        By subscribing, you agree to our Privacy Policy and Terms of Service.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
