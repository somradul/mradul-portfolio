"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const values = [
  {
    icon: "🗺️",
    title: "I map before I conclude",
    desc: "Structure first. I never jump to recommendations without understanding the full system.",
  },
  {
    icon: "📊",
    title: "Data is the start, not the answer",
    desc: "Numbers tell you what happened. Thinking tells you why.",
  },
  {
    icon: "🔄",
    title: "Generalist on purpose",
    desc: "I move across domains because real problems don't respect industry boundaries.",
  },
  {
    icon: "✍️",
    title: "Communication is strategy",
    desc: "The best insight in the world is worthless if it can't be told clearly.",
  },
];

const interests = [
  {
    icon: "📱",
    title: "Social Media & Storytelling",
    desc: "Built a genuine LinkedIn presence by sharing learnings through storytelling. I believe the best strategy is communicated through great stories.",
  },
  {
    icon: "📚",
    title: "Literature & Writing",
    desc: "Reading and writing literature, self-help, and poetry. Personally fascinated by how ideas shape thinking and behaviour — which makes me a better strategist.",
  },
];

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
              {[
                `Hi, I'm Mradul — a final-year BMS student at Shaheed Sukhdev College of Business Studies, University of Delhi. I'm chasing a career at the intersection of consumer brands and strategy consulting, and this website is my attempt to show you what that looks like in practice.`,
                `My work spans agri value chains, cross-border e-commerce, ESG program design, and consumer market analysis. But the thread connecting all of it is one question I keep coming back to: why do markets behave the way they do? What's the real driver underneath the data?`,
                `I've interviewed farmers in Rajasthan, modelled IRR for makhana processing units, mapped China's import dominance in India's toy market, and managed a 10,000+ footfall cultural festival. I find energy wherever complex problems meet real human behaviour.`,
                `Outside strategy, I write — on LinkedIn, in journals, and constantly in my head. Reading and literature aren't hobbies for me; they're how I process the world. I genuinely believe the best strategists are the best storytellers.`,
              ].map((para, i) => (
                <p key={i} className="text-charcoal/65 text-base leading-relaxed font-light">
                  {para}
                </p>
              ))}

              {/* Currently badge */}
              <div className="flex items-center gap-3 mt-4 p-4 bg-white border border-surface">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <p className="font-mono text-xs tracking-widest uppercase text-green-600">
                  Open to roles in Strategy & Consulting · Graduating 2026 · New Delhi
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
              {/* Profile photo placeholder */}
              <div className="aspect-square bg-surface border-2 border-dashed border-charcoal/15 flex flex-col items-center justify-center gap-3">
                <span className="text-4xl">👤</span>
                <p className="font-mono text-xs tracking-widest uppercase text-charcoal/30 text-center px-4">
                  Profile photo<br />coming soon
                </p>
              </div>

              {/* Quick facts */}
              <div className="bg-white border border-surface p-5 flex flex-col gap-3">
                {[
                  { label: "College", value: "SSCBS, Delhi University" },
                  { label: "Degree", value: "BMS (2023–2026)" },
                  { label: "CGPA", value: "7.7 (Till 4th Sem)" },
                  { label: "Location", value: "New Delhi, India" },
                  { label: "Status", value: "Open to Work 🟢" },
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

      {/* How I Think */}
      <section className="bg-surface py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              Ways I Think
            </span>
            <h2
              className="font-playfair font-black text-charcoal"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              The mental models<br />
              <span className="text-coral italic">I work with.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4 }}
                className="bg-white border border-charcoal/6 p-6 flex gap-4 group cursor-default"
              >
                <span className="text-2xl shrink-0">{v.icon}</span>
                <div>
                  <h3 className="font-playfair font-bold text-lg text-charcoal mb-1 group-hover:text-coral transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="bg-background py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-12">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              Beyond Work
            </span>
            <h2
              className="font-playfair font-black text-charcoal"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              What drives me<br />
              <span className="text-coral italic">when no one&apos;s watching.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {interests.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.15)}
                className="bg-white border border-charcoal/6 p-8 relative overflow-hidden group"
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-playfair font-bold text-xl text-charcoal mb-3 group-hover:text-coral transition-colors">
                  {item.title}
                </h3>
                <p className="text-charcoal/55 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
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
                score: "7.7 CGPA",
              },
              {
                degree: "Class XII · CBSE",
                school: "Guru Teg Bahadur Educational Academy",
                university: "New Delhi",
                year: "2022",
                score: "90.4%",
              },
              {
                degree: "Class X · CBSE",
                school: "Guru Teg Bahadur Educational Academy",
                university: "New Delhi",
                year: "2020",
                score: "90.4%",
              },
            ].map((edu, i) => (
              <motion.div
                key={edu.degree}
                {...fadeUp(i * 0.1)}
                className="bg-white/5 border border-white/10 p-6 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-coral" />
                <h3 className="font-playfair font-bold text-white text-lg mb-1">
                  {edu.degree}
                </h3>
                <p className="text-white/50 text-sm mb-0.5">{edu.school}</p>
                <p className="text-white/30 text-xs font-mono mb-4">{edu.university}</p>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-coral tracking-wider">{edu.year}</span>
                  <span className="font-playfair font-bold text-xl text-coral">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
