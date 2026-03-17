"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
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
            PROJECTS
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              03 / Projects
            </span>
            <h1
              className="font-playfair font-black text-charcoal leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Work I&apos;m proud of.<br />
              <span className="text-coral italic">Thinking made visible.</span>
            </h1>
            <p className="text-charcoal/50 text-lg max-w-xl font-light leading-relaxed">
              Academic and research projects that pushed my thinking beyond the classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <p
                    className="font-mono text-xs tracking-wider mb-1"
                    style={{ color: project.color }}
                  >
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
                        className="font-mono text-xs px-2.5 py-1 border text-charcoal/40 border-charcoal/10 hover:border-coral/30 hover:text-coral transition-colors"
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

          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              Leadership & Positions
            </span>
            <h2
              className="font-playfair font-black text-charcoal mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Rooms I walked into<br />
              <span className="text-coral italic">and then ran.</span>
            </h2>

            <div className="flex flex-col gap-5">
              {[
                {
                  org: "Lawrence — The Law Forum",
                  role: "President",
                  period: "June 2025 – Present",
                  color: "#FF6B4A",
                  bullets: [
                    "Selected as <strong>President 1 out of 24</strong> candidates",
                    "Invited Ex-Director General of Police of Uttar Pradesh as keynote",
                    "Published <strong>4+ case studies</strong> · Managed <strong>₹50K+ budget</strong>",
                    "Initiated <strong>10+ law-focused sessions</strong> on startups, corporate, POSH, and human rights",
                    "Negotiated tie-ups for <strong>2 flagship events</strong> with 45+ colleges across DU and NLUs",
                  ],
                },
                {
                  org: "Crescendo — Annual Cultural Fest",
                  role: "Organizing Team · Artist Management",
                  period: "January – May 2024",
                  color: "#0A7E8C",
                  bullets: [
                    "Selected in Artist Team <strong>3 out of 30</strong> candidates",
                    "Raised <strong>₹14L+ in sponsorships</strong> · Total footfall <strong>10,000+</strong>",
                    "Generated <strong>2M+ social media impressions</strong>",
                    "Invited Papon, Kr$na, ScoopWhoop, and Vivek Samtani",
                    "Managed <strong>₹24 lakh budget</strong> across 12+ brand collaborations including T-Series and ManKind",
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={item.org}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="bg-white border border-surface p-8 relative overflow-hidden group"
                  style={{ borderLeft: `4px solid ${item.color}` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-playfair font-bold text-xl text-charcoal">
                        {item.org}
                      </h3>
                      <p
                        className="font-mono text-xs tracking-wider mt-1"
                        style={{ color: item.color }}
                      >
                        {item.role}
                      </p>
                    </div>
                    <span className="font-mono text-xs tracking-widest text-charcoal/40 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-sm text-charcoal/70 leading-relaxed">
                        <span
                          className="mt-1.5 shrink-0 text-xs"
                          style={{ color: item.color }}
                        >
                          ▸
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              Awards & Recognition
            </span>
            <h2
              className="font-playfair font-black text-charcoal mb-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Recognition that<br />
              <span className="text-coral italic">means something.</span>
            </h2>

            <div className="flex flex-col gap-3">
              {[
                {
                  year: "2025",
                  title: "National Winner — Shri Ram Crisis Mania",
                  desc: "Out of 470+ participants · Shri Ram College of Commerce",
                },
                {
                  year: "2023–26",
                  title: "Reliance Foundation Undergraduate Scholar",
                  desc: "Selected out of 60,000+ applicants · Reliance Industries Limited",
                },
                {
                  year: "2022",
                  title: "School Rank 3 · Class XII",
                  desc: "Out of 200+ students · Guru Teg Bahadur Educational Academy",
                },
                {
                  year: "2020",
                  title: "School Rank 1 · Class X",
                  desc: "Out of 200+ students · Guru Teg Bahadur Educational Academy",
                },
              ].map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-6 p-5 bg-white border border-surface border-l-4 border-l-gold hover:border-l-coral transition-colors group"
                >
                  <span className="font-mono text-xs text-gold tracking-wider whitespace-nowrap pt-0.5">
                    {award.year}
                  </span>
                  <div>
                    <h4 className="font-medium text-charcoal text-sm group-hover:text-coral transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-charcoal/40 text-xs mt-0.5">{award.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 px-6 md:px-12 lg:px-24 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-playfair font-black text-white text-3xl mb-2">
              Liked what you saw?
            </h2>
            <p className="text-white/40 font-light">
              Read my writing or get in touch.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="/writing">
              <motion.button
                whileHover={{ y: -2 }}
                className="border border-white/20 text-white font-mono text-xs tracking-widest uppercase px-6 py-3 hover:border-coral hover:text-coral transition-colors"
              >
                Read Writing
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
