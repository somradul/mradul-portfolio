"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
    {
        id: 1,
        num: "01",
        years: "2016 – 2022",
        shortTitle: "School Days",
        color: "#FF6B4A",
        left: "9%",
        top: "78%",
        title: "Didn't know what Canva was.",
        desc: "Class X: Rank 1 out of 200+ students, 90.4%. Class XII: Rank 3, 90.4% again. Science stream. Physics, Chemistry, Maths. JEE was the plan.",
        stat: "Rank 1 (X) · Rank 3 (XII) · 90.4% both",
        dashed: false,
        badge: null,
    },
    {
        id: 2,
        num: "02",
        years: "2022 – 23",
        shortTitle: "The Pivot",
        color: "#C9A84C",
        left: "27%",
        top: "62%",
        title: "Prepared for JEE. Chose a different equation.",
        desc: "One full year preparing for JEE after Class XII. Physics gave way to markets. Formulas gave way to frameworks. Chose SSCBS, BMS. Not a detour — a direction.",
        stat: "Science → Business · The pivot that changed everything",
        dashed: true,
        badge: "SCIENCE → BUSINESS",
    },
    {
        id: 3,
        num: "03",
        years: "2023 – Now",
        shortTitle: "SSCBS Begins",
        color: "#C9A84C",
        left: "46%",
        top: "46%",
        title: "First open mic. Zero script. Zero bluff.",
        desc: "BMS at Shaheed Sukhdev College, University of Delhi. 7.7 CGPA. Reliance Foundation Scholar — 1 in 60,000. Held a mic for the first time. Did 5+ open mics. Never bluffed.",
        stat: "Reliance Scholar · 1 in 60,000 · 7.7 CGPA",
        dashed: false,
        badge: null,
    },
    {
        id: 4,
        num: "04",
        years: "2024 – 2025",
        shortTitle: "The Grind",
        color: "#0A7E8C",
        left: "66%",
        top: "30%",
        title: "4 internships. 4 industries. 0 shortcuts.",
        desc: "Littlewise → ExportDuniya → Electric Eel → FarMart. Mapped toy markets. Modelled makhana IRR. Reached 10,000+ farmers. Generated ₹10L in revenue.",
        stat: "10,000+ farmers · ₹10L revenue · 200+ data points",
        dashed: false,
        badge: null,
    },
    {
        id: 5,
        num: "NOW",
        years: "2025 – 26",
        shortTitle: "Still Writing",
        color: "#7B5EA7",
        left: "85%",
        top: "16%",
        title: "The best chapter hasn't been written yet.",
        desc: "National winner out of 470+ teams. Lawrence Law Forum President. Crescendo organizer — 10,000+ footfall, 2M+ impressions. Built this portfolio. Graduating 2026.",
        stat: "470+ teams beaten · 2M+ impressions · Open to work",
        dashed: false,
        badge: null,
    },
];

const chapters = [
    { label: "School", sub: "The Foundation", color: "#FF6B4A", textColor: "rgba(255,255,255,0.9)", dashed: false },
    { label: "JEE Drop", sub: "The Pivot", color: "#111", textColor: "#C9A84C", dashed: true },
    { label: "College", sub: "The Awakening", color: "#C9A84C", textColor: "rgba(255,255,255,0.9)", dashed: false },
    { label: "Hustle", sub: "The Real Work", color: "#0A7E8C", textColor: "rgba(255,255,255,0.9)", dashed: false },
    { label: "Still Writing", sub: "Chapter Ongoing", color: "#7B5EA7", textColor: "rgba(255,255,255,0.9)", dashed: false },
];

export default function JourneyMap() {
    const [activeNode, setActiveNode] = useState<number | null>(null);

    return (
        <section style={{ background: "#0a0a0a", paddingBottom: "48px" }}>

            {/* Chapter Chevrons */}
            <div style={{ display: "flex", width: "100%" }}>
                {chapters.map((ch, i) => (
                    <div
                        key={ch.label}
                        style={{
                            flex: 1,
                            background: ch.color,
                            border: ch.dashed ? "1px dashed #C9A84C" : "none",
                            clipPath:
                                i === 0
                                    ? "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)"
                                    : i === chapters.length - 1
                                        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 18px 50%)"
                                        : "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%)",
                            padding: "14px 10px",
                            display: "flex",
                            flexDirection: "column" as const,
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "64px",
                            boxSizing: "border-box" as const,
                        }}
                    >
                        <span style={{ fontSize: "10px", fontFamily: "DM Mono, monospace", letterSpacing: "0.15em", color: ch.textColor, fontWeight: 600, textTransform: "uppercase" as const, textAlign: "center" as const }}>
                            {ch.label}
                        </span>
                        <span style={{ fontSize: "8px", fontFamily: "DM Mono, monospace", color: ch.dashed ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.5)", marginTop: "3px", textAlign: "center" as const }}>
                            {ch.sub}
                        </span>
                    </div>
                ))}
            </div>

            {/* Journey Map Container */}
            <div style={{ position: "relative", width: "100%", height: "520px" }}>

                {/* SVG Path Line — behind everything */}
                <svg
                    viewBox="0 0 1000 420"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF6B4A" stopOpacity="1" />
                            <stop offset="28%" stopColor="#C9A84C" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#C9A84C" stopOpacity="1" />
                            <stop offset="72%" stopColor="#0A7E8C" stopOpacity="1" />
                            <stop offset="100%" stopColor="#7B5EA7" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Solid segment: School to JEE Drop */}
                    <path
                        d="M 90 294 C 150 275, 210 252, 270 227"
                        stroke="#FF6B4A"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.8"
                    />

                    {/* Dashed segment: JEE Drop to College */}
                    <path
                        d="M 270 227 C 330 205, 395 175, 460 155"
                        stroke="#C9A84C"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="8,5"
                        opacity="0.6"
                    />

                    {/* Solid segment: College onwards */}
                    <path
                        d="M 460 155 C 540 130, 600 105, 660 88 C 730 68, 800 45, 850 29"
                        stroke="url(#lineGrad)"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.85"
                    />

                    {/* Arrow at end */}
                    <path d="M 840 32 L 852 28 L 847 38" stroke="#7B5EA7" strokeWidth="1.5" fill="none" />
                </svg>

                {/* Nodes */}
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        style={{
                            position: "absolute",
                            left: node.left,
                            top: node.top,
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
                            display: "flex",
                            flexDirection: "column" as const,
                            alignItems: "center",
                        }}
                    >
                        <motion.div
                            style={{ position: "relative", display: "flex", flexDirection: "column" as const, alignItems: "center" }}
                            onHoverStart={() => setActiveNode(node.id)}
                            onHoverEnd={() => setActiveNode(null)}
                        >
                            {/* Dot */}
                            <motion.div
                                whileHover={{ scale: 1.25 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{
                                    width: node.id === 5 ? "52px" : "46px",
                                    height: node.id === 5 ? "52px" : "46px",
                                    borderRadius: "50%",
                                    background: node.dashed ? "rgba(201,168,76,0.08)" : node.color,
                                    border: node.dashed ? `2px dashed ${node.color}` : `2px solid ${node.color}`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    boxShadow: `0 0 24px ${node.color}50`,
                                }}
                            >
                                <span style={{
                                    fontSize: node.id === 5 ? "8px" : "11px",
                                    fontFamily: "DM Mono, monospace",
                                    color: node.dashed ? node.color : "#fff",
                                    fontWeight: "bold",
                                }}>
                                    {node.num}
                                </span>
                            </motion.div>

                            {/* Always-visible label below dot */}
                            <div style={{ marginTop: "8px", textAlign: "center" as const, whiteSpace: "nowrap" as const }}>
                                <div style={{ fontSize: "8px", fontFamily: "DM Mono, monospace", color: node.color, letterSpacing: "0.1em", marginBottom: "2px" }}>
                                    {node.years}
                                </div>
                                <div style={{ fontSize: "11px", fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
                                    {node.shortTitle}
                                </div>
                            </div>

                            {/* Hover Tooltip */}
                            <AnimatePresence>
                                {activeNode === node.id && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.18 }}
                                        style={{
                                            position: "absolute" as const,
                                            bottom: "calc(100% + 14px)",
                                            left: node.id >= 4 ? "auto" : "50%",
                                            right: node.id >= 4 ? "0" : "auto",
                                            transform: node.id >= 4 ? "none" : "translateX(-50%)",
                                            background: "#161616",
                                            border: `1px solid ${node.color}35`,
                                            borderRadius: "12px",
                                            padding: "16px 18px",
                                            width: "230px",
                                            zIndex: 100,
                                            pointerEvents: "none" as const,
                                            boxShadow: `0 8px 32px rgba(0,0,0,0.6)`,
                                        }}
                                    >
                                        {node.badge && (
                                            <div style={{
                                                display: "inline-block",
                                                background: "rgba(201,168,76,0.1)",
                                                border: "1px solid rgba(201,168,76,0.3)",
                                                borderRadius: "20px",
                                                padding: "3px 10px",
                                                fontSize: "8px",
                                                fontFamily: "DM Mono, monospace",
                                                color: "#C9A84C",
                                                letterSpacing: "0.12em",
                                                marginBottom: "10px",
                                            }}>
                                                {node.badge}
                                            </div>
                                        )}
                                        <div style={{ fontSize: "8px", fontFamily: "DM Mono, monospace", color: node.color, letterSpacing: "0.15em", marginBottom: "7px" }}>
                                            {node.years}
                                        </div>
                                        <div style={{ fontSize: "14px", fontFamily: "Playfair Display, serif", color: "#fff", fontWeight: "bold", lineHeight: 1.3, marginBottom: "9px" }}>
                                            {node.title}
                                        </div>
                                        <div style={{ fontSize: "11px", fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.48)", lineHeight: 1.7, marginBottom: "10px" }}>
                                            {node.desc}
                                        </div>
                                        <div style={{
                                            fontSize: "10px",
                                            fontFamily: "DM Mono, monospace",
                                            color: node.color,
                                            paddingTop: "10px",
                                            borderTop: `1px solid ${node.color}20`,
                                            lineHeight: 1.5,
                                        }}>
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
            <div style={{
                textAlign: "center" as const,
                padding: "0 24px",
                marginTop: "8px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                paddingTop: "20px",
            }}>
                <p style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "#FF6B4A",
                    opacity: 0.65,
                }}>
                    THIS IS NOT A RESUME. THIS IS A PERSON.
                </p>
            </div>

        </section>
    );
}
