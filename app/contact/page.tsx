"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-background pt-24">

            {/* Hero */}
            <section className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">

                {/* Ghost text */}
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                    aria-hidden
                >
                    <span
                        className="font-playfair font-black text-charcoal/[0.03] whitespace-nowrap"
                        style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
                    >
                        LET'S TALK
                    </span>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
                            08 / Contact
                        </span>
                        <h1
                            className="font-playfair font-black text-charcoal leading-tight mb-4"
                            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                        >
                            Let's build something<br />
                            <span className="text-coral italic">worth talking about.</span>
                        </h1>
                        <p className="text-charcoal/50 text-lg max-w-xl font-light leading-relaxed">
                            Open to roles in Consumer Strategy, Consulting, and Market Research.
                            Graduating 2026. Based in New Delhi.
                        </p>

                        {/* Open to work badge */}
                        <div className="flex items-center gap-2 mt-6">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-mono text-xs tracking-widest uppercase text-green-600">
                                Currently open to internships & full-time roles starting 2026
                            </span>
                        </div>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex flex-col gap-5">

                                <div>
                                    <label className="font-mono text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Recruiter at Acme Co."
                                        className="w-full bg-white border border-surface px-4 py-3 text-charcoal text-sm font-light placeholder:text-charcoal/25 focus:outline-none focus:border-coral transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="font-mono text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="hello@company.com"
                                        className="w-full bg-white border border-surface px-4 py-3 text-charcoal text-sm font-light placeholder:text-charcoal/25 focus:outline-none focus:border-coral transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="font-mono text-xs tracking-widest uppercase text-charcoal/40 block mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell me about the role or opportunity..."
                                        rows={5}
                                        className="w-full bg-white border border-surface px-4 py-3 text-charcoal text-sm font-light placeholder:text-charcoal/25 focus:outline-none focus:border-coral transition-colors resize-none"
                                    />
                                </div>

                                <motion.button
                                    onClick={handleSubmit}
                                    disabled={status === "loading"}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-coral text-white font-mono text-xs tracking-widest uppercase px-8 py-4 flex items-center gap-3 hover:bg-coral/90 transition-colors disabled:opacity-50 w-fit"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                    <Send size={14} />
                                </motion.button>

                                {status === "success" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="font-mono text-xs tracking-wider text-green-600"
                                    >
                                        ✓ Message sent! I'll get back to you soon.
                                    </motion.p>
                                )}
                                {status === "error" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="font-mono text-xs tracking-wider text-red-500"
                                    >
                                        ✗ Something went wrong. Email me directly below.
                                    </motion.p>
                                )}

                            </div>
                        </motion.div>

                        {/* Direct Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col gap-6 lg:pt-8"
                        >
                            {[
                                {
                                    icon: <Mail size={18} />,
                                    label: "Email",
                                    value: "mradul.23209@sscbs.du.ac.in",
                                    href: "mailto:mradul.23209@sscbs.du.ac.in",
                                },
                                {
                                    icon: <Phone size={18} />,
                                    label: "Phone",
                                    value: "+91 72350 93058",
                                    href: "tel:+917235093058",
                                },
                                {
                                    icon: <Linkedin size={18} />,
                                    label: "LinkedIn",
                                    value: "linkedin.com/in/mradul-awasthi",
                                    href: "https://linkedin.com/in/mradul-awasthi",
                                },
                                {
                                    icon: <MapPin size={18} />,
                                    label: "Location",
                                    value: "New Delhi, India",
                                    href: "#",
                                },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-4 p-5 bg-white border border-surface hover:border-coral transition-colors"
                                >
                                    <span className="text-coral mt-0.5">{item.icon}</span>
                                    <div>
                                        <p className="font-mono text-xs tracking-widest uppercase text-charcoal/30 mb-1">
                                            {item.label}
                                        </p>
                                        <p className="text-charcoal text-sm group-hover:text-coral transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>
    );
}
