"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";

function GalleryVideoCard({ item, onHoverStart, onHoverEnd, onClick }: { item: GalleryItem; onHoverStart: () => void; onHoverEnd: () => void; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
    onHoverStart();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
    onHoverEnd();
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ y: -4 }}
      className="group bg-slate-900 border border-surface relative overflow-hidden cursor-pointer aspect-square w-full"
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
      />
      {/* Video Indicator (always visible in corner when not hovered) */}
      <div className="absolute top-3 right-3 bg-black/45 backdrop-blur-sm p-1.5 rounded-full z-10 text-white transition-opacity duration-300 group-hover:opacity-0">
        <Play size={10} className="fill-white text-white" />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-5 z-10 text-white">
        <span className="font-mono text-xs tracking-widest uppercase text-coral">Watch Video</span>
      </div>
    </motion.div>
  );
}

function GalleryImageCard({ item, onHoverStart, onHoverEnd, onClick }: { item: GalleryItem; onHoverStart: () => void; onHoverEnd: () => void; onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      whileHover={{ y: -4 }}
      className="group bg-slate-900 border border-surface relative overflow-hidden cursor-pointer aspect-square w-full"
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-5 z-10 text-white">
        <span className="font-mono text-xs tracking-widest uppercase text-teal">View Image</span>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [shuffledItems, setShuffledItems] = useState<GalleryItem[]>([]);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const items = [...galleryItems];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    setShuffledItems(items);

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const itemsToDisplay = shuffledItems.length > 0 ? shuffledItems : galleryItems;
  const activeItem = activeIndex !== null ? itemsToDisplay[activeIndex] : null;

  const handleHoverStart = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
    }, 1000);
  };

  const handleHoverEnd = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleCardClick = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      } else if (e.key === "ArrowRight" && activeIndex !== null) {
        setActiveIndex((activeIndex + 1) % itemsToDisplay.length);
      } else if (e.key === "ArrowLeft" && activeIndex !== null) {
        setActiveIndex((activeIndex - 1 + itemsToDisplay.length) % itemsToDisplay.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, itemsToDisplay]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % itemsToDisplay.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + itemsToDisplay.length) % itemsToDisplay.length);
    }
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      
      {/* Hero section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span
            className="font-playfair font-black text-charcoal/[0.03] whitespace-nowrap"
            style={{ fontSize: "clamp(4rem, 15vw, 15rem)" }}
          >
            GALLERY
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-coral mb-3 block">
              07 / Gallery
            </span>
            <h1
              className="font-playfair font-black text-charcoal leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Moments captured.<br />
              <span className="text-coral italic">Life in frame.</span>
            </h1>
            <p className="text-charcoal/50 text-base font-light leading-relaxed max-w-xl">
              A premium, uniform square-grid feed of campus life, competitions, field research, and strategic projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid section */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {itemsToDisplay.map((item, index) => {
              if (item.type === "video") {
                return (
                  <GalleryVideoCard
                    key={item.id}
                    item={item}
                    onHoverStart={() => handleHoverStart(index)}
                    onHoverEnd={handleHoverEnd}
                    onClick={() => handleCardClick(index)}
                  />
                );
              } else {
                return (
                  <GalleryImageCard
                    key={item.id}
                    item={item}
                    onHoverStart={() => handleHoverStart(index)}
                    onHoverEnd={handleHoverEnd}
                    onClick={() => handleCardClick(index)}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            onMouseMove={(e) => {
              if (e.target === e.currentTarget) {
                setActiveIndex(null);
              }
            }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col p-6 cursor-zoom-out select-none animate-fade-in"
          >
            {/* Header controls */}
            <div className="flex items-center justify-between w-full text-white/70 max-w-7xl mx-auto z-10 pointer-events-none">
              <span className="font-mono text-xs tracking-widest uppercase">
                {activeIndex !== null ? activeIndex + 1 : 0} / {itemsToDisplay.length}
              </span>
              <button 
                onClick={() => setActiveIndex(null)} 
                className="p-2 hover:text-white transition-colors cursor-pointer pointer-events-auto"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Media wrapper */}
            <div className="flex-1 flex items-center justify-center relative w-full max-w-6xl mx-auto">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 md:-left-12 p-3 text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer z-10"
                aria-label="Previous Media"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Media Container */}
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                onMouseMove={(e) => {
                  if (e.target === e.currentTarget) {
                    setActiveIndex(null);
                  }
                }}
                className="w-full h-full flex items-center justify-center p-4 cursor-default"
              >
                {activeItem.type === "image" ? (
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    onMouseLeave={() => setActiveIndex(null)}
                    className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain shadow-2xl border border-white/10"
                  />
                ) : (
                  <video
                    src={activeItem.src}
                    controls
                    autoPlay
                    onMouseLeave={() => setActiveIndex(null)}
                    className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain shadow-2xl border border-white/10"
                  />
                )}
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 md:-right-12 p-3 text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer z-10"
                aria-label="Next Media"
              >
                <ChevronRight size={32} />
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
