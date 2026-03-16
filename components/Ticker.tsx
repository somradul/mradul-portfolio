"use client";

import { motion } from "framer-motion";

const items = [
    "FarMart · Impact & ESG Fellow",
    "ExportDuniya · Research Intern",
    "Reliance Foundation Scholar",
    "Lawrence Law Forum · President",
    "Shri Ram Crisis Mania · National Winner",
    "The Electric Eel · Strategy Intern",
    "Littlewise · Founder's Office",
    "University of Delhi · BMS",
];

export default function Ticker() {
    return (
        <div className="w-full bg-charcoal py-4 overflow-hidden border-y border-white/5">
            <div className="flex">
                <motion.div
                    className="flex gap-12 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Render twice for seamless loop */}
                    {[...items, ...items].map((item, i) => (
                        <span
                            key={i}
                            className="font-mono text-xs tracking-widest uppercase text-white/50 flex items-center gap-12"
                        >
                            {item}
                            <span className="text-coral text-lg leading-none">✦</span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
