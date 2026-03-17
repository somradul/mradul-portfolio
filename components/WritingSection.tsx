"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { linkedinPosts } from "@/data/writing";

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
                        href="https://www.linkedin.com/in/mradul-awasthi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs tracking-widest uppercase text-charcoal/50 hover:text-coral transition-colors flex items-center gap-2 shrink-0"
                    >
                        See all on LinkedIn
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>

                {/* Cards Grid — Mosaic Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {linkedinPosts.map((post, i) => (
                        <motion.a
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group bg-white border border-charcoal/6 p-7 flex flex-col gap-4 cursor-pointer relative overflow-hidden"
                        >
                            {/* LinkedIn Badge */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {/* LinkedIn Logo */}
                                    <div className="w-7 h-7 bg-[#0A66C2] flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">in</span>
                                    </div>
                                    <span className="font-mono text-xs tracking-wider text-charcoal/40">
                                        LinkedIn Post
                                    </span>
                                </div>
                                <span className="font-mono text-xs text-charcoal/30">
                                    {post.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-playfair font-bold text-xl text-charcoal leading-snug group-hover:text-coral transition-colors">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-charcoal/55 text-sm leading-relaxed font-light flex-1">
                                {post.excerpt}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-2 border-t border-charcoal/6">
                                <div className="flex gap-2 flex-wrap">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-xs text-coral/70 bg-coral/6 px-2 py-0.5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-1.5 font-mono text-xs text-charcoal/30 group-hover:text-coral transition-colors">
                                    <span>{post.readTime}</span>
                                    <ArrowUpRight
                                        size={13}
                                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                    />
                                </div>
                            </div>

                            {/* Hover bottom line */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
}
