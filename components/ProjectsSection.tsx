"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
    return (
        <section className="bg-background py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
                        03 / Projects
                    </span>
                    <h2
                        className="font-playfair font-black text-charcoal leading-tight"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                    >
                        Work I'm proud of.<br />
                        <span className="text-coral italic">Thinking made visible.</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -6 }}
                            className="group bg-white border border-surface p-8 relative overflow-hidden cursor-default"
                        >
                            {/* Big number watermark */}
                            <span
                                className="absolute top-4 right-6 font-playfair font-black text-8xl leading-none pointer-events-none select-none transition-colors duration-300"
                                style={{ color: `${project.color}10` }}
                            >
                                {project.number}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <div
                                    className="w-10 h-1 mb-6"
                                    style={{ background: project.color }}
                                />
                                <h3 className="font-playfair font-bold text-2xl text-charcoal mb-1">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs tracking-wider mb-1"
                                    style={{ color: project.color }}>
                                    {project.supervisor}
                                </p>
                                <p className="font-mono text-xs text-charcoal/30 tracking-wider mb-5">
                                    {project.institution}
                                </p>
                                <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-xs px-2.5 py-1 border text-charcoal/40 border-charcoal/10"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom hover bar */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                style={{ background: project.color }}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
