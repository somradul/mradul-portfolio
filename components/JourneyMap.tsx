"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
    {
        id: 1,
        label: "01",
        chapter: "School",
        sub: "The Foundation",
        years: "2016 – 2022",
        color: "#FF6B4A",
        cx: 12,
        cy: 78,
        title: "Didn't know what Canva was.",
        desc: "Class X: Rank 1 out of 200+ students. 90.4%. Class XII: Rank 3. 90.4% again. Science stream. JEE was the plan.",
        stat: "Rank 1 (X) · Rank 3 (XII) · 90.4% both",
        badge: null,
    },
    {
        id: 2,
        label: "02",
        chapter: "JEE Drop",
        sub: "The Pivot",
        years: "2022 – 23",
        color: "#C9A84C",
        cx: 32,
        cy: 62,
        title: "Prepared for JEE. Chose a different equation.",
        desc: "One full year preparing for JEE after Class XII. Physics gave way to markets. Formulas gave way to frameworks. Not a detour — a direction.",
        stat: "Science → Business · The pivot that changed everything",
        badge: "SCIENCE → BUSINESS",
        dashed: true,
    },
    {
        id: 3,
        label: "03",
        chapter: "College",
        sub: "The Awakening",
        years: "2023 – Now",
        color: "#C9A84C",
        cx: 52,
        cy: 45,
        title: "First open mic. Zero script. Zero bluff.",
        desc: "BMS at SSCBS, University of Delhi. 7.7 CGPA. Reliance Foundation Scholar — 1 in 60,000 applicants. Held a mic for the first time. Did 5+ open mics without bluffing once.",
        stat: "Reliance Scholar · 1 in 60,000 · 7.7 CGPA",
        badge: null,
    },
    {
        id: 4,
        label: "04",
        chapter: "Hustle",
        sub: "The Real Work",
        years: "2024 – 2025",
        color: "#0A7E8C",
        cx: 72,
        cy: 28,
        title: "4 internships. 4 industries. 0 shortcuts.",
        desc: "Littlewise (Founder's Office) → ExportDuniya → Electric Eel → FarMart Fellowship. Mapped toy markets. Modelled makhana IRR. Reached 10,000+ farmers. Generated ₹10L revenue.",
        stat: "10,000+ farmers · ₹10L revenue · 200+ data points",
        badge: null,
    },
    {
        id: 5,
        label: "NOW",
        chapter: "Still Writing",
        sub: "Chapter Ongoing",
        years: "2025 – 26",
        color: "#7B5EA7",
        cx: 90,
        cy: 12,
        title: "The best chapter hasn't been written yet.",
        desc: "National winner out of 470+ teams. Lawrence Law Forum President. Crescendo organizer — 10,000+ footfall, 2M+ impressions. Built this portfolio. Graduating 2026.",
        stat: "470+ teams beaten · 2M+ impressions · Open to work",
        badge: null,
    },
];

const chapters = [
    { label: "School", sub: "2016–2022", color: "#FF6B4A" },
    { label: "JEE Drop", sub: "2022–23", color: "#1a1508", border: "#C9A84C" },
    { label: "College", sub: "2023–Now", color: "#C9A84C" },
    { label: "Hustle", sub: "2024–2025", color: "#0A7E8C" },
    { label: "Still Writing", sub: "2025–26", color: "#7B5EA7" },
];

export default function JourneyMap() {
    const [activeNode, setActiveNode] = useState<number | null>(null);

    return (
        <section style={{ background: "#0a0a0a", padding: "0 0 60px" }}>

            {/* Chapter Chevrons */}
            <div style={{ display: "flex", width: "100%" }}>
                {chapters.map((ch, i) => (
                    <div
                        key={ch.label}
                        style={{
                            flex: 1,
                            background: ch.color,
                            border: ch.border ? `1px dashed ${ch.border}` : "none",
                            clipPath: i === 0
                                ? "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)"
                                : i === chapters.length - 1
                                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 20px 50%)"
                                    : "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)",
                            padding: "14px 8px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "64px",
                        }}
                    >
                        <span style={{ fontSize: "11px", fontFamily: "DM Mono, monospace", letterSpacing: "0.15em", color: ch.border ? ch.border : "rgba(255,255,255,0.9)", fontWeight: 600, textTransform: "uppercase" }}>
                            {ch.label}
                        </span>
                        <span style={{ fontSize: "9px", fontFamily: "DM Mono, monospace", color: ch.border ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.55)", marginTop: "3px" }}>
                            {ch.sub}
                        </span>
                    </div>
                ))}
            </div>

            {/* SVG Journey Line + Nodes */}
            <div style={{ position: "relative", width: "100%", height: "380px", marginTop: "0" }}>
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                >
                    <defs>
                        <linearGradient id="pathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF6B4A" />
                            <stop offset="30%" stopColor="#C9A84C" />
                            <stop offset="55%" stopColor="#C9A84C" />
                            <stop offset="75%" stopColor="#0A7E8C" />
                            <stop offset="100%" stopColor="#7B5EA7" />
                        </linearGradient>
                    </defs>

                    {/* Main solid path */}
                    <path
                        d="M 12 78 C 20 72, 26 66, 32 62 M 52 45 C 60 38, 66 33, 72 28 C 80 21, 86 16, 90 12"
                        stroke="url(#pathGrad)"
                        strokeWidth="0.8"
                        fill="none"
                        opacity="0.9"
                    />

                    {/* Dashed pivot segment */}
                    <path
                        d="M 32 62 C 38 56, 44 50, 52 45"
                        stroke="#C9A84C"
                        strokeWidth="0.7"
                        fill="none"
                        strokeDasharray="2,2"
                        opacity="0.6"
                    />

                    {/* End arrow */}
                    <path d="M 88 13.5 L 90 12 L 89 14.5" stroke="#7B5EA7" strokeWidth="0.6" fill="none" />
                </svg>

                {/* Node dots positioned absolutely */}
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        style={{
                            position: "absolute",
                            left: `${node.cx}%`,
                            top: `${node.cy}%`,
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
                        }}
                    >
                        <motion.div
                            onHoverStart={() => setActiveNode(node.id)}
                            onHoverEnd={() => setActiveNode(null)}
                            style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                            {/* Dot */}
                            <motion.div
                                whileHover={{ scale: 1.3 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                style={{
                                    width: node.id === 5 ? "52px" : "44px",
                                    height: node.id === 5 ? "52px" : "44px",
                                    borderRadius: "50%",
                                    background: node.dashed ? "rgba(201,168,76,0.1)" : node.color,
                                    border: node.dashed ? `2px dashed ${node.color}` : `2px solid ${node.color}`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    boxShadow: `0 0 20px ${node.color}40`,
                                }}
                            >
                                <span style={{ fontSize: node.id === 5 ? "8px" : "11px", fontFamily: "DM Mono, monospace", color: node.dashed ? node.color : "#fff", fontWeight: "bold" }}>
                                    {node.label}
                                </span>
                            </motion.div>

                            {/* Hover Tooltip */}
                            <AnimatePresence>
                                {activeNode === node.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            position: "absolute",
                                            bottom: "calc(100% + 12px)",
                                            left: node.cx > 70 ? "auto" : "50%",
                                            right: node.cx > 70 ? "0" : "auto",
                                            transform: node.cx > 70 ? "none" : "translateX(-50%)",
                                            background: "#161616",
                                            border: `1px solid ${node.color}40`,
                                            borderRadius: "10px",
                                            padding: "16px 18px",
                                            width: "220px",
                                            zIndex: 50,
                                            pointerEvents: "none",
                                        }}
                                    >
                                        {node.badge && (
                                            <span style={{
                                                display: "inline-block",
                                                background: "rgba(201,168,76,0.1)",
                                                border: "1px solid rgba(201,168,76,0.3)",
                                                borderRadius: "20px",
                                                padding: "3px 10px",
                                                fontSize: "8px",
                                                fontFamily: "DM Mono, monospace",
                                                color: "#C9A84C",
                                                letterSpacing: "0.1em",
                                                marginBottom: "10px",
                                                display: "block",
                                            }}>
                                                {node.badge}
                                            </span>
                                        )}
                                        <div style={{ fontSize: "8px", fontFamily: "DM Mono, monospace", color: node.color, letterSpacing: "0.15em", marginBottom: "6px" }}>
                                            {node.years}
                                        </div>
                                        <div style={{ fontSize: "14px", fontFamily: "Playfair Display, serif", color: "#fff", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.3 }}>
                                            {node.title}
                                        </div>
                                        <div style={{ fontSize: "11px", fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, marginBottom: "10px" }}>
                                            {node.desc}
                                        </div>
                                        <div style={{ fontSize: "10px", fontFamily: "DM Mono, monospace", color: node.color, paddingTop: "10px", borderTop: `1px solid ${node.color}20` }}>
                                            {node.stat}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Bottom message */}
            <div style={{ textAlign: "center", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.05)", margin: "0 24px" }}>
                <p style={{ fontFamily: "DM Mono, monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#FF6B4A", opacity: 0.7 }}>
                    THIS IS NOT A RESUME. THIS IS A PERSON.
                </p>
            </div>

        </section>
    );
}
