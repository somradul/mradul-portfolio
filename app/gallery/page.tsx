"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-lg">

        {/* Animated emoji */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-6xl mb-8"
        >
          🗂️
        </motion.div>

        {/* Label */}
        <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-4 block">
          07 / Gallery
        </span>

        {/* Heading */}
        <h1
          className="font-playfair font-black text-charcoal leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Currently, Mradul is going through his gallery to figure out{" "}
          <span className="text-coral italic">which images belong here.</span>
        </h1>

        {/* Subtext */}
        <p className="text-charcoal/45 font-light leading-relaxed mb-10">
          Check back soon.
        </p>

        {/* Progress bar — fake but fun */}
        <div className="w-full bg-surface rounded-none h-1.5 mb-3 overflow-hidden">
          <motion.div
            className="h-full bg-coral"
            initial={{ width: "0%" }}
            animate={{ width: "67%" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
        </div>
        <p className="font-mono text-xs text-charcoal/30 tracking-widest mb-10">
          CURATION IN PROGRESS · 67%
        </p>

        {/* Back home */}
        <Link href="/">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-coral text-white font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-coral/90 transition-colors"
          >
            ← Back to Home
          </motion.button>
        </Link>

      </div>
    </main>
  );
}
