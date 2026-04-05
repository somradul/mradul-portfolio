"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import EmbedCard from "@/components/EmbedCard";
import { writingMedia } from "@/data/writing";

export default function WritingSection() {
    return (
        <section className="bg-surface py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
                >
                    <div>
                        <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
                            06 / Writing
                        </span>
                        <h2
                            className="font-playfair font-black text-charcoal leading-tight"
                            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                        >
                            Things I think about.<br />
                            <span className="text-coral italic">Written down.</span>
                        </h2>
                    </div>
                    <a
                        href="/writing"
                        className="font-mono text-xs tracking-widest uppercase text-charcoal/50 hover:text-coral transition-colors flex items-center gap-2 shrink-0"
                    >
                        See all insights
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>

                {/* Cards Grid — Mosaic Style */}
                <div className="flex flex-wrap gap-8 justify-center items-start">
                    {writingMedia.slice(0, 2).map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="shrink-0"
                        >
                            <EmbedCard url={post.url} type={post.type as "linkedin" | "instagram"} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
