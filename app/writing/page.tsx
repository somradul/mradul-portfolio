"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { linkedinPosts } from "@/data/writing";

const blogPosts = [
  {
    id: 1,
    title: "What I Learned Mapping India's Makhana Supply Chain",
    excerpt:
      "Bihar produces 85-90% of the world's makhana. Yet most of the value is captured elsewhere. Here's what I found after spending weeks analysing the full value chain — from farm to shelf.",
    date: "December 2024",
    readTime: "6 min read",
    tags: ["Supply Chain", "Strategy", "Agri"],
    slug: "makhana-supply-chain",
  },
  {
    id: 2,
    title: "Why Consumer Market Research Starts With the Wrong Question",
    excerpt:
      "Most market research asks 'what do consumers want?' But that's the wrong starting point. After mapping the Indian toy market and interviewing 50+ consumers, here's what I think researchers should ask instead.",
    date: "October 2024",
    readTime: "4 min read",
    tags: ["Consumer Research", "GTM", "Strategy"],
    slug: "consumer-research-wrong-question",
  },
  {
    id: 3,
    title: "The Generalist's Advantage in a World of Specialists",
    excerpt:
      "Everyone says 'pick a lane.' I've spent my college years deliberately not doing that — moving from agri-ESG to cross-border exports to consumer markets. Here's why I think that was the right call.",
    date: "January 2025",
    readTime: "5 min read",
    tags: ["Career", "Strategy", "Learning"],
    slug: "generalist-advantage",
  },
];

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
              Strategy, markets, and ideas worth writing down. A mix of long-form articles and LinkedIn posts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Articles */}
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
              Long Form
            </span>
            <h2
              className="font-playfair font-black text-charcoal"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Articles &amp; Essays
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="group bg-white border border-surface p-7 flex flex-col md:flex-row md:items-start gap-6 relative overflow-hidden cursor-default"
              >
                {/* Left — number */}
                <div className="font-playfair font-black text-5xl text-charcoal/5 shrink-0 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-coral/70 bg-coral/6 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-charcoal mb-2 group-hover:text-coral transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/50 text-sm leading-relaxed font-light mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-charcoal/30">{post.date}</span>
                    <span className="font-mono text-xs text-charcoal/30">·</span>
                    <span className="font-mono text-xs text-charcoal/30">{post.readTime}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="shrink-0 self-center">
                  <ArrowUpRight
                    size={20}
                    className="text-charcoal/20 group-hover:text-coral group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Posts */}
      <section className="bg-surface py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
          >
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-2 block">
                Short Form
              </span>
              <h2
                className="font-playfair font-black text-charcoal"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                LinkedIn Posts
              </h2>
            </div>
            <a
              href="https://www.linkedin.com/in/mradul-awasthi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-charcoal/40 hover:text-coral transition-colors"
            >
              Follow on LinkedIn
              <ArrowUpRight size={13} />
            </a>
          </motion.div>

          {/* Mosaic style cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {linkedinPosts.map((post, i) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-charcoal/6 p-7 flex flex-col gap-4 cursor-pointer relative overflow-hidden"
              >
                {/* LinkedIn Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#0A66C2] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">in</span>
                    </div>
                    <span className="font-mono text-xs tracking-wider text-charcoal/40">
                      LinkedIn Post
                    </span>
                  </div>
                  <span className="font-mono text-xs text-charcoal/30">{post.date}</span>
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
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Hover bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.a>
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
