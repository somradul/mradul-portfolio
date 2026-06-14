"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";

function GalleryVideoCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const aspectClass = 
    item.aspect === "portrait" 
      ? "aspect-[3/4]" 
      : item.aspect === "landscape" 
      ? "aspect-[16/10]" 
      : "aspect-square";

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ y: -6 }}
      className={`group bg-white border border-surface relative overflow-hidden cursor-pointer flex flex-col justify-between ${
        item.span === "wide" ? "md:col-span-2" : item.span === "tall" ? "md:row-span-2" : ""
      }`}
    >
      <div className={`relative w-full overflow-hidden flex-1 bg-slate-100 ${aspectClass}`}>
        <video
          ref={videoRef}
          src={item.src}
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
        />
        {/* Hover overlay play indicator */}
        <div className="absolute inset-0 bg-black/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <Play size={16} className="text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-surface bg-white relative z-10">
        <span className="font-mono text-[9px] tracking-widest uppercase text-coral">Video</span>
        <h3 className="font-playfair font-bold text-sm text-charcoal truncate mt-0.5">{item.title}</h3>
      </div>
    </motion.div>
  );
}

function GalleryImageCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const aspectClass = 
    item.aspect === "portrait" 
      ? "aspect-[3/4]" 
      : item.aspect === "landscape" 
      ? "aspect-[16/10]" 
      : "aspect-square";

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      className={`group bg-white border border-surface relative overflow-hidden cursor-pointer flex flex-col justify-between ${
        item.span === "wide" ? "md:col-span-2" : item.span === "tall" ? "md:row-span-2" : ""
      }`}
    >
      <div className={`relative w-full overflow-hidden flex-1 bg-slate-100 ${aspectClass}`}>
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 border-t border-surface bg-white relative z-10">
        <span className="font-mono text-[9px] tracking-widest uppercase text-teal">Image</span>
        <h3 className="font-playfair font-bold text-sm text-charcoal truncate mt-0.5">{item.title}</h3>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length);
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
              An asymmetric editorial collection of campus life, competitions, field research, and strategic projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid section */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-max">
            {galleryItems.map((item, index) => {
              if (item.type === "video") {
                return (
                  <GalleryVideoCard
                    key={item.id}
                    item={item}
                    onClick={() => setActiveIndex(index)}
                  />
                );
              } else {
                return (
                  <GalleryImageCard
                    key={item.id}
                    item={item}
                    onClick={() => setActiveIndex(index)}
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
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-between p-6 cursor-zoom-out select-none"
          >
            {/* Header controls */}
            <div className="flex items-center justify-between w-full text-white/70 max-w-7xl mx-auto z-10 pointer-events-none">
              <span className="font-mono text-xs tracking-widest uppercase">
                {activeIndex !== null ? activeIndex + 1 : 0} / {galleryItems.length}
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
                className="w-full h-full flex items-center justify-center p-4 cursor-default"
              >
                {activeItem.type === "image" ? (
                  <img
                    src={activeItem.src}
                    alt={activeItem.title}
                    className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain shadow-2xl border border-white/10"
                  />
                ) : (
                  <video
                    src={activeItem.src}
                    controls
                    autoPlay
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

            {/* Footer captions */}
            <div className="text-center text-white/80 max-w-2xl mx-auto w-full z-10 pb-4 pointer-events-none">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-coral block mb-1">
                {activeItem.type === "image" ? "Photograph" : "Video Recording"}
              </span>
              <h4 className="font-playfair font-bold text-lg md:text-xl text-white">
                {activeItem.title}
              </h4>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
