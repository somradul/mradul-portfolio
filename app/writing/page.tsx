"use client";

import { motion } from "framer-motion";
import EmbedCard from "@/components/EmbedCard";
import { writingMedia } from "@/data/writing";

export default function WritingPage() {
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
            WRITING
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              06 / Writing
            </span>
            <h1
              className="font-playfair font-black text-charcoal leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Things I think about.<br />
              <span className="text-coral italic">Written down.</span>
            </h1>
            <p className="text-charcoal/50 text-lg max-w-xl font-light leading-relaxed">
              Strategy, markets, and ideas worth writing down.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Bento Box Analytics Dashboard */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            
            {/* Main Stat Card - Spans 2 cols on desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-charcoal text-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[280px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-coral/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="relative z-10">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/50 mb-6 block">
                  13 Month LinkedIn Impact
                </span>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                  <h3 className="font-playfair font-black text-6xl md:text-7xl">289K+</h3>
                  <span className="font-mono text-sm tracking-widest uppercase text-coral">Total Impressions</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <h3 className="font-playfair font-black text-4xl md:text-5xl text-white/80">109K+</h3>
                  <span className="font-mono text-sm tracking-widest uppercase text-white/40">Members Reached</span>
                </div>
              </div>
            </motion.div>

            {/* Sub Card 1: Top Post Highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-surface p-8 flex flex-col min-h-[280px] group"
            >
              <span className="font-mono text-xs tracking-widest uppercase text-charcoal/40 mb-auto">
                Viral Highlight
              </span>
              <div className="mt-8">
                <h4 className="font-playfair font-black text-4xl text-charcoal mb-2 group-hover:text-coral transition-colors">120,279</h4>
                <p className="text-charcoal/60 text-sm font-light leading-relaxed mb-6">
                  Peak impressions on a single post highlighting political debates and systemic insights.
                </p>
                <div className="h-1 w-12 bg-coral" />
              </div>
            </motion.div>



          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-2 block">
              LinkedIn Posts
            </span>
            <h2
              className="font-playfair font-black text-charcoal"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Native Feeds
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-8 justify-center items-start">
            {writingMedia.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="shrink-0"
              >
                {/* EmbedCard requires specific typing and native handling */}
                <EmbedCard url={post.url} type={post.type as "linkedin" | "instagram"} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-playfair font-black text-white text-3xl mb-2">
              Want to work together?
            </h2>
            <p className="text-white/40 font-light">
              I write, think, and build strategies. Let&apos;s talk.
            </p>
          </div>
          <a href="/contact">
            <motion.button
              whileHover={{ y: -2 }}
              className="bg-coral text-white font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-coral/90 transition-colors"
            >
              Get In Touch →
            </motion.button>
          </a>
        </div>
      </section>

    </main>
  );
}
