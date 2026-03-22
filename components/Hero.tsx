"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const floatingWords = [
  "Consumer Markets", "Supply Chain", "GTM Strategy",
  "Market Sizing", "ESG", "Value Chain",
  "Pricing Dynamics", "Research", "Consulting",
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 30);
      mouseY.set((e.clientY - window.innerHeight / 2) / 30);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(255,107,74,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,74,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Coral Blob */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, #FF6B4A 0%, transparent 70%)",
          opacity: 0.2,
          x: springX,
          y: springY,
        }}
      />

      {/* Teal Blob */}
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          background: "radial-gradient(circle, #0A7E8C 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      {/* Floating Words */}
      {floatingWords.map((word, i) => (
        <motion.span
          key={word}
          className="absolute font-mono text-xs tracking-widest text-charcoal/10 uppercase select-none pointer-events-none hidden md:block"
          style={{
            left: `${10 + (i * 11) % 80}%`,
            top: `${15 + (i * 17) % 70}%`,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        >
          {word}
        </motion.span>
      ))}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block font-mono text-xs tracking-[0.25em] uppercase text-coral border border-coral/30 px-4 py-1.5 mb-8">
              Strategy · Consumer Markets · Supply Chain
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-playfair font-black leading-[0.95] mb-6"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
          >
            Mradul
            <br />
            <span className="text-coral italic">Awasthi</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-charcoal/60 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-6"
          >
            I enjoy figuring things out - whether it&apos;s a market, a business problem, or a system and turning that understanding into something useful.
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="border-l-2 border-gold pl-5 mb-10 max-w-lg"
          >
            <p className="font-playfair italic text-charcoal/70 text-base leading-relaxed">
              &ldquo;The most important skill for getting rich is becoming a perpetual learner.&rdquo;
            </p>
            <cite className="font-mono text-xs tracking-widest uppercase text-gold/70 mt-2 block not-italic">
              — The quote I live by
            </cite>
          </motion.blockquote>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link href="/experience">
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-coral text-white font-mono text-xs tracking-widest uppercase px-8 py-4 hover:bg-coral/90 transition-colors"
              >
                View My Work →
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-charcoal/30 text-charcoal font-mono text-xs tracking-widest uppercase px-8 py-4 hover:border-coral hover:text-coral transition-colors"
              >
                Let&apos;s Talk
              </motion.button>
            </Link>
          </motion.div>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-wrap gap-2"
          >
            {["Indian Toy Market", "Makhana Value Chain", "Agri Supply Chain", "Cross-border E-commerce", "Gig Economy", "Renewable Energy"].map((chip) => (
              <span key={chip} className="font-mono text-xs tracking-wide text-teal bg-teal/10 border border-teal/20 px-3 py-1">
                {chip}
              </span>
            ))}
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-charcoal/30">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-charcoal/30 to-transparent"
          />
        </motion.div>

      </div>
    </section>
  );
}
