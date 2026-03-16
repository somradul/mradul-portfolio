"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
    { number: 10000, suffix: "+", label: "Farmers Reached", prefix: "" },
    { number: 14, suffix: "L+", label: "Sponsorships Raised", prefix: "₹" },
    { number: 470, suffix: "+", label: "Teams Beaten", prefix: "" },
    { number: 2, suffix: "M+", label: "Social Media Impressions", prefix: "" },
];

function CountUp({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const steps = 60;
                    const increment = target / steps;
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 2000 / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString("en-IN")}{suffix}
        </span>
    );
}

export default function StatsBar() {
    return (
        <section className="bg-charcoal py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex flex-col items-center text-center gap-2"
                    >
                        <div className="font-playfair font-black text-4xl md:text-5xl text-coral">
                            <CountUp
                                target={stat.number}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                            />
                        </div>
                        <div className="font-mono text-xs tracking-widest uppercase text-white/40">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
