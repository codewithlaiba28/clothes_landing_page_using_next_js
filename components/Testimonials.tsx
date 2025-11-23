"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Fashion Editor",
        quote: "The quality is simply outstanding. It's rare to find a brand that balances aesthetics and comfort so perfectly.",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Architect",
        quote: "Minimalism at its finest. The cuts are precise, the fabrics are luxurious, and the fit is impeccable and entire.",
    },
    {
        id: 3,
        name: "Emma Wilson",
        role: "Creative Director",
        quote: "I've built my entire capsule wardrobe around these pieces. They are versatile, timeless, and effortlessly chic.",
    },
];

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-secondary p-8 md:p-10"
        >
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-primary">
                "{testimonial.quote}"
            </blockquote>

            <div>
                <cite className="not-italic font-medium text-primary block mb-1">
                    {testimonial.name}
                </cite>
                <span className="text-sm text-muted uppercase tracking-wider">
                    {testimonial.role}
                </span>
            </div>
        </motion.div>
    );
}

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
