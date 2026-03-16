"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section className="bg-background py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
                        02 / Where I've Worked
                    </span>
                    <h2 className="font-playfair font-black text-charcoal leading-tight"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                        Internships that felt<br />
                        <span className="text-coral italic">nothing like internships.</span>
                    </h2>
                </motion.div>

                {/* Experience Cards */}
                <div className="flex flex-col gap-6">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ x: 6 }}
                            className="group bg-white border border-surface rounded-none p-8 relative overflow-hidden cursor-default"
                            style={{ borderLeft: `4px solid ${exp.color}` }}
                        >

                            {/* Hover background */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(135deg, ${exp.color}06 0%, transparent 60%)` }}
                            />

                            {/* Card Content */}
                            <div className="relative z-10">

                                {/* Header Row */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-playfair font-bold text-2xl text-charcoal">
                                                {exp.company}
                                            </h3>
                                            {exp.website !== "#" && (
                                                <a
                                                    href={exp.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-charcoal/30 hover:text-coral transition-colors"
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                        <p className="font-mono text-xs tracking-wider text-coral mt-1">
                                            {exp.role}
                                        </p>
                                    </div>
                                    <span className="font-mono text-xs tracking-widest text-charcoal/40 whitespace-nowrap pt-1">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Context */}
                                <p className="text-charcoal/50 text-sm italic mb-5 font-light">
                                    {exp.context}
                                </p>

                                {/* Bullets */}
                                <ul className="flex flex-col gap-2 mb-6">
                                    {exp.bullets.map((bullet, j) => (
                                        <li key={j} className="flex gap-3 text-sm text-charcoal/70 leading-relaxed">
                                            <span className="text-coral mt-1.5 shrink-0 text-xs">▸</span>
                                            <span dangerouslySetInnerHTML={{ __html: bullet }} />
                                        </li>
                                    ))}
                                </ul>

                                {/* Footer Row */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="font-mono text-xs tracking-wide px-2.5 py-1 border text-charcoal/50 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-colors"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Proof Link */}
                                    <a
                                        href={exp.proofUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-coral hover:gap-2.5 transition-all group/link shrink-0"
                                    >
                                        {exp.proofLabel}
                                        <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
