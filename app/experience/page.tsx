"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background pt-24">

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">

        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span
            className="font-playfair font-black text-charcoal/[0.03] whitespace-nowrap"
            style={{ fontSize: "clamp(3rem, 12vw, 12rem)" }}
          >
            EXPERIENCE
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              02 / Where I&apos;ve Worked
            </span>
            <h1
              className="font-playfair font-black text-charcoal leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Internships that felt<br />
              <span className="text-coral italic">nothing like internships.</span>
            </h1>
            <p className="text-charcoal/50 text-lg max-w-xl font-light leading-relaxed">
              4 internships across agri value chains, cross-border e-commerce, ESG, and consumer markets. Each one taught me something no classroom could.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-charcoal/8"
          >
            {[
              { number: "4", label: "Internships" },
              { number: "14+", label: "Months of Experience" },
              { number: "10K+", label: "Farmers Reached" },
              { number: "5+", label: "Industries Covered" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-playfair font-black text-3xl text-coral">{stat.number}</div>
                <div className="font-mono text-xs tracking-widest uppercase text-charcoal/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">

          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-coral via-charcoal/10 to-transparent hidden md:block" />

            <div className="flex flex-col gap-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="md:pl-20 relative group"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-5 top-8 w-4 h-4 rounded-full border-2 border-background hidden md:block"
                    style={{ background: exp.color }}
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="bg-white border border-surface p-8 relative overflow-hidden"
                    style={{ borderLeft: `4px solid ${exp.color}` }}
                  >
                    {/* Hover bg */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(135deg, ${exp.color}06 0%, transparent 60%)` }}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-3">
                            {/* Logo placeholder */}
                            <div
                              className="w-8 h-8 flex items-center justify-center text-white font-bold text-xs font-mono"
                              style={{ background: exp.color }}
                            >
                              {exp.company[0]}
                            </div>
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
                                <ExternalLink size={15} />
                              </a>
                            )}
                          </div>
                          <p className="font-mono text-xs tracking-wider text-coral mt-1 ml-11">
                            {exp.role}
                          </p>
                        </div>
                        <span className="font-mono text-xs tracking-widest text-charcoal/40 whitespace-nowrap pt-1">
                          {exp.period}
                        </span>
                      </div>

                      {/* Context */}
                      <p className="text-charcoal/45 text-sm italic mb-5 ml-11 font-light">
                        {exp.context}
                      </p>

                      {/* Bullets */}
                      <ul className="flex flex-col gap-2.5 mb-6">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-3 text-sm text-charcoal/70 leading-relaxed">
                            <span className="mt-1.5 shrink-0 text-xs" style={{ color: exp.color }}>▸</span>
                            <span dangerouslySetInnerHTML={{ __html: bullet }} />
                          </li>
                        ))}
                      </ul>

                      {/* Footer */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-charcoal/6">
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-xs tracking-wide px-2.5 py-1 border text-charcoal/40 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={exp.proofUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-coral hover:gap-3 transition-all shrink-0 group/link"
                        >
                          {exp.proofLabel}
                          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 px-6 md:px-12 lg:px-24 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-playfair font-black text-white text-3xl mb-2">
              Want to know more?
            </h2>
            <p className="text-white/40 font-light">
              See my projects or get in touch directly.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="/projects">
              <motion.button
                whileHover={{ y: -2 }}
                className="border border-white/20 text-white font-mono text-xs tracking-widest uppercase px-6 py-3 hover:border-coral hover:text-coral transition-colors"
              >
                View Projects
              </motion.button>
            </a>
            <a href="/contact">
              <motion.button
                whileHover={{ y: -2 }}
                className="bg-coral text-white font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-coral/90 transition-colors"
              >
                Hire Me →
              </motion.button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
