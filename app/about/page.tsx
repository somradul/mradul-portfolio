"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});





export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24">

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">

        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span
            className="font-playfair font-black text-charcoal/[0.03] whitespace-nowrap"
            style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
          >
            ABOUT
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              01 / About Me
            </span>
            <h1
              className="font-playfair font-black text-charcoal leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Strategist. Analyst.<br />
              <span className="text-coral italic">Perpetual learner.</span>
            </h1>
          </motion.div>

          {/* Story + Photo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">

            {/* Story — 2 cols */}
            <motion.div
              {...fadeUp(0.2)}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-6">
                <p className="text-charcoal/80 text-base leading-relaxed font-normal">
                  Hi, I'm Mradul - a final-year BMS student at Shaheed Sukhdev College of Business Studies, University of Delhi. I'm chasing a career at the intersection of <strong className="text-charcoal font-bold">consumer brands and strategy consulting</strong>, and this portfolio is my attempt to show you what that looks like in practice.
                </p>

                <div className="flex flex-col gap-3">
                  <p className="text-charcoal font-bold text-base">What I've actually done:</p>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex gap-3 text-base text-charcoal/80 font-normal">
                      <span className="mt-1.5 shrink-0 text-lg leading-none text-coral">▸</span>
                      <span>Interviewed farmers across UP, MP & Rajasthan to map <strong className="text-charcoal font-bold">agri supply chain gaps</strong></span>
                    </li>
                    <li className="flex gap-3 text-base text-charcoal/80 font-normal">
                      <span className="mt-1.5 shrink-0 text-lg leading-none text-coral">▸</span>
                      <span>Modelled IRR for <strong className="text-charcoal font-bold">makhana processing units</strong> in Bihar</span>
                    </li>
                    <li className="flex gap-3 text-base text-charcoal/80 font-normal">
                      <span className="mt-1.5 shrink-0 text-lg leading-none text-coral">▸</span>
                      <span>Mapped <strong className="text-charcoal font-bold">China's import dominance</strong> in India's toy market</span>
                    </li>
                    <li className="flex gap-3 text-base text-charcoal/80 font-normal">
                      <span className="mt-1.5 shrink-0 text-lg leading-none text-coral">▸</span>
                      <span>Reached <strong className="text-charcoal font-bold">10,000+ smallholder farmers</strong> through FarMart's CSR program</span>
                    </li>
                    <li className="flex gap-3 text-base text-charcoal/80 font-normal">
                      <span className="mt-1.5 shrink-0 text-lg leading-none text-coral">▸</span>
                      <span>Managed a <strong className="text-charcoal font-bold">10,000+ footfall</strong> cultural festival as part of the organising team</span>
                    </li>
                  </ul>
                </div>

                <p className="text-charcoal/80 text-base leading-relaxed font-normal">
                  Outside strategy, I write on LinkedIn, in journals, and constantly in my head. Reading and literature aren't hobbies for me; they're how I process the world. I genuinely believe the <strong className="text-charcoal font-bold">best strategists are the best storytellers</strong>.
                </p>
              </div>

              {/* Currently badge */}
              <div className="flex items-center gap-3 mt-4 p-4 bg-white border border-surface">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <p className="font-mono text-xs tracking-widest uppercase text-green-600">
                  Open to roles in Strategy & Consulting
                </p>
              </div>

              <div className="flex gap-4 mt-2">
                <Link href="/experience">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-coral text-white font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-coral/90 transition-colors"
                  >
                    View My Work →
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="border border-charcoal/20 text-charcoal font-mono text-xs tracking-widest uppercase px-6 py-3 hover:border-coral hover:text-coral transition-colors"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Photo placeholder — 1 col */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex flex-col gap-4"
            >
              {/* Profile photo */}
              <div className="aspect-square overflow-hidden border border-surface">
                <img
                  src="/profile.jpg"
                  alt="Mradul Awasthi"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Quick facts */}
              <div className="bg-white border border-surface p-5 flex flex-col gap-3">
                {[
                  { label: "College", value: "SSCBS, Delhi University" },
                  { label: "Degree", value: "BMS (2023–2026)" },

                ].map((fact) => (
                  <div key={fact.label} className="flex justify-between items-start gap-4">
                    <span className="font-mono text-xs tracking-wider uppercase text-charcoal/30">
                      {fact.label}
                    </span>
                    <span className="text-sm text-charcoal font-medium text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>





      {/* Education */}
      <section className="bg-charcoal py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              Education
            </span>
            <h2
              className="font-playfair font-black text-white"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Where I learned<br />
              <span className="text-coral italic">to learn.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                degree: "Bachelor of Management Studies",
                school: "Shaheed Sukhdev College of Business Studies",
                university: "University of Delhi",
                year: "2023 – 2026 (Pursuing)",
              },
              {
                degree: "Class XII (Science) · CBSE",
                school: "Guru Teg Bahadur Educational Academy",
                university: "",
                year: "2022",
              },
              {
                degree: "Class X · CBSE",
                school: "Guru Teg Bahadur Educational Academy",
                university: "",
                year: "2020",
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.degree}
                {...fadeUp(i * 0.1)}
                className="bg-white/5 border border-white/10 p-6 relative flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-coral" />
                <h3 className="font-playfair font-bold text-white text-lg mb-1">
                  {edu.degree}
                </h3>
                <p className="text-white/50 text-sm mb-0.5">{edu.school}</p>
                {edu.university && (
                  <p className="text-white/30 text-xs font-mono mb-2">{edu.university}</p>
                )}
                <div className="flex justify-between items-center mt-auto pt-4">
                  <span className="font-mono text-xs text-coral tracking-wider">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
